var current = 1
const yo = (data) => {

  
console.log(data)
    const parent = document.getElementById('parentCard')
    parent.innerHTML=''
    data.results.forEach(data =>{
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
                          <p>By <span class="text-dark h5">${data.user? data.user.username : 'Anonymous'}</span> </p>
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
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = ''

    if (data.next && data.previous ==null){
      paginationContainer.innerHTML ='<button onclick="paginator(1)" class="btn-success">Next</button>'
    }
    else if (data.next == null && data.previous){
      paginationContainer.innerHTML ='<button onclick="paginator(2)" class="btn-success">Previous</button>'
    }
    else {
      paginationContainer.innerHTML =` 
      <button onclick="paginator(2)" class="btn-success">Previous</button>
      <button onclick="paginator(1)" class="btn-success">Next</button>
      `
    }
  
    
}

function paginator(a){

if (a==1 && current){
  current++;
  
  
  myfetch(current)
  window.location = '#'
}
else {

    current--;
    
    
    myfetch(current)
    window.location = '#'
  
}


}


function myfetch(pg){
  fetch(`http://127.0.0.1:8000/all/?page=${pg}`)
  .then ((res)=> res.json())
  .then ((data)=>yo(data))
}

myfetch(current)



fetch('http://127.0.0.1:8000/category/')
.then(response => response.json())
.then(data => {
  const categorySelect = document.getElementById('category-select');

  
  categorySelect.innerHTML = '';

  
  

 
  data.forEach(category => {
    const option = document.createElement('option');
    option.text = category.categoryName;
    option.value = category.id;
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

    
     console.log(categorySelect)
    const selectedCategories = Array.from(categorySelect.selectedOptions).map(option => (
     
      parseInt(option.value)
    ));
   
   
  
   console.log(selectedCategories)
   

    
    const user = {
      id: userId,
     
    };
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', selectedImage);
    formData.append('user',user.id);

    for (i=0;i<selectedCategories.length;i++){
      formData.append('category',selectedCategories[i])
    }
    
    
  
    fetch("http://127.0.0.1:8000/Home/", {
      method: "POST",
      body: formData,
      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.location = 'index.html'
    })
    .catch(error => {
      console.log('Error adding meme:', error);
    });
  }


 


  const handleLogout = () =>{
    const token = localStorage.getItem("token")
      fetch("http://127.0.0.1:8000/logout/",{
  
      method:"POST",
      headers: {
          Authorization : `Token ${token}`,
          "Content-Type" : "application/json",
      },
      }
     )
     .then ((res) => res.json)
     .then ((data) => {
      console.log(data)
      localStorage.removeItem("token");
      localStorage.removeItem("user_id")
     })
  }