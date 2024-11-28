
//code from step 5

var names;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


names = [];


document.getElementById('add').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('text').value;
  names.push(document.getElementById('text').value);

  element_list.appendChild(new_li);

});

document.getElementById('reveal').addEventListener('click', (event) => {
  let element_selected = document.getElementById('selected');
  element_selected.innerText = randomMember(names);

});