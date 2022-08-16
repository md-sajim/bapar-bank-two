document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = document.getElementById("user-email");
    const email = userEmail.value
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value
    if (email == "mdabutaliveb@gmail.com" && password == 123456) {
        window.location.href = 'bank-inside.html'
    }
    else {
        console.log('This is invalid value')
    }
})