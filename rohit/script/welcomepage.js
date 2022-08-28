let { email, id } = JSON.parse(localStorage.getItem("lsData"));

let logIn = async () => {
  let res = await fetch(`http://localhost:3000/users?email=${email}`);
  try {
    let data = await res.json();
    let { firstname, email, mobile, rating } = data[0];

    document.getElementById(
      "profile_data"
    ).innerHTML = `<p>Welcome, ${firstname}!</p>
   <div>
       <i class="uil uil-envelope-alt"></i>
       <p>${email}</p>
   </div>
   <div>
       <i class="uil uil-mobile-android-alt"></i>
       <p>${mobile}</p>
   </div>
   <div>
       <i class="uil uil-star"></i>
       <p>${rating}</p>
   </div>
   <div>
       <i class="uil uil-clock"></i>
       <p>Loading timezone</p>
       <p></p>
   </div>`;
  } catch (err) {
    console.log(err);
  }
};
logIn();

setTimeout(() => {
  window.location.href = "bookslot.html";
}, 1200);
