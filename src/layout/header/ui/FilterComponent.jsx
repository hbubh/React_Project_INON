import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
const FilterComponent = () => {
  const [txt, setTxt] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setTxt(e.target.value);
    navigate(`/React_Project_INON/?filter=${e.target.value}`);
  };

  return (
    <Search sx={{ ml: "2%", width: { xs: "30%", md: "15%" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={txt}
        onChange={handleInputChange}
      />
    </Search>
  );
};

export default FilterComponent;
