import { Button, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const CounterActionsPage = () => {
  const [txt, setTxt] = useState("");
  const dispatch = useDispatch();
  const handleAdd1Click = () => {
    dispatch(counterActions.add1());
  };
  const handleChange = (e) => {
    setTxt(e.target.value);
  };
  const handleClickAddNumber = () => {
    dispatch(counterActions.add(txt));
  };
  const handleClickSubNumber = () => {
    dispatch(counterActions.sub(txt));
  };
  const handleClickMultNumber = () => {
    dispatch(counterActions.mult(txt));
  };
  const handleClickDivNumber = () => {
    dispatch(counterActions.div(txt));
  };
  return (
    <Fragment>
      <Button onClick={handleAdd1Click}>add 1</Button>
      <TextField value={txt} onChange={handleChange} />
      <Button onClick={handleClickAddNumber}>add</Button>
      <Button onClick={handleClickSubNumber}>sub</Button>
      <Button onClick={handleClickMultNumber}>Multi</Button>
      <Button onClick={handleClickDivNumber}>Divide</Button>
    </Fragment>
  );
};

export default CounterActionsPage;
