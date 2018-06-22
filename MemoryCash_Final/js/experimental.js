//CONSTRUCTOR
//creates a child element of the specified kind
//adds the child to specified parent
//optionally assigns the child an ID
// optionally assigns the child up to 5 classes
function foo(childKind, childID, childDataName, childData, ...childClass) {
  if (!(this instanceof Adjoin)) {
    return new Adjoin(childKind, childID, childDataName, childData, ...childClass);
  }
  this.childKind = childKind;
  this.childID = childID;
  this.childDataName = childDataName;
  this.childData = childData;
  this.childClass = [];
  this.bar = function(parentID) {

    const parent = document.getElementById(parentID);
    const child = document.createElement(childKind);
    const dataName = "data" + this.childDataName;

    parent.appendChild(child);
    child.setAttribute("id", childID);
    child.setAttribute(dataName, childData);

    child.classList.add(this.childClass);

    // childClass.map(args =>{
    //   child.classList.add(childClass);
    //   console.log(childClass.length);
    // });
  }
};
