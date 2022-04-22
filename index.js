let nama = "";
let tinggi = 0;
let berat = 0;
let bmi = 0;

function weight() {
  nama = document.getElementById("Nama").value;
  tinggi = document.getElementById("Tinggi").value;
  berat = document.getElementById("Berat").value;
  bmi = tinggi - berat;
  //   alert(cardio)
  localStorage.setItem("bmi", bmi);
  localStorage.setItem("Nama", nama);
  localStorage.setItem("Tinggi", tinggi);
  localStorage.setItem("Berat", berat);

 
  if (!nama || !tinggi ||!berat){
    alert('Please complete the form first')
  }
  else{
    localStorage.setItem("Nama", nama);
    localStorage.setItem("Tinggi", tinggi);
    localStorage.setItem("Berat", berat);
    localStorage.setItem("bmi", bmi);
    if (bmi >= 110) {
      bmi = "Underweight";
    } else if (bmi <= 90) {
      bmi = "Overweight";
    } else {
      bmi = "Proportional";
    }
  
    localStorage.setItem("bmi", bmi);
    window.location.href = location.href = "./weight.html";
  }
}

function cardio() {
  nama = document.getElementById("Nama").value;
  tinggi = document.getElementById("Tinggi").value;
  berat = document.getElementById("Berat").value;
  bmi = tinggi - berat;
  localStorage.setItem("bmi", bmi);
  localStorage.setItem("Nama", nama);
  localStorage.setItem("Tinggi", tinggi);
  localStorage.setItem("Berat", berat);


  if (!nama || !tinggi ||!berat){
    alert('Please complete the form first')
  }
  else{
    localStorage.setItem("Nama", nama);
    localStorage.setItem("Tinggi", tinggi);
    localStorage.setItem("Berat", berat);
    localStorage.setItem("bmi", bmi);
    if (bmi >= 110) {
      bmi = "Underweight";
    } else if (bmi <= 90) {
      bmi = "Overweight";
    } else {
      bmi = "Proportional";
    }
  
    localStorage.setItem("bmi", bmi);
  
    window.location.href = location.href = "./cardio.html";
  }
}

let namaWeight = document.getElementById("namaWeight");
namaWeight.innerText = `Name: ${localStorage.getItem("Nama")}`;

let beratWeight = document.getElementById("beratWeight");
beratWeight.innerText = `Weight: ${localStorage.getItem("bmi")}`;

// let namaCardio = document.getElementById("namaCardio");
// namaCardio.innerText = `Nama: ${localStorage.getItem("Nama")}`;

// let beratCardio = document.getElementById("beratCardio");
// beratCardio.innerText = `Berat: ${localStorage.getItem("bmi")}`;

function submitCheck() {


  check1 = document.getElementById("check1").checked;
  check2 = document.getElementById("check2").checked;
  check3 = document.getElementById("check3").checked;

  // if (check1.checked) {
  //   check1 = "Sumo Squat";
  // }
  // if (check2 === 'on') {
  //   check2 = "Overhead Triceps Extension";
  // }
  // if (check3 === 'Diamond Push-ups') {
  //   check3 = "Diamond Push-ups";
  // }
  // alert(check1)
  localStorage.setItem("check1", check1);
  localStorage.setItem("check2", check2);
  localStorage.setItem("check3", check3);

  if(!check1&&!check2&&!check3){
    alert ('Please complete at least one workout first')
  }else{
    window.location.href = location.href = "./history.html";
  }

}

function submitCheck2() {
  check4 = document.getElementById("check4").checked;
  check5 = document.getElementById("check5").checked;
  check6 = document.getElementById("check6").checked;

  // if (check1.checked) {
  //   check1 = "Sumo Squat";
  // }
  // if (check2 === 'on') {
  //   check2 = "Overhead Triceps Extension";
  // }
  // if (check3 === 'Diamond Push-ups') {
  //   check3 = "Diamond Push-ups";
  // }
  // alert(check1)
  localStorage.setItem("check4", check4);
  localStorage.setItem("check5", check5);
  localStorage.setItem("check6", check6);

  if(!check4&&!check5&&!check6){
    alert ('Please complete at least one workout first')
  }else{
    window.location.href = location.href = "./history.html";
  }
}