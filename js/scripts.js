// input
const petcalcForm = document.getElementById('petcalc-form')

// functionality consts
const placesRounded = 2;

// output fields
// damage
const damageHighOutput = document.getElementById('damage-high-output');
const damageMiddleOutput = document.getElementById('damage-middle-output');
const damageLowOutput = document.getElementById('damage-low-output');
// resist
const resistHighOutput = document.getElementById('resist-high-output');
const resistMiddleOutput = document.getElementById('resist-middle-output');
const resistLowOutput = document.getElementById('resist-low-output');
// critical
const criticalHighOutput = document.getElementById('critical-high-output');
const criticalMiddleOutput = document.getElementById('critical-middle-output');
const criticalLowOutput = document.getElementById('critical-low-output');
// accuracy
const accuracyHighOutput = document.getElementById('accuracy-high-output');
const accuracyMiddleOutput = document.getElementById('accuracy-middle-output');
const accuracyLowOutput = document.getElementById('accuracy-low-output');
// healing
const healingHighOutput = document.getElementById('healing-high-output');
const healingLowOutput = document.getElementById('healing-low-output');
// piercing
const piercingHighOutput = document.getElementById('piercing-high-output');
const piercingLowOutput = document.getElementById('piercing-low-output');

// vars
let strength = 0;
let intellect = 0;
let agility = 0;
let will = 0;
let power = 0;

function setOutputs(event) {
    event.preventDefault();

    // get input
    const inputText = petcalcForm.data.value;

    // make list of stats from input
    const inputTextSplit = inputText.split(" ");

    // return early if input has too few/many arguments
    if (inputTextSplit.length != 5) {
        console.error("INPUT: NOT 5 ARGUMENTS")
        return;
    }

    // map input arr to integers
    const stats = inputTextSplit.map(Number);

    // return early if one or more element is not an integer
    if (!stats.every(Number.isInteger)) {
        console.error("INPUT: NOT ALL 5 ARE INTEGERS")
        return;
    }

    // update vars
    strength = stats[0];
    intellect = stats[1];
    agility = stats[2];
    will = stats[3];
    power = stats[4];

    // set all outputs

    setDamageOutputs();
    setResistOutputs();
    setCriticalOutputs();
    setAccuracyOutputs();
    setHealingOutputs();
    setPiercingOutputs();
}

function roundPlaces(num) {
    return Math.round(num * 10**placesRounded) / 10**placesRounded;
}

function setDamageOutputs() {
    damageHighOutput.innerText = roundPlaces((3/400) * (2*strength + 2*will + power));
    damageMiddleOutput.innerText = roundPlaces((2/400) * (2*strength + 2*will + power));
    damageLowOutput.innerText = roundPlaces((1/400) * (2*strength + 2*will + power));
}

function setResistOutputs() {
    resistHighOutput.innerText = roundPlaces((3/250)*(2*strength + 2*agility + power));
    resistMiddleOutput.innerText = roundPlaces((2/250)*(2*strength + 2*agility + power));
    resistLowOutput.innerText = roundPlaces((1/250)*(2*strength + 2*agility + power));
}

function setCriticalOutputs() {
    criticalHighOutput.innerText = roundPlaces((25/1000)*(2*agility + 2*will + power));
    criticalMiddleOutput.innerText = roundPlaces((20/1000)*(2*agility + 2*will + power));
    criticalLowOutput.innerText = roundPlaces((18/1000)*(2*agility + 2*will + power));
}

function setAccuracyOutputs() {
    accuracyHighOutput.innerText = roundPlaces((3/400)*(2*intellect + 2*agility + power));
    accuracyMiddleOutput.innerText = roundPlaces((2/400)*(2*intellect + 2*agility + power));
    accuracyLowOutput.innerText = roundPlaces((1/400)*(2*intellect + 2*agility + power));
}

function setHealingOutputs() {
    healingHighOutput.innerText = roundPlaces((13/2000)*(2*strength + 2*will + power));
    healingLowOutput.innerText = roundPlaces((6/2000)*(2*strength + 2*will + power));
}

function setPiercingOutputs() {
    piercingHighOutput.innerText = roundPlaces((5/2000)*(2*strength + 2*agility + power));
    piercingLowOutput.innerText = roundPlaces((3/2000)*(2*strength + 2*agility + power));
}

petcalcForm.onsubmit = setOutputs;