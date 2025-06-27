import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      Hi User
      <Button className="btn btn-warning">
        <Link to="/">Go to home page</Link>
      </Button>
    </div>
  );
};

export default User;
