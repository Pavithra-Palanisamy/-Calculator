function container(){

var containerArea = document.getElementById("container")
containerArea.addEventListener('keyup', (e) => {(e.key === "enter") ? console.log(e.key) : ""})

document.onkeypress = (e) => {if(e.key === "Enter") e.preventDefault()}

var title = document.getElementById("container")

var heading = document.createElement("div");
heading.id = "header" 
var headerTitle = document.createElement("h1")
headerTitle.innerText="CALCULATOR";
headerTitle.id = "headingCalculator";
heading.appendChild(headerTitle);

title.appendChild(heading);

/*===========================================================================*/

var display = document.createElement("div");
display.id = "section2";
    

var displayInput1 = document.createElement("input");
displayInput1.id = "input1";
displayInput1.placeholder = "First value"
display.appendChild(displayInput1);

var displayInput2 = document.createElement("input");
displayInput2.id = "input2";
displayInput2.placeholder = "Second value"
displayInput2.addEventListener("click",a)
display.appendChild(displayInput2);

var displayOutput = document.createElement("div");
displayOutput.id = "outputValue";
display.appendChild(displayOutput);


title.appendChild(display);

/*=============================================================================*/

var operators = document.createElement("div");
operators.id = "section3";

var operatorKeysLine1 = document.createElement("div");
operatorKeysLine1.id = "section3Top";

var add = document.createElement("button");
add.id = "addKey"
add.className = "operatorKey"
add.addEventListener("click",addOperator);
var addFont = document.createElement("i")
addFont.className = "fas fa-plus";
addFont.id = "operatorIcon"
add.appendChild(addFont)
operatorKeysLine1.appendChild(add)

var subt = document.createElement("button");
subt.id = "subKey"
subt.className = "operatorKey"
subt.addEventListener("click",subOperator);
var subtFont = document.createElement("i")
subtFont.className = "fas fa-minus";
subtFont.id = "operatorIcon"
subt.appendChild(subtFont)
operatorKeysLine1.appendChild(subt)

var mul = document.createElement("button");
mul.id = "mulKey"
mul.className = "operatorKey"
mul.addEventListener("click",mulOperator);
var mulFont = document.createElement("i")
mulFont.className = "fas fa-times";
mulFont.id = "operatorIcon"
mul.appendChild(mulFont)
operatorKeysLine1.appendChild(mul)

var divi = document.createElement("button");
divi.id = "addKey"
divi.className = "operatorKey"
divi.addEventListener("click",diviOperator);
var divFont = document.createElement("i")
divFont.className = "fas fa-divide";
divFont.id = "operatorIcon"
divi.appendChild(divFont)
operatorKeysLine1.appendChild(divi)

operators.appendChild(operatorKeysLine1);

var operatorKeysLine2 = document.createElement("div");


operatorKeysLine2.id = "section3Bottom";
var squareRoot = document.createElement("button");
squareRoot.id = "squareRootKey"
squareRoot.className = "operatorKey"
squareRoot.addEventListener("click",squareRootOperator);
var squareRootFont = document.createElement("i")
squareRootFont.className = "fas fa-square-root-alt";
squareRootFont.id = "operatorIcon"
squareRoot.appendChild(squareRootFont)
operatorKeysLine2.appendChild(squareRoot)

var cubeRoot = document.createElement("button");
cubeRoot.id = "cubeRootKey"
cubeRoot.className = "operatorKey"
cubeRoot.addEventListener("click",cubeRootOperator);
var cubeRootFont = document.createElement("i")
cubeRootFont.innerText="∛"
cubeRootFont.id = "operatorIcon"
cubeRoot.appendChild(cubeRootFont)
operatorKeysLine2.appendChild(cubeRoot)

var square = document.createElement("button");
square.id = "squareKey"
square.className = "operatorKey"
square.addEventListener("click",squareOperator);
var squareFont = document.createElement("i")
squareFont.innerText="square"
squareFont.className = "squareSymbolSize";
square.appendChild(squareFont)
operatorKeysLine2.appendChild(square)

var cube = document.createElement("button");
cube.id = "cubeKey"
cube.className = "operatorKey"
cube.addEventListener("click",cubeOperator);
var cubeFont = document.createElement("i")
cubeFont.innerText="cube"
cubeFont.className = "squareSymbolSize";
cube.appendChild(cubeFont)
operatorKeysLine2.appendChild(cube)

operators.appendChild(operatorKeysLine2);

title.appendChild(operators);

/*==============================================================================*/

var numberKeys = document.createElement("div");
numberKeys.id = "section4";

var numberKeysTop = document.createElement("div");
numberKeysTop.id = "section4Top";

var one = document.createElement("button");
one.id = "oneKey"
one.className = "numberKeys";
one.innerText = "1";
one.addEventListener("click",() => keyValue(one.innerText))
numberKeysTop.appendChild(one)

var two = document.createElement("button");
two.id = "twoKey"
two.className = "numberKeys";
two.innerText = "2";
two.addEventListener("click",() => keyValue(two.innerText))
numberKeysTop.appendChild(two)

var three = document.createElement("button");
three.id = "threeKey"
three.className = "numberKeys";
three.innerText = "3";
three.addEventListener("click",() => keyValue(three.innerText))
numberKeysTop.appendChild(three)

var allClear = document.createElement("button");
allClear.id = "allClearKey"
allClear.className = "numberKeys";
allClear.innerText = "AC";
function clearValues() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("outputValue").innerText = "";
    dataValues1 = "";    
    dataValues2 = "";
    targetValue = 1;
}
allClear.addEventListener("click",clearValues)
numberKeysTop.appendChild(allClear)

