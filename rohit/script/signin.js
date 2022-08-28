let checkBasic = () => {
  document.getElementById("submit-btn").style.opacity = ".2";
  let loginData = {
    email: document.getElementById("email").value,
  };
  if (loginData.email.includes("@") && loginData.email.includes(".com")) {
    document.getElementById("submit-btn").style.opacity = "1";
  }
};

let varify = async () => {
  let email = document.getElementById("email").value;

  let res = await fetch(`http://localhost:3000/users?email=${email}`);
  try {
    let data_arr = await res.json();
    let data = data_arr[0];

    if (data == null) {
      document.getElementById("error").style.display = "block";
    } else {
      let email = data.email;
      let id = data.id;

      generateOtp(id);
    }
  } catch (err) {
    console.log(err);
  }
};

let generateOtp = async (id) => {
  let code = Math.random() * 1000000;
  code = Math.floor(code);

  let updated_data = {
    varification_code: code,
  };

  let res = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updated_data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let data = await res.json();
    let lsData = {
      email: data.email,
      id: data.id,
    };
    localStorage.setItem("lsData", JSON.stringify(lsData));
    window.location.href = "otp.html";
    alert(`Your varification code : ${data.varification_code}`);
  } catch (err) {
    console.log(err);
  }
};
