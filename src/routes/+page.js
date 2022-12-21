
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

  const response = await fetch('/api/me');
  const likes = await response.json();

  /**
  * @type {import('@sveltejs/kit').Load}
  */
  const items = await Promise.all(body)
  return {
    likes,
    items,
  };
}
