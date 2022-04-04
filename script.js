const data = [
  {
    quote: `"Betta fish have a Labyrinth Organ, that allows them to breathe air at the water’s surface."`,
    emoji: "🐠",
    image: `url(assets/cover_betta.jpg)`
  },
  {
    quote: `“Koi fish symbolize persistence, determination, wealth, success, and good fortune.”`,
    emoji: "🎏",
    image: `url(assets/koi.jpg)`
  },
  {
    quote: `"A school of goldfish is called a troubling."`,
    emoji: "🐟",
    image: `url(assets/goldfish.jpg)`
  },
  {
    quote: `“Salmon are considered a keystone species, which means they help define an entire ecosystem.”`,
    emoji: "🎣",
    image: `url(assets/salmon.jpg)`
  },
  {
    quote: `“Puffer fish can puff up to two or three times their normal size.”`,
    emoji: "🐡",
    image: `url(assets/pufferfish.jpg)`
  },
  {
    quote: `“Sharks are the only fish that have eyelids.”`,
    emoji: "🦈",
    image: `url(assets/shark.jpg)`
  },
  {
    quote: `“A baby seahorse is called a "fry.”`,
    emoji: "🐎",
    image: `url(assets/seahorse.jpg)`
  },
  {
    quote: `“Starfish are not fish. They are marine invertebrates."`,
    emoji: "⭐",
    image: `url(assets/starfish.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

// Check-Check: change text
quote.innerHTML =
  "Betta fish have a Labyrinth Organ, that allows them to breathe air at the water’s surface.";
// Check-Check: change emoji text
emoji.innerHTML = "🐠";
// Check-Check: background image
bgImage.style.backgroundImage = "url(/assets/cover_betta.jpg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randomButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
 

  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randomButton.addEventListener("click", function () {
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
  // Next Right Arrow
  if (event.keyCode === 39) {
    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Prev Left Arrow
  if (event.keyCode === 37) {
    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.keyCode === 32) {
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  }
});
