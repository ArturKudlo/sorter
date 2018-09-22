class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  
  sort(indices) {

  function compareNumeric(a,b){return a - b};

  indices = indices.sort(compareNumeric);
  var array2 = [];
  for (var i = 0; i < indices.length; i++) {
      if (this.array[indices[i]]) {
              array2.push(this.array[indices[i]]);
          }
      }
      if (this.compareFunction) {
          array2 = array2.sort(this.compareFunction);
      } else {
          array2 = array2.sort(compareNumeric);
      }
      for (var i = 0; i < array2.length; i++) {
          var it = array2[i];
          this.array[indices[i]] = it;
      }

  }

  

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;