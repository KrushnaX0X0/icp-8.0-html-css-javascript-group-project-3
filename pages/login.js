<script>
        const Username = document.getElementById("username");
        const Password = document.getElementById("password");  

        function login(){
            const loginElement = document.getElementById("login");
            if(!Username.value == "admin" && Password.value == "<PASSWORD>"){
                alert("Invalid username or password");
                
                window.location.href = "./../index.html";
            }else{
                alert("Login Successful");
                window.location.href = "./../index.html";
            }   
        }
      </script>