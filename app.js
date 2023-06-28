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

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let submit = document.querySelector(".submit");
let input = document.querySelector(".input");
let body = document.querySelector("body");
let form = document.querySelector("form");
let points = 0;
let randomWord;
let counter = 0;
let bad = 0;
let h2 = document.querySelector("h2");
let div = document.querySelector("div");

async function getWords() {
  try {
    bad = 0;
    randomWord = words[Math.floor(Math.random() * words.length)];
    const data_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`;
    const response = await fetch(data_url);
    const data = await response.json();

    const def = data[0].meanings[0].definitions[0].definition;
    p.innerHTML = def;
    console.log(randomWord);
  } catch (error) {
    console.log(error);
  }
  if (words.length <= 75) {
    h2.innerHTML = `Your score is ${points}/100`;
    input.style.display = "none";
    submit.style.display = "none";
    p.style.display = "none";
    let endPrompt = prompt("Play again? y/n");
    if (endPrompt.toLowerCase() === "yes" || endPrompt.toLowerCase() === "y") {
      let bigRed = document.createElement("button");
      bigRed.innerHTML = "Again";
      body.appendChild(bigRed);
      console.log(bigRed);
      bigRed.addEventListener("click", function () {
        window.location.reload();
      });
    } else {
    }
    h1.innerHTML = "Thank you for playing";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value.toLowerCase() == randomWord.toLowerCase()) {
    console.log("hey");
    points += 10;
    input.classList.remove("pink");
    input.classList.add("green");
    console.log(points);
    words.pop(randomWord);
    getWords();
  } else {
    input.classList.remove("green");
    input.classList.add("pink");
    alert("Incorrect!");
    bad++;
    if (bad >= 3) {
      alert(`The word is: ${randomWord}`);
      bad = 0;
    }
    if (points <= 0) {
      points = 0;
    }
    points -= 5;
  }
  input.value = "";
});

getWords();
