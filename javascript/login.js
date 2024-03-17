// authentication of doctor login

function auth() {
    console.log("inside auth");
    let emailDoc = document.getElementById("emailForLoginDoctor").value;
    let passwordDoc = document.getElementById("passwordForLoginDoctor").value;

    if (emailDoc == "doctor@gmail.com" && passwordDoc == "12345678") {
        window.location.assign("../doctor/doctor.html");
        alert("Login succesfully");
    } else {
        alert("Invalid password or email");
        return;
    }
}

function logout() {
    if (confirm("Do you really want to logged out!?")) {
        window.location.assign("../index.html");
    } else {
        return false;
    }
}


// authentication of user login

function authUser() {
    let emailUser = document.getElementById("emailForLoginUser").value;
    let passwordUser = document.getElementById("passwordForLoginUser").value;

    if (emailUser == "user@gmail.com" && passwordUser == "123456") {
        // document.getElementsByClassName("user").item(0).classList.remove("userProfile");
        window.location.assign("../user/user.html"); 
        alert("Login succesfully");
    } else {
        alert("Invalid password or email");
        return;
    }
}
// function logoutUser() {
//     console.log("i am in user logout");
//     // let userProfile = document.getElementsByClassName("user");
//     if (confirm("Do you really want to logged out!?")) {
//         window.location.assign("../index.html");
//     } else {
//         return false;
//     }
// }
