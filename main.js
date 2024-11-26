"use strict";
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
function makeOutWord(out, word) {
    const start = out.substring(0, out.length / 2);
    const end = out.substring(out.length / 2);
    return `${start}${word}${end}`;
}
console.log(makeOutWord("<<>>", "Yay"));
console.log(makeOutWord("<<>>", "WooHoo"));
console.log(makeOutWord("[[]]", "word"));
