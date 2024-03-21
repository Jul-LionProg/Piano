const NOTE_N_C2 = 16;
const NOTE_N_C3 = 28;
const NOTE_N_CS3 = 29;
const NOTE_N_D3 = 30;
const NOTE_N_DS3 = 31;
const NOTE_N_E3 = 32;
const NOTE_N_F3 = 33;
const NOTE_N_FS3 = 34;
const NOTE_N_G3 = 35;
const NOTE_N_GS3 = 36;
const NOTE_N_A3 = 37;
const NOTE_N_AS3 = 38;
const NOTE_N_B3 = 39;
const ALL_NOTES = [
  NOTE_N_C3,
  NOTE_N_CS3,
  NOTE_N_D3,
  NOTE_N_DS3,
  NOTE_N_E3,
  NOTE_N_F3,
  NOTE_N_FS3,
  NOTE_N_G3,
  NOTE_N_GS3,
  NOTE_N_A3,
  NOTE_N_AS3,
  NOTE_N_B3
];
const ALL_NOTES_KEYS = [
  "a",
  "w",
  "s",
  "e",
  "d",
  "f",
  "t",
  "g",
  "y",
  "h",
  "u",
  "j"
];

const CSS_KEY_PRESSED = "key-pressed";
const MIN_OCTAVE = 0;
const MAX_OCTAVE = 8;
const NOTE_LETTERS = [
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b"
];
const get_piano_freq_n = (n) => Math.pow(2, (n - 49) / 12) * 440;
const get_piano_note_label = (n) => {
  const octave = 2 + Math.floor((n - NOTE_N_C2) / 12);
  // add a large multiple of 12 to avoid negatives
  const key_in_octave = (12 * 10 + n - NOTE_N_C2) % 12;
  // console.log("n", n, "octave", octave, key_in_octave);
  return `${NOTE_LETTERS[key_in_octave]}${octave}`;
};

const get_synthetic_key_event = (key, event_type = "keydown") => {
  return new KeyboardEvent(event_type, { key });
  // const keyboardEvent = document.createEvent("KeyboardEvent");
  // const initMethod =
  //   typeof keyboardEvent.initKeyboardEvent !== "undefined"
  //     ? "initKeyboardEvent"
  //     : "initKeyEvent";
  // keyboardEvent[initMethod](
  //   event_type, // event type: keydown, keyup, keypress
  //   true, // bubbles
  //   true, // cancelable
  //   window, // view: should be window
  //   false, // ctrlKey
  //   false, // altKey
  //   false, // shiftKey
  //   false, // metaKey
  //   40, // keyCode: unsigned long - the virtual key code, else 0
  //   0 // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
  // );
  // return keyboardEvent;
};

const start = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const button_start = document.querySelector("#button-start");
  button_start.disabled = true;
  const piano_keys = document.querySelector("#piano-keys");
  const button_play_track = document.querySelector("#button-play-track");
  button_play_track.disabled = false;
  const input_octave = document.querySelector("#input-octave");
  input_octave.disabled = false;
  const input_note_length = document.querySelector("#input-note-length");
  input_note_length.disabled = false;
