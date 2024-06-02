import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";

const steps = [
  <p className="text-secondary-100 text-xl">
    <span className="text-secondary-300">Type in a query</span> or choose one of
    the examples on the chat interface to get started
  </p>,
  <p className="text-secondary-100 text-xl">
    We support some websites that require authentication in which a{" "}
    <span className="text-secondary-300">login button</span>
    &nbsp;will appear
  </p>,
  <p className="text-secondary-100 text-xl">
    You may{" "}
    <span className="text-secondary-300"> interact with the screen</span> to
    take over the control or correct the agent
  </p>,
];

function ChatIframe({ iframe }) {
  if (!iframe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen max-h-screen">
        <PlayIcon className="size-10 text-secondary-100"></PlayIcon>
        <p className="text-4xl text-secondary-100">Playground</p>

        <p className="text-xl text-secondary-100 mt-2 mb-10">
          Your live preview will start here. To get started:
        </p>
        <div className="flex flex-col gap-2">
          {steps.map((r, idx) => (
            <StepCard text={r} idx={idx}></StepCard>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-h-screen">
      <iframe src={iframe}></iframe>
    </div>
  );
}

const StepCard = ({ idx, text }) => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-md h-32 border-secondary-100 border max-w-md px-2">
      <p className="text-3xl text-secondary-100">{idx + 1}</p>
      {text}
    </div>
  );
};

export default ChatIframe;
