var obj = [
  { person: "Name 1", age: "2", company: "GUVI" },
  { person: "Name 2", age: "5", company: "GUVI geek" },
  { person: "Name 3", age: "8", company: "GUVI geek network" },
]

console.log('Using For loop');

for(let i=0; i<obj.length; i++){
    let a = obj[i];
    let n =Object.keys(a).length;
    for(let j=0;j<n;j++){
        let k = Object.keys(a);
        let v = Object.values(a);
        console.log(k[j]+" : "+v[j]);
    }
}

console.log('Using For Of loop');

for (let i of obj) {
    
    for(let [key,value] of Object.entries(i)){
        console.log(key + ":" + value);
    }
}

console.log('Using ForEach loop');

Object.values(obj).forEach(entry => {
  
  Object.entries(entry).forEach(entry1 => {
  
  const [a,b] = entry1;
  
  console.log(a+":"+b);
  
  }); 

});
