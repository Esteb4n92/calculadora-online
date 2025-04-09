const display = document.getElementById('display');

const clearDisplay = () => display.value = '';

const deleteLast = () => display.value = display.value.slice(0, -1);

const appendValue = (val) => {
  display.value += val;
};

const appendDecimal = () => {
  const parts = display.value.split(/[+\-*/]/);
  const last = parts[parts.length - 1];
  if (!last.includes('.')) display.value += '.';
};

const calculate = () => {
  try {
    const result = eval(display.value);
    display.value = `${result}`;
  } catch {
    display.value = 'Error';
  }
};

const toggleFunctions = () => {
  const extra = document.getElementById('extraFunctions');
  extra.style.display = extra.style.display === 'block' ? 'none' : 'block';
};

const insertFunction = (funcName, suffix = ')') => {
  const value = display.value;
  if (value && !isNaN(value[value.length - 1])) {
    display.value = `${funcName}(${value}${suffix}`;
    try {
      const result = eval(display.value);
      display.value = `${result}`;
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += `${funcName}(`;
  }
};