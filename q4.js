function SortArray(originalArray) {
  this._originalArray = originalArray;

  const sortArray = () => {
    return [...this._originalArray].sort((a,b) => a - b);
  };

  this.getSortedArray = () => sortArray();
}

function SortObjectArray(arr, key) {
  SortArray.call(this, arr);

  const sortObjectArray = () => {
    return [...this._originalArray].sort((a,b)=> {
      if(a[key] > b[key]) return 1;
      if(a[key] < b[key]) return -1;

      return 0;
    });
  };

  this.getSortedArray = () => sortObjectArray();
}

SortObjectArray.prototype = Object.create(SortArray.prototype);
SortObjectArray.prototype.constructor = SortObjectArray;

// For number array
const numSorter = new SortArray([5, 2, 9, 1]);
console.log(numSorter.getSortedArray());

// For object array
const people = [
  { name: 'Alice', age: 32 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 40 }
];

const objSorter = new SortObjectArray(people, 'age');
console.log(objSorter.getSortedArray());