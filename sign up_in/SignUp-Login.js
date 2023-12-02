// store input in the localstorage functionality

function store() {
    var name = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('pw')
    var emailError = document.getElementById('email-error')
    var nameError = document.getElementById('name-error')
    var pwError = document.getElementById('pw-error')

    emailError.innerHTML = ''
    nameError.innerHTML = ''
    pwError.innerHTML = ''

    var numbers = /[0-9]/g
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g

    if (name.value.length === 0 || email.value.length === 0 || password.value.length === 0) {
        
        emailError.innerHTML = 'Please fill in the sign-up form'
    }
    else if (!email.value.includes('@')) {
       
        emailError.innerHTML = 'Please put a correct Email'
    }
    else if (localStorage.getItem('name') === name.value) {
        
        nameError.innerHTML = 'Username is already taken'
        return
    }
    else if (password.value.length < 8) {
        
        pwError.innerHTML = 'Max of 8 characteres'
    }
    else if (!password.value.match(numbers)) {
         
        pwError.innerHTML = 'Please add 1 number'
    }
    else if (!password.value.match(specialCharacters)) {
   
        pwError.innerHTML = 'Password must contain at least one special character'
    }

    else if (localStorage.getItem('name') === name.value) {
        
        nameError.innerHTML = 'Username is already taken'
        return
    }

    else {
        localStorage.setItem('name', name.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
        window.location.replace('SignIN.html')
    }
}

//get data from the localstorage functionality
function getData() {
    
    var storedEmail = localStorage.getItem('email')
    var storedPw = localStorage.getItem('password')
    var UserEmail = document.getElementById('User-email')
    var UserPw = document.getElementById('User-Pw')

    if (UserEmail.value === storedEmail && UserPw.value === storedPw && !(UserEmail.value === 'benabdallah2ameni@gmail.com') && !(UserPw.value === 'ameni1@')) {
        location.replace('/user interface/userInterface.html')
       
    }
    else if((UserEmail.value === 'benabdallah2ameni@gmail.com') && (UserPw.value === 'ameni1@')){
        location.replace('/admin interface/Admin-interface.html')   
        display()
    }

}
$('#sign-in-button').click(function(){
    getData()
})

