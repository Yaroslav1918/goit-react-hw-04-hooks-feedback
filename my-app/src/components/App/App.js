import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Section from "../Section";
import GlobalStyle from "../../Style/globalStyles";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setValue = (key) => {
    this.setState((state) => ({
      [key]: state[key] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good * 100) / total);
  };

  countTotalFeedback = () => {
    const state = this.state;
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  render() {
    const state = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <GlobalStyle />
        <Section title="Please live feedback">
          <FeedbackOptions onLeaveFeedback={this.setValue} options={state} />

          <Statistics
            goodValue={good}
            neutralValue={neutral}
            badValue={bad}
            state={state}
            positivePercentage={positiveFeedbackPercentage}
            total={total}
          />
        </Section>
      </>
    );
  }
}

export default App;
