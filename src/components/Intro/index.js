import React from 'react'
import { Title } from './style'
import ProfileIntroSection from '../ProfileIntroSection'
import { ContentWrapper } from '../../style/shared'
import Head from '../Head'
import { META } from '../../utils/constants'


export default () => {
  
  return (
      <ContentWrapper>
        <Head 
          {...META.profile}
          image={META.common.image}
        />
        <ProfileIntroSection 
          content={() =>
            <>
              <br></br>
              <br></br>
              <br></br>
              <Title>
                Hi, I am Nisch. I <span>study</span> think about
                minds & machines.
              </Title>  
              <br></br>      
              <p>At <a href="https://elsc.huji.ac.il" target="_blank" rel="noopener noreferrer">ELSC</a>, I study the generalization property of the brain and Artificial Neural Networks.<br></br>
              More generally, I am also interested in Consciousness (and the philosophy behind it),<br></br> system Neuroscience, and learning algorithms.</p>
              <p>At <a href="https://3ainstitute.cecs.anu.edu.au" target="_blank" rel="noopener noreferrer">3ai</a>, I focus on bringing AI to scale safely and responsibly. <br></br>
              In particular, I am interested in the question of agency in complex systems <br></br> and adversarial responses malicious systems.</p>
            </>
          }
        />
      </ContentWrapper>
  )
}
