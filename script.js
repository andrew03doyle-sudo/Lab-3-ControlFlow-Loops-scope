

function logOut(...args) {
  const out = document.getElementById("output");
  out.textContent += args.join(" ") + "\n";
  console.log(...args);
}
function clearOut() {
  document.getElementById("output").textContent = "";
}


function runIfElse() {
  clearOut();
  const number = Number(document.getElementById("numberInput").value);

  if (number > 0) {
    logOut(`${number} is positive`);
  } else if (number < 0) {
    logOut(`${number} is negative`);
  } else {
    logOut(`The number is zero`);
  }
}


function runSwitch() {
  clearOut();
  const day = Number(document.getElementById("dayInput").value);
  let result;

  switch (day) {
    case 1: result = "Sunday"; break;
    case 2: result = "Monday"; break;
    case 3: result = "Tuesday"; break;
    case 4: result = "Wednesday"; break;
    case 5: result = "Thursday"; break;
    case 6: result = "Friday"; break;
    case 7: result = "Saturday"; break;
    default: result = "Invalid day (use 1–7)";
  }
  logOut(result);
}


function runLoops() {
  clearOut();

  
  for (let i = 1; i <= 5; i++) {
    logOut(`for → ${i}`);
  }

  
  let i = 1;
  while (i <= 5) {
    logOut(`while → ${i}`);
    i++;
  }

  
  let j = 1;
  do {
    logOut(`do...while → ${j}`);
    j++;
  } while (j <= 5);
}


function runBreak() {
  clearOut();
  for (let k = 1; k <= 5; k++) {
    if (k === 3) {
      logOut("break at 3");
      break; 
    }
    logOut(`break demo → ${k}`);
  }
}

function runContinue() {
  clearOut();
  for (let k = 1; k <= 5; k++) {
    if (k === 3) {
      logOut("continue at 3 (skipped)");
      continue; 
    }
    logOut(`continue demo → ${k}`);
  }
}


let globalVar = "I'm global!";

function scopeExample() {
  let localVar = "I'm local!";
  logOut("Inside function:", globalVar);
  logOut("Inside function:", localVar);
}

function runScope() {
  clearOut();
  scopeExample();

  if (true) {
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm also block-scoped (const)";
    var functionScoped = "I'm function-scoped (var)";
    logOut(blockLet);
    logOut(blockConst);
  }


  logOut(functionScoped);
  
}