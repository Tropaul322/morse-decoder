const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var arr = [];
    for (var i = 0; i<expr.length; i+=10){
        arr.push(expr.slice(i,i+10))
    }
    var newSrt = '';
    for (var i = 0;i<arr.length; i++){
        if (arr[i] == '**********'){
            newSrt+=' ';
            continue;
        }
        var x = arr[i].replace(/00/g, '');
        x = x.replace(/10/g, '.');
        x = x.replace(/11/g, '-');
        newSrt += MORSE_TABLE[x]
    }return newSrt
}
module.exports = {
    decode
}
