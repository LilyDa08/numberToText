let numberUser =prompt("Hello!\n" + "Type a number between 0 and 999");
let numberIn = parseInt(numberUser);

let unite = numberIn % 10;
let dizaine = (numberIn % 100 - unite) / 10;
let centaine = (numberIn % 1000 - numberIn % 100) / 100;

let unitText;
let dizText;
let centText;

let arrayNb = [];
let nbZero = 0; // in case of number = 0

function analyseNb(number) {

    /// CHECK FOR VALID NUMBER

    if ((isNaN(numberIn) || numberIn == '' || numberIn == null ) && numberIn !== 0)  {
        alert("Type a valid number Please");
        location.reload();  /// REPLAY
    } else {
        /// CENTAINE 
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
        arrayNb.push(centText);

        /// DIZAINE

        switch (dizaine) {
            case 0:
                dizText = "zero";
                nbZero++;
                break;
            case 1:
                dizText = "ten";
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

        arrayNb.push(dizText);

        /// UNITE

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
        arrayNb.push(unitText);

        joinText();
    }
};


/// ARRAY CLEAN AND JOIN

function joinText() {

    let filterArray = arrayNb.filter(function (empty) {
        return (empty !== (undefined || "zero" || ''));
    });

    let numberText = filterArray.join('-');

    /// RESULT ALERT

    if (nbZero == 3) {
        alert("Your number is Zero");
    } else {
        alert("Your number is " + numberText);
    }
    location.reload();  /// REPLAY
}

/// FUNCTION CALL

analyseNb(numberIn);
