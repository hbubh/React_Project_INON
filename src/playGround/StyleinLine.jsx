const StyleinLine = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "80%",
        marginLeft: "10%",
        border: "2px solid black",
        padding: "20px",
        backgroundColor: "green",
        boxShadow: "5px 5px 10px",
      }}
    >
      <button
        style={{
          padding: "10px",
          backgroundColor: "navy",
          color: "white",
          borderRadius: "10px",
          boxShadow: "3px 3px 7px",
          fontWeight: "bold",
        }}
      >
        Click 1
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10px",
          boxShadow: "2px 2px 7px",
        }}
      >
        Click 2
      </button>
      <button
        style={{
          padding: "10px",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "10px",
          boxShadow: "2px 2px 7px",
        }}
      >
        Click 3
      </button>
    </div>
  );
};

export default StyleinLine;
