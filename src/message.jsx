import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faComment,
  faHeart,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./message.css";
import { borderRadius, width } from "@mui/system";

const Message = () => {
  /* New state to display message box */

  const [selectedMessage, setSelectedMessage] = useState(null);

  /*State form visble sreach box*/

  const [isFocused, setIsFocused] = useState(false);

  /**state for TYPED MESSAGE   */
  const [keyValue, setKeyValue] = useState("");

  /*state for user details*/
  const [mess, setMess] = useState([
    {
      id: "1",
      images: "./images/img/2.jpg",
      name: "Ahsam_Ullah",
      cap: "Active",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "2",
      images: "./images/img/3.jpg",
      name: "Ahtram_ullah",
      cap: "Active 1 hour",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "3",
      images: "./images/img/5.jpg",
      name: "Ahtisham_12",
      cap: "Gilgit",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "4",
      images: "./images/img/4.jpg",
      name: "Khan_baba_1",
      cap: "Baba__khan",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "5",
      images: "./images/img/6.jpg",
      name: "Ahsam_Ullah",
      cap: "Active",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "6",
      images: "./images/img/8.jpg",
      name: "Ahtram_ullah",
      cap: "Active 1 hour",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "7",
      images: "./images/img/9.jpg",
      name: "Ahtisham_12",
      cap: "Gilgit",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
    {
      id: "8",
      images: "./images/img/2.jpg",
      name: "Khan_baba_1",
      cap: "Baba__khan",
      messages: [
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
        {
          msgId: 1,
          senderId: 2,
          text: "Hello",
        },
      ],
    },
  ]);

  const Comments = (id) => {
    const message = mess.find((x) => x.id === id);
    if (message) {
      setSelectedMessage(message);
    }
  };

  const handleMessageSend = (e) => {
    if (selectedMessage && keyValue) {
      const message = [...mess];
      const userIndex = message.findIndex((x) => x.id === selectedMessage.id);
      if (userIndex > -1) {
        const newMessage = {
          msgId: Math.floor(Math.random() * 100),
          senderId: 2,
          text: keyValue,
        };
        message[userIndex].messages.push(newMessage);
        // setMess(message);
        console.log(message);
        e.preventDefault();
      }
    }
    setKeyValue("");
  };
  return (
    <>
      <div className="Message__box">
        <div className="left__box">
          <div className="left__h5">
            <h5>
              Ahtisham_ullah
              <FontAwesomeIcon className="drop__down" icon={faArrowDown} />
            </h5>

            {mess.map((item) => (
              <div className="top1" onClick={() => Comments(item.id)}>
                <div
                  className="top__img1"
                  style={{
                    height: "60px",
                    marginBottom: "20px",
                    marginLeft: "30px",
                  }}
                >
                  <img
                    src={item.images}
                    style={{ height: "60px", width: "60px" }}
                    alt=""
                  />
                </div>
                <div className="top__header1">
                  <h6 style={{ width: "80px" }}>
                    {item.name} <br />
                    <span>{item.cap}</span>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right__box">
          {selectedMessage && (
            <div>
              <h3 style={{ padding: "50px" }}>
                {" "}
                <img
                  src={selectedMessage.images}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />{" "}
                {selectedMessage.name}
              </h3>
              <ul>
                {selectedMessage.messages &&
                  selectedMessage.messages.map((message) => (
                    <li>
                      {message.text}
                      <br />
                      <br />
                      <br />
                    </li>
                  ))}
              </ul>

              <div className="Input__message">
                <form
                  type="submit"
                  onChange={(e) => setKeyValue(e.target.value)}
                  onSubmit={handleMessageSend}
                >
                  <input type="text" value={keyValue} />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Message;
