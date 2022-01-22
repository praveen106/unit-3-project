function sigin(e) {
    e.preventDefault();
  
    let users_email = document.getElementById("user_email");
    let email = users_email.value;
    let users_password = document.getElementById("user_password");
    let password = users_password.value;
  
    let arr = JSON.parse(localStorage.getItem("users"));
  
    let found = 1;
    arr.forEach(function (el) {
      if (email === el.email && password === el.password) {
        found = 0;
        console.log("here");
        window.location.href = "home.html";
      }
    });
  
    if (found) {
      alert("Invalid password");
    }
    users_email.value = "";
    users_password.value = "";
  }
  
  function menuToggle() {
    let toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
  
  let reg2 = document.getElementById("reg");
  let reg2_name = reg2.innerHTML;
  console.log(reg2_name);
  
  if (
    localStorage.getItem("fname") !== null &&
    JSON.parse(localStorage.getItem("fanme") !== "")
  ) {
    // let reg = document.getElementById("reg");
    reg2_name = JSON.parse(localStorage.getItem("fname"));
    reg2.innerHTML = reg2_name;
  }
  console.log(reg2_name);
  if (reg2_name == " My Account ") {
    //console.log("here");
    function menuToggle() {
      let toggleMenu = document.querySelector(".menu");
      toggleMenu.classList.toggle("active");
    }
  } else {
    //console.log("there");
    function menuToggle() {
      let toggleUpdatedMenu = document.querySelector(".updated_menu");
      toggleUpdatedMenu.classList.toggle("active");
    }
  }