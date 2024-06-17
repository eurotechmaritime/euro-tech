import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";

const ChatBotEuro = ({ name }) => {
  const euroAssistAvatar = "./assets/euro-assist.jpg";

  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5">
        <a
          href="tel:+91 7025045000"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/pngwing.com.png"
            alt="call-to-action"
            className="w-[60px] rounded-full"
          />
        </a>
      </div>
      {/* <ChatBot
        floating={true}
        headerTitle="Eurotech Assist"
        botAvatar={euroAssistAvatar}
        steps={[
          {
            id: "1",
            message: "Hello There, I'm EuroAssist, What is your name",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            validator: (value) => {
              localStorage.setItem("CHATBOT_NAME", value);
              return true;
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: 1, label: "Courses", trigger: "5" },
              { value: 2, label: "Campus", trigger: "6" },
              { value: 3, label: "Contact", trigger: "7" },
            ],
          },
          {
            id: "5",
            component: (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => routeChange("/courses-list")}
              >
                CLICK HERE TO KNOW COURSES
              </button>
            ),
            trigger: "4",
          },
          {
            id: "6",
            component: (
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => routeChange("/why-eurotech")}
              >
                CLICK HERE TO KNOW CAMPUS
              </button>
            ),
            trigger: "4",
          },
          {
            id: "7",
            message: `Please share your email`,
            trigger: "8",
          },
          {
            id: "8",
            user: true,
            validator: (value) => {
              localStorage.setItem("CHATBOT_EMAIL", value);
              return true;
            },
            trigger: "9",
          },
          {
            id: "9",
            message: `Please share your contact number`,
            trigger: "10",
          },
          {
            id: "10",
            user: true,
            validator: (value) => {
              localStorage.setItem("CHATBOT_CONTACT", value);
              return true;
            },
            trigger: "11",
          },
          {
            id: "11",
            message: `Please write what you want to know`,
            trigger: "12",
          },
          {
            id: "12",
            user: true,
            validator: (value) => {
              localStorage.setItem("CHATBOT_QUERY", value);
              return true;
            },
            trigger: "13",
          },
          {
            id: "13",
            // message: `Thanks for the details  Name:${localStorage.getItem(
            //   "CHATBOT_NAME"
            // )}  Contact:${localStorage.getItem(
            //   "CHATBOT_CONTACT"
            // )}  Email:${localStorage.getItem(
            //   "CHATBOT_EMAIL"
            // )}  Query: ${localStorage.getItem(
            //   "CHATBOT_QUERY"
            // )}  We will get back to you soon.`,
            message: `Thanks for the details, We will get back to you soon. Have a Nice Day!`,
            trigger: "4",
          },
        ]}
      /> */}
    </>
  );
};

export default ChatBotEuro;
