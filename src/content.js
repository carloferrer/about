import image from './assets/contact';

const download = 'https://drive.google.com/uc?export=download&id=1tT3qSIVoND73DN_qFxSikPDvF2aDDAP7';

const header = {
  firstName: 'Carlo',
  lastName: 'Ferrer',
  title: 'Full Stack Developer',
};

const contact = {
  location: {
    image: image.pin,
    string: 'Toronto, ON (Downtown)',
  },
  phone: {
    image: image.phone,
    string: '647 331 6441',
  },
  email: {
    image: image.gmail,
    string: 'thecarloferrer@gmail.com',
  },
  linkedin: {
    image: image.linkedin,
    string: 'ca.linkedin.com/in/carloferrer',
  },
  github: {
    image: image.github,
    string: 'github.com/carloferrer',
  },
};

const summary = [
  'With a desire for forming creative solutions that exceed the pace of the mechanical engineering industry, my transition into the tech industry was only natural.',
  "I'm a proven quick learner, natural problem solver, and obsessed with optimization (e.g., DRY code)."
];

const skills = {
  Languages: ['JavaScript', 'HTML', 'CSS/SASS', 'Bash', 'Ruby**', 'Python**'],
  'Frameworks & Libraries': ['React', 'Riot', 'Node', 'Angular**', 'TypeScript**', 'Ruby on Rails**'],
  Testing: ['Mocha', 'Chai', 'Sinon'],
  Workflow: ['Git', 'GitHub', 'JIRA', 'Google Suite', 'MS Office Suite'],
  OS: ['macOS', 'Linux (Ubuntu)', 'Windows'],
  'Databases** / Orchestration**': ['MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP'],
};

// const otherSkills = {
//   Languages: ['MATLAB', 'C', 'VBA'],
//   'Frameworks & Libraries': ['jQuery'],
//   'CAD Modelling': ['AutoCAD', 'Inventor', 'SOLIDWORKS', 'Solid Edge']
// };

const employment = [
  {
    employer: 'GroupBy Inc.',
    position: 'Software Engineer (EIT)',
    location: 'Toronto, ON',
    dateStart: 'Feb 2019',
    dateEnd: 'Apr 2019',
    duties: ['Development (via test driven development) and maintenance of StoreFront, an e-commerce UI component library that is fully integrated with the GroupBy ecosystem/services.'],
  },
  {
    employer: 'GroupBy Inc.',
    position: 'Front End Consultant',
    location: 'Toronto, ON',
    dateStart: 'Nov 2017',
    dateEnd: 'Feb 2019',
    duties: ['Development and maintenance of the retail experience for a corporation in the top 10 of the Fortune 500.', 'Resident expert in the implementation of their user-analytics tracking and loyalty program.', 'Acting team lead and technical consultant for the loyalty program team; I managed multiple developers as well as the relationship between the client and GroupBy.'],
  },
  {
    employer: 'Consolidated Energy Solutions Inc.',
    position: 'Design Engineer (EIT)',
    location: 'Toronto, ON',
    dateStart: 'Jul 2017',
    dateEnd: 'Sep 2015',
    duties: ['Mechanical design and analysis of HVAC systems for large grocery chains.'],
  },
  {
    employer: 'GE Nuclear Energy Canada Inc.',
    position: 'Engineering Intern',
    location: 'Peterborough, ON',
    dateStart: 'May 2013',
    dateEnd: 'Aug 2014',
    duties: ['Mechanical design and analysis for various equipment in operation at the OPG Darlington and Bruce Power Nuclear Generating Stations.'],
  }
];

const education = [
  {
    institution: 'Lighthouse Labs',
    discipline: 'Web Development',
    graduationYear: '2017',
  },
  {
    institution: "Queen's University",
    discipline: 'Mechanical Engineering',
    graduationYear: '2015',
    note: 'First Class Honours',
  },
];

const projects = [
  {
    name: 'fast_tracker',
    tech: ['mongoDB', 'Node.js', 'Express', 'Bash'],
    description: 'An API and CLI to streamline tracking one’s tasks throughout the day.',
  },
  {
    name: 'TUNER.',
    tech: ['Spotify API', 'React', 'Express', 'SASS', 'Knex.js', 'PostgreSQL'],
    description: 'Social medium to analyze musical compatibility between users.  It can suggest new music to encourage getting to know other users.',
  },
  {
    name: 'resume',
    tech: ['React', 'SCSS', 'gh-pages'],
    description: 'This project!  A creative approach toward the distribution and viewing of my own resume.  Optimized for varying screen sizes (i.e., desktop and mobile).',
  },
];

export default {
  download,
  header,
  contact,
  summary,
  skills,
  employment,
  education,
  projects,
};