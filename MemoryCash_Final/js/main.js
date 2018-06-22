CSSPlugin.defaultTransformPerspective = 1000;
/* This object is a ninja!
See the Coin constructor in ninja.js*/
const ninja = new Coin(
  "spot_",
  "q",
  "qh",
  "inline-grid",
  "68px",
  "58px",
  "48px",
  "28px",
  "absolute",
  "1px",
  "url('assets/images/quarterTails.png')",
  "url('assets/images/quarterHeads.png')",
  "100% 100%",
  "hidden"
);

/*Global variables
(All work and no variables makes Jack a dull boy!)*/
const gameBoard = document.getElementById("gameBoard");
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const spotArray = ninja.cSpotArray;
const tidArray = ninja.cTidArray;
const hidArray = ninja.cHidArray;

//Order of execution
ninja.arrayMaker(ninja.cSpot, ninja.cTid, ninja.cHid, 100);
setInitialBoxes();
addElements();
setInitialTweens();
moneyStorage();
starStorage();
setInitialDollars();
setInitialMoves();
setInitialEarnings();

function setInitialBoxes() {
  let success = document.getElementById("successBox");
  let failure = document.getElementById("failureBox");
  success.style.display = "Grid";
  failure.style.display = "Grid";
  TweenMax.set(".boxsize", {
    rotationY: -180,
    scale: 0
  });
}

//Add stuff to the DOM
function addElements() {
  let qTails = "quarterTails_";
  let qHeads = "quarterHeads_";
  let iconsCopy = [];
  for (i = 0; i <= 99; i++) {
    iconsCopy.push(icons[i]);
  }
  let chaos = mix1(iconsCopy);
  let iconStyle = "fa-";

  //Shuffle the icons
  function mix1(iconsCopy) {
    let currentIndex = iconsCopy.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = iconsCopy[currentIndex];
      iconsCopy[currentIndex] = iconsCopy[randomIndex];
      iconsCopy[randomIndex] = temporaryValue;
    }
    return iconsCopy;
  }

  //This makes me loopy!
  for (let i = 0; i <= 99; i++) {
    //Spots
    new Adjoin("div", spotArray[i], spotArray[i]).addChildTo("gameBoard");
    //Tails
    new Adjoin("div", tidArray[i], qTails + i, "fas", iconStyle + chaos[i], "symbol", "nothing", iconStyle + chaos[i]).addChildTo(spotArray[i]);
    // heads
    new Adjoin("div", hidArray[i], tidArray[i], qHeads + i).addChildTo(spotArray[i]);
    //Add Styles needed for the Spot element's grid layout
    document.getElementById(spotArray[i]).style.display = "grid";
    document.getElementById(spotArray[i]).style.gridarea = spotArray[i];

    // Add styles needed for the Heads images.
    ninja.cDisplay(hidArray[i]);
    ninja.cMargin(hidArray[i]);
    ninja.cHBackground(hidArray[i]);
    ninja.cBackgroundSize(hidArray[i]);
    ninja.cBackFace(hidArray[i]);

    //Add styles needed for the Tails images.
    ninja.cDisplay(tidArray[i]);
    ninja.cPosiiton(tidArray[i]);
    ninja.cMargin(tidArray[i]);
    ninja.cTBackground(tidArray[i]);
    ninja.cBackgroundSize(tidArray[i]);
    ninja.cBackFace(tidArray[i]);

    /*Set size based on widow width to match media queries
    in css.  Avoids hundreds of CSS #Ids listed for the
    with and height of the quarters.*/
    if (w > 991) {
      ninja.cWidth1(hidArray[i]);
      ninja.cHeight1(hidArray[i]);
      ninja.cWidth1(tidArray[i]);
      ninja.cHeight1(tidArray[i]);
    } else if (w > 767 && w < 992) {
      ninja.cWidth2(hidArray[i]);
      ninja.cHeight2(hidArray[i]);
      ninja.cWidth2(tidArray[i]);
      ninja.cHeight2(tidArray[i]);
    } else if (w > 575 && w < 768) {
      ninja.cWidth3(hidArray[i]);
      ninja.cHeight3(hidArray[i]);
      ninja.cWidth3(tidArray[i]);
      ninja.cHeight3(tidArray[i]);
    } else if (w > 320 && w < 576) {
      ninja.cWidth4(hidArray[i]);
      ninja.cHeight4(hidArray[i]);
      ninja.cWidth4(tidArray[i]);
      ninja.cHeight4(tidArray[i]);
    }
  }
}

