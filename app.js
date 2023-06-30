//selecting elements & added an event listener in order
//to play sound in the background

lofi = document.querySelector("audio");
sound = document.querySelector(".sound");
sound.addEventListener("click", function (e) {
  e.preventDefault();
  lofi.play();
});
sound.addEventListener("dblclick", function (e) {
  e.preventDefault();
  lofi.pause();
});

// array of words
const words = [
  "Achievement",
  "Brilliant",
  "Cheerful",
  "Delight",
  "Hardworking",
  "Excellence",
  "Genuine",
  "Grateful",
  "Happiness",
  "Harmony",
  "Inspire",
  "Integrity",
  "Joy",
  "Kindness",
  "Loyal",
  "Motivate",
  "Optimistic",
  "Passion",
  "Radiant",
  "Resilient",
  "Satisfaction",
  "Sincere",
  "Succeed",
  "Thriving",
  "Triumph",
  "Upbeat",
  "Vibrant",
  "Victory",
  "Wisdom",
  "Accomplish",
  "Believe",
  "Caring",
  "Compassion",
  "Dedication",
  "Empathy",
  "Faith",
  "Generosity",
  "Goodwill",
  "Helpful",
  "Imaginative",
  "Innovative",
  "Jubilant",
  "Kindhearted",
  "Laughter",
  "Mentor",
  "Nurture",
  "Opportunity",
  "Perseverance",
  "Positivity",
  "Respect",
  "Satisfaction",
  "Selfless",
  "Supportive",
  "Tenacious",
  "Trustworthy",
  "Unyielding",
  "Warmhearted",
  "Wonder",
  "Zest",
  "Authentic",
  "Bliss",
  "Courage",
  "Dream",
  "Empower",
  "Fearless",
  "Gratitude",
  "Harmony",
  "Improve",
  "Inclusion",
  "Justice",
  "Kind",
  "Love",
  "Noble",
  "Open-minded",
  "Patience",
  "Quality",
  "Resilience",
  "Serenity",
  "Strong",
  "Thankful",
  "Unity",
  "Vision",
  "Wellness",
  "Youthful",
  "Zeal",
];

//made a copy of the words array
const words2 = [...words];

//selecting elements again
let p = document.querySelector(".one p");
let p2 = document.querySelector(".p2");
let submit = document.querySelector(".submit");
let input = document.querySelector(".input");
let submit2 = document.querySelector(".submit2");
let input2 = document.querySelector(".input2");
let body = document.querySelector("body");
let form = document.querySelector(".grid");
let form2 = document.querySelector(".grid2");
let h2 = document.querySelector("h2");

//declaring for later use
let points = 0;
let randomWord;
let randomWord2;
let points2 = 0;
let bad2 = 0;
let bad = 0;

//used async and await to extract data from defintions API
async function getWords() {
  try {
    bad = 0;
    randomWord = words[Math.floor(Math.random() * words.length)];
    const data_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
    const response = await fetch(data_url);
    const data = await response.json();
    const def = data[0].meanings[0].definitions[0].definition;
    p.innerHTML = def;
  } catch (error) {
    console.log(error);
  }

  //added a condition that halts the game if player finishes 5 questions

  if (words.length <= 80) {
    input.disabled = true;
    submit.disabled = true;
    p.innerHTML = "Do Player 2";
  }

  //added another condition for when both player finish
  if (words.length <= 80 && words2.length <= 80) {
    if (points > points2) {
      p.innerHTML = `Player 1 won -- (${points}/50)`;
    } else if (points < points2) {
      p.innerHTML = `Player 2 won -- (${points2}/50)`;
    } else {
      p.innerHTML = `It's a tie! Player 1 and Player 2 both scored ${points2}. `;
    }

    //set the display property to none

    input.style.display = "none";
    submit.style.display = "none";
    input2.style.display = "none";
    submit2.style.display = "none";
    p2.style.display = "none";
    form2.style.display = "none";

    //added prompt in order to ask if the user wanted to play again
    let endPrompt = prompt("Play again? y/n");
    if (endPrompt.toLowerCase() === "yes" || endPrompt.toLowerCase() === "y") {
      let bigRed = document.createElement("button");
      bigRed.innerHTML = "Play Again";
      bigRed.classList.add("sound");
      form.appendChild(bigRed);
      bigRed.addEventListener("click", function () {
        window.location.reload();
      });
    }
    p.innerHTML += " Thanks for playing!";
  }
}

