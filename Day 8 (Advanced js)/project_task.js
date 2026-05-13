function submitting() {
  let inputname = document.getElementById("textInput").value;

  if (inputname == "") {
    document.getElementById("output").innerText =
      "Please enter your name above...";
    return;
  }

  document.getElementById("output").innerText = "Hello" + " " + inputname;
}

function reset() {
  document.getElementById("textInput").value = "";
  document.getElementById("output").innerText = "";
}

function upperCase() {
  let inputname = document.getElementById("textInput").value;
  if (inputname == "") {
    document.getElementById("output").innerText =
      "Please enter your name above...";
    return;
  }
  document.getElementById("output").innerText =
    "Hello" + " " + inputname.toUpperCase();
}
