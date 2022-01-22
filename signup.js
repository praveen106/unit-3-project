function signup(e) {
    e.preventDefault();
    let users_fname = document.getElementById("user_first_name");
    let fname = users_fname.value;
    let users_lname = document.getElementById("user_last_name");
    let lname = users_lname.value;
    let users_email = document.getElementById("user_email");
    let email = users_email.value;
    let users_password = document.getElementById("user_password");
    let password = users_password.value;
    let users_confirm_password = document.getElementById("user_confirm_password");
    let confirmPassword = users_confirm_password.value;
    let users_num = document.getElementById("user_phone");
    let number = users_num.value;
  
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  
    let user = {
      fname,
      lname,
      email,
      number,
      password,
      confirmPassword,
    };
  
    let error_p = document.getElementById("show_error");
    console.log(error_p);
    error_p.style.color = "red";
    error_p.style.marginTop = "4px";
    error_p.style.textAlign = "left";
    error_p.style.marginLeft = "0px";
  
    let arr = JSON.parse(localStorage.getItem("users"));
    console.log(arr);
    let found = 1;
  
    if (number.length === 10) {
      arr.forEach(function (el) {
        if (el.email === user.email) {
          found = 0;
          error_p.innerText = "* User already exist with this email address";
        } else if (el.number === user.number) {
          found = 0;
          error_p.innerText = "* User already exist with this Number";
        }
      });
  
      if (found) {
        arr.push(user);
        localStorage.setItem("fname", JSON.stringify(user.fname));
        error_p.style.color = "green";
        error_p.innerText = "* Valid Credentials";
        setTimeout(function () {
          window.location.href = "sigin.html";
        }, 500);
      }
    } else {
      error_p.innerText = `* Please Enter a valid Number`;
    }
  
    localStorage.setItem("users", JSON.stringify(arr));
  
    users_fname.value = "";
    users_lname.value = "";
    users_email.value = "";
    users_password.value = "";
    users_confirm_password.value = "";
    users_num.value = "";
  }
  
  function menuToggle() {
    let toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }