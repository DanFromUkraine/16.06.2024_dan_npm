import { api_options } from "./constants";
const { json_server: {
    BASE_URL,
    path
}} = api_options;

const form = document.querySelector("form");

function on_form_submit(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    formData.forEach((value, name) => {
        console.log("name", name);
        console.log("value", value)
    })
    const formObj = {}
    formData.forEach((value, key) => {
        formObj[key] = value;
    });

    set_user_data(formObj);
}
form.addEventListener("submit", on_form_submit);

async function set_user_data(data) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(`${BASE_URL}${path.users}`, options);
}
// // Select the form element
// const form = document.querySelector("form");

// // Function to handle form submission
// function on_form_submit(e) {
//     // Prevent the default form submission behavior
//     e.preventDefault();

//     // Create a new FormData object from the form element
//     const formData = new FormData(document.querySelector("form"));

//     // Iterate over each entry in the FormData object
//     formData.forEach((value, name) => {
//         // Log the name and value of each form field
//         console.log("name", name);
//         console.log("value", value);
//     });
// }

// // Attach the form submission handler to the form's submit event
// form.addEventListener("submit", on_form_submit);