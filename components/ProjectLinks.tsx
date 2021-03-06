import IconButton from '@material-ui/core/IconButton'
import { GitHub as GitHubIcon, Launch as LaunchIcon } from '@material-ui/icons'

interface ProjectLinksProps {
  homepageUrl?: string
  url?: string
  size?: 'small' | 'medium'
}

const ProjectLinks = ({ homepageUrl, url, size }: ProjectLinksProps) => {
  return (
    <>
      {homepageUrl && (
        <IconButton
          aria-label='Project\s website'
          title="Project's website"
          disabled={homepageUrl === undefined}
          href={homepageUrl}
          target='_blank'
          component='a'
          size={size ? size : 'medium'}
        >
          <LaunchIcon />
        </IconButton>
      )}
      {url && (
        <IconButton
          aria-label='Github respository'
          title='GitHub repository'
          disabled={url === undefined}
          href={url}
          target='_blank'
          component='a'
        >
          <GitHubIcon />
        </IconButton>
      )}
    </>
  )
}

export default ProjectLinks
