import {store} from "../store";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../services/firebase";
let name;
const role = localStorage.getItem('role_id');

switch (role) {
    case '1':
        name = "courier";
        break;

    case '2':
        name = "admin";
        break;

    case '3':
        name = "chief";
        break;

    default:
        name = "";
        break;
}
console.log('!!!!!!!!', store)

getDownloadURL(ref(storage, `images/${name}-avatar.jpg`))
    .then((url) => {
        const img = document.querySelector('img')
        img.setAttribute('src', url)
    })
    .catch((error) => {
        console.log(error)
    });

