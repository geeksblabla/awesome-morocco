import { createTRPCRouter } from "~/server/api/trpc";
import { githubRouter } from "./routers/github";
import { blogRouter } from "./routers/blog";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  github: githubRouter,
  blog: blogRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
