const giveAkan= function (e) {
    e.preventDefault();
    const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua" , "Yaa", "Afua", "Ama"]
    const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const frm = document.querySelector("#frmAkans")
    const fd = new FormData(frm)
    const gender = fd.get("gender");
    const dob = fd.get("dob")
    
    const d = new Date(dob).getDay();
    //alert("Your Akan name is" + fNames[d])

    const successAlert = document.querySelector("success-alert")

    successAlert.classList.remove("d-none");
    successAlert.classList.add("d-block")
    

    if(gender = "female") {
        alert("Your Akan name is" +fNames[d])
    }else{
        alert("Your Akan name is" +mNames[d])
    }
    //alert("Your Akan name is" + fNames[d])
  
    
}
    

document.querySelector("#frmAkans").addEventListener('sumbit',giveAkan);
