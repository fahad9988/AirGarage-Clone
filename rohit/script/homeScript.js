let { email, id } = JSON.parse(localStorage.getItem("lsData"));

let traverse = async () => {
  let res = await fetch(`http://localhost:3000/users?email=${email}`);
  try {
    let data = await res.json();
    let {varification_code} = data[0];
    if(varification_code !==""){
        window.location.href="welcomepage.html"
    }else{
        window.location.href="signin.html"
    }
 
  } catch (err) {
    console.log(err);
  }
};

