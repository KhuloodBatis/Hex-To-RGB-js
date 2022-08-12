
 function stringToNumber(s) {
     
    let abc = [ '0','1','2','3','4','5','6','7','8','9','A' ,' B' , 'C' , 'D' , 'E' ,'F'];
    let mark  = ['-','!','_','?','=',')','(','/','*','{','@',',','`','#','$','%','^','&','*','+','?','/','<','>']
  if(typeof s == 'string'){
    if(!abc.includes(s.toUpperCase()) || mark.includes(s) ){
        
      //  return '';
       return s*=s;
       
    }
     return   abc.indexOf(s.toUpperCase());

  }else{
    return 'wrong'
  }
  
}

//  return abc
// console.log(stringToNumber('-'));

function hextToDec(n1, n2) {
  return   n1 * 16 + n2;  
}

function convertToRGB(rr, gg, bb) {
    return `rgb(${rr},${gg},${bb})`;
}

// convertFromHex('#63C6FF');
function convertFromHex(hexColor){
    let r1, r2, g1, g2, b1, b2;
    r1 = stringToNumber(hexColor[1]);
    r2 = stringToNumber(hexColor[2]);
    let rr = hextToDec(r1,r2)

    g1 = stringToNumber(hexColor[3])
    g2 = stringToNumber(hexColor[4])
    let gg = hextToDec(g1,g2)

    b1 = stringToNumber(hexColor[5])
    b2 = stringToNumber(hexColor[6])
    let bb = hextToDec(b1,b2)
    
    if( isNaN(rr) || isNaN(gg) ||  isNaN(bb)){
     return 'input error you should just input number from 0 to 9 and A B C D E F and six digits as String';
    }
// console.log(rr);
   return   convertToRGB(rr,gg,bb);
 
};



console.log(convertFromHex('#333'));
