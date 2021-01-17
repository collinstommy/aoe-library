const data = require('./raw.json');
const fs = require('fs');

const result = data.map(({ title, description, url, ...rest }) => {
  const tags = Object.entries(rest)
    .map(([key, value]) => value ? key : null)
    .filter(Boolean);
  return {
    title,
    url,
    description,
    tags
  }
});

const json = JSON.stringify(result);
fs.writeFile('./data.json', json, function (err) {
  if (err) return console.log(err);
  console.log('Success. File written.');
});
