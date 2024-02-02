const loadMemes = () =>{

    fetch ('http://127.0.0.1:8000')
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

function cate (data){
    data.category.forEach((cat)=>{
        catparent = document.getElementById('allcats')
        const btn = document.createElement('button')
        btn.classList = 'btn btn-light'
        btn.innerText = `${cat.categoryName}`
        catparent.appendChild(btn)
    })
}