import { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import { getBubbleSortAnimations } from "../sortingAlgorithms/bubbleAlgo.js";
import { getSelectionSortAnimations } from "../sortingAlgorithms/selectionAlgo.js";
import { getInsertionSortAnimations } from "../sortingAlgorithms/insertionAlgo.js";
import { getMergeSortAnimations } from "../sortingAlgorithms/mergeAlgo.js";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickAlgo.js";
import { getHeapSortAnimations } from "../sortingAlgorithms/heapAlgo.js";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [NUMBER_OF_ARRAY_BARS, setNUMBER_OF_ARRAY_BARS] = useState(60);

  function generateRandomArray() {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(Number(randNum(5, 500)));
    }
    setArray(newArray);
  }

  useEffect(() => {
    generateRandomArray();
  }, [NUMBER_OF_ARRAY_BARS]);

  const animate = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx, color] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      setTimeout(() => {
        if (color === false) {
          barOneStyle.backgroundColor = "green";
          barTwoStyle.backgroundColor = "green";
        } else if (color === true) {
          barOneStyle.backgroundColor = "blue";
          barTwoStyle.backgroundColor = "blue";
          [array[barOneIdx], array[barTwoIdx]] = [
            array[barTwoIdx],
            array[barOneIdx],
          ];
          barOneStyle.height = `${array[barOneIdx]}px`;
          barTwoStyle.height = `${array[barTwoIdx]}px`;
        }

        setTimeout(() => {
          barOneStyle.backgroundColor = "cyan";
          barTwoStyle.backgroundColor = "cyan";
        }, 30);
      }, i * 25);
    }
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    animate(animations);
  };
  const selectionSort = () => {
    const animations = getSelectionSortAnimations(array);
    animate(animations);
  };
  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    animate(animations);
  };
  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    animate(animations);
  };
  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    animate(animations);
  };
  const heapSort = () => {
    const animations = getHeapSortAnimations(array);
    animate(animations);
  };

  return (
    <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="btn-container">
        <button onClick={() => generateRandomArray()}>
          Generate New Array
        </button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
        <button onClick={() => selectionSort()}>Selection Sort</button>
        <button onClick={() => insertionSort()}>Insertion Sort</button>
        <button onClick={() => mergeSort()}>Merge Sort</button>
        <button onClick={() => quickSort()}>Quick Sort</button>
        <button onClick={() => heapSort()}>Heap Sort</button>
        <div className="slider-container">
          <label htmlFor="rng">
            <b>Count:</b>
          </label>
          <input
            id="rng"
            type="range"
            min={10}
            max={100}
            value={NUMBER_OF_ARRAY_BARS}
            onChange={(e) => setNUMBER_OF_ARRAY_BARS(Number(e.target.value))}
            className="range-slider"
          />
          <span className="slider-value">{NUMBER_OF_ARRAY_BARS}</span>
        </div>
      </div>
    </div>
  );
}

function randNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

export default SortingVisualizer;
