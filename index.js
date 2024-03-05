//   shout(string)
//1) receives one argument and returns it in all caps

// whisper(string)
//   2) receives one argument and returns it in all lowercase

// logShout(string)
//   3) takes a string argument and logs it in all caps using console.log()

// logWhisper(string)
//   4) takes a string argument and logs it in all lowercase using console.log()

// sayHiToHeadphonedRoommate(string)
//   5) returns "I can't hear you!" if `string` is lowercase
//   6) returns "YES INDEED!" if `string` is uppercase
//   7) returns "I would love to!" if `string` is "Let's have dinner together!"`

function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if ((string = "Let's have dinner together!")) {
    return "I would love to!";
  }
}
