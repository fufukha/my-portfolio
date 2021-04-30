import { Button, makeStyles, Typography } from '@material-ui/core'
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { fadeInUp, stagger, unCover } from '../animation'
import BrandList from '../components/BrandList'

const useStyles = makeStyles(({ palette, typography }) => ({
  section: {
    '& > header': {
      marginBottom: '35px',
    },
  },
  location: {
    display: 'flex',
    marginTop: '10px',
    '& svg': {
      transform: 'translateX(-6px)',
    },
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: '20px',
    '& > p': {
      marginBottom: '70px',
    },
    '& p > span': {
      color: palette.primary.main,
      fontWeight: 500,
    },
    '& > a': {
      alignSelf: 'center',
      maxWidth: '200px',
    },
  },
  spoiler: {
    position: 'relative',
    display: 'inline-block',
    color: palette.primary.main,
  },
  spoilerOverlay: {
    position: 'absolute',
    top: 0,
    left: '-4px',
    paddingLeft: '2px',
    width: '90px',
    color: palette.text.secondary,
    height: typography.body1.lineHeight,
    background: palette.background.paper,
    textAlign: 'center',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <motion.section className={classes.section} variants={stagger}>
      <motion.header variants={fadeInUp}>
        <Typography component='h1' variant='h2' gutterBottom>
          I am Kamile,
        </Typography>
        <Typography component='h2' variant='h1' gutterBottom>
          Web / React Developer
        </Typography>
        <div className={classes.location}>
          <ArrowForwardIosIcon color='primary' fontSize={'large'} />
          <Typography component='h3' variant='h2'>
            based in the US
          </Typography>
        </div>
      </motion.header>
      <motion.article className={classes.article} variants={fadeInUp}>
        <Typography component='p' variant='body1' color='textSecondary'>
          Welcome to my portfolio. I am a self-taught{' '}
          <span>front-end developer</span> who loves building <span>React</span>{' '}
          applications. Recently, I have decided to turn this hobby of mine into
          a full-fledged career. I pull together a selection of my projects for
          you. These projects showcase my skills in <span>React</span>,{' '}
          <span>Redux</span>, <span>Typescript</span>,{' '}
          <span>web accessibility</span> as well as solutions to various
          challenges these applications presented. I also welcome you to walk
          through my journey into web developement and get a glimpse at my
          future goals:{' '}
          <span className={classes.spoiler}>
            Full Stack!
            <motion.span
              className={classes.spoilerOverlay}
              whileTap={unCover.animate}
            >
              Spoiler Alert
            </motion.span>
          </span>
        </Typography>
        <BrandList />
        <Button
          component='a'
          href='/documents/resume.pdf'
          download
          variant='contained'
          color='primary'
          size='medium'
          tabIndex={5}
        >
          <span aria-hidden='true'>[</span>download resume
          <span aria-hidden='true'>]</span>
        </Button>
      </motion.article>
    </motion.section>
  )
}
