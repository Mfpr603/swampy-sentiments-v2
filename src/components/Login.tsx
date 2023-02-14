import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, User, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';  
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function UserAuth() {
  // State to store the user
  const [user, setUser] = useState<User | null>(null);

  // Use useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Use useEffect hook to listen for changes in the authentication state
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

  // State to store the email and password for registration
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerDisplayName, setRegisterDisplayName] = useState<string>("");

  // State to store the email and password for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Function to handle the registration
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        registerEmail, 
        registerPassword 
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: registerDisplayName
      });
      console.log(user);
    } catch (error) {
      console.log((error as Error).message);
    }
  }; 

  // Function to handle the login
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword 
      );
      console.log(user);
      navigate('/Home');
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
