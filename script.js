const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

let selectedItem = "";

const select = (index) => {
  for (
    let index = 0;
    index < document.getElementsByClassName("choice").length;
    index++
  ) {
    const element = document.getElementsByClassName("choice")[index];
    element.classList.remove("selected");
  }
  document.getElementsByClassName("choice")[index].classList.add("selected");

  selectedItem = `${
    document
      .getElementsByClassName("choice")
      [index].getElementsByTagName("p")[0].innerText
  }`;

  q(selectedItem);
};

function showResult() {
  if (selectedItem !== "") {
    document.getElementById("main").classList.add("hidden");
    document
      .getElementById("result")
      .getElementsByTagName("p")[2].innerText = `Feedback: ${selectedItem}`;

    document.getElementById("result").classList.remove("hidden");
  }
}
