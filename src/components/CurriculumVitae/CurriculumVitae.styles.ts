import styled from 'styled-components';
const WIDTH = 800;
const HEIGHT = WIDTH * 1.4142;
export const red = '#b63e58';
const blue = '#2e3948';
const light_blue = '#5f6270';

export const CV = styled.div`
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.85em;
  font-weight: 300;
  height: ${HEIGHT}px;
  overflow: hidden;
  width: ${WIDTH}px;
`;

const Container = styled.div`
  padding: 30px;
`;

export const LeftSide = styled(Container)`
  background: ${blue};
  color: #fefefe;
  padding-top: 196px;
  width: 250px;
`;

export const RightSide = styled(Container)`
  background: #fefefe;
  flex: 1;
`;

export const Skills = styled.div`
  border-bottom: 2px solid ${red};
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 30px;
  padding-bottom: 30px;

  &:last-of-type {
    border: none;
  }
`;

export const SkillsTitle = styled.h3`
  color: ${red};
  font-family: 'Bebas Neue', cursive;
  font-size: 1.5em;
  letter-spacing: 2px;
  margin: 0 0 0.25em;
  text-transform: uppercase;
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

export const PersonalData = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-right: -30px;
  width: calc(100% + 30px);
`;

export const Name = styled.h2`
  color: ${red};
  font-size: 2em;
  margin: 0.25em 0;
`;

export const Subtitle = styled(SkillsTitle)`
  border-bottom: 2px solid ${blue};
  color: ${blue};
  font-size: 1em;
  margin-bottom: 0.75em;
  padding-bottom: 0.5em;
`;

export const Address = styled.div`
  color: ${light_blue};
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  span {
    line-height: 1.3;
  }
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin: 0 -30px 0px 0;
  padding-bottom: 20px;
  position: relative;

  &::before {
    background: ${blue};
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    right: 0;
    top: 0.5em;
    width: 370px;
  }
`;

export const SectionTitle = styled(SkillsTitle)`
  background: #fefefe;
  color: ${blue};
  margin-bottom: 0.5em;
`;

export const Detail = styled.div<{ small?: boolean }>`
  display: grid;
  grid-gap: 5px 20px;
  grid-template-areas:
    'time .'
    'pos desc'
    'com desc'
    '. desc';
  grid-template-columns: 1fr 370px;
  margin-bottom: ${(props) => (props.small ? 0 : '2em')};
  position: relative;
`;

export const Time = styled.span`
  color: ${red};
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9em;
  grid-area: time;
`;

export const Position = styled.span`
  color: ${blue};
  font-size: 0.9em;
  grid-area: pos;
`;

export const Company = styled.span`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2em;
  grid-area: com;
  text-transform: uppercase;
`;

export const Description = styled.p`
  grid-area: desc;
  margin: 0;
  margin-right: 30px;
  padding: 0;
`;

export const SkillsItem = styled.li<{ space: string }>`
  & + & {
    margin-top: ${(props) => props.space || ''};
  }
`;
