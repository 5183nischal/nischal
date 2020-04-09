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
            <>             
              <p>At <a href="https://elsc.huji.ac.il" target="_blank" rel="noopener noreferrer">ELSC</a>, I focus on the generalization property of the brain and Artificial Neural Networks.<br></br>
              More generally, I am also interested in Consciousness (and the philosophy behind it),<br></br> system Neuroscience, and learning algorithms.</p>
              <p>At <a href="https://3ainstitute.cecs.anu.edu.au" target="_blank" rel="noopener noreferrer">3ai</a>, I focus on bringing AI to scale safely and responsibly. <br></br>
              In particular, I am interested in the Value Algnment Problem, and Adversarial response to privacy invading intelligent systems.</p>
            </>
          }
        />
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
      </ContentWrapper>
  )
}
