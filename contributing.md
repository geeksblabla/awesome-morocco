# Awesome Morocco 🇲🇦 Project

This Project is a full-stack application based on Next.js to create a platform for the Moroccan community to share their awesome projects (Open Source, Blogs, etc.).

The app is built with:

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com) (Authentication)
- [xata](https://xata.io) (Database)
- [Tailwind CSS](https://tailwindcss.com) (Styling)

## Getting Started

To get started, you need first to fork and clone the project to your local machine. Then, install the dependencies:

```bash
pnpm install
```

Make sure to create a free account on [Clerk](https://clerk.com) and [xata](https://xata.io) to get your API keys.

Then, you need to create a `.env.local` file and add the following environment variables:

```bash
## Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# [Xata] Configuration used by the CLI and the SDK
# Make sure your framework/tooling loads this file on startup to have it available for the SDK
XATA_BRANCH=main
XATA_API_KEY=

## Github token to retrieve github repos metadata
GITHUB_API_TOKEN=

## Spotify token to retrieve spotify shows and  metadata
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
```

While creating your xata database, you can use the schema as follows:

````
xata init --schema=./src/schema.json --force
```

Finally, run the development server:

```bash
pnpm dev
```
````
