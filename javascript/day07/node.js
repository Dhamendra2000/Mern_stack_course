//array in javascript
let arr=[34,5,6,45,44,545,4545];
console.log(arr);
console.log(arr.length);
//add new element at the end of the array
arr.push(45);
console.log(arr);
//pop operation : delete element from the lastt
arr.pop();
console.log(arr);

//add element at starting index of the element 
arr.unshift(56);
console.log(arr);
//delete element from the start
arr.shift();
console.log(arr);
// do not unshift and shit because it decrease the system performance
//itrate array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);

}