//Set the initial view for the tween animations.
function setInitialTweens() {
  for (let i = 0; i <= 99; i++) {
    let tween5 = document.getElementById(tidArray[i]);
    let tween6 = document.getElementById(hidArray[i]);
    TweenMax.set(tween5, {
      rotationY: -180,
      scale: 0
    });
    TweenMax.set(tween6, {
      rotationY: 0,
      scale: 0
    });
    TweenMax.to(tween5, 2, {
      scale: 1,
      opacity: 1,
      delay: 0.5
    });
    TweenMax.to(tween6, 2, {
      scale: 1,
      opacity: 1,
      delay: 0.5
    });
  }
}

function moneyStorage() {
  if (localStorage.getItem("earnings") !== 0) {
    sensei.earnings = localStorage.getItem("earnings");
  } else if (localStorage.getItem("earnings") <= 0) {
    localStorage.setItem("earnings", 0.00);
  }
  if (sensei.modalOpen == true) {
    let earningsDisplay = document.getElementById("earningsDisplayed");
    let amountStored = parseFloat(localStorage.getItem("earnings"));
    let dollarsShown = parseFloat(sensei.dollars);
    let newEarningsTotal = amountStored + dollarsShown;
    localStorage.setItem("earnings", newEarningsTotal);
    earningsDisplay.innerHTML = newEarningsTotal.toFixed(2);
  }
}

function starStorage() {
  if (localStorage.getItem("stars") !== 0) {
    sensei.stars = localStorage.getItem("stars");
  } else if (localStorage.getItem("stars") <= 0) {
    console.log("entered");
    parseInt(localStorage.setItem("stars", 0), 10);
  }

  let starsDisplay = document.getElementById("starsTotal");
  let starsStored = parseInt(localStorage.getItem("stars"), 10);
  starsDisplay.innerHTML = starsStored.toString();
}

function setInitialDollars() {
  let amountLocation = document.getElementById("dollarsNum");
  let dollarsAmount = sensei.dollars;
  amountLocation.innerHTML = dollarsAmount.toFixed(2);
}

function setInitialMoves() {
  let movesLocation = document.getElementById("movesNum");
  let movesAmount = sensei.moves;
  movesLocation.innerHTML = movesAmount;
}

function setInitialEarnings() {
  let earningsDisplay2 = document.getElementById("earningsDisplayed");
  let earningsObjAmount = parseFloat(sensei.earnings);
  earningsDisplay2.innerHTML = earningsObjAmount.toFixed(2);
}

function setInitialStars() {
  let starsDisplay2 = document.getElementById("starsTotal");
  let starsObjAmount = parseInt(sensei.stars, 10);
  starsDisplay2.innerHTML = starsObjAmount;
}

/*Event listener to resize each coin if the window is resized by the
user.  Sets size based on window width to match CSS media Queries.
Avoids hundreds of CSS #ids being listed for the width and height of
the quarters.*/
window.addEventListener("resize", setQuarterSize);

