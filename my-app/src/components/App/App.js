import React, { useState } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import GlobalStyle from "../../Style/globalStyles";

export default function App() {
  const [comments, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = comments;
  const stateKeys = Object.keys(comments);

  const setValue = (key) => {
    setState((state) => ({
      ...state,
      [key]: state[key] + 1,
    }));
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.trunc((good * 100) / total);
  };

  const countTotalFeedback = () => {
    return Object.values(comments).reduce((acc, value) => acc + value, 0);
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
          state={comments}
          positivePercentage={positiveFeedbackPercentage}
          total={totalFeedback}
        />
      </Section>
    </>
  );
}
