import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
}
    from "firebase/auth";
import initializeAuthebtication from "../firebase/firebase.init";
initializeAuthebtication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    /* create user manually */
    const createUseruSignEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                Swal.fire({
                    icon: 'success',
                    title: 'Wow, Sign Up Successful!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'ok',
                    timer: 1500
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                if ('auth/email-already-in-use' === errorCode) {
                    Swal.fire({
                        title: 'This eamil already used!',
                        text: "Please use another email address!",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ok'
                    });
                }
            });
    }

    /* sign with eamil and password */
    const signInUsingEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                if ('auth/user-not-found' === errorCode) {
                    Swal.fire({
                        title: 'User not exist!',
                        text: "Please create an account first",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'ok'
                    });
                }
            });
    }

    /* google signin */
    const signWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    /* observe whether user auth state changed or not    */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, []);

    /* logout system */
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return {
        createUseruSignEmailAndPassword,
        signInUsingEmailAndPassword,
        user,
        signWithGoogle,
        logOut
    }
}

export default useFirebase;