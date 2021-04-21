
const login = async (event) => {
    const username = document.querySelector('#userName').value.trim()
    const password= document.querySelector('#password').value.trim()
    event.preventDefault()
    if (username && password){
        const response = await fetch('/api/user/login', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Invalid user name.. Please Sign up');
        }
    }
}

document.querySelector('#login').addEventListener('click',login);