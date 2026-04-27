export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build']
    ],
    'subject-case': [2, 'never', ['upper-case']]
  }
};

