/*1. Create your own resume data in JSON format*/

var resume = {
    "name":"Deepika",
    "age":"23",
    "Gender":"Female",
    "Phonenumber":"9083654823",
    "Skills":["Javascript","Html","Css","Reactjs","MongoDb","Nodejs","Expressjs"],
    "Education": [
        {
          "degree": "Bachelor of engineering",
          "institution": "PA",
          "location": "pollachi",
          "Year": "2019 - 2023"
        }
      ],
      "Languages": ["English", "Tamil"],
    "Links": [{
        "LinkedIn": "https://www.linkedin.com/in/deepika",
        "GitHub": "https://github.com/Deepikamsd"
    }]
};

console.log(resume);
console.log(resume.name);
console.log(resume.age);
console.log(resume.Gender);
console.log(resume.Phonenumber);
for(var i=0;i<resume.Skills.length;i++)
{
    console.log(resume.Skills[i]);
}
for(var i=0;i<resume.Education.length;i++)
{
    console.log(resume.Education[i])
}
for(var i=0;i<resume.Languages.length;i++)
{
    console.log(resume.Languages[i]);
}
console.log("Links:");
for (var i=0;i<resume.Links.length;i++) {
  console.log(resume.Links);


/*2)For the above JSON, iterate over all for loops (for, for in, for of, forEach)*/


var resume = {
    "name":"Deepika",
    "age":"23",
    "Gender":"Female",
    "Phonenumber":"9083654823",
    "Skills":["Javascript","Html","Css","Reactjs","MongoDb","Nodejs","Expressjs"],
    "Education": [
        {
          "degree": "Bachelor of engineering",
          "institution": "PA",
          "location": "pollachi",
          "Year": "2019 - 2023"
        }
      ],
      "Languages": ["English", "Tamil"],
    "Links": [{
        "LinkedIn": "https://www.linkedin.com/in/deepika",
        "GitHub": "https://github.com/Deepikamsd"
    }]
};

/*console.log(resume);
console.log(resume.name);
console.log(resume.age);
console.log(resume.Gender);
console.log(resume.Phonenumber);
/*for loop*/
for(var i=0;i<resume.Skills.length;i++)
{
    console.log(resume.Skills[i]);
}
for(var i=0;i<resume.Education.length;i++)
{
    console.log(resume.Education[i])
}
for(var i=0;i<resume.Languages.length;i++)
{
    console.log(resume.Languages[i]);
}
console.log("Links:");
for (var i=0;i<resume.Links.length;i++) {
  console.log(resume.Links);
}

/*for in loop*/
for(key in resume){
    console.log(resume[key]);
}
/*for of loop*/
const data=Object.entries(resume)
console.log(data)
for(var [key,value] of data){
    console.log(value)
}
/*forEach  loop*/
data.forEach(([key,value])=>console.log(value))



