let { email, id } = JSON.parse(localStorage.getItem("lsData"));




let traverse = async () => {

  if(email===""){
    window.location.href="/rohit/signin.html"
  }else{
    let res = await fetch(`http://localhost:3000/users?email=${email}`);
  try {
    let data = await res.json();
    let {varification_code} = data[0];
    if(varification_code !==""){
        window.location.href="/rohit/welcomepage.html"
    }else{
        window.location.href="/rohit/signin.html"
    }
 
  } catch (err) {
    console.log(err);
  }
  }


  
};

