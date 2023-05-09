var currentTheme = "one";

function writeDisplay(element) {
  let display = document.querySelector(".text").innerHTML;
  if (display === "0" || display === "ERROR") {
    document.querySelector(".text").innerHTML = element.innerHTML;
  } else {
    if (display.length >= 14) {
    } else {
      document.querySelector(".text").innerHTML += element.innerHTML;
    }
  }
}

function sliceDisplay() {
  let display = document.querySelector(".text").innerHTML;
  if (display === "0") {
  } else {
    if (display.length === 1 || display === "ERROR") {
      document.querySelector(".text").innerHTML = "0";
    } else {
      document.querySelector(".text").innerHTML = display.slice(
        0,
        display.length - 1
      );
    }
  }
}

function equals() {
  try {
    let display = document.querySelector(".text").innerHTML;
    let answer = eval(display);
    document.querySelector(".text").innerHTML =
      String(answer).length > 12 ? Number(answer).toFixed(12) : answer;
  } catch (error) {
    document.querySelector(".text").innerHTML = "ERROR";
  }
}

function clearDisplay() {
  document.querySelector(".text").innerHTML = "0";
}

function changeTheme(element) {
  if (currentTheme === element.id) {
    return;
  }
  swapClass(currentTheme, element.id);
  document.getElementById(currentTheme).style.backgroundColor = "transparent";
  currentTheme = element.id;
  switch (currentTheme) {
    case "one":
      element.style.backgroundColor = "hsl(6, 63%, 50%)";
      break;

    case "two":
      element.style.backgroundColor = "hsl(185, 42%, 37%)";
      break;

    case "three":
      element.style.backgroundColor = "hsl(281, 89%, 26%)";
      break;
    default:
      break;
  }
}

function swapClass(prevTheme, newTheme) {
  document.querySelector("body").classList.remove(`body-state-${prevTheme}`);
  document.querySelector("body").classList.add(`body-state-${newTheme}`);

  document
    .querySelector(".display")
    .classList.remove(`display-state-${prevTheme}`);
  document.querySelector(".display").classList.add(`display-state-${newTheme}`);

  let elem = document.querySelectorAll(`.text-state-${prevTheme}`);

  for (const ele of elem) {
    ele.classList.remove(`text-state-${prevTheme}`);
    ele.classList.add(`text-state-${newTheme}`);
  }

  document
    .querySelector(".keypad")
    .classList.remove(`keypad-state-${prevTheme}`);
  document.querySelector(".keypad").classList.add(`keypad-state-${newTheme}`);

  elem = document.querySelectorAll(`.button-state-${prevTheme}`);

  for (const ele of elem) {
    ele.classList.remove(`button-state-${prevTheme}`);
    ele.classList.add(`button-state-${newTheme}`);
  }

  elem = document.querySelectorAll(`.reset-del-state-${prevTheme}`);

  for (const ele of elem) {
    ele.classList.remove(`reset-del-state-${prevTheme}`);
    ele.classList.add(`reset-del-state-${newTheme}`);
  }

  document
    .querySelector(".equals")
    .classList.remove(`equals-state-${prevTheme}`);
  document.querySelector(".equals").classList.add(`equals-state-${newTheme}`);
}
