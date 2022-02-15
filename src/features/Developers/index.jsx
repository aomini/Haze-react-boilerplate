import React from "react";
import Button, { Variants } from "../../components/Button";
import { useFetchDevelopersQuery } from "./developers-api";
import Style from "./developers.module.scss";

const Developers = ({ onSetEditable }) => {
  const { data = [], isLoading, isError } = useFetchDevelopersQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Something went wrong.</h1>;

  return (
    <div>
      {data.map((developer) => (
        <div className={Style.employeeCard} key={developer.id}>
          <h2>{developer.name}</h2>
          <h3>{developer.position}</h3>
          <DeveloperById id={developer.id} />
          <div className={Style.actions}>
            <Button variant={Variants.outlined}>View</Button>
            <Button
              variant={Variants.outlined}
              onClick={() => onSetEditable(developer.id)}
            >
              Edit
            </Button>
            <Button variant={Variants.outlined}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Demo: Developer By ID
const DeveloperById = ({ id }) => {
  const { developer } = useFetchDevelopersQuery(undefined, {
    selectFromResult: ({ data }) => {
      return {
        developer: data?.find((x) => x.id === id),
      };
    },
  });
  return <h3>{developer?.id}</h3>;
};

export default Developers;
