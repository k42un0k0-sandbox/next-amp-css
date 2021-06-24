import { Interpolation, Theme } from '@emotion/react'

import facepaint from 'facepaint'

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const styles: Record<string, Interpolation<Theme>> = {
  container: mq({
    display: 'flex',
    flexWrap: 'wrap'
  }),
  content: mq({
    flex: '0 0 auto',
    width: ['50%', 'calc(100% / 3)', '25%']
  })

}

export const config = { amp: true }

export default function Home() {
  return (
    <div css={styles.container}>{
      [...Array(10).keys()].map((i) => {
        return <div key={i} css={styles.content}>{i}</div>
      })
    }</div>
  )
}
