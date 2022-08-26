
let rent=JSON.parse(localStorage.getItem("rent"));
let slot=JSON.parse(localStorage.getItem("ParkingSlot"));

let edit=slot.price.replace("$","")
edit=edit.replace(".00","");
edit=Number(edit)*8+10;
let maxprice=`$${edit}.00`

let slotcontainer=document.getElementById("slotContainer");

let append=({image,price,title},maxprice) => {
 slotcontainer.innerHTML="";
if(rent=="Hourly"){
 let imag=document.createElement("img");
 imag.src=image;
 let heading=document.createElement("h3");
 heading.innerText="Park with AirGarage"
 let titl=document.createElement("h5");
 titl.innerText=title;

 let pricediv=document.createElement("div");
 pricediv.setAttribute("id","pricediv");
 let divheading=document.createElement("h6");
 divheading.innerText="CURRENT RATE";
let hourlyrate=document.createElement("h3");
hourlyrate.setAttribute("id","hourlyrate")
hourlyrate.innerText=`${price} per hour`;
let maxrate=document.createElement("h3");
maxrate.innerText=`${maxprice} daily max`
pricediv.append(divheading,hourlyrate,maxrate);

let phone=document.createElement("h5");
phone.innerText="PHONE"
let phonediv=document.createElement("div");
phonediv.setAttribute("id","phonediv");
let flagbutton=document.createElement("button");
let flagimage=document.createElement("img");
flagimage.src="https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
flagbutton.append(flagimage);
let phoneinp=document.createElement("input");
phoneinp.setAttribute("type","number");
phoneinp.placeholder="Phone Number"
phoneinp.setAttribute("id","phoneinp");
phonediv.append(flagbutton,phoneinp);

let car=document.createElement("h5");
car.innerText="CAR";
let cardiv=document.createElement("div");
cardiv.setAttribute("id","cardiv");
let carbutton=document.createElement("button");
let carimage=document.createElement("img");
carimage.src="https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
carbutton.append(carimage);
let carinp=document.createElement("input");
carinp.placeholder="License Plate Number"
carinp.setAttribute("id","carinp");
cardiv.append(carbutton,carinp);

let stateinp=document.createElement("input");
stateinp.placeholder="State/Province";
stateinp.value="State/Province"
stateinp.readOnly="true";
stateinp.setAttribute("id","stateinp");
stateinp.addEventListener("click",()=>{
 statediv();
 getStateData();
})
let provincediv=document.createElement("div");
provincediv.setAttribute("id","provincediv")

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.addEventListener("click",function(){
 couponinput();
})
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);
let couponinputdiv=document.createElement("div");
couponinputdiv.setAttribute("id","couponinputdiv");
let messagediv=document.createElement("div");
messagediv.setAttribute("id","messagediv");

let submitdiv=document.createElement("div");
submitdiv.setAttribute("id","submitdiv")
let submit=document.createElement("button");
submit.innerText="START RENTAL";
submitdiv.append(submit);

let gethelpdiv=document.createElement("div");
gethelpdiv.setAttribute("id","gethelp");
let gethelpimg=document.createElement("img");
gethelpimg.src="https://www.freeiconspng.com/uploads/info-icon-8.png"
 let gethelp=document.createElement("a");
 gethelp.innerText="Get help"
 gethelpdiv.append(gethelpimg,gethelp);

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,provincediv,payment,cardinp,coupondiv,couponinputdiv,messagediv,submitdiv,gethelpdiv)
}else if(rent=="Monthly"){
 let imag=document.createElement("img");
 imag.src=image;
 let heading=document.createElement("h3");
 heading.innerText="Park with AirGarage"
 let titl=document.createElement("h5");
 titl.innerText=title;

 let pricediv=document.createElement("div");
 pricediv.setAttribute("id","pricediv");
 let divheading=document.createElement("h6");
 divheading.innerText="CURRENT RATE";
let hourlyrate=document.createElement("h3");
hourlyrate.setAttribute("id","hourlyrate");
hourlyrate.innerText=`${price} per month`;
hourlyrate.style.marginBottom="3px"
pricediv.append(divheading,hourlyrate);

let phone=document.createElement("h5");
phone.innerText="PHONE"
let phonediv=document.createElement("div");
phonediv.setAttribute("id","phonediv");
let flagbutton=document.createElement("button");
let flagimage=document.createElement("img");
flagimage.src="https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
flagbutton.append(flagimage);
let phoneinp=document.createElement("input");
phoneinp.setAttribute("type","number");
phoneinp.placeholder="Phone Number"
phoneinp.setAttribute("id","phoneinp");
phonediv.append(flagbutton,phoneinp);

let car=document.createElement("h5");
car.innerText="CAR";
let cardiv=document.createElement("div");
cardiv.setAttribute("id","cardiv");
let carbutton=document.createElement("button");
let carimage=document.createElement("img");
carimage.src="https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
carbutton.append(carimage);
let carinp=document.createElement("input");
carinp.placeholder="License Plate Number"
carinp.setAttribute("id","carinp");
cardiv.append(carbutton,carinp);

let stateinp=document.createElement("input");
stateinp.placeholder="State/Province";
stateinp.value="State/Province"
stateinp.readOnly="true";
stateinp.setAttribute("id","stateinp");
stateinp.addEventListener("click",()=>{
 statediv();
 getStateData();
})
let provincediv=document.createElement("div");
provincediv.setAttribute("id","provincediv");

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.addEventListener("click",function(){
 couponinput()
})
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);
let couponinputdiv=document.createElement("div");
couponinputdiv.setAttribute("id","couponinputdiv");
let messagediv=document.createElement("div");
messagediv.setAttribute("id","messagediv");

