import React, { useState } from "react";
import { app } from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";

interface DeleteButtonProps {
  postID: string;
}
 
const DeleteButton = (props: DeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const db = getDatabase(app);
  const entryRef = ref(db, `/entry/${props.postID}`);

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
};

export default DeleteButton;
