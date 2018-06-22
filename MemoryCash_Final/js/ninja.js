/*CONSTRUCTOR
c = coin
Spot = spot id concatenation designator
Tid = tails id concatenation designator
Hid = heads id concatenation designator
Dis = display
Dim1, Dim2, Dim3 & dim4 = size (width and height)
Pos = position
Mrg - margin
BGSize = bacgroundSize
BFVis = backfaceVisibility*/
function Coin(cSpot, cTid, cHid, cDis, cDim1, cDim2, cDim3, cDim4, cPos, cMrg, cTBkg, cHBkg, cBGSize, cBFVis) {
  if (!(this instanceof Coin)) {
    return new Coin(cSpot, cTid, cHid, cDis, cDim1, cDim2, cDim3, cDim4, cPos, cMrg, cTBkg, cHBkg, cBGSize, cBFVis);
  }
  this.cSpot = cSpot;
  this.cTid = cTid;
  this.cHid = cHid;
  this.cDis = cDis;
  this.cDim1 = cDim1;
  this.cDim2 = cDim2;
  this.cDim3 = cDim3;
  this.cDim4 = cDim4;
  this.cPos = cPos;
  this.cMrg = cMrg;
  this.cTBkg = cTBkg;
  this.cHBkg = cHBkg;
  this.cBGSize = cBGSize;
  this.cBFVis = cBFVis;
  this.arrayMaker = function(cSpot, cTid, cHid, arrLng) {
    for (i = 0; i <= arrLng - 1; i++) {
      this.cSpotArray.push(cSpot + i);
      this.cTidArray.push(cTid + i);
      this.cHidArray.push(cHid + i);
    }
  }
  this.cSpotArray = [];
  this.cTidArray = [];
  this.cHidArray = [];
  this.cDisplay = function(array) {
    document.getElementById(array).style.display = this.cDis;
  }
  this.cPosiiton = function(array) {
    document.getElementById(array).style.position = this.cPos;
  }
  this.cMargin = function(array) {
    document.getElementById(array).style.margin = this.cMrg;
  }
  this.cTBackground = function(array) {
    document.getElementById(array).style.background = this.cTBkg;
  }
  this.cHBackground = function(array) {
    document.getElementById(array).style.background = this.cHBkg;
  }
  this.cBackgroundSize = function(array) {
    document.getElementById(array).style.backgroundSize = this.cBGSize;
  }
  this.cBackFace = function(array) {
    document.getElementById(array).style.backfaceVisibility = this.cBFVis;
  }
  this.cWidth1 = function(array) {
    document.getElementById(array).style.width = this.cDim1;
  }
  this.cHeight1 = function(array) {
    document.getElementById(array).style.height = this.cDim1;
  }
  this.cWidth2 = function(array) {
    document.getElementById(array).style.width = this.cDim2;
  }
  this.cHeight2 = function(array) {
    document.getElementById(array).style.height = this.cDim2;
  }
  this.cWidth3 = function(array) {
    document.getElementById(array).style.width = this.cDim3;
  }
  this.cHeight3 = function(array) {
    document.getElementById(array).style.height = this.cDim3;
  }
  this.cWidth4 = function(array) {
    document.getElementById(array).style.width = this.cDim4;
  }
  this.cHeight4 = function(array) {
    document.getElementById(array).style.height = this.cDim4;
  }
};

/*CONSTRUCTOR
creates a child element of the specified kind
adds the child to specified parent
optionally assigns the child an ID
optionally assigns the child up to 5 classes*/

