const handleReg= (event)=>{

    event.preventDefault()

   const username = document.getElementById('username').value
   const  email = document.getElementById('email').value
    const  password = document.getElementById('password').value
    const  confirm_password = document.getElementById('confirm_password').value
    

   
    const info = {
        username,email,password,confirm_password
    }
    console.log(JSON.stringify(info))

    if (password === confirm_password){
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){

            fetch("http://127.0.0.1:8000/register/",{
                method : "POST",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(info)
                
            })
            .then((res)=> res.json())
            .then((data)=>console.log(data))
        }
        else{
            alert("pass must contain Minimum eight characters, at least one letter, one number and one special character")
        }
    }
    else {
        alert('Password and confirm password doesnot match')
    }







}


const handleLogin = (event)=>{

    event.preventDefault()
    const username = document.getElementById('login-username').value
    const password = document.getElementById('login-password').value

    fetch('http://127.0.0.1:8000/login/',{

    method: "POST",
    headers: {"content-type" : "application/json"},
    body : JSON.stringify({username,password})
    })
    .then ((res)=> res.json())
    .then ((data)=>{
        
        if(data.token && data.user_id){
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id",data.user_id);
            window.location = "/index.html"
            console.log('working')
        }
    })
}

