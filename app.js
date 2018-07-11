function addToList(list, item) {
  const input1 = ['red', 'blue', 'green'];
  const input2 = 'pink';
  addToList.push(input1, input2);
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/

// tests

function testAddToList() {
  const input1 = ['red', 'blue', 'green'];
  const input2 = 'pink';
  const expected = ['red', 'blue', 'green', 'pink'];
  const result = addToList(input1, input2);

  if (
    result &&
    result.length &&
    expected.length === result.length &&
    expected.every(function(item) {
      return result.indexOf(item) > -1;
    })
  ) {
    console.log('SUCCESS: `addToList` works!');
  } else {
    console.error('FAILURE: `addToList` is not working');
  }
}

testAddToList();
