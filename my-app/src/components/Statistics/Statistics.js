import React from "react";
import Notification from "../Notification";
import PropTypes from "prop-types";
import {
  StatList,
  StatItem,
  StatTitle,
  StatParagraph,
} from "../Statistics/Statistics.styled";

const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  positivePercentage,
  total,
}) => (
  <>
    <StatTitle>Statistics</StatTitle>

    {total >= 1 ? (
      <StatList>
        <StatItem>
          <StatParagraph>Good:{goodValue} </StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Neutral:{neutralValue}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Bad:{badValue}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>Total:{total}</StatParagraph>
        </StatItem>
        <StatItem>
          <StatParagraph>
            Positive feedback:
            {goodValue === 0 ? 0 : positivePercentage}%
          </StatParagraph>
        </StatItem>
      </StatList>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  goodValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default Statistics;
