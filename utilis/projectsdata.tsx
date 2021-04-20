import { DataVisualization, StepData } from '../types'
import FavoriteIcon from '@material-ui/icons/Favorite';

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
      'تخرجت جامعة روشيتر بدرجة البكلوريوس في الأحياء الجقيفة وتخصص في لغة العربية ',
  },
  {
    label: 'Teaching',
    content: <>Teaching English as a second language remotely has connected me to people from across the world. My interest in <span>coding</span> actually began after reading a student's disseration on programming languages and methodology. I was so fascinated by it, that with zero prior knowledge, I decided to venture into the world of <span>coding</span>.</>,
  },
  {
    label: 'Ruby', 
    content: 
      <>
        <span>Ruby</span> was the first language I learned. It English-like synthax was a great start for novice like myself. I built many games in this language. However, I want to create application that ran in the Browser. Onward we go!
      </>,
    url: '',
    
  },
  {
    label: 'JavaScript', 
    content: 
      <>
        I gave up my beloved Ruby for JavaScript. The transition was tough at first but who can resist the language of a web? With <span>JavaScript</span>, <span>HTML</span>, and <span>CSS</span>, I started building and designing applications. My proudest application at the time was <span>Memory Game</span>.
      </>,
    url: 'https://github.com/fufukha/memory-game',
    homepageUrl: 'fufukha.github.io/memory-game/',
    
  },
  {
    label: 'Responsive Design', 
    content: 
      <>
        After learning the fundamental of <span>responsive design</span> and design strategies such as <span>mobile-first</span>, I create sample pages of my own design as well as dups.
      </>,
    url: '',
    
  },
  {
    label: 'React', 
    content: 
      <>
        Armed with Javscript, HTML, and CSS and started building and designing applications. My proudest games at the time a <span>Memory Game</span>.
      </>,
    url: '',
  },
  {
    label: 'XStream Collaboration', 
    content: 
      <>
        I was invited to collaborate on a project. It was an incredible experience to work along side another develop. It was also first taste into <span>back-end</span> development. 
      </>,
    url: '',
  },
  {
    label: 'TypeScript', 
    content: 
      <>
        I <span><FavoriteIcon id='#heart' fontSize='small'/></span> TypeScript! No more memorizing variable names and getting errors because of typoes. 
      </>,
    url: '',
  },
  {
    label: 'Future', 
    content: 
      <>
        I have gain a lot of experience building application, and researching and learning technologies to suit my needs. However, building and design web app as a hobby is no longer stratching the itch. I am excited to turn Front End development into a full time career. 
        As for just my study goals, I would love to delve into the back-end more and become more <span>Full Stack</span>. 
      </>,
  },
]
