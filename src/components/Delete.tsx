import React, { useState, useEffect } from "react";
import { app } from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";
 
const DeleteButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const db = getDatabase(app);
  let date = new Date().toDateString();
  const entryRef = ref(db, `/entry/${date}`);

  useEffect(() => {
    const handleDelete = async () => {
      await remove(entryRef).then(() => {
        console.log("location removed");
        setIsDeleting(false);
      });
    };

    if (isDeleting) {
      handleDelete();
    }
  }, [isDeleting]);

  return (
    <div>
      {isDeleting ? (
        <div>Deleting...</div>
      ) : (
        <button type="button" onClick={(DeleteButton) => setIsDeleting(true)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default DeleteButton;
