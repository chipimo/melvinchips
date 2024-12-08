import { create } from "zustand";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot" | "customer-care";
}

interface ChatState {
  messages: Message[];
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      id: 1,
      text: "👋 Hi! How can I help you today?",
      sender: "bot",
    },
  ],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setMessages: (messages) => set({ messages }),
}));
