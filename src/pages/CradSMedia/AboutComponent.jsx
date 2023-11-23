import { Box, Paper, Typography } from "@mui/material";

const AboutComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        padding: { xs: "5px", md: "30px" },
        mt: { xs: "20%", md: "5%", lg: "5%" },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          height: { xs: "100%", md: "auto" },
          padding: "30px",
        }}
      >
        <Box display={{ xs: "block", md: "flex" }}>
          <Typography
            variant="h2"
            sx={{
              padding: "10px",
              width: { xs: "100%", md: "40%" },
              textAlign: "left",
            }}
          >
            About Us
          </Typography>
          <img
            style={{
              width: "20%",
              height: "auto",
              paddingBottom: "10px",
              marginLeft: "30%",
            }}
            src="https://cdn-icons-png.flaticon.com/512/6717/6717314.png"
            alt="Our Logo"
          />
        </Box>
        <Box>
          <Typography variant="body1" sx={{ mt: "2%" }}>
            Welcome to our website, <br />
            designed to enhance the business experience worldwide through
            advanced digital business cards. We believe in the power of
            community and connecting people, which is why we've created a
            platform where users can support businesses, think outside the box,
            and share their contacts intuitively and refreshingly. <br />
            <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              Regular User:{" "}
            </span>{" "}
            <br />
            Our first option is for regular users. A regular user can create a
            simple account and enjoy several impressive features: <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              (1).
            </span>{" "}
            Make calls and engage in dialogue: You can easily make calls to
            businesses you're interested in directly from the website. <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              (2).
            </span>{" "}
            Add likes and positive ratings: Had a great experience with a
            business? Use the option to add likes and give positive ratings to
            help others discover highly recommended businesses. <br />
            <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              Business User:{" "}
            </span>
            <br />
            Our second option is tailored for business owners who want to be
            part of our digital business family. A business user can create
            personalized digital business cards for their business and enjoy a
            range of advantages: <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              (1).
            </span>{" "}
            Showcase your business to the world: Created an exceptional digital
            business card? Want to present your business to a broader audience?
            You can showcase your digital business cards on our website and gain
            global recognition. Join the community: <br />
            <span style={{ fontWeight: "bold", fontSize: "15pt" }}>
              (2).
            </span>{" "}
            Join our business community, where you can gain knowledge, tips, and
            collaboration opportunities. Together, we can grow and improve. On
            our website, we bring people and businesses from all around the
            world together, all while maintaining the ability to support,
            promote, and collaborate with others. Join us today and experience
            the substantial benefits of our digital business cards.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
export default AboutComponent;
