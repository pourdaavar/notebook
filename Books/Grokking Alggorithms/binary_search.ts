function binarySearch(arr: number[], value: number) {
  let startElement = 0;
  let endElement = arr.length - 1;

  while (startElement <= endElement) {
    let mid = Math.floor((startElement + endElement) / 2);

    if (arr[mid] === value) {
      return mid;
    }

    if (value < arr[mid]) {
      endElement = mid - 1;
    } else {
      startElement = mid + 1;
    }
  }
  return -1;
}
