import { ChatSidebar } from "components/ChatSidebar";
import Head from "next/head";
import { streamReader } from "openai-edge-stream";
import { useState } from "react";

export default function ChatPage() {
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message: ", messageText);
    try {
      const response = await fetch(`/api/chat/sendMessage`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message: messageText }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("okaayy")
      const data = await response.json();
      console.log("MESSAGE: ", data);
    } catch (e) {
      console.error("An error occurred while sending the message: ", e);
    }
  };
  
  return (
    <>
      <Head>
        <title>Next Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[20%_1fr]">
        <ChatSidebar />
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1">chat window</div>
          <footer className="bg-gray-800 p-10">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Send a message..."
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                />
                <button className="btn" type="submit">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </>
  );
}
