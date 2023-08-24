import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { setAdmin } from "./userSlice";
import { toast } from "react-toastify";
export const getUserAction = async (uid, dispatch) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const userData = docSnap.data();

      dispatch(
        setAdmin({
          ...userData,
          uid,
        })
      );
    } else {
      // docSnap.data() will be undefined in this case
      console.log("no such document");
    }
  } catch (e) {
    toast.error(e.message);
  }
};
