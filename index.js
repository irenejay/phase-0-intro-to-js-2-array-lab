var cats = ["Milo", "Otis", "Garfield"];s


var cats = [];

function destructivelyAppendCat(name) {
  cats.push(name);
}



describe('Array functions', function () {
  
  beforeEach(function () {
    
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
  });
})




function destructivelyPrependCat(name) {
  cats.unshift(name);
}

describe('destructivelyPrependCat(name)', function () {
    it('prepends a cat to the beginning of the cats array', function () {
      
      destructivelyPrependCat("Bob");

      
      expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
    });
  });

  function destructivelyRemoveFirstCat(name){
    cats.shift();

  }
  function  destructivelyRemoveLastCat( name){
    cats.pop();
  }



function appendCat(name) {
  // Create a new array by concatenating the existing cats array with the new cat
  let newCatsArray = cats.concat(name);

  // Return the new array
  return newCatsArray;
}
describe('appendCat(name)', function () {
    it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
      // Test the function with a sample cat name "Broom"
      let result = appendCat("Broom");
  
      // Assert that the new array has the expected members
      expect(result).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
  
      // Assert that the original cats array remains unchanged
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });
  function prependCat(name){

  }

function prependCat(name) {
    // Create a new array by copying the existing cats array and adding the new cat to the beginning
    let newCatsArray = [name, ...cats];
  
    // Return the new array
    return newCatsArray;
  }
  
  // Test the function
  describe('prependCat(name)', function () {
    it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
      // Test the function with a sample cat name "Broom"
      let result = prependCat("Broom");
  
      // Assert that the new array has the expected members
      expect(result).to.have.ordered.members(["Broom", "Milo", "Otis", "Garfield"]);
  
      // Assert that the original cats array remains unchanged
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
}) 


function removeLastCat() {
  // Use slice to create a new array without the last element
  return cats.slice(0, -1);
}

// Test the function
describe('removeLastCat()', function () {
  it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
    // Test the function
    let result = removeLastCat();

    // Assert that the new array has the expected members
    expect(result).to.have.ordered.members(["Milo", "Otis"]);

    // Assert that the original cats array remains unchanged
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  });
});




function removeFirstCat() {
  // Use slice to create a new array without the first element
  return cats.slice(1);
}

// Test the function
describe('removeFirstCat()', function () {
  it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
    // Test the function
    let result = removeFirstCat();

    // Assert that the new array has the expected members
    expect(result).to.have.ordered.members(["Otis", "Garfield"]);

    // Assert that the original cats array remains unchanged
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  });
});
