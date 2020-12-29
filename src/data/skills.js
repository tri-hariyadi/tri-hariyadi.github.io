import { 
  Javascript,
  ILGolang,
  ILDart, 
  ILReact,
  ILFlutter,
  ILBootstrap,
  ILCss3,
  ILNodeJs,
  ILMongodb,
  ILGit,
  ILHeroku,
  ILGitHub,
  ILSass,
  ILMysql,
  ILNextJs
} from '../assets';

const skillData = {
  programLanguages: [
    {
      language: 'Javascript',
      imgSrc: Javascript
    },
    {
      language: 'GoLang',
      imgSrc: ILGolang
    },
    {
      language: 'Dart',
      imgSrc: ILDart
    }
  ],
  frontEnd: [
    {
      name: 'React Js',
      imgSrc: ILReact
    },
    {
      name: 'React Native',
      imgSrc: ILReact
    },
    {
      name: 'Flutter',
      imgSrc: ILFlutter
    },
    {
      name: 'CSS3',
      imgSrc: ILCss3
    },
    {
      name: 'Bootstrap',
      imgSrc: ILBootstrap
    },
    {
      name: 'SASS',
      imgSrc: ILSass
    },
    {
      name: 'Next Js',
      imgSrc: ILNextJs
    }
  ],
  backEnd: [
    {
      name: 'Node Js',
      imgSrc: ILNodeJs
    },
    {
      name: 'GoLang',
      imgSrc: ILGolang
    }
  ],
  dataBase: [
    {
      name: 'MongoDB',
      imgSrc: ILMongodb
    },
    {
      name: 'MYSQL',
      imgSrc: ILMysql
    }
  ],
  versionControl: [
    {
      name: 'Github',
      imgSrc: ILGit
    }
  ],
  hostingPlatform: [
    {
      name: 'Heroku',
      imgSrc: ILHeroku
    },
    {
      name: 'Github Pages',
      imgSrc: ILGitHub
    }
  ]
}

export default skillData;
