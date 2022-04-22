if (localStorage.getItem("check1") === "true") {
  let a = document.getElementById("history1");
  history1.innerText = `✓ Sumo Squat`;
}
if (localStorage.getItem("check2") === "true") {
  let b = document.getElementById("history2");
  history2.innerText = `✓ Overhead Triceps Extension`;
}

if (localStorage.getItem("check3") === "true") {
  let c = document.getElementById("history3");
  history3.innerText = `✓ Diamond Push-ups`;
}

//////////////////////////////////////////////////////////

if (localStorage.getItem("check4") === "true") {
  let d = document.getElementById("history4");
  history4.innerText = `✓ High Knees`;
}

if (localStorage.getItem("check5") === "true") {
  let e = document.getElementById("history5");
  history5.innerText = `✓ Butt Kicks`;
}

if (localStorage.getItem("check6") === "true") {
  let f = document.getElementById("history6");
  history6.innerText = `✓ Lateral Shuffles`;
}

function submitCheck3() {
  // alert('test')
  let a = document.getElementById("history1");
  history1.innerText = `✗ Sumo Squat`;

  let b = document.getElementById("history2");
  history2.innerText = `✗ Overhead Triceps Extension`;

  let c = document.getElementById("history3");
  history3.innerText = `✗ Diamond Push-ups`;

  let d = document.getElementById("history4");
  history4.innerText = `✗ High Knees`;

  let e = document.getElementById("history5");
  history5.innerText = `✗ Butt Kicks`;

  let f = document.getElementById("history6");
  history6.innerText = `✗ Lateral Shuffles`;

  localStorage.clear();
}

//   if(){
//   let b = document.getElementById("history2");
//   history2.innerText = `History: ${localStorage.getItem("check2")}`;)

//   if(){
//   let c = document.getElementById("history3");
//   history3.innerText = `History: ${localStorage.getItem("check3")}`;)
