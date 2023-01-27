# Grokking Algorithms - Aditya Y. Bhargava

## Introduction
An *algorithm* is a set of instructions for doing a **(specific)** task. Every piece of code could be called an algorithm.

### Binary Search
Binary search is an alogrithms; its input is a sorted list of elements.
if an elment you're looking for is in the list, binary search returh the postion where it's located, otherwise, binary search returns `null`

Suppose you're searching for a person in the phone book. Their name start with *K*. You could start at  the begining and keep flipping pages until get to the *K*s. But you're more likely to start at a page in the middle, because you know the *K*s are going to be near the middle of the phone book.

Or suppose you're searching for a word in dictionay, and it starts with *O*. Again you'll start near the middle.

This is a search problem. And all these cases use the same algorithm to solve the problem: *Binary search*

---

##### How binary search work
I'm thinking of a set of number between 1 to 100.
| 1   | 2   | 3    | 4    | 5    |  ...   | 100 |
| --- | --- | --- | --- | --- | --- | --- |

you have ti try to guess my number in the fewes tries possible.
With every guess, I'll tell you if your guess is too low, too high, or correct.
suppose you start guessing like this: 1,2,3, ... Here's how it would go. it's simple search ( stupid search) in every search you're eliminating only one number. if my number was 99, it could take you 99 guesses to got there!

###### A better way to search
Here's a better technique. Start with *50*
with this trick you can eliminate half of the numbers!
suppose a number is higher than 50
your next guess should be *75* and go on!
with binary search, you guess the middle number and eliminate half the remaining numbers every time. that's it. whatever number i'm thinkning of, you can guess in a maximum of 7 steps! - because you eliminate so many numbers with every guess!

in general, for any list of *n*, binary search will take `log(n)`  steps to run in the worst case, whereas the *stupid search* will taske n steps.


>Binary search only works when your list is in sorted order! for example. the names in a phone book are sorted in aphabetical order, so you can use binary search to look for a name.


```typescript
function binarySearch(arr: number[], value: number) {
  let startElementIndex = 0;
  let endElementIndex = arr.length - 1;

  while (startElementIndex <= endElementIndex) {
    let mid = Math.floor((startElementIndex + endElementIndex) / 2);

    if (arr[mid] === value) {
      return mid;
    }

    if (value < arr[mid]) {
      endElementIndex = mid - 1;
    } else {
      startElementIndex = mid + 1;
    }
  }
  return -1;
}
```

