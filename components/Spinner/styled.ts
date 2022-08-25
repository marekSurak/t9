import { keyframes } from '@stitches/react'

import { styled } from 'styles/stitches.config'

const fadeKeyframes = keyframes({
  '0%': { backgroundColor: '$dimGray' },
  '100%': { backgroundColor: 'transparent' },
})

const animationDuration = 1.25
const animationDelay = animationDuration / 12

export const SpinnerContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
  width: '$1',
  height: '$1',
  margin: '0 auto',
})

export const SpinnerLine = styled('div', {
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '.1rem',
  height: '.375rem',
  borderRadius: '.0555rem',
  backgroundColor: 'transparent',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  animation: `${fadeKeyframes} ${animationDuration}s infinite linear`,
  transformOrigin: 'center -.3rem',

  '&:nth-of-type(1)': {
    animationDelay: '0s',
    transform: 'rotate(0)',
  },
  '&:nth-of-type(2)': {
    animationDelay: `${animationDelay}s`,
    transform: 'rotate(30deg)',
  },
  '&:nth-of-type(3)': {
    animationDelay: `${animationDelay * 2}s`,
    transform: 'rotate(60deg)',
  },
  '&:nth-of-type(4)': {
    animationDelay: `${animationDelay * 3}s`,
    transform: 'rotate(90deg)',
  },
  '&:nth-of-type(5)': {
    animationDelay: `${animationDelay * 4}s`,
    transform: 'rotate(120deg)',
  },
  '&:nth-of-type(6)': {
    animationDelay: `${animationDelay * 5}s`,
    transform: 'rotate(150deg)',
  },
  '&:nth-of-type(7)': {
    animationDelay: `${animationDelay * 6}s`,
    transform: 'rotate(180deg)',
  },
  '&:nth-of-type(8)': {
    animationDelay: `${animationDelay * 7}s`,
    transform: 'rotate(210deg)',
  },
  '&:nth-of-type(9)': {
    animationDelay: `${animationDelay * 8}s`,
    transform: 'rotate(240deg)',
  },
  '&:nth-of-type(10)': {
    animationDelay: `${animationDelay * 9}s`,
    transform: 'rotate(270deg)',
  },
  '&:nth-of-type(11)': {
    animationDelay: `${animationDelay * 10}s`,
    transform: 'rotate(300deg)',
  },
  '&:nth-of-type(12)': {
    animationDelay: `${animationDelay * 11}s`,
    transform: 'rotate(330deg)',
  },
})
