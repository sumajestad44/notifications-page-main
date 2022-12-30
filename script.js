// DOM //
const markAsRead = document.getElementById("mark-as-read");
const count = document.getElementById("count");
const userActive = document.getElementsByClassName("user active");

const user = document.getElementsByClassName("user");
let activeUsers = userActive.length;
const button = document.querySelectorAll(".red-dot");



// Notifications //
function displayNotifications(){
    let activeUsers = userActive.length;
    if(activeUsers > 0){
        markAsRead.innerText = "Mark all as read";
    } else {
        markAsRead.innerText = "Mark all as unread";
    }
    count.innerText = activeUsers;
}



// Clean all //
function markAllAsRead(){
    const userActive = document.querySelectorAll(".active");
    const user = document.querySelectorAll(".user");
    let activeUsers = userActive.length;

    if(activeUsers > 0){
        userActive.forEach((item)=> {
            item.classList.remove("active");
        });
        displayNotifications();
    }
    else{
        user.forEach((item)=> {
            item.classList.add("active");
        });
    }
    displayNotifications();

}



    displayNotifications();
    if(activeUsers> 0){
        markAsRead.addEventListener("click", () => {
            markAllAsRead();
            displayNotifications();
        });


        Array.from(user).forEach((element)=> {
            button.forEach((event)=> {
                element.addEventListener("click", () => {
                    element.classList.remove("active");
                    displayNotifications();
                })
            })
        })
    }
