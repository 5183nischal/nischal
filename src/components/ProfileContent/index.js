import React from 'react'
import ProfileIntroSection from '../ProfileIntroSection'
import ProfileListItem from '../ProfileListItem'
import EventListItem from '../EventListItem'
import Head from '../Head'
import ProfileList from '../ProfileList'
import { META } from '../../utils/constants'
import { ContentWrapper } from '../../style/shared'
import { ListsSection, DisciplinesList } from './style'

export default ({ data }) => {
  const { disciplines, people, mentions, articles } = data
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() =>
            <ListsSection>
              {people.edges.length > 0 && 
                <ProfileList 
                  title='timeline'
                  list={() => people.edges.map(({ event }, i) => (
                    <EventListItem 
                      key={i}
                      {...event}
                    />
                  ))}
                />}
              {articles.edges.length > 0 && 
                <ProfileList 
                  title='research'
                  list={() => articles.edges.map(({ article }, i) => (
                    <ProfileListItem 
                      key={i}
                      {...article}
                    />
                  ))}
                />}
            </ListsSection>
          }
        />
      </ContentWrapper>
  )
}
