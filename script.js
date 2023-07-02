const handleMenu = () => {
  let element = document.getElementById("burguer-menu");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
};

const validateNif = () => {
  let value = document.getElementById("nif-input").value;
  let error = document.getElementById("nif-error");

  if (value.length > 8 || value === "") {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
};
