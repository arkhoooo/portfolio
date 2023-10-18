import { useState } from "react";
import styles from "./style.module.css";
import ChatBlock from "./Chat-block";
import Comment from "./Comment";
import { useLocalStorage } from "../../hook/useLocalStorage";

const Chat = () => {
  const [chatData, setChatData] = useLocalStorage("CHAT", []);
  const [inputValue, setInputValue] = useState("");
  const [showReg, setShowReg] = useState("");

  const [user] = useLocalStorage("USER");

  console.log(chatData);

  const sendMessage = () => {
    if (user) {
      setChatData([...chatData, `${user}: ${inputValue}`]);
      setInputValue("");
    } else {
      setShowReg(true);
      setInputValue("");
    }
  };

  return (
    <div>
      <ChatBlock chatData={chatData}></ChatBlock>
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        setChatData={setChatData}
        sendMessage={sendMessage}
        showReg={showReg}
      />
    </div>
  );
};

export default Chat;