function setQuarterSize() {
  for (let i = 0; i <= 99; i++) {
    let tween1 = document.getElementById(hidArray[i]);
    let tween2 = document.getElementById(tidArray[i]);
    let spots = document.getElementById(spotArray[i]);
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (w > 991) {
      TweenMax.to(".symbol", 0, {
        fontSize: "2.5em"
      });
      TweenMax.to(tween1, 0, {
        width: "68px",
        height: "68px"
      });
      TweenMax.to(tween2, 0, {
        width: "68px",
        height: "68px"
      });

    } else if (w > 767 && w < 992) {
      TweenMax.to(".symbol", 0, {
        fontSize: "2.2em",
      });
      TweenMax.to(tween1, 0, {
        width: "58px",
        height: "58px"
      });
      TweenMax.to(tween2, 0, {
        width: "58px",
        height: "58px"
      });

    } else if (w > 575 && w < 768) {
      TweenMax.to(".symbol", 0, {
        fontSize: "2em",
      });
      TweenMax.to(tween1, 0, {
        width: "48px",
        height: "48px"
      });
      TweenMax.to(tween2, 0, {
        width: "48px",
        height: "48px"
      });

    } else if (w > 320 && w < 576) {
      TweenMax.to(".symbol", 0, {
        fontSize: "1em",
      });
      TweenMax.to(tween1, 0, {
        width: "28px",
        height: "28px"
      });
      TweenMax.to(tween2, 0, {
        width: "28px",
        height: "28px"
      });
    }

    for (let i = 0; i <= 99; i++) {
      if (sensei.headsUp[i] == false) {
        let tween3 = document.getElementById(hidArray[i]);
        let tween4 = document.getElementById(tidArray[i]);
        TweenMax.to(tween3, 0, {
          rotationY: 180
        });
        TweenMax.to(tween4, 0, {
          rotationY: 0
        });
      }
    }
  }
}

/*Event Delegation.  Loops through all the quarters when one of them is clicked.
Does a bunch of other stuff too! This is basically the engine the propels the game.*/
document.getElementById("gameBoard").addEventListener("click", function(event) {
  if (sensei.modalOpen == false) {
    if (sensei.count < 2) {
      for (let i = 0; i <= 99; i++) {
        let divId = "div.q" + i;
        let tween7 = document.getElementById(hidArray[i]);
        let tween8 = document.getElementById(tidArray[i]);

        if (event.target && event.target.matches(divId)) {
          if (sensei.headsUp[i] == true) {
            sensei.headsUp[i] = false;
            sensei.count = sensei.count + 1;

            //flip the coins to reveal the symbols
            TweenMax.to(tween7, 1, {
              rotationY: 180
            });
            TweenMax.to(tween8, 0.1, {
              scale: 1.5,
              repeat: 7,
              yoyo: true,
              delay: 0.1
            });
            TweenMax.to(tween8, 1, {
              rotationY: 0
            });

            if (sensei.headsUp[i] == false) {
              window.setTimeout(coinFlip, 100);

              function coinFlip() {
                let audio = new Audio("assets/sounds/coin-flip.wav");
                audio.play();
              }
            }

            //find the HTML data property for detecting the symbols
            if (sensei.count == 1) {
              sensei.clickedCoin1 = document.getElementById(tidArray[i]);
              sensei.clickedCoin3 = document.getElementById(hidArray[i]);
              sensei.data1 = sensei.clickedCoin1.dataset.fa;
            } else if (sensei.count == 2) {
              sensei.clickedCoin2 = document.getElementById(tidArray[i]);
              sensei.clickedCoin4 = document.getElementById(hidArray[i]);
              sensei.data2 = sensei.clickedCoin2.dataset.fa;

              // These are the wheels the game rides on
              nonMatchingPair();
              matchingPair();
            }
          }
        }
      }
    }
  }
}, false);

function matchingPair() {
  // check if the symbols match
  if (sensei.data1 == sensei.data2) {
    window.setTimeout(chaChing, 1200);

    function chaChing() {
      let audio = new Audio("assets/sounds/chaching.wav");
      audio.play();
    }
    subtractMoves();
    addMoney();
    flashGreen();
    awardStars();
    winGame();

    //Wait fopr the animations to complete.
    window.setTimeout(countReset, 200);
  }
}

function nonMatchingPair() {
  //check if the symbols do not match
  if (sensei.data1 !== sensei.data2) {

    window.setTimeout(buzz, 1500);

    function buzz() {
      let audio = new Audio("assets/sounds/front-door-buzzer.wav");
      audio.play();
    }
    subtractMoves();
    subtractMoney();
    flashRed();

    //Wait fopr the animations to complete.
    window.setTimeout(countReset, 2500);

    // reset all the bools
    for (let i = 0; i <= 99; ++i) {
      sensei.headsUp[i] = true;
    }

    loseGame();

  }
}

