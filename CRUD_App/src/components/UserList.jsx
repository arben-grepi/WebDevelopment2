import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { useContext } from "react";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);

  if (users.length === 0)
    return <h4 className="text-center mt-3 text-danger">No users</h4>;

  return (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem key={user.id} className="d-flex">
          <strong>{user.name}</strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button onClick={() => removeUser(user.id)} color="danger">
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
