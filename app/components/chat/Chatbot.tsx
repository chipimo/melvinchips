"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import Image from "next/image";
import io from "socket.io-client";
import { useChatStore } from "@/app/store/useChatStore";
import { Message } from "@/app/utils/types";

// Connect to Socket.IO server
const socket = io("http://localhost:3000"); // Replace with your server's URL

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false); // Control the greeting popup
  const { messages, addMessage } = useChatStore(); // Zustand store
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Delay showing the greeting popup
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // useEffect(() => {
  //   // Listen for incoming messages from the server
  //   socket.on("receive_message", (message) => {
  //     addMessage(message);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [addMessage]);

  useEffect(() => {
    // Check connection status
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Listen for messages from the server
    socket.on('receive-message', (message) => {
      console.log('New message received:', message);
      // setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect(); // Clean up socket connection on unmount
    };
  }, []);


  const handleSend = async () => {
    if (!input.trim()) return;
  
    // User's message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user", // Explicitly set to one of the union types
    };
  
    addMessage(userMessage); // Add to Zustand store
    setInput("");
    setIsLoading(true);
  
    // Emit message to the server
    
    socket.emit("send-message", userMessage);
  
    // Simulate bot response (if the server doesn't handle it directly)
    // setTimeout(() => {
    //   const responseMessage: Message = {
    //     id: Date.now() + 1,
    //     text: "Thanks for reaching out! We'll get back to you soon.",
    //     sender: "customer-care", // Explicit sender
    //   };
    //   addMessage(responseMessage);
    // }, 1000);
      setIsLoading(false);
  };

  const handleGreetingClick = () => {
    setShowGreeting(false); // Hide the greeting popup
    setIsOpen(true); // Open the main chat window
  };

  return (
    <>
      {/* Greeting Popup */}
      <AnimatePresence>
        {showGreeting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-8 z-50 bg-[#FFEC42] text-black px-4 py-3 rounded-xl shadow-lg cursor-pointer"
            onClick={handleGreetingClick}
          >
            👋 Hi! How can I help you today?
            {/* Arrow */}
            <div className="absolute bottom-[-8px] right-3 transform -translate-x-1/2 w-4 h-4 bg-[#FFEC42] rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#FFEC42] text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#FFEC42]/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-8 z-50 w-96 bg-[#111111] border border-white/10 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/20">
              <h3 className="font-semibold">Customer Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message: any) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Chat Head */}
                  {message.sender === "bot" && (
                    <Image
                      src="/bot-avatar.png"
                      alt="Bot Avatar"
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                  )}
                  {message.sender === "customer-care" && (
                    <Image
                      src="/customer-care-avatar.png"
                      alt="Customer Care Avatar"
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                  )}
                  {message.sender === "user" && (
                    <Image
                      src="/avatar-default-icon.png"
                      alt="User Avatar"
                      width={32}
                      height={32}
                      className="rounded-full ml-2"
                    />
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-[#FFEC42] text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start items-start"
                >
                  <Image
                    src="/customer-care-avatar.png"
                    alt="Customer Care Avatar"
                    width={32}
                    height={32}
                    className="rounded-full mr-2"
                  />
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <div className="flex items-end gap-2">
                <TextareaAutosize
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/10 rounded-xl p-3 resize-none max-h-32 focus:outline-none focus:ring-1 focus:ring-[#FFEC42]"
                  maxRows={4}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-[#FFEC42] text-black p-3 rounded-xl hover:bg-[#FFEC42]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}