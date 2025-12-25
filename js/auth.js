import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const roleInput = document.getElementById("role").value;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailInput,
      passwordInput
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: emailInput,
      role: roleInput
    });

    // Redirect based on role
    window.location.href = `${roleInput}.html`;

  } catch (error) {
    alert("Login failed: " + error.message);
    console.error(error);
  }
});
