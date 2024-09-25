import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";
export const AddUser = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { addUser } = useContext(GlobalContext);

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={onChange}
          placeholder="Enter name"
          value={name}
          type="text"
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