numberKeys.appendChild(numberKeysTop);


var numberKeysMiddle = document.createElement("div");
numberKeysMiddle.id = "section4Middle";

var four = document.createElement("button");
four.id = "fourKey"
four.className = "numberKeys";
four.innerText = "4";
four.addEventListener("click",() => keyValue(four.innerText))
numberKeysMiddle.appendChild(four)

var five = document.createElement("button");
five.id = "fiveKey"
five.className = "numberKeys";
five.innerText = "5";
five.addEventListener("click",() => keyValue(five.innerText))
numberKeysMiddle.appendChild(five)

var six = document.createElement("button");
six.id = "sixKey"
six.className = "numberKeys";
six.innerText = "6";
six.addEventListener("click",() => keyValue(six.innerText))
numberKeysMiddle.appendChild(six)

var decimal = document.createElement("button");
decimal.id = "decimalKey"
decimal.className = "numberKeys";
decimal.innerText = ".";
decimal.addEventListener("click",() => keyValue(decimal.innerText))
numberKeysMiddle.appendChild(decimal)

numberKeys.appendChild(numberKeysMiddle)

title.appendChild(numberKeys);

/*===================================================================*/

var numberKeys2 = document.createElement("div");
numberKeys2.id = "section5";

var numberKeysBottom = document.createElement("div");
numberKeysBottom.id = "section5Bottom";

var seven = document.createElement("button");
seven.id = "sevenKey"
seven.className = "numberKeys";
seven.innerText = "7";
seven.addEventListener("click",() => keyValue(seven.innerText))
numberKeysBottom.appendChild(seven)

var eight = document.createElement("button");
eight.id = "eightKey"
eight.className = "numberKeys";
eight.innerText = "8";
eight.addEventListener("click",() => keyValue(eight.innerText))
numberKeysBottom.appendChild(eight)

var nine = document.createElement("button");
nine.id = "nineKey"
nine.className = "numberKeys";
nine.innerText = "9";
nine.addEventListener("click",() => keyValue(nine.innerText))
numberKeysBottom.appendChild(nine)

var zero = document.createElement("button");
zero.id = "zeroKey"
zero.className = "numberKeys";
zero.innerText = "0";
zero.addEventListener("click",() => keyValue(zero.innerText))
numberKeysBottom.appendChild(zero)

numberKeys2.appendChild(numberKeysBottom)

var enterButton = document.createElement("button");
enterButton.id ="enterKey"
enterButton.innerText ="Enter"
enterButton.addEventListener("click",a)

numberKeys2.appendChild(enterButton)

title.appendChild(numberKeys2);

}container();

/*========================================================================*/

var dataValues1 = "";
var dataValues2 = "";
var targetValue = 1;

function a(){
    var logtargetValue = function(){
    targetValue = 2;
}
logtargetValue();
}

function keyValue(p){
    
if(targetValue == 1){
    dataValues1 = dataValues1 + p;
    console.log(dataValues1)
    document.getElementById("input1").value = dataValues1;
}
else{
    dataValues2 = dataValues2 + p;
    console.log(dataValues2)
    document.getElementById("input2").value = dataValues2;
}
}

/*======================================================================*/

function addOperator(){
    var addAnswer = (parseFloat(dataValues1) + parseFloat(dataValues2))
    console.log(addAnswer)
    document.getElementById("outputValue").innerText = addAnswer;
}

function subOperator(){
    var answer = (parseFloat(dataValues1) - parseFloat(dataValues2))
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

function mulOperator(){
    var answer = (parseFloat(dataValues1) * parseFloat(dataValues2))
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

function diviOperator(){
    var answer = (parseFloat(dataValues1) / parseFloat(dataValues2))
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

function squareRootOperator(){
    var answer = Math.sqrt(parseFloat(dataValues1));
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

function cubeRootOperator(){
    var answer = Math.cbrt(parseFloat(dataValues1));
    document.getElementById("outputValue").innerText = answer;
}

function squareOperator(){
    var answer = (parseFloat(dataValues1) * parseFloat(dataValues1))
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

function cubeOperator(){
    var answer = (parseFloat(dataValues1) * parseFloat(dataValues1) * parseFloat(dataValues1))
    console.log(answer)
    document.getElementById("outputValue").innerText = answer;
}

/*=================================================================================*/
