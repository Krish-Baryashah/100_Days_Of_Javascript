const inputField = document.querySelector("#password")
const outputField = document.querySelector("#output")

inputField.addEventListener('input',function(){
    console.log(inputField.value);
    let password = inputField.value
    if (password.length < 8){
        outputField.innerText = 'Password is too short'
        outputField.style.color = 'red'
    }else if (password.search(/[a-z]/)== -1)  {
            outputField.innerText = 'Password is missing a Lowercase letter'
            outputField.style.color = 'red'
        }else if (password.search(/[A-Z]/) == -1){
            outputField.innerText = 'Password is missing a Uppercase letter'
            outputField.style.color = 'red'
        }else if (password.search(/[0-9]/) == -1){
            outputField.innerText = 'Password is missing a Numeric letter'
            outputField.style.color = 'red'
        }else if (password.search(/[!\@\#\$\%\^\&\*\(\)\+\-\<\>\,\.\?\/\|\\]/) == -1){
            outputField.innerText = 'Password is missing a Special letter'
            outputField.style.color = 'red'
        }else {
                outputField.innerText = 'Password is Strong'
                outputField.style.color = 'green'
            }    
        }
    
);

