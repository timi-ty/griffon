"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import ActionStrip from "./ActionStrip";
import styles from "./CodeEditor.module.css";
import useVisualizeData from "../_infra-components/useVisualizeData";
import { EditorView, basicSetup } from "codemirror";
import { javascript as cmJavascript } from "@codemirror/lang-javascript";
import { EditorState } from "@codemirror/state";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/view";

const shuffleCodeDefault: string = `function shuffle(array) {
  // Create a copy of the original array to avoid modifying it
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    visualizeArray(array);
  }

  return array;
}

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);`;

function CodeEditor() {
  const editor: MutableRefObject<EditorView | null> = useRef(null);
  const iframRef: MutableRefObject<HTMLIFrameElement | null> = useRef(null);
  const codeEditorRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { addVisualizeData, resetVisualizeData } = useVisualizeData();
  const [isCodeStale, setIsCodeStale] = useState(false);

  function visualizeArray(array: number[]) {
    addVisualizeData(array);
  }

  function run() {
    resetVisualizeData();

    const iframeDocument =
      iframRef.current?.contentDocument ||
      iframRef.current?.contentWindow?.document;

    if (!iframeDocument) {
      console.log("Failed to find iframe.");
      return;
    }
    // Clear the contents of the iframe
    iframeDocument.open();
    iframeDocument.write("");
    iframeDocument.close();

    try {
      if (!iframeDocument.defaultView) {
        console.log("Failed to find iframe default view.");
        return;
      }
      // Pass only the function to the iframe's context
      (iframeDocument.defaultView as any).visualizeArray = visualizeArray;

      const script = iframeDocument.createElement("script");
      script.textContent = editor.current?.state.doc.toString() || "";
      iframeDocument.body.appendChild(script);
      console.log("Executed code successfully.");
    } catch (error) {
      console.log("Code failed to execute.");
    }

    setIsCodeStale(true);
  }

  useEffect(() => {
    var newEditor: EditorView | null = null;
    if (codeEditorRef.current) {
      newEditor = new EditorView({
        parent: codeEditorRef.current,
        state: EditorState.create({
          doc: shuffleCodeDefault,
          extensions: [
            basicSetup,
            cmJavascript(),
            lineNumbers(),
            highlightActiveLineGutter(),
          ],
        }),
      });
      editor.current = newEditor;

      // Listen for changes in the editor content
      editor.current.contentDOM.addEventListener("input", () => {
        setIsCodeStale(false);
      });

      // Listen for delete events in the editor content
      editor.current.dom.addEventListener("keydown", (event) => {
        // Check if the pressed key is the delete key or backspace key
        if (event.key === "Delete" || event.key === "Backspace") {
          setIsCodeStale(false);
        }
      });
    }
    return () => newEditor?.destroy();
  }, [codeEditorRef.current]);

  return (
    <div className={styles.main}>
      <ActionStrip onClickRun={run} isStale={isCodeStale} />
      <iframe ref={iframRef} style={{ display: "none" }}></iframe>
      <div ref={codeEditorRef} className={styles.codeArea}></div>
    </div>
  );
}

export default CodeEditor;
