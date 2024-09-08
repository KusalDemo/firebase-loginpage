import {initializeApp} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {getAuth ,GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {firebaseConfig} from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

$('#btnGoogleSignUp').on('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            let user = result.user;
            window.location.href = "../dashboard.html";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})


$('#btnGoogleLogin').on('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            let user = result.user;
            alert(user+" , Credentails : "+credential)
            window.location.href = "../dashboard.html";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})


function updateUserProfile(user) {
    const userName = user.displayName;
    const userImage = user.photoURL;
   document.getElementById("userName").textContent = userName;
   document.getElementById("userImage").src = userImage;
}

