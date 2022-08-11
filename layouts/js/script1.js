
// let hex = [0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F]
// let rgb = [0,1,2,3,4,,5..,255]
             
let color = "#63C6FF";
// -> rgb(99, 198, 255);
// 6*16+3=99
// 12*16+6 =198
// 15*16+15=255





// console.log(`rgb(
//     ${str.charCodeAt(1)+(str.charCodeAt(2))},
//     ${str.charCodeAt(3)+str.charCodeAt(4)},
//     ${str.charCodeAt(5)+str.charCodeAt(6)})`);


        
//  rgb =  Number((str[i] * 16)) + Number((str[i+1]));
// // rgb = str[i]
// console.log(rgb);

    
// }
// return rgb



 function abc(str){


for(let i = 0 ; i < str.length ; i++){

if( typeof str[i] != "number" ){ 
                if( str[i].includes('A') || str[i].includes('a') ){

                return   10  
                    
                }
                else if (  str[i].includes('B')|| str[i].includes('b') ) {

                    return   11 

                } else if (  str[i].includes('C')|| str[i].includes('c')) {

                    return    12 

                } else if (  str[i].includes('D') || str[i].includes('d')) {

                    return    13 

                } else if (  str[i].includes('E') || str[i].includes('e') ) {

                    return   14

                } else if (str[i].includes('F') || str[i].includes('f') ) {

                    return   15 

                }
          
      }
        
       console.log(Number(str[i]));

    } 

}
 
console.log(abc('A'));//10
console.log(abc('2'));//2

function toDec(x,x2){
      
    return x*16 + x2;
}

console.log(toDec(6,3));//99

function hexToRGB(str){

    let r1 = abc(str[1]);
    let r2 = abc(str[2]);
   let rr = r1 *16 + r2;
    
    let g1 = abc(str[3]) ;
    let g2 = abc(str[4]);
    let gg = g1*16 + g2;
    
    let b1 = abc(str[5]);
    let b2 = abc(str[6]);
    let bb = b1* 16+b2
    
    
    // console.log(`rgb(${rr},${gg},${bb})`);
    return rr 

    };
    
    
    // console.log(hexToRGB("#000000"));
    console.log(hexToRGB("#63C6FF"));

