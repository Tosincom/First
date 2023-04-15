const readSentence = sentence => {
    let validSentence = sentence.split(".");

   
        let sentenceCount = validSentence[0].split(" ").length;
        let vowelCount = 0;
        let sentenceVowels = validSentence[0].split("");
        
        for (let i = 0; i < sentenceVowels.length; i++) {
            const vowels = ["a", "e", "i", "o", "u"];
            for(const vowels of vowels) {
                if (sentenceVowels[i] == vowels) {
                    vowelCount++
                }
            }
        }

        console.log(`You have ${sentenceCount} words in your sentence`);
        console.log(`You have ${vowelCount} vowels in your sentence`)
    }

readSentence("my blue dog is here");

