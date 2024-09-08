import { trpc } from "../config/trpc";

function DataFetcher() {
  const hello = trpc.hello.useQuery({ name: "React" });

  if (hello.isLoading) {
    return <div>Loading...</div>;
  }

  if (hello.isError) {
    return <div>Error: {hello.error.message}</div>;
  }

  return (
    <div>
      <h2>Data from backend:</h2>
      <p>{hello.data.greeting}</p>
    </div>
  );
}

export default DataFetcher;
