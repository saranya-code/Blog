
const signUp = async (event) => {
    const username = document.querySelector('#userName').value.trim()
    const password= document.querySelector('#password').value.trim()
    event.preventDefault()
    if (username && password){
        console.log('cominggggg')
        const response = await fetch('/api/user', {
            method:'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up.');
        }
    }
}

document.getElementById('signUp').addEventListener('click',signUp);
