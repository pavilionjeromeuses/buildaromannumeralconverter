// Function to convert Arabic to Roman numerals
function convertToRoman(num) {
  const romanNumeralMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let roman = '';

  for (let i = 0; i < romanNumeralMap.length; i++) {
    while (num >= romanNumeralMap[i].value) {
      roman += romanNumeralMap[i].numeral;
      num -= romanNumeralMap[i].value;
    }
  }

  return roman;
}

// Function to handle conversion and display
function handleConversion() {
  const numberInput = document.getElementById('number');
  const output = document.getElementById('output');

  const number = parseInt(numberInput.value, 10);

  if (isNaN(number)) {
    output.textContent = 'Please enter a valid number';
  } else if (number < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
  } else if (number > 3999) {
    output.textContent = 'Please enter a number less than or equal to 3999';
  } else {
    const romanNumeral = convertToRoman(number);
    output.textContent = romanNumeral;
  }
}

// Event listener for the conversion button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', handleConversion);
