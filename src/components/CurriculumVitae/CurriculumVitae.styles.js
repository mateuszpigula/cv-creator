import styled from "styled-components";
const WIDTH = 800;
const HEIGHT = WIDTH * 1.4142;
const red = "#b63e58";
const blue = "#2e3948";
const light_blue = "#5f6270";

export const CV = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  display: flex;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  font-size: 0.85em;
`;

const Container = styled.div`
  padding: 30px;
`;

export const LeftSide = styled(Container)`
  // padding-top: 300px;
  padding-top: 196px;
  width: 250px;
  background: ${blue};
  color: #fefefe;
`;

export const RightSide = styled(Container)`
  flex: 1;
  background: #fefefe;
`;

export const Skills = styled.div`
  border-bottom: 2px solid ${red};
  font-size: 1em;
  line-height: 1.5;
  padding-bottom: 30px;
  margin-bottom: 30px;

  &:last-of-type {
    border: none;
  }
`;

export const SkillsTitle = styled.h3`
  color: ${red};
  text-transform: uppercase;
  font-family: "Bebas Neue", cursive;
  font-size: 1.5em;
  letter-spacing: 2px;
  margin: 0 0 0.25em;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    line-height: 1.75;
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  height: 150px;
  min-width: 150px;
  max-width: 150px;
  margin-left: -130px;
  overflow: hidden;

  img {
    height: 110%;
    width: 110%;
  }
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: -30px;
  margin-left: 80px;
  width: calc(100% + 30px);
`;

export const Name = styled.h2`
  color: ${red};
  font-size: 2em;
  margin: 0.25em 0;
`;

export const Subtitle = styled(SkillsTitle)`
  color: ${blue};
  font-size: 1em;
  padding-bottom: 0.5em;
  margin-bottom: 0.75em;
  border-bottom: 2px solid ${blue};
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  color: ${light_blue};
  font-size: 0.9em;
  span {
    line-height: 1.3;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  // margin-bottom: 74px;
`;

export const Section = styled.div`
  margin: 0 -30px 50px 0;
  position: relative;

  &::before {
    content: "";
    height: 2px;
    width: 370px;
    background: ${blue};
    right: 0;
    top: 0.5em;
    display: block;
    position: absolute;
  }
`;

export const SectionTitle = styled(SkillsTitle)`
  color: ${blue};
  background: #fefefe;
  margin-bottom: 0.5em;
`;

export const Detail = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 370px;
  grid-gap: 5px 20px;
  grid-template-areas:
    "time ."
    "pos desc"
    "com desc"
    ". desc";
  margin-bottom: ${(props) => (props.small ? 0 : "2em")};
`;

export const Time = styled.span`
  color: ${red};
  font-size: 0.9em;
  font-family: "Bebas Neue", sans-serif;
  grid-area: time;
`;

export const Position = styled.span`
  color: ${blue};
  font-size: 0.9em;
  grid-area: pos;
`;

export const Company = styled.span`
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.2em;
  grid-area: com;
`;

export const Description = styled.p`
  margin: 0;
  padding: 0;
  grid-area: desc;
  margin-right: 30px;
`;

export const SkillsItem = styled.li`
  & + & {
    margin-top: ${(props) => props.space || ""};
  }
`;
