import { useState, useEffect } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleAuthChange = (user: User | null) => {
    if (user) {
      console.log(`User ${user.uid} signed in`);
    } else {
      console.log("User signed out");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h4>User Logged In:</h4>
      {user && user.displayName ? user.displayName : null}
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default Logout;
