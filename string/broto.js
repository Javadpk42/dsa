// function subBroto(s, sub) {
//     let c = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] == sub[0]) {
//         let sb = s.substring(i, i+sub.length);
//         console.log(sb);
//         if (sb == sub) {
//           c++;
//         }
//       }
//     }
//     return c
//   }
  
//   let broto =subBroto("prabbrotocdbrotoefbroto","broto")
//   console.log(broto)
let str = "rabbrotocdbrotoefbroto";
let regex = /broto/g;
let matchResult = str.match(regex);

if (matchResult) {
    console.log(matchResult);
} else {
    console.log(0);
}
