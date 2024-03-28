const person = {
    "Name": "Sri Vatsan",
    "Role": "Full Stack Developer",
    "Experience":{"Digital Academy": "7months","Datinfi":"1year 8months"},
    "Education": ["Full stack web development from GUVI","Bachelors in Mechanical Engineering", "Diploma in Mechanical Engineering"]
}

for (var keys in person ){
    console.log(person[keys])
}

let b = Object.keys(person);
console.log(b);
for(var a of b){
    console.log(a);
}

b.forEach((i)=>{
    console.log(person[i]);
});