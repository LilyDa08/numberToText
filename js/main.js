let numberUser = prompt("Hello!\n" + "Type a number between 0 and 999");
let numberIn = parseInt(numberUser);

let unite = numberIn % 10;
let dizaine = (numberIn % 100 - unite) / 10;
let centaine = (numberIn % 1000 - numberIn % 100) / 100;

let unitText;
let dizText;
let centText;

let arrayNb = [];
let nbZero = 0; // in case of number = 0
let checkValid = isNaN(numberIn); // is it a valid number ?

function analyseCent(number) {

    /// CHECK FOR VALID NUMBER

    if (checkValid === true) {
        alert("Type a valid number Please");
        location.reload(); /// REPLAY
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
                centText = "Two-hundreds";
                break;
            case 3:
                centText = "Three-hundreds";
                break;
            case 4:
                centText = "Four-hundreds";
                break;
            case 5:
                centText = "Five-hundreds";
                break;
            case 6:
                centText = "Six-Hundreds";
                break;
            case 7:
                centText = "Seven-hundreds";
                break;
            case 8:
                centText = "Eight-hundreds";
                break;
            case 9:
                centText = "Nine-hundreds";
                break;
        }
        arrayNb[0] = centText;
        analyseUnit(number)
    }
}       /// CENTAINE 

function analyseUnit(number) {
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
            break;
    }
    arrayNb[2] = unitText;
    analyseDiz(number);
}       /// UNITE

function analyseDiz(number) {
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
                break;
        }
    arrayNb[1] = dizText;

    joinText();
};      /// DIZAINE

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
    location.reload(); /// REPLAY
}

analyseCent(numberIn);      /// FUNCTION CALL
