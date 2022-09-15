let models = [
  {
    name: "Python",
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPgujrSYVRlhygV77QAxoPxLvV5jWDmATs1tozBvU0tF-Pny8UbJflAFyp9x7EGCz6kI&usqp=CAU",
  },
  {
    name: "Java",
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9cMrUc31f7qIRhA3M21HcJv4kQ_SU2I28PDekxJnee5bWki2qG8oD3lNjfDPF1OAmfk&usqp=CAU",
  },
  {
    name: "Javascript",
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOZDGEJT-ssoe25tmA1ex_ZUuACugzuwikQ&usqp=CAU",
  },
  {
    name: "C++",
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisyEZHrN5GAOKUh1FERdEXgbR7Hd5eGTnLg&usqp=CAU",
  },
  {
    name: "C#",
    id: 5,
    img: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/7e/d2/86/7ed286dd-96ca-b0e2-d1b0-21c09146154b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png",
  },
];

let index = 0;
let slaytCount = models.length;
let interval;
let settings = {
  duration: "3000",
  random: false,
};
showSlide(index);
init(settings);

document
  .querySelector(".uil-arrow-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });

document
  .querySelector(".uil-arrow-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].img);
  document.querySelector(".container").id = models[index].id;
}

document.querySelectorAll(".arrow").forEach((element) => {
  element.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach((element) => {
  element.addEventListener("mouseleave", function () {
    init(settings);
  });
});
function init(settings) {
  let prev;
  interval = setInterval(() => {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index === prev);
      {
        prev = index;
      }
    } else {
      if (slaytCount == index + 1) {
        index = 0;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}
