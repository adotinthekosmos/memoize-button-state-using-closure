const btnTV = document.getElementById("tv");
const btnLamp = document.getElementById("lamp");
const btnCassette = document.getElementById("cassette");

const toggleBtnClass = (button, condition) => {
  if (condition === false) {
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
  } else {
    button.classList.add("btn-primary");
    button.classList.remove("btn-danger");
  }
};

const logDevice = (deviceNames, deviceValues) => {
  deviceValues.forEach((value, index) => {
    console.log(deviceNames[index], value);
  });
  console.log("<--------------->");
};

const switchDevice = () => {
  let tv = true;
  let lamp = true;
  let cassette = true;

  const toggle = device => {
    switch (device) {
      case "tv":
        tv = !tv;
        logDevice(["tv", "lamp", "cassette"], [tv, lamp, cassette]);
        toggleBtnClass(btnTV, tv);
        break;

      case "lamp":
        lamp = !lamp;
        logDevice(["tv", "lamp", "cassette"], [tv, lamp, cassette]);
        toggleBtnClass(btnLamp, lamp);
        break;

      case "cassette":
        cassette = !cassette;
        logDevice(["tv", "lamp", "cassette"], [tv, lamp, cassette]);
        toggleBtnClass(btnCassette, cassette);
        break;

      default:
        break;
    }
  };

  return toggle;
};

const toggleDevice = switchDevice();

btnTV.addEventListener("click", () => {
  toggleDevice("tv");
});

btnLamp.addEventListener("click", () => {
  toggleDevice("lamp");
});

btnCassette.addEventListener("click", () => {
  toggleDevice("cassette");
});
