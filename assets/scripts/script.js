const firstName = document.querySelector('#name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const submit = document.querySelector('.submit')
const hide = document.querySelectorAll('.hide')
const inputs = document.querySelectorAll('input')
const p = document.querySelector('p')




// Evento de click no botão submit que que aciona a validação de todos os inputs
submit.addEventListener('click', (button) => {
    button.preventDefault()

    nameValidation()
    lastNameValidation()
    emailValidation()
    passwordValidation()
    confirmPasswordValidation()

    if (nameValidation() && lastNameValidation() && emailValidation() && passwordValidation() && confirmPasswordValidation()) {
        p.style.display = 'block'
    }
})


// Função debounce
function debounce(func, wait) {
	let timer = null;
	return function() {
		clearTimeout(timer);
		timer = setTimeout(func, wait);
	}
}



// Função que valida o nome
firstName.addEventListener('input', debounce(nameValidation = () => {
    const nameValue = firstName.value

    if (!nameValue || nameValue[0].includes(' ')) {
        setError(firstName, 'Insira seu Nome')

        return
    }

    if (nameValue.length < 2) {
        setError(firstName, 'Insira um nome válido')

        return
    }

    setSuccess(firstName)

    return true
}, 300))



// Função que valida o sobrenome
lastName.addEventListener('input', debounce(lastNameValidation = () => {
    const lastNameValue = lastName.value

    if (!lastNameValue || lastNameValue[0].includes(' ')) {
        setError(lastName, 'Insira seu Sobrenome')

        return
    }

    if (lastNameValue.length < 2) {
        setError(lastName, 'Insira um nome válido')

        return
    }

    setSuccess(lastName)

    return true
}, 300))



// Função que válida o e-mail
email.addEventListener('input', debounce(emailValidation = () => {
    const emailValue = email.value
    const validation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const validatedEmail = validation.test(emailValue)

    if (!validatedEmail) {
        setError(email, 'E-mail inválido')

        return
    }

    setSuccess(email)

    return true
}, 300))



// Função que válida a senha
password.addEventListener('input', debounce(passwordValidation = () => {
    const passwordValue = password.value

    if (passwordValue.length < 8) {
        setError(password, 'A senha deve ter no mínimo 8 caracteres')
        return

    }

    setSuccess(password)

    return true
}, 300))



// Função que válida a confirmação de senha
confirmPassword.addEventListener('input', debounce(confirmPasswordValidation = () => {
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

    return true
}, 300))



// Remove a mensagem de error se a validação der sucesso
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
    p.style.display = 'none'
}



// Funções que esconde e mostra a senha no input
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