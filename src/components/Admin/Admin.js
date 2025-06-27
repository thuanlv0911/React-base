import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      Hi Admin
      <Button className="btn btn-warning">
        <Link to="/">Go to home page</Link>
      </Button>
    </div>
  );
};

export default Admin;
