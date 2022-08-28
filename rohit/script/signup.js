let signUp = async () => {
  let userData = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    mobile:"",
    password: document.getElementById("password").value,
    service_agreements_checked: document.getElementById("check-box").checked,
    varification_code: "",
    rating:"",
    tickets:null

  };

  if (
    userData.firstname === "" ||
    userData.lastname === "" ||
    userData.email === ""
  ) {
    document.getElementById("error").style.display = "block";
    return;
  }

  if (userData.password.length < 8) {
    document.getElementById(
      "passwordError"
    ).innerText = `Please lengthen this text to 8 charecters or more (you are currently using ${userData.password.length} charecters)`;
    document.getElementById("popup").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("popup").style.visibility = "hidden";
    }, 1000);

    return;
  }

  /*
  if(userData.service_agreements_checked===false){
    alert ("Error : Check : Service Agreements")
    return;
  }
  */

  let res = await fetch("http://localhost:3000/users");
  try {
    let data = await res.json();

    let isExist = false;
    data.forEach(function (el) {
      if (el.email == userData.email) {
        isExist = true;
        document.getElementById("error2").style.display = "block";
        return;
      }
    });
    if (isExist == false) {
      addUser(userData);
    }
  } catch (err) {
    console.log(err);
  }
};


let addUser = async (userData) => {
  let res = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  try {
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
