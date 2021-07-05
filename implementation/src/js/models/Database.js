import { elements } from '../views/base';


class Database {
    async loginHandler(userEmail,userPass) {
        try {
            const user = await firebaseApp.auth().signInWithEmailAndPassword(userEmail, userPass);
            return 1;
        }catch(error) {
            return 0;
        }
    }

    async signupHandler(email,password) {
        try {
            await firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            return 1;        
        } catch(error) {
            return 0;
        }
    }

    addUserToDatabase(Name,location,PhoneNumber,idCardNo) {
        var newUser = {
            id: firebaseApp.auth().currentUser.uid,
            Name: Name,
            email: firebaseApp.auth().currentUser.email,
            address: location,
            CNIC: idCardNo,
            PhoneNumber: PhoneNumber 
        };
        dataBase.collection("Customer").doc(firebaseApp.auth().currentUser.uid).set(newUser);
    }

    logout() {
        firebaseApp.auth().signOut();
    }
}

var obj = new Database();

export default obj;