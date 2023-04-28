const firstName = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submit = document.querySelector('.submit')
const hide = document.querySelectorAll('.hide')
const inputs = document.querySelectorAll('input')


// Evento de click no botão submit que que aciona a validação de todos os inputs
submit.addEventListener('click', (button) => {
    button.preventDefault()

    nameValidation()
    lastNameValidation()
    emailValidation()
    passwordValidation()
    confirmPasswordValidation()
})



// Função que valida o nome
function nameValidation() {
    const nameValue = firstName.value

    if (!nameValue || nameValue[0].includes(' ')) {
        setError(firstName, 'Insira seu Nome')

        return
    }

    setSuccess(firstName)
}

// Função que valida o sobrenome
function lastNameValidation() {
    const lastNameValue = lastName.value

    if (!lastNameValue || lastNameValue[0].includes(' ')) {
        setError(lastName, 'Insira seu Sobrenome')

        return
    }

    setSuccess(lastName)
}

// Função que valida o e-mail
function emailValidation() {
    const emailValue = email.value
    const validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const validatedEmail = validation.test(emailValue)
                                                                         
    if (!validatedEmail) {
        setError(email, 'E-mail inválido')

        return
    }

    setSuccess(email)
}


// Função que valida a senha
function passwordValidation() {
    const passwordValue = password.value

    if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter no mínimo 8 caracteres')
        return

    }

    setSuccess(password)
    password.style.border = '2px solid green'
}

// Fução que valida a confirmação de password
function confirmPasswordValidation() {
    const passwordValue = password.value
    const confirmPasswordValue = confirmPassword.value
    if (confirmPasswordValue.length < 8) {
        setError(confirmPassword, 'A senha deve ter no mínimo 8 caracteres')

        return
    }

    if (confirmPasswordValue !== passwordValue) {
        setError(confirmPassword, 'As senhas não são iguais')

        return
    }



    setSuccess(confirmPassword)
}

// Remove a mensagem de error
function setSuccess(element) {
    element.style.border = '2px solid green'
    const parent = element.closest('.input')
    const small = parent.querySelector('small')

    small.textContent = ''
}

// Define uma error
function setError(element, text) {
    element.style.border = '2px solid red'
    const parent = element.closest('.input')
    const small = parent.querySelector('small')

    small.innerText = text
}



// Função que esconde e mostra a senha no input
hide[0].addEventListener('click', () => {
    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text')

        hide[0].classList.remove('fa-eye')
        hide[0].classList.add('fa-eye-slash')

        return
    }

    password.setAttribute('type', 'password')

    hide[0].classList.remove('fa-eye-slash')
    hide[0].classList.add('fa-eye')
})
hide[1].addEventListener('click', () => {
    if (confirmPassword.getAttribute('type') === 'password') {
        confirmPassword.setAttribute('type', 'text')

        hide[1].classList.remove('fa-eye')
        hide[1].classList.add('fa-eye-slash')

        return
    }

    confirmPassword.setAttribute('type', 'password')

    hide[1].classList.remove('fa-eye-slash')
    hide[1].classList.add('fa-eye')
})