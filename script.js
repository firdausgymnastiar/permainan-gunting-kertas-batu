console.log('hallo gess')

let pilih = document.getElementById('pilih')
let userPilih = document.getElementById('user-pilih')
let userGunting = document.getElementById('user-gunting')
let userKertas = document.getElementById('user-kertas')
let userBatu = document.getElementById('user-batu')
let compPilih = document.getElementById('comp-pilih')
let compGunting = document.getElementById('comp-gunting')
let compKertas = document.getElementById('comp-kertas')
let compBatu = document.getElementById('comp-batu')
let tryAgainButton = document.getElementById('try-again')
let userKalah = document.getElementById('user-kalah')
let userMenang = document.getElementById('user-menang')
let userSeri = document.getElementById('user-seri')
let guntingButton = document.getElementById('gunting-button')
let kertasButton = document.getElementById('kertas-button')
let batuButton = document.getElementById('batu-button')

userPilih.style.display = "none"
// userGunting.style.display = "none"
// userKertas.style.display = "none"
// userBatu.style.display = "none"
compPilih.style.display = "none"
compGunting.style.display = "none"
compKertas.style.display = "none"
compBatu.style.display = "none"
tryAgainButton.style.display = "none"
userKalah.style.display = "none"
userMenang.style.display = "none"
userSeri.style.display = "none"

let comp = Math.random()
// if (comp < 0.34) {
//     comp = "gunting"
//     compPilih.style.display = "block"
//     compGunting.style.display = "block"
//     tryAgainButton.style.display = "block"
// } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "batu"
//     compPilih.style.display = "block"
//     compBatu.style.display = "block"
//     tryAgainButton.style.display = "block"

// } else if (comp >= 0.67) {
//     comp = "kertas"
//     compPilih.style.display = "block"
//     compKertas.style.display = "block"
//     tryAgainButton.style.display = "block"
// }
// console.log(comp)


function pilihGunting() {
    userPilih.style.display = "block"
    pilih.style.display = "none"
    userKertas.style.display = "none"
    userBatu.style.display = "none"
    guntingButton.style.display = "none"

    if (comp < 0.34) {
        comp = "gunting"
        compPilih.style.display = "block"
        compGunting.style.display = "block"
        tryAgainButton.style.display = "block"
        userSeri.style.display = "block"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "kertas"
        compPilih.style.display = "block"
        compKertas.style.display = "block"
        tryAgainButton.style.display = "block"
        userMenang.style.display = "block"
    } else if (comp >= 0.67) {
        comp = "batu"
        compPilih.style.display = "block"
        compBatu.style.display = "block"
        tryAgainButton.style.display = "block"
        userKalah.style.display = "block"
    }
    console.log(comp)
}
function pilihKertas() {
    userPilih.style.display = "block"
    pilih.style.display = "none"
    userGunting.style.display = "none"
    userBatu.style.display = "none"
    kertasButton.style.display = "none"

    if (comp < 0.34) {
        comp = "gunting"
        compPilih.style.display = "block"
        compGunting.style.display = "block"
        tryAgainButton.style.display = "block"
        userKalah.style.display = "block"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "kertas"
        compPilih.style.display = "block"
        compKertas.style.display = "block"
        tryAgainButton.style.display = "block"
        userSeri.style.display = "block"
    } else if (comp >= 0.67) {
        comp = "batu"
        compPilih.style.display = "block"
        compBatu.style.display = "block"
        tryAgainButton.style.display = "block"
        userMenang.style.display = "block"
    }
    console.log(comp)
}
function pilihBatu() {
    userPilih.style.display = "block"
    pilih.style.display = "none"
    userKertas.style.display = "none"
    userGunting.style.display = "none"
    batuButton.style.display = "none"

    if (comp < 0.34) {
        comp = "gunting"
        compPilih.style.display = "block"
        compGunting.style.display = "block"
        tryAgainButton.style.display = "block"
        userMenang.style.display = "block"
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "kertas"
        compPilih.style.display = "block"
        compKertas.style.display = "block"
        tryAgainButton.style.display = "block"
        userKalah.style.display = "block"
    } else if (comp >= 0.67) {
        comp = "batu"
        compPilih.style.display = "block"
        compBatu.style.display = "block"
        tryAgainButton.style.display = "block"
        userSeri.style.display = "block"
    }
    console.log(comp)
}

function reload() {
    location.reload()
}