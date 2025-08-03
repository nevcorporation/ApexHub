const userS = document.getElementById('user');
const passS = document.getElementById('pass');
const pfpS = document.getElementById('pfps');

async function reqActt() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: userS.value, pass: passS.value, pfp: pfpS.value})
        })
        const api = await response.json()
        localStorage.removeItem('currentCode')

    } catch(error) {
        console.error(error)
    }
}


document.getElementById('reqA').addEventListener('click', () => {
    reqActt()
})

setInterval(() => {
    if(!localStorage.getItem('currentCode')) {
        window.location.href = "code.html";
    }
}, 100);