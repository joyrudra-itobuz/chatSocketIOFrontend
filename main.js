// import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const textBox = document.querySelector(".message-box");
const chats = document.querySelector(".chats");
let message = localStorage.getItem("message");

const getTextValue = () => {
  const message = textBox.value;
  console.log(message);
  console.log(chats);
  const newChat = document.createElement("p");
  newChat.textContent = message + " ~ Client ~ " + new Date();
  chats.appendChild(newChat);
  textBox.value = "";
  if (!localStorage.getItem("message")) {
    localStorage.setItem("message", message);
  } else {
    localStorage.setItem(
      "message",
      localStorage.getItem("message") + " .`:`. " + message
    );
  }
};

(async () => {
  if (localStorage.getItem("message")) {
    const allMessages = localStorage.getItem("message").split(" .`:`. ");

    allMessages.map((message) => {
      const newChat = document.createElement("p");
      newChat.textContent = message + " ~ Client ~ " + new Date();
      chats.appendChild(newChat);
    });
  }
})();
