import React, { ReactElement, useContext } from 'react';
import { ResumeState } from 'contexts/ResumeContext/types';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';
import { Editable } from 'components/Editable/Editable';
import * as actions from 'actions';
import { EditableAvatar } from 'components/Editable/EditableAvatar/EditableAvatar';
import { AddSectionButton } from 'components/Button/AddSectionButton/AddSectionButton';
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

export const CurriculumVitae = (): ReactElement => {
  const { state } = useContext(ResumeContext);

  return (
    <CV id={'cv-paper'}>
      <LeftSide>
        <Skills>
          <Editable
            tag={SkillsTitle}
            initialValue={state.headings.bio}
            action={actions.EDIT_TITLE}
            target={{ section: 'bio' }}
          />
          <Editable tag={'p'} initialValue={state.bio} target={{ section: 'bio' }} textarea />
        </Skills>
        {state.skills.map((skill, index) => (
          <Skills key={skill.type}>
            <Editable
              tag={SkillsTitle}
              initialValue={skill.type}
              target={{ section: 'skills', property: 'type', index }}
              action={actions.EDIT_SECTION}
            />
            <List>
              {skill.list.map((single, skillIndex) => (
                <Editable
                  key={single}
                  tag={SkillsItem}
                  initialValue={single}
                  target={{ section: 'skills', property: 'list', index, skillIndex }}
                  action={actions.EDIT_SKILL}
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
            <Editable tag={Name} initialValue={state.name} target={{ section: 'name' }} />
            {state.position && (
              <Editable
                tag={Subtitle}
                initialValue={state.position}
                target={{ section: 'position' }}
              />
            )}
            <Address>
              {['Address', 'Phone', 'Email'].map((name) => {
                const type = name.toLowerCase() as keyof ResumeState;
                const initialValue = state[type] as string;
                return (
                  <Editable
                    key={name}
                    tag={'span'}
                    initialValue={initialValue}
                    target={{ section: type }}
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
            target={{ section: 'experience' }}
          />
          {[...state.experience].map((company, index) => (
            <Detail key={company.name + index}>
              <Editable
                tag={Time}
                initialValue={company.time}
                target={{ section: 'experience', property: 'time', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Position}
                initialValue={company.position}
                target={{ section: 'experience', property: 'position', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Company}
                initialValue={company.name}
                target={{ section: 'experience', property: 'name', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={company.summary}
                target={{ section: 'experience', property: 'summary', index }}
                action={actions.EDIT_SECTION}
                textarea
              />
            </Detail>
          ))}
          <AddSectionButton type={'experience'} />
        </Section>
        <Section>
          <Editable
            tag={SectionTitle}
            initialValue={state.headings.education}
            action={actions.EDIT_TITLE}
            target={{ section: 'education' }}
          />
          {[...state.education].reverse().map((school, index) => (
            <Detail key={school.name + index}>
              <Editable
                tag={Time}
                initialValue={school.time}
                target={{ section: 'education', property: 'time', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Position}
                initialValue={school.name}
                target={{ section: 'education', property: 'name', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Company}
                initialValue={school.course}
                target={{ section: 'education', property: 'course', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={school.summary}
                target={{ section: 'education', property: 'summary', index }}
                action={actions.EDIT_SECTION}
                textarea
              />
            </Detail>
          ))}
          <AddSectionButton type={'education'} />
        </Section>
        <Section>
          <Editable
            tag={SectionTitle}
            initialValue={state.headings.languages}
            action={actions.EDIT_TITLE}
            target={{ section: 'languages' }}
          />
          {state.languages.map((language, index) => (
            <Detail small key={language.language + index}>
              <Editable
                tag={Position}
                initialValue={language.language}
                target={{ section: 'languages', property: 'language', index }}
                action={actions.EDIT_SECTION}
              />
              <Editable
                tag={Description}
                initialValue={language.level}
                target={{ section: 'languages', property: 'level', index }}
                action={actions.EDIT_SECTION}
              />
            </Detail>
          ))}
          <AddSectionButton type={'languages'} />
        </Section>
      </RightSide>
    </CV>
  );
};
