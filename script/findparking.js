let dropdown=document.querySelector(".dropdown");
dropdown.onclick= function () {
    dropdown.classList.toggle('active');
}
 
let rent; 
function show (anything) {
   rent= document.querySelector(".textBox").value=anything;
  if(rent=="Airport"){
    rent="Daily";
   
  }
}
 if(rent == undefined){
    rent="Hourly"
    localStorage.setItem("rent",JSON.stringify(rent))
 }


let search=async () => {
try{
let query=document.getElementById("search").value;

if(rent=="Monthly"||rent=="Daily"){
    let res=await fetch(`http://localhost:3000/${query+rent}`);
let data=await res.json();
localStorage.setItem("data",JSON.stringify(data));
let place=query;
localStorage.setItem("place",JSON.stringify(place));
localStorage.setItem("rent",JSON.stringify(rent));
window.location.href="slots.html"
}else{
    let res=await fetch(`http://localhost:3000/${query}`);
let data=await res.json();
localStorage.setItem("data",JSON.stringify(data));
let place=query;
localStorage.setItem("place",JSON.stringify(place));
localStorage.setItem("rent",JSON.stringify(rent));
window.location.href="slots.html"
}



}
catch(err){
    console.log("err",err)
}
}
 
 
 
let LosAngeles = async () => {
    try{
     
        let res=await fetch(`http://localhost:3000/LosAngeles`);
        let data=await res.json();
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        let place="Los Angeles";
        localStorage.setItem("place",JSON.stringify(place));
        window.location.href="slots.html";
    }
    catch (err) {
        console.log("err",err);
    }
}
 
let Omaha = async () => {
    try{
     
        let res=await fetch(`http://localhost:3000/Omaha`);
        let data=await res.json();
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        let place="Omaha";
        localStorage.setItem("place",JSON.stringify(place));
        window.location.href="slots.html";
    }
    catch (err) {
        console.log("err",err);
    }
}
 
let AnnArbor = async () => {
    try{
     
        let res=await fetch(`http://localhost:3000/AnnArbor`);
        let data=await res.json();
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        let place="Ann Arbor";
        localStorage.setItem("place",JSON.stringify(place));
        window.location.href="slots.html";
    }
    catch (err) {
        console.log("err",err);
    }
}
 
let Tempe = async () => {
    try{
     
        let res=await fetch(`http://localhost:3000/Tempe`);
        let data=await res.json();
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        let place="Tempe";
        localStorage.setItem("place",JSON.stringify(place));
        window.location.href="slots.html";
    }
    catch (err) {
        console.log("err",err);
    }
}



