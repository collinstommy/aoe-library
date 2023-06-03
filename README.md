# AOE Library

[AOE Library](https://www.aoelibrary.com) is a directory of useful information and tools for Age of Empires 2.

## Get started

```bash
npm install
```


...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

Run local admin:

```
npm run local:cms
```

Admin server will run at http://localhost:3000/admin/#/collections/items


## Proposed New Features
- [ ] Set up a database for items which can be directly populated via the form. Would required admin approval.
- [ ] Featured Items. New tools or sites could be featured for a period of time. These would have a different UI treatment and appear at the top of the directory
- [x] Pagination

## To Do
- [ ] fix cms - https://github.com/digitalinteraction/vercel-netlify-cms-github

### Voting
- [x] Add voting api calls
- [x] Voting AI
- [ ] sort cards by votes - allow to be sorted by date added, votes, random
- [ ] change background for filters
- [ ] fix filters centering on mobile
- [ ] fix alignment of likes icon on card, and site/social icons
