import { useFetchDevelopersQuery } from "../developers-api";

const List = () => {
  const { data = [], error, isLoading } = useFetchDevelopersQuery();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) return <h1>Something went wrong</h1>;

  return (
    <ul>
      {data.map((developers) => (
        <li key={developers.id}>{developers.name}</li>
      ))}
    </ul>
  );
};
export default List;
