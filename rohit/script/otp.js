let { email, id } = JSON.parse(localStorage.getItem("lsData"));
document.querySelector(".user_email").innerHTML = email;
document.querySelector("#resend_otp").innerHTML = `Resent to ${email}`;

let login_btn = document.querySelector("#submit-btn");

function checkBasic(first, last) {
  if (last === "end") {
    login_btn.style.opacity = "1";
    return;
  }
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

let logIn = async () => {
  let digit_1 = document.getElementById("digit_1").value;
  let digit_2 = document.getElementById("digit_2").value;
  let digit_3 = document.getElementById("digit_3").value;
  let digit_4 = document.getElementById("digit_4").value;
  let digit_5 = document.getElementById("digit_5").value;
  let digit_6 = document.getElementById("digit_6").value;

  let code = digit_1 + digit_2 + digit_3 + digit_4 + digit_5 + digit_6;

  let res = await fetch(`http://localhost:3000/users?email=${email}`);
  try {
    let data = await res.json();
    if (code == data[0].varification_code) {
      window.location.href = "welcomepage.html";
    } else {
      document.querySelector(".form-box h2").style.display = "none";
      document.getElementById("error").style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
};
