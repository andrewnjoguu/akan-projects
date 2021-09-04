const giveAkan= function (e) {
    e.preventDefault();
    const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua" , "Yaa", "Afua", "Ama"]
    const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const frm = document.querySelector("#frmAkans")
    const fd = new FormData(frm)
    const gender = fd.get("gender");
    const dob = fd.get("dob")


    const d = new Date(dob).getDay();
    console.log(fNames[d])
}


document.querySelector("#frmAkans").addEventListener('sumbit'giveAkan);
