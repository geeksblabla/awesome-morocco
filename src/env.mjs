import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

console.log("CLERK_SECRET_KEY", process.env.CLERK_SECRET_KEY);
console.log("G_API_TOKEN", process.env.G_API_TOKEN);
console.log("SPOTIFY_CLIENT_ID", process.env.SPOTIFY_CLIENT_ID);
console.log("SPOTIFY_CLIENT_SECRET", process.env.SPOTIFY_CLIENT_SECRET);
console.log("XATA_BRANCH", process.env.XATA_BRANCH);
console.log("XATA_API_KEY", process.env.XATA_API_KEY);
console.log(
  "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
);
console.log(
  "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL",
  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
);
console.log(
  "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL",
  process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
);
console.log("NON_ENV", process.env.NON_ENV);

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    CLERK_SECRET_KEY: z.string(),
    G_API_TOKEN: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    XATA_BRANCH: z.string(),
    XATA_API_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string(),
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL:
      process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    G_API_TOKEN: process.env.G_API_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    XATA_BRANCH: process.env.XATA_BRANCH,
    XATA_API_KEY: process.env.XATA_API_KEY,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
