import { Wrapper, SectionTitle } from "../Section/Section.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <Wrapper>
    <SectionTitle> {title} </SectionTitle>
    {children}
  </Wrapper>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
export default Section;
