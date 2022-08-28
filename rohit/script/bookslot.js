setTimeout(() => {
  document.getElementById("loading_img_box").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 1000);

let { email, id } = JSON.parse(localStorage.getItem("lsData"));

let logOut = async () => {
  let updated_data = {
    varification_code: "null",
  };

  let res = await fetch(`http://localhost:3000/users/${Number(id)}`, {
    method: "PATCH",
    body: JSON.stringify(updated_data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    let data = await res.json();
    console.log(data);
    let lsData = {
      email: "",
      id: "",
    };

    localStorage.setItem("lsData", JSON.stringify(lsData));
    window.location.href = "signin.html";
  } catch (err) {}
};
