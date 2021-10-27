var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  var lowerCaseCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  
  var upperCaseCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  
  function getPasswordOptions() {
    var length = parseInt(
      prompt('Enter desired password length:'),
      10
    );
  
    if (Number.isNaN(length)) {
      alert('Password length must be a whole number');
      return null;
    }
  
    if (length < 8) {
      alert('Password length must be more than 8 characters');
      return null;
    }
  
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return null;
    }
  
    var useSpecialCharacters = confirm(
      'Press OK to include special characters.'
    );
  
    var useNumberCharacters = confirm(
      'Press OK to include numbers.'
    );
  
    var useLowerCaseCharacters = confirm(
      'Press OK to include lowercase letters.'
    );
  
    var useUpperCaseCharacters = confirm(
      'Press OK to include uppercase letters.'
    );
  
    if (
      useSpecialCharacters === false &&
      useNumberCharacters === false &&
      useLowerCaseCharacters === false &&
      useUpperCaseCharacters === false
    ) {
      alert('You must use at least one character type :P');
      return null;
    }
  
    var passwordOptions = {
      length: length,
      useSpecialCharacters: useSpecialCharacters,
      useNumberCharacters: useNumberCharacters,
      useLowerCaseCharacters: useLowerCaseCharacters,
      useUpperCaseCharacters: useUpperCaseCharacters,
    };
  
    return passwordOptions;
  }
  
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
  function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
  
    var possibleCharacters = [];
  
    var guaranteedCharacters = [];
  
    if (!options) return null;
  
    if (options.useSpecialCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
    }
  
    if (options.useNumberCharacters) {
      possibleCharacters = possibleCharacters.concat(numberCharacters);
      guaranteedCharacters.push(getRandom(numberCharacters));
    }
  
    if (options.useLowerCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
      guaranteedCharacters.push(getRandom(lowerCaseCharacters));
    }
  
    if (options.useUpperCaseCharacters) {
      possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
      guaranteedCharacters.push(getRandom(upperCaseCharacters));
    }
  
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
  
      result.push(possibleCharacter);
    }
  
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
  
    return result.join('');
  }
  
  var generateBtn = document.querySelector('#generate');
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }

  generateBtn.addEventListener('click', writePassword);
  