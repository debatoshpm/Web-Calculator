function num(val) { 
    document.getElementById("result").value+=val;
  }
  function solve() { 
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
  }
  function clr() { 
    document.getElementById("result").value = "0";
  } 
  function back(){
    document.getElementById("result").value = value.substr(0, value.length - 1);
  }