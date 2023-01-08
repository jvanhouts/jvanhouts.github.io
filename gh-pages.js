var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'git@github.com:gunwunbun/gunwunbun.github.io.git', // Update to point to your repository
    user: {
      name: 'gunwunbun', // update to use your name
      email: 'jvanhouts@protonmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);