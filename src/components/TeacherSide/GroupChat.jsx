import React, { useState } from "react";

const GroupChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const currentUser = "admin"; // You can change this to 'member' for testing member messages

  const getRandomColorClass = () => {
    const colorClasses = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
    ];

    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  };

  const sendMessage = (text) => {
    if (message.trim() !== "") {
      const newMessage = {
        text: message,
        sender: currentUser,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="font-poppins p-2 md:p-5  ">
      <div className="border rounded-lg border-2 border-gray text-2xl md:text-3xl lg:text-4xl text-gray-500 p-3 w-fit text-center">
        Group Chat
      </div>
      <div className="flex flex-col mt-4 h-screen rounded-lg border-1 border-teal-800  shadow-md p-3">
        <div className="flex-grow rounded-lg p-2 md:p-4">
          <div className="flex flex-col gap-2 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.sender === "admin"
                    ? "self-end flex flex-row"
                    : "self-start flex flex-row-reverse"
                } `}
              >
                <div
                  className={`${
                    message.sender === "admin"
                      ? "bg-teal-800 rounded-tl-xl rounded-bl-xl rounded-br-xl text-white mr-1"
                      : "bg-gray-300 rounded-tr-xl rounded-tl-xl rounded-br-xl text-black ml-1"
                  } p-2 px-5 text-sm md:text-base`}
                >
                  {message.text}
                </div>
                <div
                  className={`${
                    message.sender === "admin"
                      ? "bg-teal-800"
                      : `${getRandomColorClass()} mt-2`
                  } rounded-xl text-white text-xs md:text-sm py-1 w-9 h-7  text-center md:w-12 md:h-7 `}
                >
                  {message.sender === "admin" ? "Own" : "M"}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2 border rounded-xl w-full mb-3 flex justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className=" p-2 w-full outline-none text-xs sm:text-sm "
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(e.target.value);
                e.target.value = "";
              }
            }}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
              stroke="#CECECE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.3501 9.65039V11.3504C4.3501 15.5704 7.7801 19.0004 12.0001 19.0004C16.2201 19.0004 19.6501 15.5704 19.6501 11.3504V9.65039"
              stroke="#CECECE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6099 6.43012C11.5099 6.10012 12.4899 6.10012 13.3899 6.43012"
              stroke="#CECECE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.2002 8.55031C11.7302 8.41031 12.2802 8.41031 12.8102 8.55031"
              stroke="#CECECE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 19V22"
              stroke="#CECECE"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <button
            className="text-teal-800"
            onClick={() => {
              sendMessage();
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0698 8.50965L9.50978 4.22965C3.75978 1.34965 1.39978 3.70965 4.27978 9.45965L5.14978 11.1996C5.39978 11.7096 5.39978 12.2996 5.14978 12.8096L4.27978 14.5396C1.39978 20.2896 3.74978 22.6496 9.50978 19.7696L18.0698 15.4896C21.9098 13.5696 21.9098 10.4296 18.0698 8.50965ZM14.8398 12.7496H9.43977C9.02978 12.7496 8.68977 12.4096 8.68977 11.9996C8.68977 11.5896 9.02978 11.2496 9.43977 11.2496H14.8398C15.2498 11.2496 15.5898 11.5896 15.5898 11.9996C15.5898 12.4096 15.2498 12.7496 14.8398 12.7496Z"
                fill="#215D4F"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
