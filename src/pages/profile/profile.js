import "../../utils/get_data"
import "../../style/css/users.css"
import get_data from "../../utils/get_data";



// setTimeout(function());

document.addEventListener("DOMContentLoaded", function() {
    const all_imgs = document.querySelectorAll(".img-js");
console.trace(all_imgs);
});



let users_all = document.querySelectorAll(".user")

// all_imgs.forEach(img => img.addEventListener("click", showModule))


function showModule(e) {
    let user = e.parentNode;


    console.log("imma live");
    console.log("user", user)

    // user_number = 0;
    // users_all.forEach((user_iter, index) => {
    //     if (user = user_iter) {
    //         user_number = index;
    //     }
    // });
    // get_data("users").then(r => {
    //     console.log(r)
    // })
}