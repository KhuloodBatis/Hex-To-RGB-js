// String.prototype.toIndiaDigits= function(){
//     var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
//     return this.replace(/[0-9]/g, function(w){
//      return id[+w]
//     });
//    }
   

   
//    var S='The year 2009 has only 365 days';
//    alert(S.toIndiaDigits());


function numberConvert(s){
        let number =['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    
    //   return number.indexOf(s);
    // let numbInd = number.indexOf(s);
    //   return number.valueOf(numbInd);
    return number.indexOf(s);

    
}

// console.log(numberConvert(0));


function toEnglishDigits(str) {
    const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]
    const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"]
    const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    
    return str.split("").map(c =>
         englishNumbers[persianNumbers.indexOf(c)] ||
        englishNumbers[arabicNumbers.indexOf(c)] || c).join("")
  }
  
  console.log( toEnglishDigits("۶٦۵any٥32"));
  