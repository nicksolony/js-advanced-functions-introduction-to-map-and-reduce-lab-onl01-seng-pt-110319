// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item*-1)
  });
  return newArray;
};

function mapToNoChange(sourceArray) {
  let newArray = [];
  sourceArray.forEach((item) => {
    newArray.push(item)
  });
  return newArray;
};

function mapToDouble(array) {
  let doubleArray=[];
  array.forEach((item) => {
    doubleArray.push(item*2);
  });
  return doubleArray;
};

function mapToSquare(array) {
  let sqArray=[];
  array.forEach((item) => {
    sqArray.push(item**2);
  });
  return sqArray;
};

function reduceToTotal(array,startingPoint=0) {
  let total=startingPoint;
  array.forEach((item) => {
    total+=item;
  });
  return total;
};

function reduceToAllTrue(array) {
  let value = true;
  array.forEach((item) => {
    if (!item) {
      value = false;
    };
  });
  return value;
};

function reduceToAnyTrue(array) {
  let value = false;
  if (array.find(item=>!!item)) {
    value=true;
  };
  return value;
};
