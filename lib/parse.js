const YAML = require('json-to-pretty-yaml');
const fs = require('fs');
const json = require('./../src/data.json');
const slugify = require('slugify')


json.map(item => {
  const { id, ...rest } = item;
  return {
    ...rest
  };
}).forEach(item => {
  const data = JSON.stringify(item, null, 2);
  const slug = slugify(item.title)
  fs.writeFileSync(`./content/items/${slug}.json`, data);
});

