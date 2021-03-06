let numberUser = prompt("Hello!\n" + "Type a number between 0 and 999");
let numberIn = parseInt(numberUser);

let unite = numberIn % 10;
let dizaine = (numberIn % 100 - unite) / 10;
let centaine = (numberIn % 1000 - numberIn % 100) / 100;

let unitText;
let dizText;
let centText;

let arrayNb = [];
let nbZero = 0;     // in case of number = 0
let checkValid = isNaN(numberIn);   // is it a valid number ?

function analyseCent(number) {        /// CENTAINE
    /// CHECK FOR VALID NUMBER
    if (checkValid === true || numberIn >= 1000 ) {
        alert("Type a valid number Please");
        location.reload();          /// REPLAY
    } else {
        switch (centaine) {
            case 0:
                centText = "zero";
                nbZero++;
                break;
            case 1:
                centText = "One-hundred";
                break;
            case 2:
                centText = "Two-hundred";
                break;
            case 3:
                centText = "Three-hundred";
                break;
            case 4:
                centText = "Four-hundred";
                break;
            case 5:
                centText = "Five-hundred";
                break;
            case 6:
                centText = "Six-Hundred";
                break;
            case 7:
                centText = "Seven-hundred";
                break;
            case 8:
                centText = "Eight-hundred";
                break;
            case 9:
                centText = "Nine-hundred";
        }
        arrayNb[0] = centText;
        analyseUnit(number)
    }
}

function analyseUnit(number) {        /// UNITE
    switch (unite) {
        case 0:
            unitText = "zero";
            nbZero++;
            break;
        case 1:
            unitText = "one";
            break;
        case 2:
            unitText = "two";
            break;
        case 3:
            unitText = "three";
            break;
        case 4:
            unitText = "four";
            break;
        case 5:
            unitText = "five";
            break;
        case 6:
            unitText = "six";
            break;
        case 7:
            unitText = "seven";
            break;
        case 8:
            unitText = "eight";
            break;
        case 9:
            unitText = "nine";
    }
    arrayNb[2] = unitText;
    analyseDiz(number);
}

function analyseDiz(number) {       /// DIZAINE
        switch (dizaine) {
            case 0:
                dizText = "zero";
                nbZero++;
                break;
            case 1:
                if (unitText !== "zero") {
                    switch (unitText) {
                        case "one":
                            dizText = "eleven";
                            break;
                        case "two":
                            dizText = "twelve";
                            break;
                        case "three":
                            dizText = "thirteen";
                            break;
                        case "four":
                            dizText = "fourteen";
                            break;
                        case "five":
                            dizText = "fifteen";
                            break;
                        case "six":
                            dizText = "sixteen";
                            break;
                        case "seven":
                            dizText = "seventeen";
                            break;
                        case "eight":
                            dizText = "eighteen";
                            break;
                        case "nine":
                            dizText = "nineteen";
                    } 
                    arrayNb[2] ="zero";
                    
                } else {
                    dizText = "ten";   
                }
                break;
            case 2:
                dizText = "twenty";
                break;
            case 3:
                dizText = "thirty";
                break;
            case 4:
                dizText = "fourty";
                break;
            case 5:
                dizText = "fifty";
                break;
            case 6:
                dizText = "sixty";
                break;
            case 7:
                dizText = "seventy";
                break;
            case 8:
                dizText = "eighty";
                break;
            case 9:
                dizText = "ninety";
        }
    arrayNb[1] = dizText;
    joinText();
}

function joinText() {           /// ARRAY CLEAN AND JOIN

    let filterArray = arrayNb.filter(function (empty) {
        return (empty !== "zero");
    });

    let numberText = filterArray.join('-');

    if (nbZero == 3) {          /// RESULT ALERT
        alert("Your number is Zero");
    } else {
        alert("Your number is " + numberText);
    }
    location.reload();          /// REPLAY
}

analyseCent(numberIn);          /// FUNCTION CALL
