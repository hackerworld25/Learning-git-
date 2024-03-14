const cheakBoxList = document.querySelectorAll(".cheakbox");
const inputFieldss = document.querySelectorAll(".input_text");
const erroeSelector = document.querySelector(".progress_bar");
const erroeValue = document.querySelector(".progress_value");

cheakBoxList.forEach((cheakBox) => {
  cheakBox.addEventListener("click", (e) => {
    const inputFieldsListner = [...inputFieldss].every((input) => {
      console.log(input.value);
      return input.value;
    });
    if (inputFieldsListner) {
      cheakBox.parentElement.classList.toggle("completed");
      erroeValue.style.width = '33.33%'
    } else {
      erroeSelector.parentElement.classList.add("error-show");
    }
  });
});

inputFieldss.forEach((input) => {
  input.addEventListener("focus", () => {
    erroeSelector.parentElement.classList.remove("error-show");
  });
});
