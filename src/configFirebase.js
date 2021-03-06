// export const storage = firebase.storage();
// export const store = firebase.store();
// export const auth = firebase.auth();
// export const store = firebase.store();

//---------------------------------------Authentication----------------------------
// SignUp User:
export const signupUser = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password)
);

// Login User:
export const loginUser = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

// Crea una instancia del objeto del proveedor de Google.
export const googleLogin = () => (
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
);

// Crea una instancia del objeto del proveedor de Facebook.
export const facebookLogin = () => (
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
);

// Cerrar Sesion.
export const closeSesion = () => firebase.auth().signOut();

//-----------------------------Firestore Database ---------------------------

/*const firestore = firebase.firestore();
const docRef = firestore.doc("user/info");
const profileName = divElemt.querySelector("#profileName");
const nameSignUp = divElemt.querySelector('#name-signUp');
const signUpBtn = divElemt.querySelector('signUp-btn');

signUpBtn.addEventListener('click', () => {
const nameSave = nameSignUp.value;
console.log(nameSave);
})*/