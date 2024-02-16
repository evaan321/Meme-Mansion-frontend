
const yo = (data) => {
console.log(data)
    const parent = document.getElementById('parentCard')
    data.forEach(data =>{
        const catparent = document.createElement('div')
      catparent.classList.add('allcats')
        if (data.category){
            data.category.forEach((cat) => {
                const btn = document.createElement('button')
                btn.classList = 'btn btn-light'
                btn.innerText = `${cat.categoryName}`
                catparent.appendChild(btn)
            })
        }
     
        
     const div = document.createElement('div')
     div.classList.add('col')
     div.innerHTML = `
    
                          <div class="card">
                          <h5 class="card-title">${data.title}</h5>
                          <p>By <span class="text-dark h5">${data?.username}</span> </p>
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
                        
     
     `
parent.appendChild(div)
    })
}


const showMemes = (data) => {
    console.log(data)
  const parent = document.getElementById('parentCard')
  data.forEach((data) => {
      console.log(data)
      
      

      const div = document.createElement('div')
      // Change id to class for allcats
      const catparent = document.createElement('div')
      catparent.classList.add('allcats')

      data.category.forEach((cat) => {
          const btn = document.createElement('button')
          btn.classList = 'btn btn-light'
          btn.innerText = `${cat.categoryName}`
          catparent.appendChild(btn)
      })

      catparent.innerHTML = `
          <div class="col">
              <div class="col">
                  <div class="card">
                      <h5 class="card-title">${data.title}</h5>
                      <p>By <span class="text-dark h5">${data.user.username}</span> </p>
                      <img src="${data.photo}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <!-- Use class instead of id for allcats -->
                          <div class="allcats">
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
          </div>
      `

      parent.appendChild(catparent)
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

fetch('http://127.0.0.1:8000/category/')
.then(response => response.json())
.then(data => {
  const categorySelect = document.getElementById('category-select');

  
  categorySelect.innerHTML = '';

  
  

 
  data.forEach(category => {
    const option = document.createElement('option');
    option.text = category.categoryName;
    categorySelect.add(option);
  });
})
.catch(error => console.error('Error fetching categories:', error));
function addMeme() {
    const title = document.getElementById('title-input').value;
    const imageInput = document.getElementById('image-upload');
    const selectedImage = imageInput.files[0];
    const userId = localStorage.getItem('user_id');
    const categorySelect = document.getElementById('category-select');
    const selectedCategories = Array.from(categorySelect.selectedOptions).map(option => ({
        id: parseInt(option.value), // Assuming option.value contains the category ID
        categoryName: option.text,
      }));
  
  
   

    
    const user = {
      id: userId,
     
    };
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', selectedImage);
    formData.append('user',user.id);
    formData.append('categories',JSON.stringify(selectedCategories))
    
  
    fetch("http://127.0.0.1:8000/Home/", {
      method: "POST",
      body: formData,
      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Error adding meme:', error);
    });
  }


 function myfetch(){
    fetch("http://127.0.0.1:8000/Home/")
    .then ((res)=> res.json())
    .then ((data)=>yo(data))
  }

  myfetch()