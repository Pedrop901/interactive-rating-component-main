const ratingBtn = document.querySelectorAll(".ratingBtn button");
const submitBtn = document.querySelector(".submitBtn");
const div = document.querySelector(".divElementP");

let ratingNumber;

ratingBtn.forEach((button, i) => {
  button.addEventListener("click", () => {
    ratingNumber = button.innerText;
  });
});

const newElement = (parent) => {
  const elementP = document.createElement("p");
  elementP.innerText = `You selected ${ratingNumber} out of 5`;
  parent.append(elementP);
};

submitBtn.addEventListener("click", () => {
  if (!ratingNumber) {
  } else {
    document.querySelector(".js-container_2").
      style.display = "block";
    newElement(div);
  }
});

