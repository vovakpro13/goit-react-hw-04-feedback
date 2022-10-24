import React, { Component } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

class App extends Component {
  Options = ['good', 'neutral', 'bad'];

  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.leaveFeedbackHandler = this.leaveFeedbackHandler.bind(this);
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return (good / this.countTotalFeedback()) * 100;
  }

  leaveFeedbackHandler(option) {
    this.setState(state => ({ [option]: state[option] + 1 }));
  }

  render() {
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.Options}
            onLeaveFeedback={this.leaveFeedbackHandler}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              {...this.state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
