import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Cookies from "js-cookie";
import { app } from "./firebase";
  
const registration  = async (userData) => {
    
    if (!userData.username ) {
        console.log('Username field is missing');
        return;
    }
    if (userData.password !== userData.passwordConfirm) {
        console.log('Your passwords do not match');
    } else {
        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;
            console.log(user);
            try {
                await updateProfile(user, {
                  displayName: userData.username,
                });
              } catch (error) {
                console.error(error);
                alert(error.message);
              }
            const updatedUser = {
                userName: user.displayName,
                email: user.email,
            }
            Cookies.set('user', JSON.stringify(updatedUser));
        } catch (error) {
            alert(error);
        }
    }
}

export { registration };