// store input in the localstorage functionality

function store(){
    var name= document.getElementById('username')
    var email=document.getElementById('email')
    var password=document.getElementById('pw')
    console.log(name.value)
    var numbers=/[0-9]/g
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g

    if (name.value.length === 0 || email.value.length === 0 || password.value.length === 0) {
        alert('Please fill in the sign-up form')}
    else if(password.value.length>8){
        alert('Max of 8 characteres')
    }
    else if(!password.value.match(numbers)){
        alert('Please add 1 number')
    }
    else if(!password.value.match(specialCharacters)){
        alert(('Password must contain at least one special character'))
    }
    else if(!email.value.incudes('@')){
        alert('Please put a correct Email"')
    }
   

    else{
        localStorage.setItem('name',name.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
    }
}


//get data from the localstorage functionality
function getData(){
    var storedName=localStorage.getItem('name')
    var storedEmail=localStorage.getItem('email')
    var storedPw=localStorage.getItem('password')
    var UserEmail=document.getElementById(User-email)
    var UserPw=document.getElementById(User-Pw)

    if(UserEmail.value===storedEmail && UserPw.value===storedPw){
        alert('You are logged in.')
    }
    else{
        alert('Error on LogIn')
    }

}

