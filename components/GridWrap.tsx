import Box, { BoxProps } from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ReactNode } from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '55px',
    '& > .MuiCard-root': {
      marginBottom: '20px',
    },
    '& > .MuiCard-root:nth-child(odd)': {
      transform: 'translateY(-35px)',
      marginRight: '20px',
    },
  },
})

interface GridWrapProps extends BoxProps {
  children: ReactNode
}

const GridWrap = ({ component, children }: GridWrapProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.root} component={component}>
      {children}
    </Box>
  )
}

export default GridWrap
