import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("loginBtn").onclick = async () => {
  const email = email.value;
  const password = password.value;
  const role = role.value;

  const user = await signInWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.user.uid), {
    email,
    role
  });

  window.location.href = role + ".html";
};
