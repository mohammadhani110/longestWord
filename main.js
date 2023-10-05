function findLongestWordWithMostVowels(sentence) {
  // Split the sentence into words and filter out non-English characters
  const words = sentence
    .split(/\s+/)
    .map((word) => word.replace(/[^a-zA-Z]/g, ""));

  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelCount = 0;

  // Iterate through the words and find the longest word with the most vowels
  for (const word of words) {
    const wordLength = word.length;
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;

    if (
      wordLength > maxWordLength ||
      (wordLength === maxWordLength && vowelCount > maxVowelCount)
    ) {
      longestWord = word;
      maxWordLength = wordLength;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const longestWord = findLongestWordWithMostVowels(sentence);

console.log(longestWord);

// 1)TestCase with Non-English Charachters
// const sentence = "Hello, world! This is a test sentence.";
// Expected Output: "sentence"

// 2)TestCase with Empty Input
// const sentence = "";
// Expected Output: ""

// 3)TestCase with Number
// const sentence = "The year 2023 is here.";
// Expected Output: "here"

// 4)TestCase with Only Non-English Charachters
// const sentence = "!@#$%^&*()";
// Expected Output: ""

// 5)TestCase with Multiple Words with the Same Length but Different Vowels
// const sentence = "Choose the word with vowels like apple and kite";
// Expected Output: "apple"

// 6)TestCase with Multiple Words with the Same Length and Vowels
// const sentence = "This is a test with equal words like boat and kite";
// Expected Output: "boat"

// 7)TestCase with Only One Word
// const sentence = "Hello";
// Expected Output: "Hello"
