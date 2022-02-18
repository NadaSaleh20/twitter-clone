//get the name of user form login page
window.onload = function() {
    document.getElementById('profilecardname').innerText =localStorage.getItem('name');
    document.getElementById('username').innerText =localStorage.getItem('name');
};
//display slider 
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
user.addEventListener('click', () => 
{
   sidebar.classList.add('sidebar-display');
   sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', () => {
   sidebar.classList.remove('sidebar-display');
   sidebarWrapper.classList.remove('sidebar-wrapper-display');
});



//posting tweet
const posttweetbut =document.getElementById('posttweetbut');
const posttweetta =document.getElementById('posttweetta');
const tweetscontainer =document.getElementById('tweetscontainer');
const tweets =document.getElementById('tweets');
const totalchars =document.getElementById('totalchars');
let count=0;



posttweetbut.addEventListener('click', () => {	
if(posttweetta.value !== "" && posttweetta.value.length <= 250){
//create tweetcard
const tweetcard=document.createElement("div");
tweets.appendChild(tweetcard);
tweetcard.setAttribute("class", "tweetcard");
//create header that contain name of user and img
const header =document.createElement("div");
header.setAttribute("class", "header");
tweetcard.appendChild(header);
//create img
const img =document.createElement("img");
img.setAttribute("class", "img-2");
img.src="../assests/user4.jpg";
header.appendChild(img);
//create Name
const nameofuser =document.createElement("h1");
header.appendChild(nameofuser);
nameofuser.setAttribute("class", "nameofuser");
nameofuser.textContent = localStorage.getItem('name');
//create content-of-tweet
const contentoftweet = document.createElement("p1");
tweetcard.appendChild(contentoftweet);
contentoftweet.setAttribute("class", "contentoftweet");
contentoftweet.textContent=posttweetta.value;
//create like and retweet Div
const likeAndRet = document.createElement("p2");
tweetcard.appendChild(likeAndRet);
likeAndRet.setAttribute("class", "likeAndRet");

//create like icon 
const like =document.createElement("i");
like.setAttribute("class", "far fa-heart");
like.setAttribute("id", "likeID");
likeAndRet.appendChild(like);
like.textContent="";


//create Retweet
const Retweet =document.createElement("i");
Retweet.setAttribute("class", "fas fa-retweet");
Retweet.setAttribute("id", "retweet");
likeAndRet.appendChild(Retweet);
Retweet.textContent="";
//Makeing the total chars equal 0 after retweet
posttweetta.value="";
totalchars.textContent=posttweetta.value.length;
	
}
else{
	alert("please write tweet")
}
 
});
 
//count the number of char in tweet
posttweetta.addEventListener('keyup', () => {
 totalchars.textContent=posttweetta.value.length;

});