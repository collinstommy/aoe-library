import fs from 'fs';
import path from 'path';
import YAML from 'json-to-pretty-yaml';

export async function writeItems() {
  const ITEMS_FOLDER = './content/items';
  const JSON_PATH = './static/data'

  console.log('Reading items from ' + ITEMS_FOLDER);
  const items = fs.readdirSync(ITEMS_FOLDER).map(file => {
    const fileData = fs.readFileSync(path.join(ITEMS_FOLDER, file));
    return JSON.parse(fileData.toString());
  });

  console.log('Writing json and yaml to' + JSON_PATH);
  fs.writeFileSync(path.join(JSON_PATH, 'items.json'), JSON.stringify(items));
  fs.writeFileSync(path.join(JSON_PATH, 'items.yml'), YAML.stringify(items));
  console.log('Wrote items to file');
}