let submitdiv=document.createElement("div");
submitdiv.setAttribute("id","submitdiv")
let submit=document.createElement("button");
submit.innerText="START RENTAL";
submitdiv.append(submit);

let gethelpdiv=document.createElement("div");
gethelpdiv.setAttribute("id","gethelp");
let gethelpimg=document.createElement("img");
gethelpimg.src="https://www.freeiconspng.com/uploads/info-icon-8.png"
 let gethelp=document.createElement("a");
 gethelp.innerText="Get help"
 gethelpdiv.append(gethelpimg,gethelp);

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,provincediv,payment,cardinp,coupondiv,couponinputdiv,messagediv,submitdiv,gethelpdiv)
}else if(rent=="Daily"){
 let imag=document.createElement("img");
 imag.src=image;
 let heading=document.createElement("h3");
 heading.innerText="Park with AirGarage"
 let titl=document.createElement("h5");
 titl.innerText=title;

 let pricediv=document.createElement("div");
 pricediv.setAttribute("id","pricediv");
 let divheading=document.createElement("h6");
 divheading.innerText="CURRENT RATE";
let hourlyrate=document.createElement("h3");
hourlyrate.setAttribute("id","hourlyrate");
hourlyrate.innerText=`${price} per day`;
hourlyrate.style.marginBottom="3px"
pricediv.append(divheading,hourlyrate);

let phone=document.createElement("h5");
phone.innerText="PHONE"
let phonediv=document.createElement("div");
phonediv.setAttribute("id","phonediv");
let flagbutton=document.createElement("button");
let flagimage=document.createElement("img");
flagimage.src="https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
flagbutton.append(flagimage);
let phoneinp=document.createElement("input");
phoneinp.setAttribute("type","number");
phoneinp.placeholder="Phone Number"
phoneinp.setAttribute("id","phoneinp");
phonediv.append(flagbutton,phoneinp);

let car=document.createElement("h5");
car.innerText="CAR";
let cardiv=document.createElement("div");
cardiv.setAttribute("id","cardiv");
let carbutton=document.createElement("button");
let carimage=document.createElement("img");
carimage.src="https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
carbutton.append(carimage);
let carinp=document.createElement("input");
carinp.placeholder="License Plate Number"
carinp.setAttribute("id","carinp");
cardiv.append(carbutton,carinp);

let stateinp=document.createElement("input");
stateinp.placeholder="State/Province";
stateinp.value="State/Province"
stateinp.readOnly="true";
stateinp.setAttribute("id","stateinp");
stateinp.addEventListener("click",()=>{
 statediv();
})
let provincediv=document.createElement("div");
provincediv.setAttribute("id","provincediv");

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.addEventListener("click",function(){
 couponinput()
})
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);
let couponinputdiv=document.createElement("div");
couponinputdiv.setAttribute("id","couponinputdiv");
let messagediv=document.createElement("div");
messagediv.setAttribute("id","messagediv");

let submitdiv=document.createElement("div");
submitdiv.setAttribute("id","submitdiv")
let submit=document.createElement("button");
submit.innerText="START RENTAL";
submitdiv.append(submit);

let gethelpdiv=document.createElement("div");
gethelpdiv.setAttribute("id","gethelp");
let gethelpimg=document.createElement("img");
gethelpimg.src="https://www.freeiconspng.com/uploads/info-icon-8.png"
 let gethelp=document.createElement("a");
 gethelp.innerText="Get help"
 gethelpdiv.append(gethelpimg,gethelp);

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,provincediv,payment,cardinp,coupondiv,couponinputdiv,messagediv,submitdiv,gethelpdiv)
}

}

append(slot,maxprice);

let str=document.getElementById("hourlyrate").innerText;


