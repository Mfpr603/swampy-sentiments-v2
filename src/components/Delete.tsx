import React, { useState } from "react";
import { app, auth } from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";

interface DeleteButtonProps {
  postID: string;
}
 
const DeleteButton = (props: DeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const db = getDatabase(app);
  const user = auth.currentUser;
    if (user) {
      const uid = user.uid;

      const entryRef = ref(db, `/entry/${uid}/${props.postID}`);

      const handleDelete = async () => {
        await remove(entryRef).then(() => {
          console.log("location removed");
          setIsDeleting(false);
        });
        console.log("deleted props", props.postID)
      };

      return (
        <div>
          {isDeleting ? (
            <div>Deleting...</div>
          ) : (
            <button type="button" onClick={() => {
              setIsDeleting(true);
              handleDelete();
            }}>
              Delete
            </button>
          )}
        </div>
      );
    }
    return null;
}

export default DeleteButton;
