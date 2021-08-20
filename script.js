function changeMode(themeobj){
    if(themeobj.dataset.mode == "light"){
        document.documentElement.setAttribute("data-theme","dark");
        document.getElementById("mode").innerHTML="NIGHT";
        document.getElementById("new").setAttribute("class","fas fa-sun");
        themeobj.dataset.mode ="dark";
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        themeobj.dataset.mode = "light";
        document.getElementById("mode").innerHTML="DAY";
        document.getElementById("new").setAttribute("class","fas fa-moon");
    }
}

// function changeText(){
//   document.getElementById("mode").innerHTML="NIGHT";
// }

let input = document.getElementById("input");
let output = document.getElementById("output");

function calulate(data) {
  switch (data) {
    case "AC":
      input.innerHTML = "";
      output.innerHTML = 0;
      break;
    case "C":
      input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
      output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
      break;
    case "=":
      output.innerHTML = math.evaluate(`${input.innerHTML}`);
      break;

    default:
      input.innerHTML += data;
  }
}