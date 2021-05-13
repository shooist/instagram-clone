import type { ReactNode, VFC } from "react";
import { createContext, useEffect, useState } from "react";

type Context = {
  message: string;
  outputMessage: any;
  isVisible: boolean;
};

export const MessageContext = createContext<Context>({
  message: "",
  outputMessage: null,
  isVisible: false,
});

export const MessageContextProvider: VFC<{ children: ReactNode }> = (props) => {
  const [message, setMessage] = useState<string>("　");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDuring, setIsDuring] = useState<boolean>(false);

  const outputMessage = (message) => {
    if (isDuring) return;
    setIsDuring(true);
    setMessage(message);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsDuring(false), 1000); // 1000s: transition-delay
    }, 5000);
  };

  const value = {
    message: message,
    outputMessage: outputMessage,
    isVisible: isVisible,
  };
  return <MessageContext.Provider value={value} {...props} />;
};
