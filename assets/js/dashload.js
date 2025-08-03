const popupS = document.getElementById('popupS');
const popupM = document.getElementById('popupM');
const popupMM = document.getElementById('popupMM');

const popups = document.getElementById('popup')
const block = document.getElementById('block');


function popup(img, topic, message, vis) {
    popups.style.display = vis;
    block.style.display = vis;
    popupS.src = img;
    popupM.textContent = topic
    popupMM.textContent = message
}







async function loadConnect() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const data = await response.json();

    } catch(error) {
        popup('/assets/images/error.png', 'An error has occurred', error, 'flex')
    }

}

loadConnect()


async function checkRank() {
    try {
        const resp = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await resp.json()

        for(let u of api) {
           if(u.user === localStorage.getItem('currentUser')) {
                if(u.lvl !== "4") {
                    document.getElementById("pB").style.display = "none"
                }
           }
        }
    }
    catch(e) {
        console.error(e)
    }
}


const setOpen = document.getElementById("setOpen");
const setM = document.getElementById('setM');
const mmClose = document.getElementById('mClose');

setOpen.addEventListener('click', () => {
    block.style.display = 'flex';
    setM.style.display = 'flex';
})

mmClose.addEventListener('click', () => {
    block.style.display = 'none';
    setM.style.display = 'none';
})



const userdis = document.getElementById('userdis');
const pfpdis = document.getElementById('pfp')
const weludis = document.getElementById('welUdis')





function signout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('selectedUser');
    localStorage.removeItem('currentPfp')
}


const annV = document.getElementById('annV');
const vsd = document.getElementById('vsd');

async function loadMotive() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/info');
        const api = await response.json()

        for(let motive of api) {
            vsd.textContent = `v${motive.version}`
            annV.textContent = motive.announcement
        }
    } catch(err) {
        console.error(err)
    }
}

loadMotive()

async function checkActPass() {
    try {
        const response = await fetch('https://apexhub-server.onrender.com/accounts');
        const api = await response.json()

        for(let u of api) {
            if(u.user === localStorage.getItem('currentUser')) {
                if(localStorage.getItem('currentPass') !== u.pass) {
                    localStorage.removeItem('currentUser');
                    localStorage.removeItem('currentPass');
                    localStorage.removeItem('currentPfp');
                    localStorage.removeItem('selectedUser');
                    window.location.href = 'signin.html'
                }
            }
        }
    } catch(err) {
        console.error(err)
    }
}

setInterval(() => {
    if(userdis.textContent === "") {
        popup('/assets/images/acterror.png', 'An account error occurred', 'Cannot find account..', 'flex')
        setTimeout(() => {
            window.location.href = "signin.html"
        }, 2000);
}
    checkRank()
    checkActPass()
    userdis.textContent = localStorage.getItem('currentUser');
    pfpdis.src = localStorage.getItem('currentPfp');
    weludis.textContent = `Welcome, ${localStorage.getItem('currentUser')}`
}, 100);