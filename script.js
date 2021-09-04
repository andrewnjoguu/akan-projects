const getakannames= function (e) {
    e.preventDefault();
    const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua" , "Yaa", "Afua", "Ama"]
    const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const frm = document.querySelector("#frmAkans")
    const fd = new FormData(frm)
    const gender = fd.get("gender");
    const date of birth = fd.get("Date of birth")

    console.log(fNames[0])
}


document.querySelector("#frmAkans").addEventListener('sumbit' getakannames);
