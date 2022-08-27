let rent = JSON.parse(localStorage.getItem("rent"));
let slot = JSON.parse(localStorage.getItem("ParkingSlot"));

let edit = slot.price.replace("$", "");
edit = edit.replace(".00", "");
edit = Number(edit) * 8 + 10;
let maxprice = `$${edit}.00`;

let slotcontainer = document.getElementById("slotContainer");

let append = ({ image, price, title }, maxprice) => {
  slotcontainer.innerHTML = "";
  if (rent == "Hourly") {
    let imag = document.createElement("img");
    imag.src = image;
    imag.setAttribute("id","spotImage")
    let heading = document.createElement("h3");
    heading.innerText = "Park with AirGarage";
    let titl = document.createElement("h5");
    titl.setAttribute("id","spotHeading")
    titl.innerText = title;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");
    let divheading = document.createElement("h6");
    divheading.innerText = "CURRENT RATE";
    let hourlyrate = document.createElement("h3");
    hourlyrate.setAttribute("id", "hourlyrate");
    hourlyrate.innerText = `${price} per hour`;
    let maxrate = document.createElement("h3");
    maxrate.innerText = `${maxprice} daily max`;
    pricediv.append(divheading, hourlyrate, maxrate);

    let phone = document.createElement("h5");
    phone.innerText = "PHONE";
    let phonediv = document.createElement("div");
    phonediv.setAttribute("id", "phonediv");
    let flagbutton = document.createElement("button");
    let flagimage = document.createElement("img");
    flagimage.src = "https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
    flagbutton.append(flagimage);
    let phoneinp = document.createElement("input");
    phoneinp.setAttribute("type", "number");
    phoneinp.placeholder = "Phone Number";
    phoneinp.setAttribute("id", "phoneinp");
    phoneinp.addEventListener("input",()=> {
    let value=document.getElementById("phoneinp").value;
    if(value!=""){
      document.getElementById("pointerdiv1").style.display="none";
    document.getElementById("div1").style.visibility="hidden";
    }
    })
    phonediv.append(flagbutton, phoneinp);

    let pointerdiv=document.createElement("div");
    pointerdiv.setAttribute("id","pointerdiv1");
    let errordiv=document.createElement("div");
    errordiv.setAttribute("id","div1");
    let excimg=document.createElement("img");
    excimg.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp=document.createElement("p");
    errorp.innerText="Please fill out this field.";
    errordiv.append(excimg,errorp);


    let car = document.createElement("h5");
    car.setAttribute("id","carHeading");
    car.innerText = "CAR";
    let cardiv = document.createElement("div");
    cardiv.setAttribute("id", "cardiv");
    let carbutton = document.createElement("button");
    let carimage = document.createElement("img");
    carimage.src =
      "https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
    carbutton.append(carimage);
    let carinp = document.createElement("input");
    carinp.placeholder = "License Plate Number";
    carinp.setAttribute("id", "carinp");
    carinp.addEventListener("input",()=> {
      let value=document.getElementById("carinp").value;
      if(value!=""){
        document.getElementById("pointerdiv2").style.display="none";
      document.getElementById("div2").style.visibility="hidden";
      }
      });
      
    cardiv.append(carbutton, carinp);

    let pointerdiv2=document.createElement("div");
    pointerdiv2.setAttribute("id","pointerdiv2");
    let errordiv2=document.createElement("div");
    errordiv2.setAttribute("id","div2");
    let excimg2=document.createElement("img");
    excimg2.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp2=document.createElement("p");
    errorp2.innerText="Please fill out this field.";
    errordiv2.append(excimg2,errorp2);

    let stateinp = document.createElement("input");
    stateinp.placeholder = "State/Province";
    stateinp.value = "State/Province";
    stateinp.readOnly = "true";
    stateinp.setAttribute("id", "stateinp");
    stateinp.addEventListener("click", () => {
      statediv();
      getStateData();
      document.getElementById("pointerdiv3").style.display="none";
      document.getElementById("div3").style.visibility="hidden";
    });

    let pointerdiv3=document.createElement("div");
    pointerdiv3.setAttribute("id","pointerdiv3");
    let errordiv3=document.createElement("div");
    errordiv3.setAttribute("id","div3");
    let excimg3=document.createElement("img");
    excimg3.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp3=document.createElement("p");
    errorp3.innerText="Please fill out this field.";
    errordiv3.append(excimg3,errorp3);

    let provincediv = document.createElement("div");
    provincediv.setAttribute("id", "provincediv");

    let payment = document.createElement("h5");
    payment.setAttribute("id","paymentHeading");
    payment.innerText = "SECURE PAYMENT";
    let cardinp = document.createElement("input");
    cardinp.placeholder = "Card Number";
    cardinp.setAttribute("id","cardinp");
    cardinp.addEventListener("input",()=> {
      let value=document.getElementById("cardinp").value;
      if(value!=""){
        document.getElementById("pointerdiv4").style.display="none";
      document.getElementById("div4").style.visibility="hidden";
      }
      });
      cardinp.onkeypress = function () {
        if (cardinp.value.length > 0) {
      
            if (cardinp.value.length % 4 == 0) {
                cardinp.value += "    ";
      
            }
        }
      }


    let pointerdiv4=document.createElement("div");
    pointerdiv4.setAttribute("id","pointerdiv4");
    let errordiv4=document.createElement("div");
    errordiv4.setAttribute("id","div4");
    let excimg4=document.createElement("img");
    excimg4.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp4=document.createElement("p");
    errorp4.innerText="Please fill out this field.";
    errordiv4.append(excimg4,errorp4);

    let coupondiv = document.createElement("div");
    coupondiv.setAttribute("id", "coupondiv");
    let couponimage = document.createElement("img");
    couponimage.src =
      "https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
    let coupon = document.createElement("p");
    coupon.addEventListener("click", function () {
      couponinput();
    });
    coupon.innerText = "Have a coupon code?";
    coupondiv.append(couponimage, coupon);
    let couponinputdiv = document.createElement("div");
    couponinputdiv.setAttribute("id", "couponinputdiv");
    let messagediv = document.createElement("div");
    messagediv.setAttribute("id", "messagediv");

    let submitdiv = document.createElement("div");
    submitdiv.setAttribute("id", "submitdiv");
    let submit = document.createElement("button");
    submit.setAttribute("id","submit");
    let a=document.createElement("a");
    a.innerText = "START RENTAL";
    a.setAttribute("id","a");
   submit.append(a);
    
    submitdiv.append(submit);
    submit.addEventListener("click",()=>{
      let Bslot={
        phone:document.getElementById("phoneinp").value,
        plate:document.getElementById("carinp").value,
        state:document.getElementById("stateinp").value,
        card:document.getElementById("cardinp").value,
        image:document.getElementById("spotImage").src,
        heading:document.getElementById("spotHeading").innerText,
        price:document.getElementById("hourlyrate").innerText,
      }
    
      if(Bslot.phone==""){
        document.getElementById("pointerdiv1").style.display="block";
        document.getElementById("div1").style.visibility="visible";
        document.getElementById("a").href="#phoneinp"
       setTimeout(function(){
        document.getElementById("pointerdiv1").style.display="none";
        document.getElementById("div1").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.plate==""){
    
        document.getElementById("pointerdiv2").style.display="block";
        document.getElementById("div2").style.visibility="visible";
        document.getElementById("a").href="#carinp"
       setTimeout(function(){
        document.getElementById("pointerdiv2").style.display="none";
        document.getElementById("div2").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.state=="State/Province"){
        document.getElementById("pointerdiv3").style.display="block";
        document.getElementById("div3").style.visibility="visible";
        document.getElementById("a").href="#stateinp"
       setTimeout(function(){
        document.getElementById("pointerdiv3").style.display="none";
        document.getElementById("div3").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.card==""){
        document.getElementById("pointerdiv4").style.display="block";
        document.getElementById("div4").style.visibility="visible";
        document.getElementById("a").href="#cardinp"
       setTimeout(function(){
        document.getElementById("pointerdiv4").style.display="none";
        document.getElementById("div4").style.visibility="hidden";
       },3000)
      }
      else{
        localStorage.setItem("bookedSlot",JSON.stringify("Bslot"));
        postTicket(Bslot);

      }

    })

    let gethelpdiv = document.createElement("div");
    gethelpdiv.setAttribute("id", "gethelp");
    let gethelpimg = document.createElement("img");
    gethelpimg.src = "https://www.freeiconspng.com/uploads/info-icon-8.png";
    let gethelp = document.createElement("a");
    gethelp.innerText = "Get help";
    gethelpdiv.append(gethelpimg, gethelp);

    slotcontainer.append(
      imag,
      heading,
      titl,
      pricediv,
      phone,
      phonediv,
      pointerdiv,
      errordiv,
      car,
      cardiv,
      pointerdiv2,
      errordiv2,
      stateinp,
      pointerdiv3,
      errordiv3,
      provincediv,
      payment,
      cardinp,
      pointerdiv4,
      errordiv4,
      coupondiv,
      couponinputdiv,
      messagediv,
      submitdiv,
      gethelpdiv
    );
  } else if (rent == "Monthly") {
    let imag = document.createElement("img");
    imag.src = image;
    imag.setAttribute("id","spotImage");
    let heading = document.createElement("h3");
    heading.innerText = "Park with AirGarage";
    let titl = document.createElement("h5");
    titl.setAttribute("id","spotHeading")
    titl.innerText = title;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");
    let divheading = document.createElement("h6");
    divheading.innerText = "CURRENT RATE";
    let hourlyrate = document.createElement("h3");
    hourlyrate.setAttribute("id", "hourlyrate");
    hourlyrate.innerText = `${price} per month`;
    hourlyrate.style.marginBottom = "3px";
    pricediv.append(divheading, hourlyrate);

    let phone = document.createElement("h5");
    phone.innerText = "PHONE";
    let phonediv = document.createElement("div");
    phonediv.setAttribute("id", "phonediv");
    let flagbutton = document.createElement("button");
    let flagimage = document.createElement("img");
    flagimage.src = "https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
    flagbutton.append(flagimage);
    let phoneinp = document.createElement("input");
    phoneinp.setAttribute("type", "number");
    phoneinp.placeholder = "Phone Number";
    phoneinp.setAttribute("id", "phoneinp");
    phoneinp.addEventListener("input",()=> {
      let value=document.getElementById("phoneinp").value;
      if(value!=""){
        document.getElementById("pointerdiv1").style.display="none";
      document.getElementById("div1").style.visibility="hidden";
      }
      })
    phonediv.append(flagbutton, phoneinp);

    let pointerdiv=document.createElement("div");
    pointerdiv.setAttribute("id","pointerdiv1");
    let errordiv=document.createElement("div");
    errordiv.setAttribute("id","div1");
    let excimg=document.createElement("img");
    excimg.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp=document.createElement("p");
    errorp.innerText="Please fill out this field.";
    errordiv.append(excimg,errorp);

    let car = document.createElement("h5");
    car.setAttribute("id","carHeading");
    car.innerText = "CAR";
    let cardiv = document.createElement("div");
    cardiv.setAttribute("id", "cardiv");
    let carbutton = document.createElement("button");
    let carimage = document.createElement("img");
    carimage.src =
      "https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
    carbutton.append(carimage);
    let carinp = document.createElement("input");
    carinp.placeholder = "License Plate Number";
    carinp.setAttribute("id", "carinp");
    carinp.addEventListener("input",()=> {
      let value=document.getElementById("carinp").value;
      if(value!=""){
        document.getElementById("pointerdiv2").style.display="none";
      document.getElementById("div2").style.visibility="hidden";
      }
      })
    cardiv.append(carbutton, carinp);

    let pointerdiv2=document.createElement("div");
    pointerdiv2.setAttribute("id","pointerdiv2");
    let errordiv2=document.createElement("div");
    errordiv2.setAttribute("id","div2");
    let excimg2=document.createElement("img");
    excimg2.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp2=document.createElement("p");
    errorp2.innerText="Please fill out this field.";
    errordiv2.append(excimg2,errorp2);

    let stateinp = document.createElement("input");
    stateinp.placeholder = "State/Province";
    stateinp.value = "State/Province";
    stateinp.readOnly = "true";
    stateinp.setAttribute("id", "stateinp");
    stateinp.addEventListener("click", () => {
      statediv();
      getStateData();
      document.getElementById("pointerdiv3").style.display="none";
      document.getElementById("div3").style.visibility="hidden";
    });

    let pointerdiv3=document.createElement("div");
    pointerdiv3.setAttribute("id","pointerdiv3");
    let errordiv3=document.createElement("div");
    errordiv3.setAttribute("id","div3");
    let excimg3=document.createElement("img");
    excimg3.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp3=document.createElement("p");
    errorp3.innerText="Please fill out this field.";
    errordiv3.append(excimg3,errorp3);

    let provincediv = document.createElement("div");
    provincediv.setAttribute("id", "provincediv");

    let startDate = document.createElement("h5");
    startDate.setAttribute("id","startDateHeading");
    startDate.innerText = "START DATE";
    let startDateinp = document.createElement("input");
    startDateinp.setAttribute("onfocus","(this.type='date')");
    startDateinp.setAttribute("onblur","(this.type='text')");
    startDateinp.placeholder = "Start Date";
    startDateinp.setAttribute("id","startDateinp");
    startDateinp.addEventListener("input",()=> {
      let value=document.getElementById("startDateinp").value;
      if(value!=""){
        document.getElementById("pointerdiv5").style.display="none";
      document.getElementById("div5").style.visibility="hidden";
      }
      })

    let pointerdiv5=document.createElement("div");
    pointerdiv5.setAttribute("id","pointerdiv5");
    let errordiv5=document.createElement("div");
    errordiv5.setAttribute("id","div5");
    let excimg5=document.createElement("img");
    excimg5.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp5=document.createElement("p");
    errorp5.innerText="Please fill out this field.";
    errordiv5.append(excimg5,errorp5);

    let endDate = document.createElement("h5");
    endDate.setAttribute("id","endDateHeading");
    endDate.innerText = "END DATE";
    let datediv=document.createElement("div");
    datediv.setAttribute("id","datediv");
    let check=document.createElement("input");
    check.setAttribute("type","checkbox");
    check.setAttribute("id","check");

    check.addEventListener("input",() => { 
    let checked=document.getElementById("check").checked;
    console.log(checked)
    if(checked==true){
      document.getElementById("inputdiv").innerHTML="null";
      document.getElementById("inputdiv").innerText="This rental will be billed monthly and you may cancel anytime.";
      document.getElementById("inputdiv").style.fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    }else if(checked==false){
      document.getElementById("inputdiv").innerHTML=null;
     let endDateinp = document.createElement("input");
    endDateinp.setAttribute("onfocus","(this.type='date')");
    endDateinp.setAttribute("onblur","(this.type='text')");
    endDateinp.placeholder = "End Date";
    endDateinp.setAttribute("id","endDateinp");
    inputdiv.append(endDateinp);
    }
    } );

    let cancel=document.createElement("p");
    cancel.innerText="UNTIL I CANCEL";
    datediv.append(check,cancel);
    let inputdiv=document.createElement("div");
    inputdiv.setAttribute("id","inputdiv");
    let endDateinp = document.createElement("input");
    endDateinp.setAttribute("onfocus","(this.type='date')");
    endDateinp.setAttribute("onblur","(this.type='text')");
    endDateinp.placeholder = "End Date";
    endDateinp.setAttribute("id","endDateinp");
    inputdiv.append(endDateinp);
    endDateinp.addEventListener("input",()=> {
      let value=document.getElementById("endDateinp").value;
      if(value!=""){
        document.getElementById("pointerdiv6").style.display="none";
      document.getElementById("div6").style.visibility="hidden";
      }
      })

    let pointerdiv6=document.createElement("div");
    pointerdiv6.setAttribute("id","pointerdiv6");
    let errordiv6=document.createElement("div");
    errordiv6.setAttribute("id","div6");
    let excimg6=document.createElement("img");
    excimg6.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp6=document.createElement("p");
    errorp6.innerText="Please fill out this field.";
    errordiv6.append(excimg6,errorp6);

    let payment = document.createElement("h5");
    payment.setAttribute("id","paymentHeading");
    payment.innerText = "SECURE PAYMENT";
    let cardinp = document.createElement("input");
    cardinp.placeholder = "Card Number";
    cardinp.setAttribute("id","cardinp");
    cardinp.addEventListener("input",()=> {
      let value=document.getElementById("cardinp").value;
      if(value!=""){
        document.getElementById("pointerdiv4").style.display="none";
      document.getElementById("div4").style.visibility="hidden";
      }
      });
      cardinp.onkeypress = function () {
        if (cardinp.value.length > 0) {
      
            if (cardinp.value.length % 4 == 0) {
                cardinp.value += "    ";
      
            }
        }
      }

    let pointerdiv4=document.createElement("div");
    pointerdiv4.setAttribute("id","pointerdiv4");
    let errordiv4=document.createElement("div");
    errordiv4.setAttribute("id","div4");
    let excimg4=document.createElement("img");
    excimg4.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp4=document.createElement("p");
    errorp4.innerText="Please fill out this field.";
    errordiv4.append(excimg4,errorp4);

    let coupondiv = document.createElement("div");
    coupondiv.setAttribute("id", "coupondiv");
    let couponimage = document.createElement("img");
    couponimage.src =
      "https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
    let coupon = document.createElement("p");
    coupon.addEventListener("click", function () {
      couponinput();
    });
    coupon.innerText = "Have a coupon code?";
    coupondiv.append(couponimage, coupon);
    let couponinputdiv = document.createElement("div");
    couponinputdiv.setAttribute("id", "couponinputdiv");
    let messagediv = document.createElement("div");
    messagediv.setAttribute("id", "messagediv");

    let submitdiv = document.createElement("div");
    submitdiv.setAttribute("id", "submitdiv");
    let submit = document.createElement("button");
    submit.setAttribute("id","submit");
    let a=document.createElement("a");
    a.innerText = "START RENTAL";
    a.setAttribute("id","a");
   submit.append(a);
    submitdiv.append(submit);
    submit.addEventListener("click",()=>{
     
      let h=document.getElementById("endDateinp");
      let Bslot;
      if(h){
        Bslot={
          phone:document.getElementById("phoneinp").value,
          plate:document.getElementById("carinp").value,
          state:document.getElementById("stateinp").value,
          card:document.getElementById("cardinp").value,
          startDate:document.getElementById("startDateinp").value,
          endDate:document.getElementById("endDateinp").value,
          image:document.getElementById("spotImage").src,
          heading:document.getElementById("spotHeading").innerText,
          price:document.getElementById("hourlyrate").innerText,
        }
      }else{
       Bslot={
        phone:document.getElementById("phoneinp").value,
        plate:document.getElementById("carinp").value,
        state:document.getElementById("stateinp").value,
        card:document.getElementById("cardinp").value,
        startDate:document.getElementById("startDateinp").value,
        image:document.getElementById("spotImage").src,
        heading:document.getElementById("spotHeading").innerText,
        price:document.getElementById("hourlyrate").innerText,
      }}
      
        if(Bslot.phone==""){
          document.getElementById("pointerdiv1").style.display="block";
          document.getElementById("div1").style.visibility="visible";
          document.getElementById("a").href="#phoneinp"
         setTimeout(function(){
          document.getElementById("pointerdiv1").style.display="none";
          document.getElementById("div1").style.visibility="hidden";
         },3000)
        }
        else if(Bslot.plate==""){
      
          document.getElementById("pointerdiv2").style.display="block";
          document.getElementById("div2").style.visibility="visible";
          document.getElementById("a").href="#carinp"
         setTimeout(function(){
          document.getElementById("pointerdiv2").style.display="none";
          document.getElementById("div2").style.visibility="hidden";
         },3000)
        }
        else if(Bslot.state=="State/Province"){
          document.getElementById("pointerdiv3").style.display="block";
          document.getElementById("div3").style.visibility="visible";
          document.getElementById("a").href="#stateinp"
         setTimeout(function(){
          document.getElementById("pointerdiv3").style.display="none";
          document.getElementById("div3").style.visibility="hidden";
         },3000)
        }
        else if(Bslot.startDate==""){
          document.getElementById("pointerdiv5").style.display="block";
          document.getElementById("div5").style.visibility="visible";
          document.getElementById("a").href="#startDateinp"
         setTimeout(function(){
          document.getElementById("pointerdiv5").style.display="none";
          document.getElementById("div5").style.visibility="hidden";
         },3000)
        }
        else if(Bslot.endDate==""){
          document.getElementById("pointerdiv6").style.display="block";
          document.getElementById("div6").style.visibility="visible";
          document.getElementById("a").href="#startDateinp"
         setTimeout(function(){
          document.getElementById("pointerdiv6").style.display="none";
          document.getElementById("div6").style.visibility="hidden";
         },3000)
        }
        else if(Bslot.card==""){
          document.getElementById("pointerdiv4").style.display="block";
          document.getElementById("div4").style.visibility="visible";
          document.getElementById("a").href="#cardinp"
         setTimeout(function(){
          document.getElementById("pointerdiv4").style.display="none";
          document.getElementById("div4").style.visibility="hidden";
         },3000)
        }
        else{
          localStorage.setItem("bookedSlot",JSON.stringify("Bslot"));
          postTicket(Bslot);
        }
      

      
     
    })

    let gethelpdiv = document.createElement("div");
    gethelpdiv.setAttribute("id", "gethelp");
    let gethelpimg = document.createElement("img");
    gethelpimg.src = "https://www.freeiconspng.com/uploads/info-icon-8.png";
    let gethelp = document.createElement("a");
    gethelp.innerText = "Get help";
    gethelpdiv.append(gethelpimg, gethelp);

    slotcontainer.append(
      imag,
      heading,
      titl,
      pricediv,
      phone,
      phonediv,
      pointerdiv,
      errordiv,
      car,
      cardiv,
      pointerdiv2,
      errordiv2,
      stateinp,
      pointerdiv3,
      errordiv3,
      provincediv,
      startDate,
      startDateinp,
      pointerdiv5,
      errordiv5,
      endDate,
      datediv,
      inputdiv,
      pointerdiv6,
      errordiv6,
      payment,
      cardinp,
      pointerdiv4,
      errordiv4,
      coupondiv,
      couponinputdiv,
      messagediv,
      submitdiv,
      gethelpdiv
    );
  } else if (rent == "Daily") {
    let imag = document.createElement("img");
    imag.src = image;
    imag.setAttribute("id","spotImage")
    let heading = document.createElement("h3");
    heading.innerText = "Park with AirGarage";
    let titl = document.createElement("h5");
    titl.setAttribute("id","spotHeading")
    titl.innerText = title;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv");
    let divheading = document.createElement("h6");
    divheading.innerText = "CURRENT RATE";
    let hourlyrate = document.createElement("h3");
    hourlyrate.setAttribute("id", "hourlyrate");
    hourlyrate.innerText = `${price} per day`;
    hourlyrate.style.marginBottom = "3px";
    pricediv.append(divheading, hourlyrate);

    let phone = document.createElement("h5");
    phone.innerText = "PHONE";
    let phonediv = document.createElement("div");
    phonediv.setAttribute("id", "phonediv");
    let flagbutton = document.createElement("button");
    let flagimage = document.createElement("img");
    flagimage.src = "https://www.freeiconspng.com/uploads/us-flag-icon-3.png";
    flagbutton.append(flagimage);
    let phoneinp = document.createElement("input");
    phoneinp.setAttribute("type", "number");
    phoneinp.placeholder = "Phone Number";
    phoneinp.setAttribute("id", "phoneinp");
    phoneinp.addEventListener("input",()=> {
      let value=document.getElementById("phoneinp").value;
      if(value!=""){
        document.getElementById("pointerdiv1").style.display="none";
      document.getElementById("div1").style.visibility="hidden";
      }
      })
    phonediv.append(flagbutton, phoneinp);

    let pointerdiv=document.createElement("div");
    pointerdiv.setAttribute("id","pointerdiv1");
    let errordiv=document.createElement("div");
    errordiv.setAttribute("id","div1");
    let excimg=document.createElement("img");
    excimg.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp=document.createElement("p");
    errorp.innerText="Please fill out this field.";
    errordiv.append(excimg,errorp);

    let car = document.createElement("h5");
    car.setAttribute("id","carHeading");
    car.innerText = "CAR";
    let cardiv = document.createElement("div");
    cardiv.setAttribute("id", "cardiv");
    let carbutton = document.createElement("button");
    let carimage = document.createElement("img");
    carimage.src =
      "https://www.freeiconspng.com/uploads/aotu-car-small-car-transportation-wheel-icon--12.png";
    carbutton.append(carimage);
    let carinp = document.createElement("input");
    carinp.placeholder = "License Plate Number";
    carinp.setAttribute("id", "carinp");
    carinp.addEventListener("input",()=> {
      let value=document.getElementById("carinp").value;
      if(value!=""){
        document.getElementById("pointerdiv2").style.display="none";
      document.getElementById("div2").style.visibility="hidden";
      }
      })
    cardiv.append(carbutton, carinp);

    let pointerdiv2=document.createElement("div");
    pointerdiv2.setAttribute("id","pointerdiv2");
    let errordiv2=document.createElement("div");
    errordiv2.setAttribute("id","div2");
    let excimg2=document.createElement("img");
    excimg2.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp2=document.createElement("p");
    errorp2.innerText="Please fill out this field.";
    errordiv2.append(excimg2,errorp2);

    let stateinp = document.createElement("input");
    stateinp.placeholder = "State/Province";
    stateinp.value = "State/Province";
    stateinp.readOnly = "true";
    stateinp.setAttribute("id", "stateinp");
    stateinp.addEventListener("click", () => {
      statediv();
      getStateData();
      document.getElementById("pointerdiv3").style.display="none";
      document.getElementById("div3").style.visibility="hidden";
    });

    let pointerdiv3=document.createElement("div");
    pointerdiv3.setAttribute("id","pointerdiv3");
    let errordiv3=document.createElement("div");
    errordiv3.setAttribute("id","div3");
    let excimg3=document.createElement("img");
    excimg3.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
    let errorp3=document.createElement("p");
    errorp3.innerText="Please fill out this field.";
    errordiv3.append(excimg3,errorp3);

    let provincediv = document.createElement("div");
    provincediv.setAttribute("id", "provincediv");

    let payment = document.createElement("h5");
    payment.setAttribute("id","paymentHeading");
    payment.innerText = "SECURE PAYMENT";
    let cardinp = document.createElement("input");
    cardinp.placeholder = "Card Number";
    cardinp.setAttribute("id","cardinp");

    cardinp.addEventListener("input",()=> {
      let value=document.getElementById("cardinp").value;
      if(value!=""){
        document.getElementById("pointerdiv4").style.display="none";
      document.getElementById("div4").style.visibility="hidden";
      }
      });
      cardinp.onkeypress = function () {
        if (cardinp.value.length > 0) {
      
            if (cardinp.value.length % 4 == 0) {
                cardinp.value += "    ";
      
            }
        }
      }

      let pointerdiv4=document.createElement("div");
      pointerdiv4.setAttribute("id","pointerdiv4");
      let errordiv4=document.createElement("div");
      errordiv4.setAttribute("id","div4");
      let excimg4=document.createElement("img");
      excimg4.src="https://www.freeiconspng.com/uploads/exclamation-icon-10.jpg";
      let errorp4=document.createElement("p");
      errorp4.innerText="Please fill out this field.";
      errordiv4.append(excimg4,errorp4);

    let coupondiv = document.createElement("div");
    coupondiv.setAttribute("id", "coupondiv");
    let couponimage = document.createElement("img");
    couponimage.src =
      "https://www.freeiconspng.com/uploads/blue-blank-price-tag-png-6.png";
    let coupon = document.createElement("p");
    coupon.addEventListener("click", function () {
      couponinput();
    });
    coupon.innerText = "Have a coupon code?";
    coupondiv.append(couponimage, coupon);
    let couponinputdiv = document.createElement("div");
    couponinputdiv.setAttribute("id", "couponinputdiv");
    let messagediv = document.createElement("div");
    messagediv.setAttribute("id", "messagediv");

    let submitdiv = document.createElement("div");
    submitdiv.setAttribute("id", "submitdiv");
    let submit = document.createElement("button");
    submit.setAttribute("id","submit");
    let a=document.createElement("a");
    a.innerText = "START RENTAL";
    a.setAttribute("id","a");
   submit.append(a);
    submitdiv.append(submit);
    submit.addEventListener("click",()=>{
      let Bslot={
        phone:document.getElementById("phoneinp").value,
        plate:document.getElementById("carinp").value,
        state:document.getElementById("stateinp").value,
        card:document.getElementById("cardinp").value,
        image:document.getElementById("spotImage").src,
        heading:document.getElementById("spotHeading").innerText,
        price:document.getElementById("hourlyrate").innerText,
      }
    
      if(Bslot.phone==""){
        document.getElementById("pointerdiv1").style.display="block";
        document.getElementById("div1").style.visibility="visible";
        document.getElementById("a").href="#phoneinp"
       setTimeout(function(){
        document.getElementById("pointerdiv1").style.display="none";
        document.getElementById("div1").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.plate==""){
    
        document.getElementById("pointerdiv2").style.display="block";
        document.getElementById("div2").style.visibility="visible";
        document.getElementById("a").href="#carinp"
       setTimeout(function(){
        document.getElementById("pointerdiv2").style.display="none";
        document.getElementById("div2").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.state=="State/Province"){
        document.getElementById("pointerdiv3").style.display="block";
        document.getElementById("div3").style.visibility="visible";
        document.getElementById("a").href="#stateinp"
       setTimeout(function(){
        document.getElementById("pointerdiv3").style.display="none";
        document.getElementById("div3").style.visibility="hidden";
       },3000)
      }
      else if(Bslot.card==""){
        document.getElementById("pointerdiv4").style.display="block";
        document.getElementById("div4").style.visibility="visible";
        document.getElementById("a").href="#cardinp"
       setTimeout(function(){
        document.getElementById("pointerdiv4").style.display="none";
        document.getElementById("div4").style.visibility="hidden";
       },3000)
      }
      else{
        localStorage.setItem("bookedSlot",JSON.stringify("Bslot"));

        postTicket(Bslot);
      }
    })

    let gethelpdiv = document.createElement("div");
    gethelpdiv.setAttribute("id", "gethelp");
    let gethelpimg = document.createElement("img");
    gethelpimg.src = "https://www.freeiconspng.com/uploads/info-icon-8.png";
    let gethelp = document.createElement("a");
    gethelp.innerText = "Get help";
    gethelpdiv.append(gethelpimg, gethelp);

    slotcontainer.append(
      imag,
      heading,
      titl,
      pricediv,
      phone,
      phonediv,
      pointerdiv,
      errordiv,
      car,
      cardiv,
      pointerdiv2,
      errordiv2,
      stateinp,
      pointerdiv3,
      errordiv3,
      provincediv,
      payment,
      cardinp,
      pointerdiv4,
      errordiv4,
      coupondiv,
      couponinputdiv,
      messagediv,
      submitdiv,
      gethelpdiv
    );
  }
};

append(slot, maxprice);

let str = document.getElementById("hourlyrate").innerText;

function couponinput() {
  let container = document.getElementById("couponinputdiv");
  container.innerHTML = "";
  let couponinput = document.createElement("input");
  couponinput.setAttribute("id", "couponinput");
  couponinput.placeholder = "Enter a Valid Coupon Code";
  container.append(couponinput);
  container.style.marginBottom = "20px";
  container.style.marginTop = "-5px";

  let couponinp = document.getElementById("couponinput");
  let messagecontainer = document.getElementById("messagediv");

  couponinp.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
        let value = couponinp.value;
        if (value == "masai30") {
          if (rent == "Hourly") {
            messagecontainer.innerHTML = "";
            let p = document.createElement("p");
            let rate = str;
            rate = rate.replace(" per hour", "");
            rate = rate.replace("$", "");
            let saved = rate;
            saved = Number(saved) * 0.3;
            saved = saved.toFixed(2);
            p.innerText = `Congratulations you saved $${saved}.`;
            p.style.color = "green";
            p.style.fontFamily = "Arial, Helvetica, sans-serif";
            messagecontainer.append(p);
            container.innerHTML = "";

            rate = Number(rate) * 0.7;
            rate = rate.toFixed(2);
            document.getElementById(
              "hourlyrate"
            ).innerText = `$${rate} per hour`;
            document.getElementById("hourlyrate").style.color = "green";
          } else if (rent == "Monthly") {
            messagecontainer.innerHTML = "";
            let p = document.createElement("p");
            let rate = str;
            rate = rate.replace(" per month", "");
            rate = rate.replace("$", "");
            let saved = rate;
            saved = Number(saved) * 0.3;
            saved = saved.toFixed(2);
            p.innerText = `Congratulations you saved $${saved}.`;
            p.style.color = "green";
            p.style.fontFamily = "Arial, Helvetica, sans-serif";
            messagecontainer.append(p);
            container.innerHTML = "";

            rate = Number(rate) * 0.7;
            rate = rate.toFixed(2);
            document.getElementById(
              "hourlyrate"
            ).innerText = `$${rate} per month`;
            document.getElementById("hourlyrate").style.color = "green";
          } else if (rent == "Daily") {
            messagecontainer.innerHTML = "";
            let p = document.createElement("p");
            let rate = str;
            rate = rate.replace(" per day", "");
            rate = rate.replace("$", "");
            let saved = rate;
            saved = Number(saved) * 0.3;
            saved = saved.toFixed(2);
            p.innerText = `Congratulations you saved $${saved}.`;
            p.style.color = "green";
            p.style.fontFamily = "Arial, Helvetica, sans-serif";
            messagecontainer.append(p);
            container.innerHTML = "";

            rate = Number(rate) * 0.7;
            rate = rate.toFixed(2);
            document.getElementById(
              "hourlyrate"
            ).innerText = `$${rate} per day`;
            document.getElementById("hourlyrate").style.color = "green";
          }
        } else {
          messagecontainer.innerHTML = "";
          let p = document.createElement("p");
          p.innerText = "Please enter a valid Coupon Code!";
          p.style.color = "red";
          p.style.fontFamily = "Arial, Helvetica, sans-serif";
          messagecontainer.append(p);
        }
    }
  });
}

let getStateData = async () => {
  let res = await fetch("  http://localhost:3000/StateArr");

  let data = await res.json();

  appendStateDiv(data);
};

let id;

let appendStateDiv = (data) => {
  let statecontainer = document.getElementById("provincediv");
  data.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "statenamediv");
    let name = document.createElement("p");
    name.innerText = e;
    div.append(name);

    div.addEventListener("click", function () {
      if (id) {
        id.style.backgroundColor = "white";
        id.style.color = "black";
      }
      let stateinp = document.getElementById("stateinp");
      stateinp.value = e;
      document.getElementById("provincediv").style.display = "none";
      div.style.backgroundColor = "lightgrey";
      div.style.color = "white";
      id = div;
    });

    statecontainer.append(div);
  });
};

let statediv = () => {
  let statediv = document.getElementById("provincediv");
  statediv.style.display = "block";
};

document.getElementById("hourly").addEventListener("click", () => {
  
  if (rent == "Hourly") {
    let edit = slot.price.replace("$", "");
    edit = edit.replace(".00", "");
    if (edit < 10) {
      append(slot, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    } else {
      edit = Math.floor(Number(edit) / 8 + 10);
      let maxprice = `$${edit}.00`;

      let booking = { ...slot };
      booking.price = (edit / 10).toFixed(2);
      append(booking, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    }
  } else if (rent == "Monthly") {
    rent = "Hourly";
    let edit = slot.price.replace("$", "");
    edit = edit.replace(".00", "");
    if (edit < 10) {
      append(slot, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    } else {
      edit = Math.floor(Number(edit) / 8 + 10);
      let maxprice = `$${edit}.00`;

      let booking = { ...slot };
      booking.price = `$${(edit / 10).toFixed(2)}`
      append(booking, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    }
  } else if (rent == "Daily") {
    rent = "Hourly";
    let edit = slot.price.replace("$", "");
    edit = edit.replace(".00", "");
    edit = Number(edit) + 5;
    edit = edit.toFixed(2);
    let maxprice = `$${edit}`;

    let booking = { ...slot };
    booking.price = (edit / 4).toFixed(2);
    append(booking, maxprice);
    str = document.getElementById("hourlyrate").innerText;
  }
});

document.getElementById("monthly").addEventListener("click", () => {
  if (rent == "Monthly") {
    let booking = { ...slot };
    console.log(booking.price);
    let demo = booking.price;
    demo = demo.replace("$", "");
    demo = Number(demo);
    if (demo < 8) {
      demo = demo * 87;
      booking.price = `$${demo}`;
      append(booking, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    } else {
      append(slot, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    }
  } else if (rent == "Hourly") {
    rent = "Monthly";
    let booking = { ...slot };
    console.log(booking.price);
    let demo = booking.price;
    demo = demo.replace("$", "");
    demo = Number(demo);
    if (demo < 8) {
      demo = (demo * 87.4).toFixed(2);
      booking.price = `$${demo}`;
      append(booking, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    } else {
      append(slot, maxprice);
      str = document.getElementById("hourlyrate").innerText;
    }
  } else if (rent == "Daily") {
    rent = "Monthly";
    let edit = slot.price.replace("$", "");
    edit = edit.replace(".00", "");
    edit = Number(edit) * 8.4;
    edit = edit.toFixed(2);

    let booking = { ...slot };
    booking.price = `${edit}`;
    append(booking, maxprice);
    str = document.getElementById("hourlyrate").innerText;
  }
});

if (rent == "Daily") {
  document.getElementById("AvailableOptions").style.display = "none";
}

let postTicket=async (ticket) => {

  let res=await fetch("http://localhost:3000/myTickets",{
    method:"POST",
    body:JSON.stringify(ticket),
    headers:{"Content-Type":"application/json"}
  });
  let data=await res.json();
  console.log(data)
}




