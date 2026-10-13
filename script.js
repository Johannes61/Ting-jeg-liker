// intro effekten

const words = document.querySelectorAll(".word");

words.forEach((word, index) => {

  setTimeout(() => {

    word.classList.add("show");

  }, 400 + index * 500);

});


// ting jeg liker

const items = [

  {
    text: "Gaming",
    image:
      "https://web-assets.bcg.com/dims4/default/6bf597f/2147483647/strip/true/crop/2880x1620+0+0/resize/1200x675!/format/webp/quality/80/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Ff4%2F91%2F951c660f421daa8788e93548d42b%2Fvideo-gaming-report-2026-hero.jpg"
  },

  {
    text: "Pc-er",
    image:
      "https://www.greencom.no/images_hovedside/1920-1080-ad.jpg?1771617482306"
  },

  {
    text: "Sove",
    image:
      "https://sunnidrett.no/wp-content/uploads/2019/05/Derfor-er-det-viktig-%C3%A5-sove-nok-Sunn-Idrett.jpg"
  },

  {
    text: "Sushi",
    image:
      "https://trinesmatblogg.no/wp-content/uploads/2022/09/IMG_0173.jpg"
  },

  {
    text: "Sove mer",
    image:
      "https://sunnidrett.no/wp-content/uploads/2019/05/Derfor-er-det-viktig-%C3%A5-sove-nok-Sunn-Idrett.jpg"
  }

];


const section = document.querySelector("#scrollSection");

const thing = document.querySelector("#thing");

const image = document.querySelector("#mainImage");

const counter = document.querySelector("#counter");


let currentIndex = 0;


// bytte tekst og bilde

function changeItem(index) {

  if (index === currentIndex) {
    return;
  }

  currentIndex = index;

  thing.classList.add("changing");
  image.classList.add("changing");


  setTimeout(() => {

    thing.textContent = items[index].text;

    image.src = items[index].image;


    counter.textContent =
      String(index + 1).padStart(2, "0")
      + " / "
      + String(items.length).padStart(2, "0");


    thing.classList.remove("changing");
    image.classList.remove("changing");

  }, 250);

}


// scroll

window.addEventListener("scroll", () => {

  const rect = section.getBoundingClientRect();

  const scrollHeight =
    section.offsetHeight - window.innerHeight;


  let progress =
    -rect.top / scrollHeight;


  progress =
    Math.max(0, Math.min(1, progress));


  const index =
    Math.min(
      items.length - 1,
      Math.floor(progress * items.length)
    );


  changeItem(index);

});