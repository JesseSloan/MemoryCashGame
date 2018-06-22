/*This script is here for the convenience of testing the funtionality
of this program.  Rather than playing the entire game to either a win
or lose condition, use this file to make the testing buttons operational.

Step #1: uncomment the button tags near the bottom of index.HTML

Step #2: uncomment the script tag (for testing.js) at the bottom of index.HTML

Step #3: open index.HTML in the browser.  Note: This program has only been
tested in Chrome.

Step #5: use the win and lose buttons (before clicking any of the coins) to test
the ultimate win/lose condition in any order you like. Further information and
instruction are shown in the dev tools console.

Step #6: use the Stars buttons in order (1,2,3) (and within one gameplay session)
for the best demonstration of the game mechanic, but you may also use the
Stars buttons in any order you like. Further information and instructions
are shown in the dev tools console.*/


document.getElementById("lose").addEventListener("click", function(event) {
  sensei.moves = 0;
  console.log("losing moves set to " + sensei.moves);
  console.log("Now select any coin.  Then, select any other coin.  chances are very good that it will not match the first coin you clciked.  The lose condition will play after you click the second coin.");
});
document.getElementById("win").addEventListener("click", function(event) {
  sensei.dollars = 51.00;
  sensei.moves = 5;
  console.log("winning dollars set to " + sensei.dollars);
  console.log("winning moves set to " + sensei.moves + " so that no stars will be awarded.")
  console.log("Now select any coin.  Then, in the elements section of the console enter control/command + F on your keyborad and find the DOM element for the coin you clicked.  (It is easiest if you click the top left coin as the first coin you select).  In the search field type the font awesome class name for the revealed symbol you see on the back of the coin you selected.  click the arrows next to the search field to reveal where the matching coin is located.  Click that coin.");
});
document.getElementById("oneStar").addEventListener("click", function(event) {
  sensei.dollars = 11.00;
  sensei.moves = 81;
  console.log("oneStar dollars set to " + sensei.dollars);
  console.log("oneStar Moves set to " + sensei.moves);
  console.log("Now select any coin.  Then, in the elements section of the console enter control/command + F on your keyborad and find the DOM element for the coin you clicked.  (It is easiest if you click the top left coin as the first coin you select).  In the search field type the font awesome class name for the revealed symbol you see on the back of the coin you selected.  click the arrows next to the search field to reveal where the matching coin is located.  Click that coin.");
});
document.getElementById("twoStars").addEventListener("click", function(event) {
  sensei.dollars = 21.00;
  sensei.moves = 51;
  console.log("twoStars dollars set to " + sensei.dollars);
  console.log("twoStars Moves set to " + sensei.moves);
  console.log("Now select any coin.  Then, in the elements section of the console enter control/command + F on your keyborad and find the DOM element for the coin you clicked.  (It is easiest if you click the top left coin as the first coin you select).  In the search field type the font awesome class name for the revealed symbol you see on the back of the coin you selected.  click the arrows next to the search field to reveal where the matching coin is located.  Click that coin.");
});
document.getElementById("threeStars").addEventListener("click", function(event) {
  sensei.dollars = 51.00;
  sensei.moves = 21;
  console.log("threeStars dollars set to " + sensei.dollars);
  console.log("threeStars Moves set to " + sensei.moves);
  console.log("Now select any coin.  Then, in the elements section of the console enter control/command + F on your keyborad and find the DOM element for the coin you clicked.  (It is easiest if you click the top left coin as the first coin you select).  In the search field type the font awesome class name for the revealed symbol you see on the back of the coin you selected.  click the arrows next to the search field to reveal where the matching coin is located.  Click that coin.");
});
document.getElementById("clear").addEventListener("click", function(event) {
  let x = parseInt(0, 10);
  localStorage.setItem("earnings", x);
  localStorage.setItem("stars", x);
  console.log("This clears the totals for Earnings and Star.  Refresh the page for it to be displayed on the page.");
});