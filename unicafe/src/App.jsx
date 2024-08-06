import { useState } from 'react';

const Statistic = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const positivePercentage = (good / total) * 100;

  return (
    <div>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='total' value={total} />
            <StatisticLine text='average' value={avg} />
            <StatisticLine text='positive' value={positivePercentage} />
          </tbody>
        </table>
      )}
    </div>
  );
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={increaseGood} text='good' />
      <Button handleClick={increaseNeutral} text='neutral' />
      <Button handleClick={increaseBad} text='bad' />

      <h2>statistics</h2>

      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
