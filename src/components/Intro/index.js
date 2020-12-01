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
                Hi, I am Nischal. I study
                minds <span>and</span> machines.
              </Title>  
              <br></br>      
              <p>At <a href="https://elsc.huji.ac.il" target="_blank" rel="noopener noreferrer">ELSC</a>, I study the learning and compational property of the brain and Artificial Neural Networks.<br></br>
              More broadly, I am also interested in consciousness (and the philosophy behind it),<br></br> dynamics, and control.</p>
              <p>At <a href="https://3ainstitute.cecs.anu.edu.au" target="_blank" rel="noopener noreferrer">3ai</a>, I focus on bringing AI to scale. <br></br>
              In particular, I am interested in the question of responsibility in complex systems <br></br> and adversarial responses malicious systems.</p>
            </>
          }
        />
      </ContentWrapper>
  )
}