//same as the first function, just different variables
async function getWords2() {
  try {
    bad2 = 0;
    randomWord2 = words2[Math.floor(Math.random() * words2.length)];
    const data_url2 = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord2}`;
    const response2 = await fetch(data_url2);
    const data2 = await response2.json();
    const def2 = data2[0].meanings[0].definitions[0].definition;
    p2.innerHTML = def2;
  } catch (error) {
    console.log(error);
  }
  if (words2.length <= 80) {
    input2.disabled = true;
    submit2.disabled = true;
    p2.innerHTML = "Do Player 1";
  }
  if (words.length <= 80 && words2.length <= 80) {
    if (points > points2) {
      p.innerHTML = `Player 1 won -- (${points}/50)`;
    } else if (points < points2) {
      p.innerHTML = `Player 2 won -- (${points2}/50)`;
    } else {
      p.innerHTML = `It's a tie! Player 1 and Player 2 both scored ${points2}. `;
    }
    input.style.display = "none";
    submit.style.display = "none";
    input2.style.display = "none";
    submit2.style.display = "none";
    form2.style.display = "none";
    p2.style.display = "none";

    let endPrompt = prompt("Play again? y/n");
    if (endPrompt.toLowerCase() === "yes" || endPrompt.toLowerCase() === "y") {
      let bigRed = document.createElement("button");
      bigRed.innerHTML = "Play Again";
      bigRed.classList.add("sound");
      form.appendChild(bigRed);
      bigRed.addEventListener("click", function () {
        window.location.reload();
      });
    }
    p.innerHTML += " Thanks for playing!";
  }
}

//added event listener for when the user hits the submit button
submit.addEventListener("click", function (e) {
  e.preventDefault();

  input.disabled = false;

  //if statement to check if it matches
  if (input.value.toLowerCase() == randomWord.toLowerCase()) {
    //each correct answer = 10points
    points += 10;
    //assigned classes for styling
    input.classList.remove("pink");
    input.classList.add("green");
    let ind = words[randomWord];
    //removed the word from the array after it was called
    //so there will be no duplicate
    words.splice(ind, 1);
    input.value = "";
    //calling the function again
    getWords();
  } else {
    input.classList.remove("green");
    input.classList.add("pink");
    //bad variable is used to determine the hint system
    //after the player inputs incorrect answer
    bad++;
    if (bad == 1) {
      alert(`Incorrect! Hint #1: Word length: ${randomWord.length}`);
      input.value = "";
    } else if (bad == 2) {
      alert(
        `Hint #2: The word starts with '${randomWord[0]}', and ends with '${
          randomWord[randomWord.length - 1]
        }' `
      );
      input.value = "";
    } else if (bad >= 3) {
      alert(`The word is: ${randomWord}`);
      input.value = randomWord;
      input.disabled = true;
      bad = 0;
    }
    //made it so that the user can't have negative points
    if (points <= 0) {
      points = 0;
    }
    points -= 5;
  }
});

//same as first one, different variables
submit2.addEventListener("click", function (e) {
  e.preventDefault();
  input2.disabled = false;
  if (input2.value.toLowerCase() == randomWord2.toLowerCase()) {
    points2 += 10;
    input2.classList.remove("pink");
    input2.classList.add("green");
    let ind2 = words2[randomWord2];
    words2.splice(ind2, 1);
    input2.value = "";
    getWords2();
  } else {
    input2.classList.remove("green");
    input2.classList.add("pink");
    bad2++;
    if (bad2 == 1) {
      alert(`Incorrect! Hint #1: Word length: ${randomWord2.length}`);
      input2.value = "";
    } else if (bad2 == 2) {
      alert(
        `Hint #2: The word starts with '${randomWord2[0]}', and ends with '${
          randomWord2[randomWord2.length - 1]
        }' `
      );
      input2.value = "";
    } else if (bad2 >= 3) {
      alert(`The word is: ${randomWord2}`);
      input2.value = randomWord2;
      input2.disabled = true;
      bad2 = 0;
    }
    if (points2 <= 0) {
      points2 = 0;
    }
    points2 -= 5;
  }
});

//calling the funcitons
getWords();
getWords2();
