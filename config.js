module.exports = {
    /* endpoint: 'https://api.github.com/', */
    token: 'xxx',
    platform: 'github',
    logLevel: 'debug',
    onboardingConfig: {
      extends: ['config:base'],
    },
    repositories: ['julienp-test-org/gatsby-starter-blog'],
    renovateFork: true,
    gitAuthor: "Julien <julien@caffeine.lu>",
    username: "julienp",
    onboarding: false,
    printConfig: true,
    requireConfig: false,
  };