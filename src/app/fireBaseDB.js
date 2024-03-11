import { ref, set, onValue } from "firebase/database";
import { Configure } from "./auth";

// class FireBaseDBConfiguration extends Configure {
//   constructor() {
//     super();
//     this.database = getDatabase(this.app);
//   }
// }

export class DBOperation extends Configure {
  constructor() {
    super();
    this.documents = null;
  }
  createPostsDocument(postObject) {
    try {
      set(ref(this.database, `posts/${postObject.postId}`), postObject);
    } catch (error) {
      console.log(error?.message);
    }
  }

  retrivePostsDocuments(setPostsLists) {
    try {
      onValue(
        ref(this.database, `posts`),
        (snapshot) => {
          const data = snapshot.val();
          setPostsLists((prevVal) => {
            return { ...prevVal, ...data };
          });
        },
        {
          onlyOnce: true,
        },
      );
    } catch (error) {
      console.log(error?.message);
    }
  }
}

export default new DBOperation();
