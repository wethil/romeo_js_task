# Romeo Javascript Challenge

This app developed with [**NextJS**](https://nextjs.org/)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd romeo_challenge
```

Install dependencies

```bash
  npm install
  yarn install
```

Change the `baseUrl` value on `api/membersApi.js` with proper server url

```bash
  npm run dev
  yarn dev
```

Start the server

```bash
  npm run dev
  yarn dev
```

## 3. Party Libraries

[**@reduxjs/toolkit**](https://redux-toolkit.js.org/) for Api calls and state management included rtk-query

[**styled-bootstrap-grid**](https://github.com/dragma/styled-bootstrap-grid#readme) for responsive grid system

[**styled-components**](https://styled-components.com/) for styling elements

[**styled-system**](https://styled-system.com/) for make UI components able to get styles as props

[**react-infinite-scroll-component**](https://github.com/ankeetmaini/react-infinite-scroll-component#readme) for use infinity scrolling, pull to refresh

[**s-ago**](s-ago) for create human friendly relative timestamps

## 4. File Structure

`api/` includes members api instance, with its hooks and reducers integrated

`components/` includes specialised components with its helpers

`components/common` includes generic ui components and

`core/` includes redux store configurations

`constants/` includes project contants

`pages/` includes route-based pages of the app

`utils/` includes little util helpers
