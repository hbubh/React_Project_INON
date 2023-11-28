import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import SearchIconWrapper from "./SearchIconWrapper";
import StyledInputBase from "./StyledInputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
const FilterComponent = () => {
  const [txt, setTxt] = useState("");
  const [thisW, setW] = useState("5%");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setTxt(e.target.value);
    navigate(`/React_Project_INON/?filter=${e.target.value}`);
  };
  const handleOpenSearch = () => {
    if (thisW === "5%") {
      setW("30%");
    } else {
      setW("5%");
    }
  };

  return (
    <Search
      sx={{
        ml: "2%",
        mr: "5%",
        bgcolor: "black",
        width: { xs: thisW, md: "15%" },
        transition: "all 0.5s",
      }}
      onClick={handleOpenSearch}
    >
      <SearchIconWrapper>
        <SearchIcon onClick={handleOpenSearch} />
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
