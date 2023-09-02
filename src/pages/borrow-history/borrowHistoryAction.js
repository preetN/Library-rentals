import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../config/firebase-config";
import { getAllBookAction, updateBookAction } from "../books/bookAction";
import { setBorrowHistory } from "./borrowSlice";

// CRUD
export const addNewBorrowAction = (transactionObj) => async (dispatch) => {
  try {
    const docRefPromise = addDoc(
      collection(db, "borrow_history"),
      transactionObj
    );
    toast.promise(docRefPromise, {
      pending: "In Progress...",
    });
    await docRefPromise;
    toast.success("Book borrowed ");
    dispatch(
      updateBookAction({
        id: transactionObj.bookId,
        isAvailable: false,
        availableFrom: transactionObj.availableFrom,
      })
    );
    dispatch(getAllBookAction());
    // TODO: Grab all the books and update store.
  } catch (e) {
    toast.error(e.message);
  }
};
export const getAllBorrowHistoryAction = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "borrow_history"));
    const history = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      history.push({ ...data, id });
    });
    dispatch(setBorrowHistory(history));
  } catch (e) {
    toast.error(e.message);
  }
};

// export const getBookAction = (id) => async (dispatch) => {
//   try {
//     const docRef = doc(db, "books", id);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const bookData = docSnap.data();
//       dispatch(setSelectedBook({ ...bookData, id }));
//     } else {
//       toast.error("No book found");
//     }
//   } catch (e) {
//     toast.error(e.message);
//   }
// };

export const updateHistoryAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      const docRef = doc(db, "borrow_history", id);
      const docRefPromise = setDoc(docRef, rest, { merge: true });
      toast.promise(docRefPromise, {
        pending: "In Progress...",
      });

      await docRefPromise;
      dispatch(getAllBorrowHistoryAction());
      toast.success("Book updated successfully");
      // TODO: Grab all the books and update store.
    } catch (e) {
      toast.error(e.message);
    }
  };

// export const deleteBookAction = (id) => async (dispatch) => {
//   try {
//     const bookRef = doc(db, "books", id);
//     const docRefPromise = deleteDoc(bookRef);
//     toast.promise(docRefPromise, {
//       pending: "In Progress...",
//     });
//     await docRefPromise;
//     toast.success("Deleted");
//     dispatch(getAllBookAction());
//     // TODO: Grab all the books and update store.
//   } catch (e) {
//     toast.error(e.message);
//   }
// };
