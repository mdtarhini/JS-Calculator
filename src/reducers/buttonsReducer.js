// ------------------------------------------------------------------------------//
const buttonArray = [
  // first row
  { type: "CLEAR", value: "ac", label: "AC", id: "clear", span: 2 },
  { type: "OPERATOR", value: "modulo", label: "%", id: "mod", span: 1 },
  { type: "OPERATOR", value: "division", label: "/", id: "divide", span: 1 },
  // second row
  { type: "DIGIT", value: "7", label: "7", id: "seven", span: 1 },
  { type: "DIGIT", value: "8", label: "8", id: "eight", span: 1 },
  { type: "DIGIT", value: "9", label: "9", id: "nine", span: 1 },
  {
    type: "OPERATOR",
    value: "multiplication",
    label: "*",
    id: "multiply",
    span: 1,
  },
  // second row
  { type: "DIGIT", value: "4", label: "4", id: "four", span: 1 },
  { type: "DIGIT", value: "5", label: "5", id: "five", span: 1 },
  { type: "DIGIT", value: "6", label: "6", id: "six", span: 1 },
  {
    type: "OPERATOR",
    value: "subtraction",
    label: "-",
    id: "subtract",
    span: 1,
  },
  // second row
  { type: "DIGIT", value: "1", label: "1", id: "one", span: 1 },
  { type: "DIGIT", value: "2", label: "2", id: "two", span: 1 },
  { type: "DIGIT", value: "3", label: "3", id: "three", span: 1 },
  { type: "OPERATOR", value: "addition", label: "+", id: "add", span: 1 },
  // second row
  { type: "DIGIT", value: "0", label: "0", id: "zero", span: 2 },
  { type: "DIGIT", value: "dot", label: ".", id: "decimal", span: 1 },
  { type: "CALCULATE", value: "equals", label: "=", id: "equals", span: 1 },
];
const buttonsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BUTTONS":
      console.log(buttonArray);
      return buttonArray;
    default:
      return state;
  }
};
export default buttonsReducer;
// ------------------------------------------------------------------------------//
