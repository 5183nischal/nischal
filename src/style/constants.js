import { css } from 'styled-components'

export const colors = {
  blue900: '#000000',
  gray500: '#A4BAB7',
  gray700: '#8d99ae',
  yellow500: '#f5cac3',
  yellow700: '#f6bd60',
  image: '#14213d'
}

export const fonts = {
  sansSerif: '\'Roboto\', stack-sans, sans-serif',
  mono: '\'Roboto Mono\', stack-mono, monospace'
}

export const spaces = {
  p500: '5rem',
  p400: '4rem',
  p300: '3rem',
  p200: '2rem',
  p100: '1rem',
  p50: '.5rem',
  p25: '.25rem'
}

export const mq = {
  xs: '22em',
  sm: '40em',
  md: '54em',
  lg: '78em',
  xl: '125em'
}

export const media = {
  xs: (...a) => css`
    @media (max-width: ${mq.xs}) {
      ${css(...a)}
    }
  `,
  sm: (...a) => css`
    @media (max-width: ${mq.sm}) {
      ${css(...a)}
    }
  `,
  md: (...a) => css`
    @media (max-width: ${mq.md}) {
      ${css(...a)}
    }
  `,
  lg: (...a) => css`
    @media (max-width: ${mq.lg}) {
      ${css(...a)}
    }
  `,
  xl: (...a) => css`
    @media (max-width: ${mq.xl}) {
      ${css(...a)}
    }
  `,
  hover: (...a) => css`
    @media not all and (hover: none) {
      ${css(...a)}
    }
  `
}

const rule = (d, v) => `${d}: ${v};` 

export const getOuterSpace = p =>
  css`
    ${rule(p, spaces.p500)}
    ${media.lg`
      ${rule(p, spaces.p300)}
    `}
    ${media.md`
      ${rule(p, spaces.p300)}
    `}
    ${media.sm`
      ${rule(p, spaces.p200)}
    `}
  `
