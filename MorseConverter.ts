// Diccionario texto-morse
const morseCodeMap: { [key: string]: string } = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
  'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
  'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
  'Z': '--..',  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', ' ': '/',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', '-': '-....-',
  '/': '-..-.', '@': '.--.-.', '(': '-.--.', ')': '-.--.-'
};

// Reversión del diccionario para morse-texto
const textMap: { [key: string]: string } = Object.entries(morseCodeMap)
  .reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as { [key: string]: string });

// Función convertidora texto a Morse
function textToMorse(text: string): string {
  return text.toUpperCase().split('').map(char => {
    return morseCodeMap[char] || '';
  }).join(' ');
}

// Función convertidora Morse a texto
function morseToText(morse: string): string {
  return morse.split(' ').map(code => {
    return textMap[code] || ''; 
  }).join('');
}

const text = "Hola Mundo!!";
const morse = textToMorse(text);
console.log(`Texto: ${text}`);
console.log(`A Morse: ${morse}`);

const morseText = ".... --- .-.. .- / -- ..- -. -.. --- -.-.-- -.-.--";
const decodedText = morseToText(morseText);
console.log(`Morse: ${morseText}`);
console.log(`A Texto: ${decodedText}`);
