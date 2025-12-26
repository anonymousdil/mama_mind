import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { doc, setDoc } from
  "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Login user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const userId = userCredential.user.uid;

    // ✅ CORRECT Firestore write
    await setDoc(doc(db, "users", userId), {
      email: email,
      role: role
    });

    // Redirect
    window.location.href = `./${role}.html`;

  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
