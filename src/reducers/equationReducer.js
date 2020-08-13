// ------------------------------------------------------------------------------//
const equationReducer = (
  equation = { first: "0", operator: "", second: "", history: [] },
  action
) => {
  if (action.type === "DIGIT") {
    if (equation.operator === "") {
      if (action.payload.label === "." && equation.first.indexOf(".") !== -1) {
        return equation;
      }
      return {
        ...equation,
        first: equation.first.concat(action.payload.label),
      };
    } else if (equation.operator === "=") {
      return { ...equation, operator: "", first: action.payload.label };
    } else {
      if (action.payload.label === "." && equation.second.indexOf(".") !== -1) {
        return equation;
      }
      return {
        ...equation,
        second: equation.second.concat(action.payload.label),
      };
    }
  } else if (action.type === "CLEAR") {
    return {
      first: "0",
      operator: "",
      second: "",
      history: equation.history,
    };
  } else if (action.type === "OPERATOR" && equation.second === "") {
    if (
      equation.operator !== "" &&
      action.payload.label === "-" &&
      equation.second === ""
    ) {
      return { ...equation, second: action.payload.label };
    }
    return { ...equation, operator: action.payload.label };
  } else if (action.type === "OPERATOR" && equation.second === "-") {
    return { ...equation, operator: action.payload.label, second: "" };
  } else if (
    action.type === "CALCULATE" ||
    (action.type === "OPERATOR" &&
      equation.second !== "" &&
      equation.second !== "-")
  ) {
    if (
      equation.first !== "" &&
      equation.operator !== "" &&
      equation.second !== ""
    ) {
      // Calculate here the result of the equation and put it in 'first'. Clear also the second and operator properties.
      let result;
      switch (equation.operator) {
        case "+":
          result = Number(equation.first) + Number(equation.second);
          break;
        case "-":
          result = Number(equation.first) - Number(equation.second);
          break;
        case "*":
          result = Number(equation.first) * Number(equation.second);
          break;
        case "/":
          result = Number(equation.first) / Number(equation.second);
          break;
        case "%":
          result = Number(equation.first) % Number(equation.second);
          break;
        default:
          result = 0;
      }
      return {
        first: result.toString(),
        operator: action.type === "CALCULATE" ? "=" : action.payload.label,
        second: "",
        history: [
          `${equation.first} ${equation.operator} ${
            equation.second
          } = ${result.toString()}`,
          ...equation.history,
        ],
      };
    }
  }
  return equation;
};
export default equationReducer;
// ------------------------------------------------------------------------------//
