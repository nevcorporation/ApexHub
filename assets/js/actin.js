var user = document.getElementById('user');
var pass = document.getElementById('pass');




async function checkAccount() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await response.json()

        for(let u of api) {
            if(user.value === u.user && pass.value === u.pass) {
                localStorage.setItem('currentUser', user.value);
                localStorage.setItem('currentPass', pass.value)
                localStorage.setItem('currentPfp', u.pfp);
                window.location.href = "index.html";
            }
        }
    } catch(error) {
        console.error(error)
    }
}