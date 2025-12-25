import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email,
      role: role
    });

    window.location.href = `./${role}.html`;

  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
