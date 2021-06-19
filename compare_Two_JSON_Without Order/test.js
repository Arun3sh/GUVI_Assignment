var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let n = Object.entries(obj1).length;
let m = Object.entries(obj2).length;
let a = Object.entries(obj1);
let b = Object.entries(obj2);
let k=0, l=0;
//console.log(a[1]);
let count =0;
if(n === m){
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(a[i][k] == b[j][l]){
        k++;
        l++;
        if(a[i][k] == b[j][l]){
          count++;
          break;
        }
      }
    }
  }
}

if(count == n && count == m ){
  document.getElementById("demoData").innerHTML = "true";
  console.log("true");
}else{
  document.getElementById("demoData").innerHTML = "false";
  console.log("false");
}
