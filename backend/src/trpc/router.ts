import { z } from "zod";
import { publicProcedure, router } from "./trpc";

// combined router
export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
});

// type definition of trpc API
export type AppRouter = typeof appRouter;
