import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

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
    <Container className={classes.section} maxWidth='md'>
      <header>
        <Typography
          component='h1'
          variant='h2'
          color='textSecondary'
          gutterBottom
        >
          I am Kamile,
        </Typography>
        <Typography component='h2' variant='h1' gutterBottom>
          Web / React Developer
        </Typography>
        <div className={classes.location}>
          <ArrowForwardIosIcon color='primary' />
          <Typography component='h3' variant='h2' color='textSecondary'>
            based in FL, US
          </Typography>
        </div>
      </header>
      <article className={classes.article}>
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
        >
          <span aria-hidden='true'>[</span>download resume<span aria-hidden='true'>]</span>
        </Button>
      </article>
    </Container>
  )
}
