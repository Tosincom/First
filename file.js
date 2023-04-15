let wordCount = 0;
let vowelCount = 0;


for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " " || sentence[i] === ".") {
    wordCount++;
  } else {
    const vowels = "aeiouAEIOU";
    if (vowels.includes(sentence[i])) {
      vowelCount++;
    }
  }
}
const sentence = "This is a sample sentence.";
console.log(`The sentence "${sentence}" has ${wordCount} words and ${vowelCount} vowels.`);