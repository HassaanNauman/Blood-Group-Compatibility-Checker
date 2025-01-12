function bloodGroupChecker() {
    const userGroup = document.getElementById("bloodGroup").value;
    let donateBloodEl = document.getElementById("bloodDonate");
    let receiveBloodEl = document.getElementById("bloodReceive");
    donateBloodEl.innerHTML = "";
    receiveBloodEl.innerHTML = "";
    let donateBloodGroups;
    let receiveBloodGroups;
    if (userGroup == "O+") {
        donateBloodGroups = ["O+", "AB+", "A+", "B+"];
        receiveBloodGroups = ["O-", "O+"];
    } else if (userGroup == "O-") {
        donateBloodGroups = ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"];
        receiveBloodGroups = ["O-"];
    } else if (userGroup == "A+") {
        donateBloodGroups = ["AB+", "A+"];
        receiveBloodGroups = ["O-", "O+", "A+", "A-"];
    } else if (userGroup == "A-") {
        donateBloodGroups = ["AB+", "AB-", "A+", "A-"];
        receiveBloodGroups = ["A-", "O-"];
    } else if (userGroup == "B+") {
        donateBloodGroups = ["B+", "AB+"];
        receiveBloodGroups = ["O-", "O+", "AB+", "AB-"];
    } else if (userGroup == "B-") {
        donateBloodGroups = ["AB+", "AB-", "B+", "B-"];
        receiveBloodGroups = ["O-", "B-"];
    } else if (userGroup == "AB+") {
        donateBloodGroups = ["AB+"];
        receiveBloodGroups = ["AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-"];
    } else if (userGroup == "AB-") {
        donateBloodGroups = ["AB+", "AB-"];
        receiveBloodGroups = ["O-", "A-", "B-", "AB-"];
    } else {
        alert("Please Select your blood group");
        return;
    }
    for (let i = 0; i < donateBloodGroups.length; i++) {
        // console.log("run");
        donateBloodEl.innerHTML += `<li class="flex-auto bg-blue-600  font-bold text-center rounded-sm px-1">${donateBloodGroups[i]}</li>`
    }
    for (let i = 0; i < receiveBloodGroups.length; i++) {
        // console.log("run");
        receiveBloodEl.innerHTML += `<li class="flex-auto bg-blue-600 font-bold text-center rounded-sm px-1">${receiveBloodGroups[i]}</li>`
    }
}