function subtractMoves() {
  let subtractMovesLocation = document.getElementById("movesNum");
  let movesMinuend = sensei.moves;
  let movesSubtrahend = movesMinuend - 1;
  sensei.moves = movesSubtrahend;
  subtractMovesLocation.innerHTML = movesSubtrahend;
}

function addMoney() {
  let addMoneyLocation = document.getElementById("dollarsNum");
  let dollarsAddend1 = sensei.dollars;
  let dollarsAddend2 = dollarsAddend1 + 0.50;
  sensei.dollars = dollarsAddend2;
  addMoneyLocation.innerHTML = dollarsAddend2.toFixed(2);

  //When Dollar$ is above 0, change the text to green.
  if (sensei.dollars > 0) {
    TweenMax.to(addMoneyLocation, 1, {
      css: {
        color: "#00d61f"
      },
      ease: Power2.easeOut,
      delay: 1.5
    });
  }
}

function subtractMoney() {
  let subtractMoneyLocation = document.getElementById("dollarsNum");
  let dollarsMinuend = sensei.dollars;
  let dollarsSubtrahend = dollarsMinuend - 0.50;
  sensei.dollars = dollarsSubtrahend;
  subtractMoneyLocation.innerHTML = dollarsSubtrahend.toFixed(2);

  //When Dollar$ is below 0, change the text to red.
  if (sensei.dollars < 0) {
    TweenMax.to(subtractMoneyLocation, 1, {
      css: {
        color: "#FF0000"
      },
      ease: Power2.easeOut,
      delay: 1.5
    });
  }
}

function flashGreen() {
  TweenMax.to("#gameBoard", 1, {
    css: {
      backgroundColor: "#00d61f"
    },
    ease: Power2.easeOut,
    delay: 1.5
  });
  TweenMax.to("#gameBoard", 1, {
    css: {
      backgroundColor: "#300057"
    },
    ease: Power2.easeOut,
    delay: 2
  });
}

function flashRed() {
  TweenMax.to("#gameBoard", 1, {
    css: {
      backgroundColor: "#FF0000"
    },
    ease: Power2.easeOut,
    delay: 1.5
  });
  TweenMax.to(sensei.clickedCoin1, 1, {
    rotationY: 180,
    delay: 1.5
  });
  TweenMax.to(sensei.clickedCoin3, 1, {
    rotationY: 0,
    delay: 1.5
  });
  TweenMax.to(sensei.clickedCoin2, 1, {
    rotationY: 180,
    delay: 1.5
  });
  TweenMax.to(sensei.clickedCoin4, 1, {
    rotationY: 0,
    delay: 1.5
  });
  TweenMax.to("#gameBoard", 1, {
    css: {
      backgroundColor: "#300057"
    },
    ease: Power2.easeOut,
    delay: 2
  });
}

