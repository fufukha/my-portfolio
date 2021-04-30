import { DataVisualization, StepData } from '../types'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'

export const dataVisualization: DataVisualization = {
  name: 'Data Visualization',
  language: 'javascript',
  imageUrl: '/images/dv.png',
  description:
    'Graphic visuals represenating of data from 885 of my ESL students. Features a chorochromatic map, bar chart and pie chart. Data was collected via a webscrawler written in Python.',
  topics: [
    'javascript',
    'data-visualization',
    'leaftlet',
    'mapbox',
    'chartjs',
    'web-crawler',
    'python',
    'scrapy',
  ],
}

export const steps: StepData[] = [
  {
    label: 'University',
    content:
      "I graduated UofR with a Bachelor's degree in Microbiology and a minor in Arabic.",
    arabicContent:
      'تخرجت من جامعة روشيتر بدرجة البكالوريوس في الأحياء الدقيقة وتخصصت في اللغة العربية ',
  },
  {
    label: 'Teaching',
    content: (
      <>
        Teaching English as a second language remotely has connected me to
        people from across the world. My interest in <span>coding</span>{' '}
        actually began after reviewing a student's dissertation on programming
        languages and methodology. I was so fascinated by it that I&mdash;with
        zero prior knowledge&mdash;decided to venture into the world of{' '}
        <span>coding</span>.
      </>
    ),
  },
  {
    label: 'Ruby',
    content: (
      <>
        <span>Ruby</span> was the first language I learned. Its English-like
        syntax is a great start for novices. I had a lot of fun building games
        in this language; however, I wanted to create applications that ran in
        the browser. Onward we go!
      </>
    ),
    url: '',
  },
  {
    label: 'JavaScript',
    content: (
      <>
        I gave up my beloved Ruby for JavaScript. The transition was tough at
        first but who can resist the language of the web? With{' '}
        <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>, I
        started building and designing applications. My proudest application at
        the time was <span>Memory Game</span>.
      </>
    ),
    url: 'https://github.com/fufukha/memory-game',
    homepageUrl: 'https://fufukha.github.io/memory-game/',
  },
  {
    label: 'Responsive Design',
    content: (
      <>
        After learning the fundamentals of <span>responsive design</span> and
        design strategies such as <span>mobile-first</span>, I created sample
        pages of my own design, and clones.
      </>
    ),
    url: 'https://github.com/fufukha/minesweeper',
    homepageUrl: 'https://fufukha.github.io/minesweeper/',
  },
  {
    label: 'React',
    content: (
      <>
        Ah... <span>React</span>. Around this time, my most challenging{' '}
        <span>React</span> application was Minesweeper. Originally, I built it
        to focus on using <span>Redux</span> to manage the state but it also led
        me to delve deeper into <span>data structures and algorithms</span>.
        Since then I have built numerous <span>React</span> applications.
      </>
    ),
    url: 'https://github.com/fufukha/minesweeper',
    homepageUrl: 'https://fufukha.github.io/minesweeper/',
  },
  {
    label: 'First Team Project',
    content: (
      <>
        I was invited to <span>collaborate</span> on a project. It was an
        incredible experience to work alongside another developer. I was
        responsible for designing and implementing entire features and paired
        with the lead developer on several others. I also presented my ideas
        that I thought were meaningful to the project or that particular
        roll-out. This was also my first time working with <span>Firebase</span>
        .
      </>
    ),
    url: 'https://github.com/abogalambo/xstream',
    homepageUrl: 'http://x-stream-45773.firebaseapp.com/',
  },
  {
    label: 'TypeScript',
    content: (
      <>
        I{' '}
        <span>
          <Typography variant='srOnly'>heart</Typography>
          <FavoriteIcon id='#heart' fontSize='small' />
        </span>{' '}
        TypeScript! No more silly typos and passing the wrong arguments!
      </>
    ),
    url: 'https://github.com/fufukha/type-in-arabic',
    homepageUrl: 'https://fufukha.github.io/type-in-arabic/',
  },
  {
    label: 'Future',
    content: (
      <>
        I have gained a lot of experience building applications, and researching
        and learning technologies to suit my needs. However, building and
        designing web app as just a hobby is no longer scratching the itch. I am
        excited to turn <span>front-end development</span> into a full time{' '}
        <span>career</span>. As for my study goals, I would love to explore the{' '}
        <span>back-end</span> more and become more <span>Full Stack</span>.
      </>
    ),
  },
]
