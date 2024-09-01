// src/withRouter.js (or withRouterWrapper.js)
import { useNavigate, useLocation, useParams } from 'react-router-dom';

// Custom withRouter function to replace React Router's deprecated withRouter
const withRouter = (Component) => {
  function Wrapper(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    return <Component {...props} navigate={navigate} location={location} params={params} />;
  }

  return Wrapper;
};

export default withRouter;
