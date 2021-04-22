const  createNewPost = async (event) => {
    const title = document.querySelector('#post-title').value.trim()
    const content= document.querySelector('#content').value.trim()
    event.preventDefault()
    if (title && content){
        const response = await fetch('/api/post/newpost', {
            method:'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Title and Content should not be empty');
        }
    }
}

document.getElementById('createNewPost').addEventListener('click', createNewPost);