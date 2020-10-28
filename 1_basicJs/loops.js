
// Why would we use a loop?
// We use loops when we might want to iterate
// through a data structure
let testData = [
  {
    "name": "Hanan", 
    "occupation": "Developer",
    "salary": "1000000000000000",
    "available_hours": "10"
},
  {"name": "Charlie"},
  {"name": "Carlo"},
  {"name": "Eric"},
];

for(let i = 0; i < testData.length; i++) {
  console.log(testData[i]);
}

// let flag = true;

// while(flag){
//   if(contidition is met){
//     flag = false;
//   }
// }