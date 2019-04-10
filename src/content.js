const title = {
  name: 'Carlo Ferrer',
  title: 'Full Stack Developer',
};

const contact = {
  email: 'thecarloferrer@gmail.com',
  phone: '647 331 6441',
  linkedin: 'ca.linkedin.com/in/carloferrer',
  github: 'github.com/carloferrer',
  location: 'Toronto, ON (Downtown)',
};

const summary = [
  'Mechanical engineer turned web developer with: 1.5 years in e-commerce as a front-end developer; 2 years in HVAC and 1.5 years in nuclear power generation as an engineer.',
  "I had a desire for generating creative solutions that exceeded the pace of the mechanical engineering industry, so the transition into the tech industry was only natural.  I'm a proven quick learner, natural problem solver, and obsessed with optimization (e.g., DRY code)."
];

const skills = {
  Languages: ['JavaScript', 'HTML', 'CSS/SCSS/SASS', 'Bash', 'MATLAB', 'C', 'VBA'],
  'Frameworks & Libraries': ['Riot.js', 'React', 'Angular', 'Express.js', 'jQuery'],
  Testing: ['Mocha', 'Chai', 'Sinon'],
  Databases: ['MongoDB', 'PostgreSQL'],
  Workflow: ['JIRA', 'Node.js', 'MS Word', 'MS Excel', 'MS PowerPoint'],
  'CAD Modelling': ['AutoCAD', 'Inventor', 'SOLIDWORKS', 'Solid Edge']
};

const employment = [
  {
    employer: 'GroupBy Inc.',
    position: 'StoreFront Developer',
    location: 'Toronto, ON',
    dateStart: 'Feb 2019',
    dateEnd: 'Apr 2019',
    duties: 'StoreFront development and stuff I guess.',
  },
  {
    employer: 'GroupBy Inc.',
    position: 'Front End Consultant',
    location: 'Toronto, ON',
    dateStart: 'Nov 2017',
    dateEnd: 'Feb 2019',
    duties: 'Front end stuff.',
  },
  {
    employer: 'Consolidated Energy Solutions Inc.',
    position: 'Design Engineer (EIT)',
    location: 'Toronto, ON',
    dateStart: 'Jul 2017',
    dateEnd: 'Sep 2015',
    duties: 'HVAC systems design and whatnot.',
  },
  {
    employer: 'GE-Hitachi Nuclear Energy Canada Inc.',
    position: 'Mechanical Engineering Intern',
    location: 'Peterborough, ON',
    dateStart: 'May 2013',
    dateEnd: 'Aug 2014',
    duties: 'Mechanical design and analysis for nuclear stuff.',
  }
];

const education = [
  {
    institution: 'Lighthouse Labs',
    discipline: 'Web Development Bootcamp',
    graduationYear: '2017',
  },
  {
    institution: "Queen's University",
    discipline: 'Mechanical Engineering',
    graduationYear: '2015',
  },
];

const projects = [
  {
    name: 'about',
    tech: ['React', 'SCSS', 'gh-pages'],
    description: 'A more creative and robust take on my own resume.',
  },
  {
    name: 'fast_tracker',
    tech: ['mongoDB', 'Node.js', 'Express', 'Bash'],
    description: 'A tool for conveniently keeping track of your day, utilized via the command line.',
  },
  {
    name: 'TUNER.',
    tech: ['Spotify API', 'React', 'Express', 'SASS', 'Knex.js', 'PostgreSQL'],
    description: 'A social medium that analyzes musical compatibility between Spotify users based on their Spotify profile data.  From these analyses, Spotcheck will provide suggestions for new music in a way that encourages users to get to know each other better.',
  }
];

export default {
  title,
  contact,
  summary,
  skills,
  employment,
  education,
  projects,
};