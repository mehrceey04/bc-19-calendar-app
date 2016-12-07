function myFunction() {
            //username
            
            if (document.getElementById('email').value == "") {
                window.alert('Enter email address');
                return false;
            }
                //lastname
            else if (document.getElementById('password').value == "") {
                window.alert('Enter Password');
                return false;
            }
            else if (document.getElementById('email').value == "mercy" && document.getElementById('password').value == "mercy") {
                window.location.href = "index.html";
               // return false;
            }
                //email
            else  {
                window.alert('Invalid Email address or Password');
                return false;
            }
             
        }