const UserInfo = document.getElementById('UserInfo');
const UserPassword = document.getElementById('UserPassword');
const loginButton =document.getElementById('loginButton');


loginButton.addEventListener('click', () => {
    if(UserInfo.value !== "" && UserPassword !== "") {
        location.href = "../mainPage/main.html";
        localStorage.setItem("name" , UserInfo.value)
    }
    else {
       alert("please enter username and passward then try again");
    }
});