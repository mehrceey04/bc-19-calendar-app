function myFunction() {
  if (document.getElementById('email').value == "") {
    window.alert('Enter email address');
    return false;
  }
  else if (document.getElementById('password').value == "") {
    window.alert('Enter Password');
    return false;
  }
  else if (document.getElementById('email').value == "mercy" && document.getElementById('password').value == "mercy") {
    window.location.href = "index.html";
  }
  else {
    window.alert('Invalid Email address or Password');
    return false;
  }             
}