const header = {
  firstName: 'Carlo',
  lastName: 'Ferrer',
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
  'With a desire for forming creative solutions that exceed the pace of the mechanical engineering industry, the transition into the tech industry was only natural.',
  "I'm a proven quick learner, natural problem solver, and obsessed with optimization (e.g., DRY code)."
];

const skills = {
  Languages: ['JavaScript', 'HTML', 'CSS/SCSS/SASS', 'Bash', 'MATLAB', 'C', 'VBA'],
  'Frameworks & Libraries': ['React', 'Riot', 'Node', 'Angular**', 'TypeScript**'],
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
    duties: ['Development and maintenance of the retail experience for an American corporation in the top 10 of the Fortune 500.', 'Resident expert in the implementation of their user-analytics tracking and loyalty program.', 'Acting team lead and technical consultant for the loyalty program team; I managed multiple developers as well as the relationship between the client GroupBy'],
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
    employer: 'GE-Hitachi Nuclear Energy Canada Inc.',
    position: 'Engineering Intern',
    location: 'Peterborough, ON',
    dateStart: 'May 2013',
    dateEnd: 'Aug 2014',
    duties: ['Mechanical design and analysis for various equipment in operation at the OPG Darlington the Bruce Power Nuclear Generating Stations.'],
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
    graduationYear: '2015 (First Honours)',
  },
];

const projects = [
  {
    name: 'about',
    link: 'https://github.com/carloferrer/about',
    tech: ['React', 'SCSS', 'gh-pages'],
    description: 'A creative approach toward the distribution and viewing of my own resume.',
  },
  {
    name: 'fast_tracker',
    link: 'https://github.com/carloferrer/fast_tracker',
    tech: ['mongoDB', 'Node.js', 'Express', 'Bash'],
    description: 'An API and CLI to streamline tracking one’s tasks throughout the day.',
  },
  {
    name: 'TUNER.',
    link: 'https://github.com/carloferrer/TUNER.',
    tech: ['Spotify API', 'React', 'Express', 'SASS', 'Knex.js', 'PostgreSQL'],
    description: 'Social medium to analyze musical compatibility between users.  It can suggest new music to encourage getting to know other users.',
  }
];

export default {
  header,
  contact,
  summary,
  skills,
  employment,
  education,
  projects,
};