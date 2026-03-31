/**
 * Bubble Sort Implementation
 * Simple and classic sorting algorithm
 */

/**
 * Sorts an array in ascending order using bubble sort algorithm.
 * @param arr - The array to be sorted
 * @returns A new sorted array
 */
function bubbleSort(arr: number[]): number[] {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  // Create a copy to avoid mutating the original array
  const result = [...arr];

  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // Swap elements
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        swapped = true;
      }
    }

    // If no swapping occurred, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return result;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log('Sorted array:', sortedArray);