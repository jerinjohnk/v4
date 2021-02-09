module.exports = {
  email: 'jerin2789@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jerinjohnk',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@jerinjohnk',
    },
    {
      name: 'StackOverflow',
      url: 'https://www.stackoverflow.com/story/jerinjohnk',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jerinjohnk',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jerinjohnk',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    yellow: '#FFDF6C',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
