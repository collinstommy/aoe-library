import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Adds uuids to add items
const ITEMS_FOLDER = '../content/items';

console.log('Reading items from ' + ITEMS_FOLDER);
const items = fs.readdirSync(ITEMS_FOLDER).map(file => {
  const fileData = fs.readFileSync(path.join(ITEMS_FOLDER, file));
  const data = JSON.parse(fileData.toString());
  const id = uuidv4()
  const newData = {
    id,
    ...data,
  }
  fs.writeFileSync(path.join(ITEMS_FOLDER, file), JSON.stringify(newData, null, 4));
});

// console.log('Writing json and yaml to' + DATA_PATH);
// fs.writeFileSync(path.join(DATA_PATH, 'items.json'), JSON.stringify(items));
// fs.writeFileSync(path.join(DATA_PATH, 'items.yml'), YAML.stringify(items));
// console.log('Wrote items to file');
