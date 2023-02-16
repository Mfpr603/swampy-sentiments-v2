import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, User, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';  
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Login.css'



function UserAuth() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerDisplayName, setRegisterDisplayName] = useState<string>("");
    const [showLogin, setShowLogin] = useState(false);
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
        <div className="SwampyLogin">
          <h1 className="SwampyLoginHeader">The swamp awaits. . .</h1>
          <div className = "SwampyLoginForm">
          <Form>
            <h3 className = "LoginText"> {showLogin ? "Login" : "Register User"} </h3>
            {!showLogin && (
              <>
                <h1 className = "Ltext">Email</h1>
                <InputGroup className = "emailInput"> 
                  <FormControl
                    placeholder="Email..."
                    value={registerEmail}
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                </InputGroup>
              
                <h1 className = "Ltext">Password</h1>
                <InputGroup className = "passwordInput">
                    <FormControl
                            type="password"
                            placeholder="Password..."
                            value={registerPassword}
                            onChange={(event) => {
                            setRegisterPassword(event.target.value);
                            }}
                        />
                </InputGroup>
                <h1 className = "Ltext">Name</h1>
                <InputGroup className = "displayNameInput" >
                  <FormControl
                    placeholder="Display Name..."
                    value={registerDisplayName}
                    onChange={(event) => {
                      setRegisterDisplayName(event.target.value);
                    }}
                  />
                </InputGroup>
                <div className="registerButton">
                <Button   variant="primary" onClick={register}>
                  Create User
                </Button>
                </div>
              </>
            )}
            {showLogin && (
              <>
              <h1 className = "Ltext">Email</h1>
                <InputGroup className="emailInput">
                  <FormControl
                    placeholder="Email..."
                    value={loginEmail}
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </InputGroup>
                <h1 className = "Ltext">Password</h1>
                <InputGroup className="passwordInput">
                  <FormControl
                    type="password"
                    placeholder="Password..."
                    value={loginPassword}
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </InputGroup>
                <div className="LoginButton">
                <Button  variant="primary" onClick={login}>
                  Login
                </Button>
                </div>
              </>
            )}
          </Form>
          <div className="ToggleButton">
          <Button
            variant="link"
            
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? "Switch to Register" : "Switch to Login"}
          </Button>
          </div>
        </div>
        </div>
      );
                }    
           
    
export default UserAuth;
    