/*TODO - This is not what I really want!
Using "undefined" really does not "work" in the sense
that if I want to specify something like:
new Adjoin(childKind, childID, dataClass).addChildTo(parentID);
(that is, call Adjoin with no classes declared), it will set 'dataClass'
as the 'firstChildClass'.  That is why in the main.js file, in the second
new Adjoin I have "nothing" as a class!

I am studying the spread and rest operators to be able to do something like:
function foo(childKind, childID, childDataName, childData, ...childClass){}

See my utterfailure at this in experimental.js

Perhaps the Udacity reviewer for this assignment can make a suggestion?
*/
function Adjoin(childKind = undefined, childID = undefined, firstChildClass = undefined, secondChildClass = undefined, thirdChildClass = undefined, fourthChildClass = undefined, fifthChildClass = undefined, dataClass = undefined) {
  if (!(this instanceof Adjoin)) {
    return new Adjoin(childKind = undefined, childID = undefined, firstChildClass = undefined, secondChildClass = undefined, thirdChildClass = undefined, fourthChildClass = undefined, fifthChildClass = undefined, dataClass = undefined);
  }
  this.childKind = childKind;
  this.childID = childID;
  this.firstChildClass = firstChildClass;
  this.secondChildClass = secondChildClass;
  this.thirdChildClass = thirdChildClass;
  this.fourthChildClass = thirdChildClass;
  this.fifthChildClass = thirdChildClass;
  this.dataClass = dataClass;
  this.addChildTo = function(parentID) {

    const parent = document.getElementById(parentID);
    const child = document.createElement(childKind);

    parent.appendChild(child);

    if (childID !== undefined) {
      child.setAttribute("id", childID);
    }

    if (firstChildClass !== undefined) {
      child.classList.add(firstChildClass);
    }

    if (secondChildClass !== undefined) {
      child.classList.add(secondChildClass);
    }

    if (thirdChildClass !== undefined) {
      child.classList.add(thirdChildClass);
    }

    if (fourthChildClass !== undefined) {
      child.classList.add(fourthChildClass);
    }
    if (fifthChildClass !== undefined) {
      child.classList.add(fifthChildClass);
    }
    if (dataClass !== undefined) {
      child.setAttribute("data-fa", dataClass);
    }
  }
};

//Set up the sensei Object.
const sensei = {
  headsUp: [],
  count: 0,
  clickedCoin1: null,
  clickedCoin2: null,
  clickedCoin3: null,
  clickedCoin4: null,
  data1: null,
  data2: null,
  dollars: 0.00,
  moves: 100,
  earnings: 0.00,
  stars: 0,
  starsEarned: 0,
  starID: null,
  tweenStar: null,
  modalOpen: false
};

//Populate sensei.HeadsUp[] with bools set to true.
for (let i = 0; i <= 99; ++i) {
  sensei.headsUp[i] = true;
}

/*Original list of fontAwesome
iconStyle before the shuffle.*/
const icons = [
  "bell",
  "seedling",
  "dollar-sign",
  "euro-sign",
  "lira-sign",
  "pound-sign",
  "rupee-sign",
  "shekel-sign",
  "won-sign",
  "yen-sign",
  "crow",
  "feather",
  "dove",
  "frog",
  "kiwi-bird",
  "chess-bishop",
  "chess-king",
  "chess-knight",
  "chess-pawn",
  "chess-queen",
  "chess-rook",
  "coffee",
  "user-secret",
  "eye",
  "tint",
  "crosshairs",
  "adjust",
  "smile",
  "poo",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "subscript",
  "superscript",
  "bug",
  "compass",
  "bomb",
  "heart",
  "magnet",
  "globe",
  "futbol",
  "hourglass",
  "leaf",
  "lemon",
  "life-ring",
  "lightbulb",
  "lock",
  "user-ninja",
  "user-astronaut",
  "bell",
  "seedling",
  "dollar-sign",
  "euro-sign",
  "lira-sign",
  "pound-sign",
  "rupee-sign",
  "shekel-sign",
  "won-sign",
  "yen-sign",
  "crow",
  "feather",
  "dove",
  "frog",
  "kiwi-bird",
  "chess-bishop",
  "chess-king",
  "chess-knight",
  "chess-pawn",
  "chess-queen",
  "chess-rook",
  "coffee",
  "user-secret",
  "eye",
  "tint",
  "crosshairs",
  "adjust",
  "smile",
  "poo",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "subscript",
  "superscript",
  "bug",
  "compass",
  "bomb",
  "heart",
  "magnet",
  "globe",
  "futbol",
  "hourglass",
  "leaf",
  "lemon",
  "life-ring",
  "lightbulb",
  "lock",
  "user-ninja",
  "user-astronaut"
]