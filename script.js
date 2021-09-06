const giveAkan = function (e) {
  e.preventDefault();
  const fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const mNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  const dateOfBirth = document.getElementById("dob").value;
  if (!dateOfBirth) {
    return alert("Enter Birthday");
  }

  const d = new Date(dateOfBirth).getDay();
  const fGender = document.getElementById("female").checked;
  const mGender = document.getElementById("male").checked;

  if (fGender ==="female") {
    alert("Your Akan name is" + fNames[d]);
  } else if (mGender) {
    alert("Your Akan name is" + mNames[d]);
  } else {
    return alert("Please select gender.");
  }
};

document.querySelector("#frmAkans").addEventListener("sumbit", giveAkan);
