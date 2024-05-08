# **Griffon**

[Griffon App](https://griffon-sigma.vercel.app/)

Griffon is a simple array visualizer that only works with javascript code. The web app launches with the Knuth Shuffle algorithm, and visualizes the result of each stage (iteration) of the shuffle.

Griffon is equipped with just one API of its own - visualizeArray(array).

This API can take in any array. It truncates the string representation of each array element to 6 characters, using standard notation formatting if the member is a large number.

To use Griffon, simply paste your array related algorithm into the code editor, and call the visualizeArray(array) API in every location where you want to visualize the current state of the array.

Run Griffon by hitting the play button just above the code editor. Griffon will snapshot the array it receives at every call to visualizeArray(array).

You can then scroll through the snapshots by using the navigation UI in the Griffon header to visualize how your array changed from one visualizeArray(array) call to the next.
