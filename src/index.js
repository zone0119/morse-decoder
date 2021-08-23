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



//example let expr ='00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'; 


const BINTable = {  
'00' : '',
'10' : '.',
'11' : '-',
'**********' : ' ',
}




function getBinarySymbol(word)
{
  
 
  if(word == "**********")
    return BINTable[word];
  
  let result = '';
 let binary = word.match(/.{1,2}/g);
  
 binary.forEach(el => {result += BINTable[el];  }  );

  return MORSE_TABLE[result];   
}

function getMorseSymbol(word)
{
  let result = '';
 let binary = word.match(/.{1,2}/g);
  //console.log(binary); 
 binary.forEach(el => {result += BINTable[el] }  );
  //console.log('result: ' + result); 
  return result;   
}







function decode(expr) {
    // write your solution here
	
	
		let tenSlice = expr.match(/.{1,10}/g);

		let resultMorse = '';
		tenSlice.forEach(word => {resultMorse +=  getBinarySymbol(word)  } );

		return resultMorse;
}

module.exports = {
    decode
}
