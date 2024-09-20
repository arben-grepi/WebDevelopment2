import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { getWord } from "../services/sanakirjaService";
import { AxiosError } from "axios";
import { schema, FormData } from "./FormGetWordVal";
import { joiResolver } from "@hookform/resolvers/joi";

export const FormGetWord = () => {
  const [word, setWord] = useState<string>("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onChange",
  });

  const sumbitForm = async (data: FieldValues) => {
    try {
      const value = await getWord(data.annaSana);
      if (value instanceof AxiosError) {
        setTimeout(() => {
          reset(); // Reset the form inputs
          setError(""); // Clear the response message
        }, 1000); // 1000 milliseconds = 1 second
        return setError(value.message);
      } else {
        setWord(value);
        setTimeout(() => {
          reset({ annaSana: "" }); // Reset the form inputs
          setError(""); // Clear the response message
        }, 1000); // 1000 milliseconds = 1 second
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sumbitForm)}>
        <h4>Hae sana sanakirjasta</h4>
        <label htmlFor="annaSana" className="form-label mt-3">
          Anna sana
        </label>
        <input
          {...register("annaSana")}
          id="annaSana"
          type="text"
          className="form-control"
          style={{ width: "200px" }}
        />
        {!isValid && <p className="text-danger">{errors.annaSana?.message}</p>}
        <label htmlFor="annaSana" className="form-label">
          Paina Käännä nappia
        </label>
        <input
          value={word}
          id="sanaEnglanniksi"
          type="text"
          className="form-control"
          style={{ width: "200px" }}
          readOnly
          tabIndex={-1} // Prevent focus with Tab key
        />
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-primary w-30 mt-3"
        >
          Käännä
        </button>
      </form>
      {error && (
        <div className="mt-3 text-danger">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FormGetWord;
