import styled from "styled-components";

export const FeedbackButton = styled.button`
  display: inline-block;
  padding: 0 25px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  transition: box-shadow 0.2s;
  &:focus-visible {
    border: 1px solid #4c51f9;
    outline: none;
  }
  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
  &:active {
    background-color: #1e90ff;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
export const ListButton = styled.ul`
  display: flex;
  & li:not(last-child) {
    margin-right: 10px;
  }
`;
export const ListItem = styled.li``;
