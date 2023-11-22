import { Box, Button, Container } from "@mui/material";
import { useState } from "react";

const SetPost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const handleCreat = (e) => {
    e.preventDefault();
    setPosts([...posts, post]);
    return setPost(INITIAL_POST);
  };
  return (
    <Container>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          border: "3px solid darkgray",
          padding: "20px",
          borderRadius: "15px",
          bgcolor: "white",
        }}
      >
        <form action="">
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={post.subtitle}
            onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={post.createdAt}
            onChange={(e) => setPost({ ...post, createdAt: e.target.value })}
          />
          <br />
          <Button onClick={handleCreat}>Creat</Button>
        </form>
      </Box>
    </Container>
  );
};
export default SetPost;
