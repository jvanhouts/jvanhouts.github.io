var ghpages = import('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:jvanhouts/jvanhouts.github.io.git',
    user: {
      name: 'jvanhouts',
      email: 'jvanhouts@protonmail.com'
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);