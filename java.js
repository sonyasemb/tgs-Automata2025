document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.querySelector('#editButton');
    const inputString = document.querySelector('#inputString');
    const message = document.querySelector('#message');
  
    editButton.addEventListener('click', resetInputAndMessage);
  
    function resetInputAndMessage() {
      inputString.value = '';
      message.textContent = '';
    }
  
    function checkScientificNumber() {
      const inputValue = inputString.value;
      const scientificNumberRegex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
  
      if (scientificNumberRegex.test(inputValue)) {
        message.textContent = 'Yes, it is a number';
      } else {
        message.textContent = 'No, it is not a number';
      }
    }
  
    const checkButton = document.querySelector('.run button');
    checkButton.addEventListener('click', checkScientificNumber);
  });