
const signUp = async (event) => {
    const username = document.querySelector('#userName').value.trim()
    const password= document.querySelector('#password').value.trim()
    event.preventDefault()
    if (username && password){
        const response = await fetch('/api/user', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response)
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
}

document.querySelector('#signUp').addEventListener('click',signUp);