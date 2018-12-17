import { Numbers } from './numbers';

const numbers = new Numbers();
const radix = 10;
let listOfNumbers = [];

function otherWayOfWritingText() {
  const element = document.createElement('p');
  element.innerHTML = 'Or I can put it in via a function!';
  return element;
}

function temporarilyClearNumbers() {
  document.getElementById('list-of-numbers').innerHTML = '';
}

function displayList() {
  temporarilyClearNumbers();
  listOfNumbers.forEach((number) => {
    const element = document.createElement('li');
    element.innerHTML = number;
    document.getElementById('list-of-numbers').appendChild(element);
  });
}

function addNumberToList(event) {
  event.preventDefault();
  const number = document.getElementById('number').value;
  listOfNumbers.push(parseInt(number, radix));
  displayList();
}

function addOneToEachNumber() {
  listOfNumbers = numbers.addOneToAll(listOfNumbers);
  displayList();
}


function clearNumbers() {
  listOfNumbers = [];
  displayList();
}

document.getElementById('other-way-of-writing-text').appendChild(otherWayOfWritingText());
document.getElementById('add-number').onclick = addNumberToList;
document.getElementById('add-one-to-each-number').onclick = addOneToEachNumber;
document.getElementById('temporarily-clear-numbers').onclick = temporarilyClearNumbers;
document.getElementById('clear-numbers').onclick = clearNumbers;
