var arr = [{Name:"Aruneshwaran", "Email id": "m.aruneshwar@gmail.com", "Phone Number" : 7845796425, "Total Experience": "1.6 Years","PROFESSIONAL SUMMARY ":["1.6 years of experience to work along customer to improve resolve customer queries and enhance work efficiency. "," Exemplary Communication & interpersonal skill with abilities to deftly resolve and troubleshoot issues"] ,"Educational Qualification": "B.E in Automobile", "Soft Skills": ["Problem Solving","Teamwork", "Communication"],"Professional Skills": ["Basic knowledge in C#, JAVASCRIPT, Python and OOPS Concept","Basic knowledge in MS-SQL.","Academic Knowledge in Brain Storming.","Basic knowledge in benchmarking."]}]

for (var i in arr) {
  for(var j in arr[i]){
    a += (""+j + " : " + arr[i][j] + "\n");
  }
}
document.getElementById("demoData").innerHTML = a;
console.log(a);
