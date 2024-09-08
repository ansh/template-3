import { trpc } from "../config/trpc";

function AuthenticatedDataFetcher() {
  const protectedData = trpc.getProtectedData.useQuery();

  if (protectedData.isLoading) {
    return <div>Loading...</div>;
  }

  if (protectedData.isError) {
    return (
      <div>
        Error: {protectedData.error.message}
        {protectedData.error.data?.code === "UNAUTHORIZED" && (
          <p>You are not authenticated. Please log in.</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h2>Protected Data:</h2>
      <p>{protectedData.data.message}</p>
      <p>Authentication Status: Authenticated</p>
    </div>
  );
}

export default AuthenticatedDataFetcher;
