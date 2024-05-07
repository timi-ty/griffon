"use client";

import { useEffect, useState } from "react";
import styles from "./ErrorLog.module.css";
import useVisualizeData from "../_infra-components/useVisualizeData";

function ErrorLog() {
  const [messages, setMessages] = useState([""]);
  const { addResetListener } = useVisualizeData();

  useEffect(() => {
    setMessages([]);
    var oldErrorLog = console.error;
    console.error = function (message) {
      oldErrorLog.apply(console, [message]);
      setMessages((ms) => {
        const newMessages = [...ms];
        newMessages.push(message);
        return newMessages;
      });
    };

    const removeListener = addResetListener(function onReset() {
      setMessages([]);
    });

    return () => {
      console.error = oldErrorLog;
      removeListener();
    };
  }, [addResetListener]);

  return (
    <>
      {messages.length > 0 && (
        <div className={styles.main}>
          {messages.map((message, index) => (
            <pre key={index}>{message}</pre>
          ))}
        </div>
      )}
    </>
  );
}

export default ErrorLog;
