
// JavaScript code from index.html

// BEGIN: JavaScript code from index.html
console.log("starting calculator");

function calculateMwToDbm(mw) {
  return 10 * Math.log10(mw);
}

function calculateDbmToMw(dbm) {
  return Math.pow(10, dbm / 10);
}

function handleCalculate() {
  console.log("handling calculate");
  const mwInput = document.getElementById('mwInput');
  const dbmInput = document.getElementById('dbmInput');
  console.log("handling calculate 2");
  if (mwInput.value !== '') {
    console.log("mwInput " + mwInput.value);
    const mw = parseFloat(mwInput.value);
    console.log("mw float " + mw);
    const dbm = calculateMwToDbm(mw);
    console.log("dbm float " + dbm);
    dbmInput.value = dbm.toFixed(2);
  } else if (dbmInput.value !== '') {
    const dbm = parseFloat(dbmInput.value);
    const mw = calculateDbmToMw(dbm);
    mwInput.value = mw.toFixed(2);
  }
}

const calculateButton = document.getElementById('calculate-button');
// calculateButton.addEventListener('click', handleCalculate);

        // setTimeout(function() { displaymW(0); }, 1000);
        // setTimeout(function() { displaymW(1); }, 2000);
        // setTimeout(function() { displaymW(10); }, 3000);
        // setTimeout(function() { displaymW(100); }, 4000);
        // setTimeout(function() { displaymW(1000); }, 5000);

// END: JavaScript code from index.html
