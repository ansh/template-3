import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../backend/src/trpc/router";
import { auth } from "./firebase";
import { QueryClient } from "@tanstack/react-query";

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCReact<AppRouter>();
export const queryClient = new QueryClient();
export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:5000/trpc",
      async headers() {
        const token = await auth.currentUser?.getIdToken();
        return token ? { Authorization: `Bearer ${token}` } : {};
      },
    }),
  ],
});
