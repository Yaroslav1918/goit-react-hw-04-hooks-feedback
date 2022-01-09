import React from "react";
import PropTypes from "prop-types";
import {
  FeedbackButton,
  ListButton,
  ListItem,
} from "../FeedbackOptions/FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ListButton>
      {options.map((item, index) => (
        <ListItem key={index}>
          <FeedbackButton
            type="button"
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </FeedbackButton>
        </ListItem>
      ))}
    </ListButton>
  </>
);
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;
