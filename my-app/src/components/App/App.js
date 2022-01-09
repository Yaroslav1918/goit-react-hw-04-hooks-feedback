import React, { useState } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import GlobalStyle from "../../Style/globalStyles";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let copyOfState = { ...state };
  const { good, neutral, bad } = state;
  const stateKeys = Object.keys(state);

  const setValue = (key) => {
    setState((state) => ({
      ...copyOfState,
      [key]: state[key] + 1,
    }));
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.trunc((good * 100) / total);
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const totalFeedback = countTotalFeedback();

  return (
    <>
      <GlobalStyle />
      <Section title="Please live feedback">
        <FeedbackOptions onLeaveFeedback={setValue} options={stateKeys} />

        <Statistics
          goodValue={good}
          neutralValue={neutral}
          badValue={bad}
          state={state}
          positivePercentage={positiveFeedbackPercentage}
          total={totalFeedback}
        />
      </Section>
    </>
  );
}
