 
let places=JSON.parse(localStorage.getItem("place"));
 
 
let appendplace = (places) => {
document.querySelector("#place").innerText=places;
}
appendplace(places);
 
 
 
 
 let rent=JSON.parse(localStorage.getItem("rent"));
 
let datas=JSON.parse(localStorage.getItem("data"));
console.log(datas);
let map=document.getElementById("gmap_canvas");
 
 
let append = (datas) => {
document.querySelector("#container1").innerHTML=null;
if(rent=="Monthly" || rent=="Daily"){
 datas.forEach(({image,location,price,rating,title}) => {
  let box=document.createElement("div");
  box.id="box";
  let subbox1=document.createElement("div");
  subbox1.id="subbox1";
  let subbox2=document.createElement("div");
  subbox2.id="subbox2";
  let imag=document.createElement("img");
  imag.src=image;
  let subsubbox=document.createElement("div");
  subsubbox.id="subsubbox";
  let subsubbox1=document.createElement("div");
  subsubbox1.id="subsubbox1";
  let subsubsubbox11=document.createElement("div");
  subsubsubbox11.id="subsubsubbox11";
  let subsubsubbox12=document.createElement("div");
  subsubsubbox12.id="subsubsubbox12";
  let subsubsubbox1=document.createElement("div");
  subsubsubbox1.id="subsubsubbox1";
  let subsubsubbox2=document.createElement("div");
  subsubsubbox2.id="subsubsubbox2";
  let goodprice=document.createElement("p");
  goodprice.innerText="GOOD PRICE";
  let rat=document.createElement("p");
  rat.innerText=rating;
  let pric=document.createElement("p");
  pric.innerText=price;
  let hourly=document.createElement("span");
  hourly.innerText=`${rent}`;
  hourly.style.marginLeft="5px";
  let titl=document.createElement("p");
  titl.innerText=title;
  let loc=document.createElement("p");
  loc.innerText=location;
 
  subsubsubbox12.append(pric,hourly);
  subsubbox1.append(subsubsubbox11,subsubsubbox12);
  subbox2.append(subsubbox,subsubbox1,titl,loc);
  subsubsubbox1.append(goodprice);
  subsubsubbox2.append(rat);
  subsubbox.append(subsubsubbox1,subsubsubbox2);
  subbox1.append(imag);
  box.append(subbox1,subbox2);
  box.addEventListener("click",()=>{
        booking({image,location,price,rating,title})
  })
  document.querySelector("#container1").append(box);
  map.src=`https://maps.google.com/maps?q=${places}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  })
}else if(rent=="Hourly"){
 
 datas.forEach(({image,location,price,rating,title}) => {
  let box=document.createElement("div");
  box.id="box";
  let subbox1=document.createElement("div");
  subbox1.id="subbox1";
  let subbox2=document.createElement("div");
  subbox2.id="subbox2";
  let imag=document.createElement("img");
  imag.src=image;
  let subsubbox=document.createElement("div");
  subsubbox.id="subsubbox";
  let subsubbox1=document.createElement("div");
  subsubbox1.id="subsubbox1";
  let subsubsubbox11=document.createElement("div");
  subsubsubbox11.id="subsubsubbox11";
  let subsubsubbox12=document.createElement("div");
  subsubsubbox12.id="subsubsubbox12";
  let subsubsubbox1=document.createElement("div");
  subsubsubbox1.id="subsubsubbox1";
  let subsubsubbox2=document.createElement("div");
  subsubsubbox2.id="subsubsubbox2";
  let goodprice=document.createElement("p");
  goodprice.innerText="GOOD PRICE";
  let rat=document.createElement("p");
  rat.innerText=rating;
  let pric=document.createElement("p");
  pric.innerText=price;
  let hourly=document.createElement("span");
  hourly.innerText=`hourly`;
  hourly.style.marginLeft="5px";
  let titl=document.createElement("p");
  titl.innerText=title;
  let loc=document.createElement("p");
  loc.innerText=location;
 
  subsubsubbox12.append(pric,hourly);
  subsubbox1.append(subsubsubbox11,subsubsubbox12);
  subbox2.append(subsubbox,subsubbox1,titl,loc);
  subsubsubbox1.append(goodprice);
  subsubsubbox2.append(rat);
  subsubbox.append(subsubsubbox1,subsubsubbox2);
  subbox1.append(imag);
  box.append(subbox1,subbox2);
  box.addEventListener("click",()=>{
    booking({image,location,price,rating,title})
})
  document.querySelector("#container1").append(box);
  map.src=`https://maps.google.com/maps?q=${places}&t=&z=13&ie=UTF8&iwloc=&output=embed`
  })
}
 
}
 
 
append(datas);
 
 
let booking=(data) => {
  localStorage.setItem("ParkingSlot",JSON.stringify(data));
  window.location.href="booking.html";
}
 
 
 
 
 
 
 
// CheckoutPage: "https://parking.airgarage.com/spot/Y8uewVbqN2KhFr4DGLv549/?rentalType=hourly&ref=spot-search"
// image: "https://storage.googleapis.com/airgarage/297_1527975194.png"
// location: "902 S Mill Ave Tempe, AZ 85281"
// price: "$3.00 hourly"
// rating: 4.8
// title: "University Inn & Suites"
