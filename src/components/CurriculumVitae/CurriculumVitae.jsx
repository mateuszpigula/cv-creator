import React, { useContext } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext/ResumeDataProvider';
import { Editable } from '../Editable/Editable';
import * as actions from '../../actions';
import { EditableAvatar } from '../Editable/EditableAvatar/EditableAvatar';
import {
  Address,
  Company,
  CV,
  Description,
  Header,
  Detail,
  LeftSide,
  List,
  Name,
  PersonalData,
  Position,
  RightSide,
  Section,
  SectionTitle,
  Skills,
  SkillsTitle,
  Subtitle,
  Time,
  SkillsItem,
} from './CurriculumVitae.styles';

export const CurriculumVitae = (props) => {
  const { state } = useContext(ResumeContext);

  return (
    <CV id={'cv-paper'} {...props}>
      <LeftSide>
        <Skills>
          <Editable
            tag={SkillsTitle}
            initialValue={state.headings.bio}
            action={actions.EDIT_TITLE}
            target={'bio'}
          />
          <Editable tag={'p'} initialValue={state.bio} target={'bio'} textarea />
        </Skills>
        {state.skills.map((skill, index) => (
          <Skills key={skill.type}>
            <Editable
              tag={SkillsTitle}
              initialValue={skill.type}
              target={`skills::type::${index}`}
              action={actions.EDIT_SECTION}
            />
            <List>
              {skill.list.map((single, skillIndex) => (
                <Editable
                  key={single}
                  tag={SkillsItem}
                  initialValue={single}
                  target={`skills::list::${index}::${skillIndex}`}
                  action={actions.EDIT_SKILL}
                  space={state.skillsSpace}
                />
              ))}
            </List>
          </Skills>
        ))}
      </LeftSide>
      <RightSide>
        <Header>
          <EditableAvatar />
          <PersonalData>
            <Editable tag={Name} initialValue={state.name} target={'name'} />
            {state.position && (
              <Editable tag={Subtitle} initialValue={state.position} target={'position'} />
            )}
            <Address>
              {['Address', 'Phone', 'Email'].map((name) => {
                const type = name.toLowerCase();
                return (
                  <Editable
                    key={name}
                    tag={'span'}
                    initialValue={state[type]}
                    target={type}
                    label={name}
                  />
                );
              })}
            </Address>
          </PersonalData>
        </Header>
        <Section>
          <Editable
            tag={SectionTitle}
            initialValue={state.headings.experience}
            action={actions.EDIT_TITLE}
            target={'experience'}
          />
          {[...state.experience].map((company, index) => (
            <Detail key={company.name}>
              <Editable
                tag={Time}
                initialValue={company.time}
                target={`experience::time::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Position}
                initialValue={company.position}
                target={`experience::position::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Company}
                initialValue={company.name}
                target={`experience::name::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={company.summary}
                target={`experience::summary::${index}`}
                action={actions.EDIT_SECTION}
                textarea
              />
            </Detail>
          ))}
        </Section>
        <Section>
          <Editable
            tag={SectionTitle}
            initialValue={state.headings.education}
            action={actions.EDIT_TITLE}
            target={'education'}
          />
          {[...state.education].reverse().map((school, index) => (
            <Detail key={school.name}>
              <Editable
                tag={Time}
                initialValue={school.time}
                target={`education::time::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Position}
                initialValue={school.name}
                target={`education::name::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Company}
                initialValue={school.course}
                target={`education::course::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={school.summary}
                target={`education::summary::${index}`}
                action={actions.EDIT_SECTION}
                textarea
              />
            </Detail>
          ))}
        </Section>
        <Section>
          <Editable
            tag={SectionTitle}
            initialValue={state.headings.languages}
            action={actions.EDIT_TITLE}
            target={'languages'}
          />
          {state.languages.map((language, index) => (
            <Detail small key={language.language}>
              <Editable
                tag={Position}
                initialValue={language.language}
                target={`languages::language::${index}`}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={language.level}
                target={`languages::level::${index}`}
                action={actions.EDIT_SECTION}
              />
            </Detail>
          ))}
        </Section>
      </RightSide>
    </CV>
  );
};