function couponinput(){
let container=document.getElementById("couponinputdiv");
container.innerHTML="";
let couponinput=document.createElement("input");
couponinput.setAttribute("id","couponinput");
couponinput.placeholder="Enter a Valid Coupon Code"
container.append(couponinput);
container.style.marginBottom="20px"
container.style.marginTop="-5px"




let couponinp=document.getElementById("couponinput");
let messagecontainer=document.getElementById("messagediv");

couponinp.addEventListener("keydown", (event)=>{

 switch (event.key){

  case "Enter": let value=couponinp.value;
 if(value=="masai30"){
  if(rent=="Hourly"){
  messagecontainer.innerHTML="";
  let p=document.createElement("p");
  let rate=str
  rate=rate.replace(" per hour","");
  rate=rate.replace("$","");
  let saved=rate;
  saved=Number(saved)*0.3;
  saved=saved.toFixed(2);
  p.innerText=`Congratulations you saved $${saved}.`
  p.style.color="green"
  p.style.fontFamily="Arial, Helvetica, sans-serif"
  messagecontainer.append(p);
container.innerHTML="";
  
  
rate=Number(rate)*0.7;
rate=rate.toFixed(2)
document.getElementById("hourlyrate").innerText=`$${rate} per hour`
document.getElementById("hourlyrate").style.color="green"
  }else if(rent=="Monthly"){
   messagecontainer.innerHTML="";
   let p=document.createElement("p");
   let rate=str
rate=rate.replace(" per month","");
rate=rate.replace("$","");
let saved=rate;
saved=Number(saved)*0.3;
saved=saved.toFixed(2);
p.innerText=`Congratulations you saved $${saved}.`
p.style.color="green"
p.style.fontFamily="Arial, Helvetica, sans-serif"
messagecontainer.append(p);
container.innerHTML="";


rate=Number(rate)*0.7;
rate=rate.toFixed(2)
document.getElementById("hourlyrate").innerText=`$${rate} per month`
document.getElementById("hourlyrate").style.color="green"
  }else if(rent=="Daily"){
   messagecontainer.innerHTML="";
   let p=document.createElement("p");
   let rate=str
rate=rate.replace(" per day","");
rate=rate.replace("$","");
let saved=rate;
saved=Number(saved)*0.3;
saved=saved.toFixed(2);
p.innerText=`Congratulations you saved $${saved}.`
p.style.color="green"
p.style.fontFamily="Arial, Helvetica, sans-serif"
messagecontainer.append(p);
container.innerHTML="";


rate=Number(rate)*0.7;
rate=rate.toFixed(2)
document.getElementById("hourlyrate").innerText=`$${rate} per day`
document.getElementById("hourlyrate").style.color="green"
  }
 }
 else{
  messagecontainer.innerHTML="";
  let p=document.createElement("p");
  p.innerText="Please enter a valid Coupon Code!"
  p.style.color="red"
  p.style.fontFamily="Arial, Helvetica, sans-serif"
  messagecontainer.append(p);
 }
 }
})
}



let getStateData= async()=>{

let res=await fetch("  http://localhost:3000/StateArr");

let data=await res.json();

appendStateDiv(data)

}




let id;


let appendStateDiv=(data) => {
 let statecontainer=document.getElementById("provincediv");
data.forEach((e) => {
 let div=document.createElement("div");
 div.setAttribute("class","statenamediv")
 let name=document.createElement("p");
 name.innerText=e;
 div.append(name);

 div.addEventListener("click",function(){
  if(id){
   id.style.backgroundColor="white";
   id.style.color="black";
  }
let stateinp=document.getElementById("stateinp");
stateinp.value=e;
document.getElementById("provincediv").style.display="none";
div.style.backgroundColor="lightgrey";
div.style.color="white";
id=div;
 })

 statecontainer.append(div)
})
}



let statediv=() => {
 let statediv= document.getElementById("provincediv");
statediv.style.display="block";

}


document.getElementById("hourly").addEventListener("click",() => {

if(rent=="Hourly"){
 let edit=slot.price.replace("$","")
edit=edit.replace(".00","");
if(edit<10){
 append(slot,maxprice);
 str=document.getElementById("hourlyrate").innerText;
}else{
 edit=Math.floor(Number(edit)/8+10);
 let maxprice=`$${edit}.00`;
 
 let booking={...slot};
 booking.price=(edit/10).toFixed(2);
  append(booking,maxprice);
   str=document.getElementById("hourlyrate").innerText;
}
}else if(rent=="Monthly"){
 rent="Hourly";
 let edit=slot.price.replace("$","")
edit=edit.replace(".00","");
if(edit<10){
 append(slot,maxprice);
 str=document.getElementById("hourlyrate").innerText;
}else{
 edit=Math.floor(Number(edit)/8+10);
 let maxprice=`$${edit}.00`;
 
 let booking={...slot};
 booking.price=(edit/10).toFixed(2);
  append(booking,maxprice);
   str=document.getElementById("hourlyrate").innerText;
}

}

})


document.getElementById("monthly").addEventListener("click",() => {

 if(rent=="Monthly"){
  
  let booking={...slot};
 console.log(booking.price)
 let demo=booking.price;
 demo=demo.replace("$","");
 demo=Number(demo);
 if(demo<8){
  demo=demo*87;
booking.price=`$${demo}`;
append(booking,maxprice);
str=document.getElementById("hourlyrate").innerText;
}else{
 append(slot,maxprice);
 str=document.getElementById("hourlyrate").innerText;
}

 }else if(rent=="Hourly"){
  rent="Monthly";
 let booking={...slot};
 console.log(booking.price)
 let demo=booking.price;
 demo=demo.replace("$","");
 demo=Number(demo);
 if(demo<8){
  demo=demo*87;
booking.price=`$${demo}`;
append(booking,maxprice);
str=document.getElementById("hourlyrate").innerText;
 }else{
  append(slot,maxprice);
  str=document.getElementById("hourlyrate").innerText;
 }

 }
 
 })







