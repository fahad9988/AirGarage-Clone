
let rent=JSON.parse(localStorage.getItem("rent"));
let slot=JSON.parse(localStorage.getItem("ParkingSlot"));

let edit=slot.price.replace("$","")
edit=edit.replace(".00","");
edit=Number(edit)*8+10;
let maxprice=`$${edit}.00`

let slotcontainer=document.getElementById("slotContainer");

let append=({image,price,title},maxprice) => {
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
stateinp.setAttribute("id","stateinp")

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);

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

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,payment,cardinp,coupondiv,submitdiv,gethelpdiv)
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
stateinp.setAttribute("id","stateinp")

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);

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

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,payment,cardinp,coupondiv,submitdiv,gethelpdiv)
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
stateinp.setAttribute("id","stateinp")

let payment=document.createElement("h5");
payment.innerText="SECURE PAYMENT"
let cardinp=document.createElement("input");
cardinp.placeholder="Card Number"

let coupondiv=document.createElement("div");
coupondiv.setAttribute("id","coupondiv")
let couponimage=document.createElement("img");
couponimage.src="https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
let coupon=document.createElement("p");
coupon.innerText="Have a coupon code?"
coupondiv.append(couponimage,coupon);

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

 slotcontainer.append(imag,heading,titl,pricediv,phone,phonediv,car,cardiv,stateinp,payment,cardinp,coupondiv,submitdiv,gethelpdiv)
}

}

append(slot,maxprice)