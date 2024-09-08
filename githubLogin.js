import {initializeApp} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {getAuth ,GithubAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {firebaseConfig} from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GithubAuthProvider();

$('#btnGitHubSignUp').on('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            let user = result.user;
            console.log(user)
            window.location.href = "../dashboard.html";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})


$('#btnGitHubLogin').on('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            let user = result.user;
            console.log(user)
            window.location.href = "../dashboard.html";
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})
