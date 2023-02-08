import { useState } from "react";

const Header = ({ heading }) => <h1>{heading}</h1>;
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr style={{ margin: 0 }}>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const getAverage = (good, neutral, bad) => {
    return (good - bad) / sum(good, neutral, bad);
  };
  const positivePercent = (good, neutral, bad) => {
    console.log(good, neutral, bad, sum(good, neutral, bad));
    return (good / sum(good, neutral, bad)) * 100;
  };
  const sum = (good, neutral, bad) => {
    return good + neutral + bad;
  };
  const all = sum(good, neutral, bad);
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={sum(good, neutral, bad)} />
        <StatisticLine
          text={"average"}
          value={getAverage(good, neutral, bad)}
        />
        <StatisticLine
          text={"positive"}
          value={`${positivePercent(good, neutral, bad)} %`}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header heading={"give feedback"} />
      <Button text={"good"} onClick={handleGood} />
      <Button text={"neutral"} onClick={handleNeutral} />
      <Button text={"bad"} onClick={handleBad} />
      <Header heading={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
