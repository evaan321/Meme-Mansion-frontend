function profileUpdate(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('username').value);
    formData.append('first_name', document.getElementById('first-name').value);
    formData.append('last_name', document.getElementById('last-name').value);
    formData.append('email', document.getElementById('email').value);

    const token = localStorage.getItem('token');

    fetch('https://meme-mansion-backend.onrender.com/profile/update/', {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}` // Use 'Token' instead of 'token'
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('User profile updated successfully:', data);
        // Optionally, perform any additional actions after successful update
    })
    .catch(error => {
        console.error('Error updating user profile:', error);
        // Optionally, handle errors and provide feedback to the user
    });
}