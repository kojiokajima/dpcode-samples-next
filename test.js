const sample1 = false
const sample2 = true

const obj = {
  name: sample1 ? (sample2 ? "TT" : "TF") : (sample2 ? "FT" : "FF")
}

// const obj = 
//   sample1 ?
//     {name: sample2 ? "TT" : "TF",
//     age: sample2 ? 23 : 44,}
//   :
//    { name: sample2 ? "FT" : "TF",
//     age: sample2 ? 11 : 222,}

// const obj = {
//   human: () => (
//     {
//       name: "T"
//     },
//     {
//       age: 3
//     }
//   )
// }


console.log(obj);