function awardStars() {
  if ((sensei.dollars >= 10.00 && sensei.moves >= 80) || (sensei.dollars >= 20.00 && sensei.moves >= 50) || (sensei.dollars >= 50.00 && sensei.moves >= 20)) {
    let giftStar;
    let awardStar;
    let starsNum;
    let starsText;
    if (sensei.dollars >= 10.00 && sensei.dollars < 20.00) {
      sensei.stars = parseInt(sensei.stars, 10) + parseInt(1, 10);
      let starsNum = sensei.stars;
      let starsText = starsNum.toString();
      localStorage.setItem("stars", starsNum)
      document.getElementById("starsTotal").innerHTML = starsText;
      console.log("first star awarded " + sensei.stars);
      sensei.starID = "star_1";
      sensei.tweenStar = "#star_1";
      giftStar = sensei.starID;
      awardStar = sensei.tweenStar;
    } else if (sensei.dollars >= 20.00 && sensei.dollars < 50.00) {
      sensei.stars = parseInt(sensei.stars, 10) + parseInt(1, 10);
      let starsNum = sensei.stars;
      let starsText = starsNum.toString();
      localStorage.setItem("stars", starsNum)
      document.getElementById("starsTotal").innerHTML = starsText;
      console.log("second star awarded" + sensei.stars);
      sensei.starID = "star_2";
      sensei.tweenStar = "#star_2";
      giftStar = sensei.starID;
      awardStar = sensei.tweenStar;
    } else if (sensei.dollars >= 50.00) {
      sensei.stars = parseInt(sensei.stars, 10) + parseInt(1, 10);
      let starsNum = sensei.stars;
      let starsText = starsNum.toString();
      localStorage.setItem("stars", starsNum)
      document.getElementById("starsTotal").innerHTML = starsText;
      console.log("third star awarded" + sensei.stars);
      sensei.starID = "star_3";
      sensei.tweenStar = "#star_3";
      giftStar = sensei.starID;
      awardStar = sensei.tweenStar;
    }
    document.getElementById(giftStar).style.color = "yellow";
    TweenMax.to(awardStar, 0.5, {
      rotation: 360,
      scale: 1.5,
      repeat: 3,
      yoyo: true,
    });
    window.setTimeout(spinDown, 100);

    function spinDown() {
      let audio = new Audio("assets/sounds/spindown.wav");
      audio.play();
    }
  }
}

function winGame() {
  if (sensei.dollars >= 50.00 && sensei.moves > 0) {
    TweenMax.set(".failure", {
      opacity: 0
    });
    TweenMax.to(".boxsize", 1, {
      rotationY: 0,
      scale: 1,
      delay: 1.5
    });
    sensei.modalOpen = true;

    window.setTimeout(ohYeah, 1500);

    function ohYeah() {
      let audio = new Audio("assets/sounds/oh-yeah.wav");
      audio.play();
    }

    window.setTimeout(winSounds, 2500);

    function winSounds() {
      let audio = new Audio("assets/sounds/crowd-cheer.wav");
      audio.play();
    }

    //Save earnings
    moneyStorage();
  }
}

function loseGame() {
  if (sensei.moves < 1) {

    window.setTimeout(toilet, 2500);

    function toilet() {
      let audio = new Audio("assets/sounds/toilet-flushing.wav");
      audio.play();
    }

    TweenMax.set(".success", {
      opacity: 0
    });
    TweenMax.to(".boxsize", 1, {
      rotationY: 0,
      scale: 1,
      delay: 1.5
    });
    sensei.modalOpen = true;

    //Save earnings
    moneyStorage();
  }
}

//When the reset button is clicked, play the animation then reload the page.
document.getElementById("refresh").addEventListener("click", function(event) {

  window.setTimeout(turnOn, 975);

  function turnOn() {
    let audio = new Audio("assets/sounds/turn-on-epic.wav");
    audio.play();
  }

  for (let i = 0; i <= 99; i++) {
    let tween9 = document.getElementById(hidArray[i]);
    let tween10 = document.getElementById(tidArray[i]);

    CustomWiggle.create("funWiggle", {
      wiggles: 20,
      type: "anticipate"
    });
    TweenMax.to("#refresh", 2, {
      rotation: 60,
      ease: "funWiggle",
      delay: 0.1
    });
    TweenMax.to(tween9, 5, {
      scale: 0,
      opacity: 0,
      delay: 0.5
    });
    TweenMax.to(tween10, 5, {
      scale: 0,
      opacity: 0,
      delay: 0.5
    });
  }

  if (sensei.modalOpen == true) {
    TweenMax.to(".boxsize", 1, {
      rotationY: -180,
      scale: 0,
      delay: 1.5
    });
    TweenMax.to(".success", 1, {
      opacity: 0
    });
    TweenMax.to(".failure", 1, {
      opacity: 0
    });
  }

  //Wait fopr the animations to complete.
  window.setTimeout(pageReload, 6000);
}, false);

//timeout function
function pageReload() {
  location.reload();
}

//timeout function
function countReset() {
  sensei.count = 0;
}