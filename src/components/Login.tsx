import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, User, signOut, signInWithEmailAndPassword } from 'firebase/auth';  
import { auth } from '../firebase';

function UserAuth() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState<User | null>(null);

    const handleAuthChange = (user: User | null) => {
        if (user) {
            console.log(`User ${user.uid} signed in`);
        } else {
            console.log('User signed out');
        }
    }
    
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser);
      });

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword( 
                auth, 
                registerEmail, 
                registerPassword 
            );
            console.log(user);
        } catch (error) {
            console.log((error as Error).message); 
        }
    }; 

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, 
                loginEmail, 
                loginPassword 
            );
            console.log(user);
        } catch (error) {
            console.log((error as Error).message);
        }
    };

  

    return (
        <div className="App">
            <div>
                <h3> Register User </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
    
                <button onClick={register}> Create User</button>
            </div>
    
            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
    
                <button onClick={login}> Login</button>
            </div>
    
           
        </div>
    );
}
    
export default UserAuth;
