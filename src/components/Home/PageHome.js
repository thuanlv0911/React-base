import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PageHome = () => {
  return (
    <div>
      Test
      <div>
        <Button className="btn btn-warning">
          <Link to="/user">Go to the user page</Link>
        </Button>
        <Button className="btn btn-warning">
          <Link to="/admin">Go to the admin page</Link>
        </Button>
      </div>
    </div>
  );
};

export default PageHome;
