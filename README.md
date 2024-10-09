# My fillm list

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e4e1a3a-6ace-48b3-a37c-b686b59890d4/deploy-status)](https://app.netlify.com/sites/my-next-film-list/deploys)

## Local deployment

### 1. Setup mongodb in docker

- copy `.env.example` to `.env.local` and update `.env.local` with your data
- run ```pnpm run dev-local:docker``` to build and start mongodb in docker

#### Extra docs

<https://haneenmahdin.medium.com/set-up-mongodb-prisma-with-docker-c8c2f28e85de>

### 2. Setup prisma

- run ```pnpm run seed:local``` to seed the db with test data
- run ```pnpm run dev-local:prisma:studio``` to start prisma studio (if needed)


## DB commands

- ```pnpm dlx prisma generate``` - If you make any changes later to the schema, you'll need to this command
<!-- - pnpm prisma db seed - seed test data to db -->

## Usefull commands

- ```pnpm dlx sort-package-json``` - sort dependencies in package.json
- ```pnpm update --interactive``` - update dependencies
- ```npx npm-check-updates -i``` - update dependencies, another tool

## Todo

### Back end

- [x] add auth0.com support
- [x] add envs (dev, test, prod)
- [x] deploy to Render
- [ ] update patch method to pass only needed props
- [ ] add sort number and sort by sort number
- [ ] add tests
  - [ ] unit test
  - [ ] integration test

### Front end

- [x] deploy to Netlify
- [x] add login\logout
  - [ ] profile buttons
- [ ] add fields:
  - [ ] film genres
  - [x] type (serial\film). Add to filters
  - [ ] last serial episode
- [ ] add details page for film information (links, description)
- [ ] add filter by genres (select multiple options)
- [x] add filter by type
- [x] filters save in local storage
- [ ] for mobiles hide action buttons and show menu button with popup actions
- [x] add sticky headers
- [ ] add creation date time and sort by date\time
- [ ] add sort number and sort by sort number
- [x] for serials change icon
- [x] add even and odd rules
- [x] BUG: set default type
- [ ] add global error boundry component
- [ ] add global error handling for api requests
- [ ] add a spinner that indicates the progress of the action (edit\add\delete)
- [ ] add toast messages after successful\failed actions
- [ ] add button to show filter (disabled by default)
- [x] show the number of the filtered items after 'total film' title
- [ ] add using something like this <https://developer.themoviedb.org/v4/reference/intro/getting-started>
