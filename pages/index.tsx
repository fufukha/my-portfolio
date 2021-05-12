import { Button, makeStyles, Typography } from '@material-ui/core'
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { fadeInUp, stagger, unCover } from '../animation'
import BrandList from '../components/BrandList'
import data from '../config/config.json'
import HighLightText from '../components/HighlightText'

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
      <div
        dangerouslySetInnerHTML={{
          __html: `<!-- Design inspired by Louis Rätz -->`,
        }}
      />
      <motion.header variants={fadeInUp}>
        <Typography component='h1' variant='h2' gutterBottom>
          {`I am ${data.name},`}
        </Typography>
        <Typography component='h2' variant='h1' gutterBottom>
          {data.jobTitle}
        </Typography>
        <div className={classes.location}>
          <ArrowForwardIosIcon color='primary' fontSize={'large'} />
          <Typography component='h3' variant='h2'>
            {`based in ${data.location}`}
          </Typography>
        </div>
      </motion.header>
      <motion.article className={classes.article} variants={fadeInUp}>
        <Typography component='p' variant='body1' color='textSecondary'>
          <HighLightText>{data.intro.text}</HighLightText>
          {data.intro.spoiler.length && (
            <span
              title='spoiler alert'
              aria-label='spoiler alert full stack'
              className={classes.spoiler}
            >
              Full Stack!
              <motion.span
                role='presentation'
                aria-hidden='true'
                className={classes.spoilerOverlay}
                whileTap={unCover.animate}
              >
                Spoiler Alert
              </motion.span>
            </span>
          )}
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
      <div
        dangerouslySetInnerHTML={{ __html: `<!-- Design inspired END -->` }}
      />
    </motion.section>
  )
}
