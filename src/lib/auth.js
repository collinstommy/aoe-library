export const saveAccessToken = () => {
  const urlSplit = location.href.split('#');
  const hashString = urlSplit[1];
  if (!hashString) return;
  const twitchToken = new URLSearchParams(hashString).get('access_token')
  sessionStorage.setItem('twitchToken', twitchToken);
};
