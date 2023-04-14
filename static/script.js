function showPhone() {
    var phone = " 435 6" + "41";

    document.getElementsByClassName("phoneLink")[0].style.visibility = "hidden";
    document.getElementsByClassName("phone")[0].innerHTML = "+48 663" + phone;
}

function showEmail() {
    var email = "tomasz." + "zi";
    email += "eba.7";

    document.getElementsByClassName("emailLink")[0].style.visibility = "hidden";
    document.getElementsByClassName("email")[0].innerHTML = email + "1@gmail.com";
}
