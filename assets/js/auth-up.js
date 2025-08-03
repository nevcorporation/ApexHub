

const codeV = document.getElementById("codeV")

async function deleteCode() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/rcodes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({code : codeV.value})
        })
        const api = await response.json()
        

    } catch(error) {
        console.error(error)
    }
}

async function checkCode() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/codes')
        const api = await response.json()
        for(const u of api) {
            if(codeV.value === u.code) {
                deleteCode()
                localStorage.setItem('currentCode', codeV.value)
                window.location.href = "form.html"
            }
        }

    } catch(error) {
        console.error(error)
    }
}




