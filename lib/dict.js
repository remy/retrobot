module.exports = Object.keys(process.env).filter(_ => {
  return _.indexOf('SAY_') === 0;
}).reduce((acc, curr) => {
  acc[curr.split('SAY_').slice(1).join('').toLowerCase()] = process.env[curr];
  return acc;
}, {});

// module.exports = {
//   chicken: '🍗 oh…hell yes :nandos:',
//   wink: ':approved:',
//   hey: ':taco: hey right back at you',
//   help: '',
//   snyk: `It's snyk said like "sneek", not "snik", seriously, just as @guypod`,
// };
