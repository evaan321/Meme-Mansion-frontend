function profileUpdate(event){

event.preventDefault()

username = document.getElementById('username').value
first_name = document.getElementById('first-name').value
last_name = document.getElementById('last-name').value
email = document.getElementById('email').value

const info = {username , first_name , last_name , email};

const token = localStorage.getItem('token')

fetch('http://127.0.0.1:8000/api/user/update/', {
    method: 'PATCH', // or 'PUT' depending on your Django view configuration
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        // Other headers as needed
    },
    body: JSON.stringify(requestData),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('User profile updated successfully:', data);
})
.catch(error => {
    console.error('Error updating user profile:', error);
})}