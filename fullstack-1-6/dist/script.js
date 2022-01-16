const { useState } = React;

const StatisticLine = ({ value, text }) => {
  return /*#__PURE__*/(
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, text), " ", /*#__PURE__*/React.createElement("td", null, " ", value)));
};

const Positive = ({ good, bad, neutral }) => {
  if (good > 0) {
    return /*#__PURE__*/React.createElement("p", null, " Positive ", Math.round(good / (good + bad + neutral) * 100), "%");
  }
  return /*#__PURE__*/React.createElement("p", null, "The positive percentage is shown here. ");

};

const Statistics = ({ good, neutral, bad, Total }) => {
  let Average = 0;
  if (Total > 0) {
    Average = (good + bad * -1) / Total;


    return /*#__PURE__*/(

      React.createElement("table", null, /*#__PURE__*/

      React.createElement(StatisticLine, { text: "Good", value: good }), /*#__PURE__*/
      React.createElement(StatisticLine, { text: "Neutral", value: neutral }), /*#__PURE__*/
      React.createElement(StatisticLine, { text: "Bad", value: bad }), /*#__PURE__*/React.createElement(StatisticLine, { text: "Average", value: Average }), /*#__PURE__*/

      React.createElement(Positive, { good: good, bad: bad, neutral: neutral })));
  }
  return /*#__PURE__*/React.createElement("h4", null, "No Feedback given.");
};

const Button = ({ text, handleClick }) => {
  return /*#__PURE__*/React.createElement("button", { onClick: handleClick }, text);
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const Total = good + bad + neutral;



  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h2", null, "Give Feedback"), /*#__PURE__*/
    React.createElement("div", { className: "botones" }, /*#__PURE__*/
    React.createElement(Button, { handleClick: () => setGood(good + 1), text: "Good" }), /*#__PURE__*/
    React.createElement(Button, { handleClick: () => setNeutral(neutral + 1), text: "Neutral" }), /*#__PURE__*/
    React.createElement(Button, { handleClick: () => setBad(bad + 1), text: "Bad" })), /*#__PURE__*/


    React.createElement("h1", null, "Statistics"), /*#__PURE__*/
    React.createElement(Statistics, { good: good, neutral: neutral, bad: bad, Total: Total })));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));