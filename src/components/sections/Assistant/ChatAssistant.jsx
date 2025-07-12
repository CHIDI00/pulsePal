import { FaTelegramPlane, FaUserCircle } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";
import { useState, useRef, useEffect } from "react";

// Default messages for initial state
const defaultMessages = [
  {
    sender: "bot",
    text: "Hi Alex! I noticed you've been getting less sleep lately. How are you feeling today?",
    time: "01:25 PM",
  },
];

// Helper function to load messages from localStorage
const loadMessages = () => {
  const savedData = localStorage.getItem("chatMessages");
  if (!savedData) return defaultMessages;

  try {
    const { timestamp, messages } = JSON.parse(savedData);
    // Clear messages older than 24 hours
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem("chatMessages");
      return defaultMessages;
    }
    return messages;
  } catch {
    return defaultMessages;
  }
};

export default function ChatAssistant() {
  const [messages, setMessages] = useState(loadMessages());
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "chatMessages",
      JSON.stringify({
        messages,
        timestamp: Date.now(),
      })
    );
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      sender: "user",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const apiUrl = "https://pulsepal.vercel.app/api/ai";

      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: data.response,
        healthData: data.healthDataUsed,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getErrorMessage(error),
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getErrorMessage = (error) => {
    if (error.message.includes("Failed to fetch")) {
      return "Connection issue. Please check your internet and try again.";
    }
    if (error.message.includes("CORS")) {
      return "Please refresh the page or try again later.";
    }
    return "I'm having trouble responding. Please try again.";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  const clearChatHistory = () => {
    localStorage.removeItem("chatMessages");
    setMessages(defaultMessages);
  };

  return (
    <div className="w-full h-screen p-16 transition-transform duration-300 bg-white rounded-2xl hover:-translate-y-4">
      <div className="flex flex-col justify-between h-full pb-10">
        <div className="space-y-12 max-h-[70vh]">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center text-5xl font-semibold text-nowrap gap-7">
              <VscRobot className="text-blue-500 text-7xl" />
              AI Wellness Assistant
            </h3>
            <button
              onClick={clearChatHistory}
              className="px-4 py-2 text-xl text-white bg-red-500 rounded-lg"
            >
              Clear History
            </button>
          </div>

          <div
            className="space-y-8 overflow-y-auto w-full max-h-[70vh] 
                scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-100
                pr-10"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#4ade80 #f3f4f6",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                <div
                  className={`flex items-start max-w-5xl gap-8 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {message.sender === "bot" ? (
                    <div>
                      <VscRobot className="p-3 text-white rounded-full text-7xl bg-gradient-to-tr from-green-500 to-green-300" />
                    </div>
                  ) : (
                    <FaUserCircle className="p-3 text-white rounded-full text-7xl bg-gradient-to-r from-purple-500 to-pink-400" />
                  )}
                  <div
                    className={`rounded-2xl p-7 ${
                      message.sender === "bot"
                        ? "bg-gray-100"
                        : "text-white bg-gradient-to-tr from-green-500 to-green-300"
                    }`}
                  >
                    <p className="text-3xl font-medium normal-case break-words whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <br />
                    <small className="text-2xl">{message.time}</small>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex">
                <div className="flex items-start max-w-5xl gap-8">
                  <VscRobot className="p-3 text-white rounded-full text-7xl bg-gradient-to-tr from-green-500 to-green-300" />
                  <div className="bg-gray-100 rounded-2xl p-7 text-[#494949]">
                    <div
                      className="mx-auto animate-loaderAnim"
                      style={{
                        width: "50px",
                        aspectRatio: "2",
                        background: `
      no-repeat radial-gradient(circle closest-side, #000 90%, #0000) 0% 50%,
      no-repeat radial-gradient(circle closest-side, #000 90%, #0000) 50% 50%,
      no-repeat radial-gradient(circle closest-side, #000 90%, #0000) 100% 50%
    `,
                        backgroundSize: "calc(100% / 3) 50%",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="flex justify-end w-full mt-8">
          <div className="flex items-center w-full gap-4">
            <input
              type="text"
              name="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="text-3xl font-medium normal-case border rounded-2xl placeholder:text-gray-500 text-black bg-gray-50 pl-3 w-full h-[5.5rem] focus:border-green-400 focus:outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="px-5 py-4 text-6xl text-white transition-transform duration-200 cursor-pointer hover:scale-95 h-fit w-fit rounded-2xl bg-gradient-to-r from-green-500 to-green-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
