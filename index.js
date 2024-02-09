const loadMemes = () =>{

    fetch ('http://127.0.0.1:8000/Home')
    .then ((res)=> res.json())
    .then ((data) => showMemes(data))

}

loadMemes()



const showMemes = (datas) =>{

    datas.forEach((data)=>{
        console.log(data)
        const parent = document.getElementById('parentCard')

        const div = document.createElement('div')
        data.category.forEach((cat)=>{
            catparent = document.getElementById('allcats')
            const btn = document.createElement('button')
            btn.classList = 'btn btn-light'
            btn.innerText = `${cat.categoryName}`
            catparent.appendChild(btn)
        })

        div.innerHTML=`
        <div class="col">
        <div class="col">
        <div class="card">
          <h5 class="card-title">${data.title}</h5>
          <p >By <span class="text-dark h5" >${data.user.username}</span> </p>
          <img src="${data.photo}" class="card-img-top" alt="...">
          <div class="card-body">
          <div id="allcats">
                      ${catparent.innerHTML}             
          
      </div>
              <div class="like-button">
                  <div class="heart-bg">
                    <div class="heart-icon"></div>
                  </div>
                  <div class="likes-amount">7</div>
                  
                  <div class="ms-5">
                      <i class="fa-regular fa-message fa-2x"></i>
                      <span style="color: #888;">5</span>
                   <a href=""><span style="color: #888;">Comments</span></a>   


                  </div>
                  <div class="ms-5">
                      <i class="fa-solid fa-share fa-2x"></i>
                      
                   <a href=""><span style="color: #888;">Share</span></a>   


                  </div>
                  
                </div>
               
              
          </div>
        </div>
      </div>
                        
        
        `
       
        
        parent.appendChild(div)
        
    })



}


// function addMeme(){

//   const title = document.getElementById('title-input').value
//   const image = document.getElementById('image-upload')
//   const selectedimage = image.files[0]
  
//    const data = {
//     title: title,
//     photo: selectedimage,
//    };
//    console.log(data)

//    fetch("http://127.0.0.1:8000/",
//    {
//     method:"POST",
//     headers:{
//       "content-type":"application/json"
//     },
//     body:JSON.stringify(data)
  
//    })
//    .then((res)=> res.json())

//    .then((data)=>{
//     console.log(data)
//    })
  



// }

function addMeme() {
  const title = document.getElementById('title-input').value;
  const imageInput = document.getElementById('image-upload');
  const selectedImage = imageInput.files[0];
  const id = localStorage.getItem('user_id')
  const ab = {
      username: "evaan321",
      id : parseInt(id)
  }
  
  console.log(id)
  const formData = new FormData();

  
  formData.append('title', title);
  formData.append('photo', selectedImage);
  formData.append('user',null);
 
  


  fetch("http://127.0.0.1:8000/Home", {
      method: "POST",
     
      body: JSON.stringify(formData) 
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
     
  })
  .catch(error => {
      console.log('Error adding meme:', error);
  });
}