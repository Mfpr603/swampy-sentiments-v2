import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, User, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';  
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


function UserAuth() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerDisplayName, setRegisterDisplayName] = useState<string>("");
    const navigate = useNavigate();


    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, [auth]);
    
      // If user is authenticated, navigate to Home page
      if (user) {
        navigate('/Home');
        return null;
      }

   

    const register = async () => {
        try{
            const userCredential = await createUserWithEmailAndPassword( 
                auth, 
                registerEmail, 
                registerPassword 
            );
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: registerDisplayName});
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
            navigate('/home');
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
                <input type="password"
                    id="password"
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <input
                    placeholder="Display Name..." // add a display name input field
                    onChange={(event) => {
                        setRegisterDisplayName(event.target.value);
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
                    type="password"
                    id="password"
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