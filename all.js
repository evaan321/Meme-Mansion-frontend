function fetchUser(){
    fetch(`https://meme-mansion-backend.onrender.com/users/`)
    .then ((res)=> res.json())
    .then ((data)=>{
        
        userShow(data)
        showProfile(data)
    })

  }

  fetchUser()


function userShow(data){

   const  userid = localStorage.getItem('user_id')

   if (userid){
    
        data.results.forEach(d=>{
             if (d.id == userid){
               const userinfo = document.getElementById('dropdown')
                userinfo.innerHTML = `
                <div id="dropdown" class="dropdown px-3">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid" alt="">
</a>
<ul class="dropdown-menu bg-white shadow">
    <li>
        <div class="dropdown-menu-profile-thumb d-flex">
            <img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid me-3" alt="">

            <div id="userInfo" class="d-flex flex-column">
                <small >${d.username}</small>
                <a href="#">${d.email}</a>
            </div>
        </div>
    </li>

    

    <li>
    <a class="dropdown-item" href="profile.html">
        <i class="bi-person me-2"></i>
        Profile
    </a>
</li>

   

    <li class="border-top mt-3 pt-2 mx-4">
        <a class="dropdown-item ms-0 me-0" href="#" onclick="handleLogout()">
            <i class="bi-box-arrow-left me-2"></i>
            Logout
        </a>
    </li>
</ul>
</div>
</div>
</div>
                `
             }
        })


   }

   else {
    const userinfo = document.getElementById('dropdown')
    userinfo.innerHTML = `
    <div id="dropdown" class="dropdown px-3">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid" alt="">
</a>
<ul class="dropdown-menu bg-white shadow">
<li>
<div class="dropdown-menu-profile-thumb d-flex">
<img src="images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid me-3" alt="">

<div id="userInfo" class="d-flex flex-column">
    <small >Annonymous User</small>
    <a href="#">AnnonymousUser@gmail.com</a>
</div>
</div>
</li>



<li>
<a class="dropdown-item" href="Auth/login.html">
<i class="bi-gear me-2"></i>
Register
</a>
</li>
<li>
<a class="dropdown-item" href="Auth/login.html">
<i class="bi-gear me-2"></i>
Login
</a>
</li>




</ul>
</div>
</div>
</div>
    `
   }
    


}


function showProfile(data){
    
    const  userid = localStorage.getItem('user_id')

    if (userid){
     
         data.results.forEach(d=>{
            console.log(d)
              if (d.id == userid){
                const userinfo = document.getElementById('profiles')
                 userinfo.innerHTML = `
                 <p class="d-flex flex-wrap mb-2">
                                                <strong>Username:</strong>
    
                                                <span>${d.username}</span>
                                            </p>
    
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>Email:</strong>
                                                
                                                <a href="#">
                                                    ${d.email}
                                                </a>
                                            </p>
    
                                            
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>First Name:</strong>
    
                                                <a href="#">
                                                    ${d.first_name?d.first_name :  'N/A'}
                                                </a>
                                            </p>
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>First Name:</strong>
    
                                                <a href="#">
                                                    ${d.last_name? d.last_name : 'N/A'}
                                                </a>
                                            </p>
                                          
                 `
}

         })
        }
        else {
            const userinfo = document.getElementById('profiles')
                 userinfo.innerHTML = `
                 <p class="d-flex flex-wrap mb-2">
                                                <strong>Username:</strong>
    
                                                <span>Annonymous</span>
                                            </p>
    
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>Email:</strong>
                                                
                                                <a href="#">
                                                Annonymous@gmail.com
                                                </a>
                                            </p>
    
                                            
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>First Name:</strong>
    
                                                <a href="#">
                                                    ${'N/A'}
                                                </a>
                                            </p>
                                            <p class="d-flex flex-wrap mb-2">
                                                <strong>First Name:</strong>
    
                                                <a href="#">
                                                    ${ 'N/A'}
                                                </a>
                                            </p>
                                          
                 `
        }
        
        }

