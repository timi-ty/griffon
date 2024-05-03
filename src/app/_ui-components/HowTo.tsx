import styles from "./HowTo.module.css";

function HowTo() {
  return (
    <div className={styles.main}>
      <b>How to use Griffon:</b>
      <br />
      <br />
      <i>
        Run Griffon by hitting the play button just above the code editor.
        <br />
        <br />
        Griffon is a simple array visualizer that only works with javascript
        code. The web app launches with the Knuth Shuffle algorithm, and
        visualizes the result of each stage (iteration) of the shuffle.
        <br />
        <br />
        Griffon is equipped with just one API of its own -{" "}
        <code>visualizeArray(array)</code>.
        <br />
        <br />
        This API can take in any array. It truncates the string representation
        of each array element to 6 characters, using standard notation
        formatting if the member is a large number.
        <br />
        <br />
        To use Griffon, simply paste your array related algorithm into the code
        editor, and call the <code>visualizeArray(array)</code> API in every
        location where you want to visualize the current state of the array.
        <br />
        <br />
        Run Griffon by hitting the play button just above the code editor.
        Griffon will snapshot the array it receives at every call to{" "}
        <code>visualizeArray(array)</code>.
        <br />
        <br />
        You can then scroll through the snapshots by using the navigation UI in
        the Griffon header to visualize how your array changed from one{" "}
        <code>visualizeArray(array)</code> call to the next.
      </i>
    </div>
  );
}

export default HowTo;
