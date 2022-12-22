
export async function load({ fetch }) {
  const dataItems = import.meta.glob('../../content/items/*.json');
  let body = [];

  for (const path in dataItems) {
    body.push(dataItems[path]().then(item => {
      const copy = { ...item };
      delete copy.default;
      return copy;
    }));
  }

  const me = await (await fetch('/api/me')).json();
  const likes = await (await fetch('/api/likes')).json();

  /**
  * @type {import('@sveltejs/kit').Load}
  */
  const items = await Promise.all(body)
  return {
    me,
    items,
    likes,
  };
}
