import React, { useMemo, useState } from 'react';

import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';

const App = () => {
  const Options = ['good', 'neutral', 'bad'];

  const [marks, setMarks] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = marks;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = marks;
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return (good / total) * 100;
  };

  const leaveFeedbackHandler = option => {
    setMarks(marks => ({ ...marks, [option]: marks[option] + 1 }));
  };

  const total = useMemo(countTotalFeedback, [marks]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Options}
          onLeaveFeedback={leaveFeedbackHandler}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            {...marks}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
