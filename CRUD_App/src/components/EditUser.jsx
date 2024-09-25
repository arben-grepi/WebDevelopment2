import { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useParams
import { GlobalContext } from "../context/GlobalState";

import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = () => {
  const navigate = useNavigate();

  const { id: currentUserId } = useParams(); // Use useParams to get the current user ID

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, name: e.target.value }); // Update name in state
  };

  useEffect(() => {
    const user = users.find((user) => user.id === currentUserId);
    if (user) {
      setSelectedUser(user); // Set selected user if found
    }
  }, [users, currentUserId]);

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    editUser(selectedUser); // Call editUser with the selected user
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          value={selectedUser.name}
          onChange={onChange}
          type="text"
          placeholder="Edit Name"
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
