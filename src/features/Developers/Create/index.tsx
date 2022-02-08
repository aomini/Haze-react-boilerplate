import React from "react";
import {
  useAddDevelopersMutation,
  useFetchDevelopersQuery,
  Developer,
  useFetchDeveloperQuery,
  useUpdateDeveloperMutation,
} from "../developers-api";
import "./create.css";

interface iCreateProps {
  editable?: number | null;
}

interface Field {
  name: "name" | "position";
  type: string;
  label: string;
}

const fields: Field[] = [
  { name: "name", label: "Title", type: "text" },
  { name: "position", label: "Position", type: "text" },
];

type DeveloperWithoutId = Omit<Developer, "id">;

const Create = ({ editable }: iCreateProps) => {
  const [values, setValues] = React.useState<DeveloperWithoutId>({
    name: "",
    position: "",
  });
  const { data = [] } = useFetchDevelopersQuery(undefined, {
    skip: !!editable,
  });
  const { data: editableDeveloper, isError } = useFetchDeveloperQuery(
    editable || undefined,
    {
      skip: !editable,
    }
  );
  const [addDevelopers] = useAddDevelopersMutation();
  const [updateDeveloper] = useUpdateDeveloperMutation()

  React.useEffect(() => {
    if (!isError && editableDeveloper) {
      const { name, position } = editableDeveloper;
      setValues((prev) => ({ ...prev, name, position }));
    }
  }, [editableDeveloper, isError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault(); 
    const fn = editable ? updateDeveloper: addDevelopers;
    fn({
      id: editable ? editable : data.length + 1,
      ...values,
    });
  };

  return (
    <form className="basic" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type="text"
            id={field.name}
            onChange={handleChange}
            name={field.name}
            value={values[field.name]}
          />
        </div>
      ))}

      <button type="submit">{editable ? "Update" : "Create"}</button>
    </form>
  );
};
export default Create;
