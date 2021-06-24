import facepaint from 'facepaint'
import { ThemeUIStyleObject } from 'theme-ui'

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const styles: Record<string, ThemeUIStyleObject> = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  content: {
    flex: '0 0 auto',
    width: ['50%', 'calc(100% / 3)', '25%']
  }

}

export const config = { amp: true }

export default function Home() {
  return (
    <div sx={styles.container}>{
      [...Array(10).keys()].map((i) => {
        return <div key={i} sx={styles.content}>{i}</div>
      })
    }</div>
  )
}
