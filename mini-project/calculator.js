let resultInput = document.getElementById("result");
const appendInput = (value) => (resultInput.value += value);
const clearFullScreen = () => (resultInput.value = "");
const calculateResult = () => resultInput.value = eval(resultInput.value);
