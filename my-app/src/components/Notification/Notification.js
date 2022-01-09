import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "../Section/Section.styled";

const Notification = ({ message }) => <Paragraph> {message}</Paragraph>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
