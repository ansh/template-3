import { z } from "zod";
import { publicProcedure, router, privateProcedure } from "./trpc";
import { auth } from "../firebase";

// combined router
export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, ${input.name}!`,
      };
    }),
  verifyToken: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    try {
      const decodedToken = await auth.verifyIdToken(input);
      return { uid: decodedToken.uid };
    } catch (error) {
      throw new Error("Invalid token");
    }
  }),
  getProtectedData: privateProcedure.query(() => {
    return {
      message: "This is protected data from the backend!",
    };
  }),
});

// type definition of trpc API
export type AppRouter = typeof appRouter;
