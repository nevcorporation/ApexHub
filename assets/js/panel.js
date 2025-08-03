const userM = document.getElementById('userM')


async function loadList() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await response.json();

        for(let obj of api) {
            var userH = document.createElement("div");
            var userD = document.createElement("label");
            userH.className = "uHold";
            userD.textContent = obj.user
            userM.appendChild(userH);
            userH.appendChild(userD)

            userH.addEventListener('click', () => {
                localStorage.setItem('selectedUser', obj.user)
            })
        }
    }

    catch(err) {
        console.error(err)
    }
}

loadList()

const userV = document.getElementById('userV');
const passV = document.getElementById('passV');
const lvlV = document.getElementById("lvlV");
const pfpV = document.getElementById('pfpV');

async function loadMan() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await response.json();
        for(let u of api) {
            const selectedUser = localStorage.getItem('selectedUser');
            if(u.user === selectedUser) {
                userV.textContent = u.user
                passV.value = u.pass
                lvlV.value = u.lvl
                pfpV.value = u.pfp
            }
        }

    }

    catch(err) {
        console.error(err)
    }
}

loadMan()

async function saveForum() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ user: localStorage.getItem('selectedUser') ,pass: passV.value, lvl: lvlV.value, pfp: pfpV.value})
        });
        const api = await response.json();

    }

    catch(err) {
        console.error(err)
    }
}


const userS = document.getElementById("userS");
const passS = document.getElementById('passS');
const pfpS = document.getElementById('pfpS');

async function signup() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/signup', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ user: userS.value, pass: passS.value, pfp: pfpS.value, lvl: "1"})
        });
        const api = await response.json();

    }

    catch(err) {
        console.error(err)
        userS.style.border = "2px solid red"
    }
}

const codeV = document.getElementById('codeV');

async function authCode() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/codes', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ code: codeV.value})
        });
        const api = await response.json();

    }

    catch(err) {
        console.error(err)
    }
}
const fors = document.getElementById('fors');


async function loadReq() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/requests');
        const api = await response.json();
        for(let req of api) {
            var newDis = document.createElement('label')
            var newA = document.createElement('a')
            newDis.textContent = `Username: '${req.user}' Password: '${req.pass}' Profile Picture: `
            newA.innerHTML = 'this'
            newA.href = req.pfp
            fors.appendChild(newDis)

            newDis.appendChild(newA)
        }

    }

    catch(err) {
        console.error(err)
    }
}
loadReq()

const annI = document.getElementById("annI");
const verI = document.getElementById('verI');

async function loadInfo() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/info');
        const api = await response.json();
        for(let item of api) {
            annI.value = item.announcement
            verI.value = item.version
        }

    }

    catch(err) {
        console.error(err)
    }
}

async function updateInfo() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/info', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({ version: verI.value, announcement: annI.value })
        });
        const api = await response.json();

    }

    catch(err) {
        console.error(err)
    }
}



async function checkLvl() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await response.json();
        for(let u of api) {
            if(u.user === localStorage.getItem('currentUser')) {
                if(u.lvl !== "4") {
                    window.location.href = "index.html"
                }
            }
        }

    }

    catch(err) {
        console.error(err)
    }
}




loadInfo()
setInterval(() => {
    checkLvl()
}, 100);