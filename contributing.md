# 🧐 Want to contribute ?

This project is based on the [t3](https://create.t3.gg/) stack. Make sure to read the [t3 documentation](https://t3.gg/docs/) to understand how it works before contributing.

## Pre-requisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)

## Getting started

1. Fork the repository
2. Clone your forked repository

```bash
git clone https://github.com/geeksblabla/awesome-morocco.git
```

3. Install dependencies

```bash
pnpm install
```

4. Create a github application for authentication:

   - Go to (https://github.com/settings/apps) to create a github application.
   - Set the homepage url to `http://localhost:3000`
   - Set the callback url to `http://localhost:3000/api/auth/callback/github`
   - Generate a client secret and copy cline id and client secret to `.env` file
   - Set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env` file

5. Generate a [Github personal access token](https://github.com/settings/tokens) to fetch data from github api and copy it to `.env` file as `GITHUB_API_TOKEN` (this token should have `repo` scope only as we only need to fetch data from github api)

6. Init the database and start the development server

```bash
pnpm prisma db push
pnpm dev
```
