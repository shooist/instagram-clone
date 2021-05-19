import { useContext } from "react";
import type { FC } from "react";
import { MessageContext } from "src/contexts/MessageContext";
import cc from "classcat";

export const MessageBar: FC = () => {
  const { message, isVisible } = useContext(MessageContext);

  return (
    <div
      className={cc([
        "fixed bottom-0 z-50 w-full bg-gray-800 px-5 py-2 transition transform duration-1000",
        { "translate-y-full": !isVisible },
      ])}
    >
      <p className="text-white text-sm">{message}</p>
    </div>
  );
};
