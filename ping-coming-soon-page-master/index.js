
function check(){
    let message = document.getElementById('ErrorMessage')
    let inputValue = document.querySelector('input')

    if(inputValue.value.trim() === ''){

        message.style.display = 'block'
        message.style.color = 'hsl(354, 100%, 66%)'
        message.style.fontSize = '12px'
        message.style.textAlign = 'left'
        message.style.padding = '10px'

        inputValue.style.borderColor = 'hsl(354, 100%, 66%)'

        message.innerHTML = 'Whoops! It looks like you forgot to add your email'
    }else if(inputValue.value.trim() != ''){
        let count = 0
        for(let element of (inputValue.value)){
            if(element === '@'){
              count++ 
            }
        }
        if(count !== 1){
            
            message.style.display = 'block'
            message.style.color = 'hsl(354, 100%, 66%)'
            message.style.fontSize = '12px'
            message.style.textAlign = 'left'
            message.style.padding = '10px'

            inputValue.style.borderColor = 'hsl(354, 100%, 66%)'

            message.innerHTML = "Please provide a valid email address"
        }
    }
}
