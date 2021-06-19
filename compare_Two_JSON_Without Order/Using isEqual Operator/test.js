// using underscore ajax script link
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
console.log(_.isEqual(obj1,obj2));
document.getElementById("demoData").innerHTML = (_.isEqual(obj1,obj2));


