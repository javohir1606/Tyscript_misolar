// const user:{
//   id:number,
//   name:string,
//   username:string,
//   email:string,
//   address:{
//       street:string,
//       suite:string,
//       city:string,
//       zipcode:number,
//       geo:{
//           lat:boolean,
//           lng:string
//       }
//   }
// }={
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: {
//   street: "Kulas Light",
//   suite: "Apt. 556",
//   city: "Gwenborough",
//   zipcode: 929983874,
//   geo: {
//     lat: true,
//     lng: "81.1496",
//   },
// },
// };




// 1-misol
// function firstHalf(str: string, length: number): string {
//   return str.substring(0, length);
// }

// console.log(firstHalf("WooHoo", 3)); 
// console.log(firstHalf("HelloThere", 5)); 
// console.log(firstHalf("abcdef", 3)); 

// 2-misol
// function makeOutWord(out: string, word: string): string {
//   const start = out.substring(0, out.length / 2); 
//   const end = out.substring(out.length / 2); 
//   return `${start}${word}${end}`; 
// }

// console.log(makeOutWord("<<>>", "Yay"));      
// console.log(makeOutWord("<<>>", "WooHoo"));  
// console.log(makeOutWord("[[]]", "word"));    

// 3-misol
// function nonStart(str1: string, str2: string): string {
//   const result = str1.slice(1) + str2.slice(1);
//   return result;
// }

// console.log(nonStart("Hello", "There")); 
// console.log(nonStart("java", "code"));  
// console.log(nonStart("shotl", "java")); 


// 4-misol
// function theEnd(str: string, isStart: boolean): string {
//   return isStart ? str.charAt(0) : str.charAt(str.length - 1);
// }

// console.log(theEnd("Hello", true));  
// console.log(theEnd("Hello", false)); 
// console.log(theEnd("oh", true));    


// 5-misol
// function endsLy(str: string): boolean {
//   return str.endsWith("ly");
// }

// console.log(endsLy("oddly")); 
// console.log(endsLy("y"));     
// console.log(endsLy("oddy"));  

//  6-misol
// function middleThree(str: string): string {
//   if (str.length < 3) {
//     throw new Error("String uzunligi kamida 3 bo'lishi kerak");
//   }

//   const midIndex = Math.floor(str.length / 2);
//   return str.slice(midIndex - 1, midIndex + 2);
// }

// console.log(middleThree("Candy"));    
// console.log(middleThree("and"));      
// console.log(middleThree("solving"));  


//  7-misol
// function seeColor(str: string): string {
//   if (str.startsWith("red")) {
//     return "red";
//   } else if (str.startsWith("blue")) {
//     return "blue";
//   }
//   return "";
// }

// console.log(seeColor("redxx"));    
// console.log(seeColor("xxred"));    
// console.log(seeColor("blueTimes")); 


// 8-misol
// function extraFront(str: string): string {
//   const front = str.length >= 2 ? str.slice(0, 2) : str;
//   return front.repeat(3);
// }

// console.log(extraFront("Hello")); 
// console.log(extraFront("ab"));    
// console.log(extraFront("H"));     


// 9-misol
// function extraEnd(str: string): string {
//   const lastTwo = str.slice(-2);
//   return lastTwo.repeat(3); 
// }

// console.log(extraEnd("Hello"));
// console.log(extraEnd("ab"));    
// console.log(extraEnd("Hi"));    

// 10-misol
// function left2(str: string): string {
//   if (str.length < 2) {
//     return str;
//   }
//   return str.slice(2) + str.slice(0, 2);
// }

// console.log(left2("Hello")); 
// console.log(left2("java"));  
// console.log(left2("Hi"));    
