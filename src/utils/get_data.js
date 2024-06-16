import { api_options } from "./constants";
import users_tpl from "./../templates/show_users.hbs"

const {json_server: {BASE_URL}} = api_options;

export default async function get_data(path) {
   const data = await fetch(`${BASE_URL}${path}`).then(resp => resp.json()).then(r => {
    const users_html = users_tpl(r);
    document.querySelector("body").insertAdjacentHTML("beforeend", users_html);
   });
   return data;
}

console.log(get_data("users")); 

