console.log('Welcome to regex')
const firstName = document.querySelector('.first-name-input')
const firstNameDiv = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name-input')
const lastNameDiv = document.querySelector('.last-name')
const email = document.querySelector('.email-input')
const emailDiv = document.querySelector('.email')
const password = document.querySelector('.password-input')
const passwordDiv = document.querySelector('.password')
const telephone = document.querySelector('.telephone-input')
const telephoneDiv = document.querySelector('.telephone')
const bio = document.querySelector('.bio-input')
const bioDiv = document.querySelector('.bio')
const submitButton = document.querySelector('.submit-button')
const error = document.createElement('p')
let firstNameFlag = 0
let lastNameFlag = 0
let emailFlag = 0
let passwordFlag = 0
let telephoneFlag = 0
let bioFlag = 0

const matchedStyle = (field) => {
    
    error.style.display = 'none'
    field.style.borderColor = 'green'
    field.style.borderStyle = 'solid'
    field.style.outline = 'none'

}

const unmatchedStyle = (field) => {
    error.textContent = ''
    field.style.borderColor = 'red'
    field.style.borderStyle = 'solid'
    field.style.outline = 'none'
}

firstName.addEventListener('keyup', event => {  
let pattern = /^[a-z0-9]{3,16}$/ig
if(firstName.value.match(pattern)) {
    firstNameFlag = 1
    matchedStyle(firstName)
    submitForm()
}
else {
    unmatchedStyle(firstName)
    error.textContent = 'First name must be alpha numeric and contain 3-16 characters.'
    firstNameDiv.appendChild(error)
    
}
})

lastName.addEventListener('keyup', event => {
    let pattern = /^[a-z0-9]{3,16}$/ig
    if(lastName.value.match(pattern)) {
        lastNameFlag = 1
        matchedStyle(lastName)
        submitForm()
    }
    else {
        unmatchedStyle(lastName)
        error.textContent = 'Last name must be alpha numeric and contain 3-16 characters.'
        lastNameDiv.appendChild(error)
        
    }
    
})

email.addEventListener('keyup', event => {
    let pattern = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,}$/ig
    if(email.value.match(pattern))  {
        emailFlag = 1
        matchedStyle(email)
        submitForm()
      
    }
    else {

        unmatchedStyle(email)
        error.textContent = 'Email must be a valid address, e.g.example@example.com'
        emailDiv.appendChild(error)
      
    }
})

password.addEventListener('keyup', event => {
    let pattern = /^[a-z0-9@-_]{6,20}$/ig
    if(password.value.match(pattern))  {
        passwordFlag = 1
        matchedStyle(password)
        submitForm()
      
    }
    else {

        unmatchedStyle(password)
        error.textContent = 'Password must be alphanumeric(@,- and _are also allowed) and between 6-20 characters'
        passwordDiv.appendChild(error)
      
    }
    
})

telephone.addEventListener('keyup', event => {
    let pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/
    if(telephone.value.match(pattern))  {
        telephoneFlag = 1
        matchedStyle(telephone)
        submitForm()
    }
    else {

        unmatchedStyle(telephone)
        error.textContent = 'A valid telephone number(10 digits 333-333-3334)'
        telephoneDiv.appendChild(error)
      
    }
    
})

bio.addEventListener('keyup', event => {
    let pattern = /^[a-z_-\s]{8,50}$/
    if(bio.value.match(pattern))  {
        bioFlag = 1
        matchedStyle(bio)
        submitForm()
      
    }
    else {

        unmatchedStyle(bio)
        error.textContent = 'Bio must contain only lowercase letters, underscore, hyphens'
        bioDiv.appendChild(error)
      
    }

    
})
const submitForm = () => {
    if(firstNameFlag ==1 && lastNameFlag == 1 && emailFlag ==1 && passwordFlag==1 && telephoneFlag==1 && bioFlag==1) {
        console.log('I am here')
         submitButton.disabled = false
         submitButton.style.backgroundColor = 'green'
     } 
}
