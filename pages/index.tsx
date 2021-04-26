import { Button, makeStyles, Typography } from '@material-ui/core'
import { ArrowForwardIos as ArrowForwardIosIcon } from '@material-ui/icons'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animation'

const useStyles = makeStyles(({ palette }) => ({
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
}))

export default function Home() {
  const classes = useStyles()

  return (
    <motion.section className={classes.section} variants={stagger}>
      <motion.header variants={fadeInUp}>
        <Typography
          component='h1'
          variant='h2'
          gutterBottom
        >
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
        <Typography variant='body1' color='textSecondary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          elit vehicula, dapibus eros quis, suscipit diam. Curabitur efficitur
          facilisis rutrum. Pellentesque odio massa, semper vitae laoreet sed,
          interdum id elit. Vestibulum mi ipsum, auctor non felis non, lobortis{' '}
          <span>ReactJS</span>, <span>TypeScript</span>, <span>NextJS</span>,{' '}
          <span>Apollo Client</span> tortor. Etiam tincidunt odio dui, sed
          vulputate sem gravida sed. Nullam erat felis, porta eget ante sed,
          suscipit congue nisl. Nulla a sem mauris.
        </Typography>
        <Button
          component='a'
          href='../public/documents/resume.pdf'
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
