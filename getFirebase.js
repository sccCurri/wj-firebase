import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ccd5RK_q01Vr1Bh9bqR-6Bd7G-61BPE",
  authDomain: "new-webjong-server.firebaseapp.com",
  projectId: "new-webjong-server",
  storageBucket: "new-webjong-server.appspot.com",
  messagingSenderId: "1092753361332",
  appId: "1:1092753361332:web:70add4735fc4798c67cae1",
  measurementId: "G-G2VHRQ8292",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

$("#addBtn").click(async () => {
  let username = $("#inputUserName").val();
  let todo = $("#inputUserTodo").val();
  try {
    const docRef = await addDoc(collection(db, "todo"), {
      content: todo,
      done: false,
      name: username,
    });
    console.log("Document written with ID: ", docRef.id);
    alert("데이터가 추가되었습니다");
    window.location.reload();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

$(document).ready(async () => {
  $("#card-list").empty();
  const querySnapshot = await getDocs(collection(db, "todo"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    let name = doc.data().name;
    let done = doc.data().done;
    let content = doc.data().content;
    let tempHtml = `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-name">${name}의 TODO ✅</h5>
                            <label class="card-todo"><input type="checkbox">  ${content}</label>
                        </div>
                    </div>`;
    $("#card-list").append(tempHtml);
  });
});
import { getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
