import React from "react";
import ChatForm from "../Forms/ChatForm";
import ChatIframe from "../Iframe/ChatIframe";

function ChatLayout() {
  return (
    <div className="w-full flex-row flex justify-center">
      <div className="w-1/5 max-h-screen border-red-500 border-solid border">
        {/* //form */}
        <ChatForm></ChatForm>
      </div>
      <div className="w-4/5 max-h-screen border border-blue-500">
        {/* iframe */}
        <ChatIframe></ChatIframe>
      </div>
    </div>
  );
}

export default ChatLayout;
