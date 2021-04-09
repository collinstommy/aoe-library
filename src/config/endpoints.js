
const urls = {
  DEV: 'https://www.aoelibrary.com/api/dev',
  QA: 'https://www.aoelibrary.com/api/qa',
  MAIN: 'https://www.aoelibrary.com/api', // prod
  LOCAL: 'http://localhost:3000/dev',
}

const { BRANCH, NODE_ENV } = process.env;

console.log({ NODE_ENV, urls });

const getEndpoint = () => {
  if (!BRANCH) {
    return urls.LOCAL;
  }
  return urls[BRANCH];

}

const baseurl = getEndpoint();

export const voteEndpoint = `${baseurl}/votes`;
