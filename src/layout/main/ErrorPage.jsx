import ROUTES from "../../routes/ROUTES";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const navigate = useNavigate();
  return navigate(ROUTES.HOME);
};
export default ErrorComponent;

