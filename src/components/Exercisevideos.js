import { Box, Stack, Typography } from "@mui/material";

const Exercisevideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "";
  return (
    <Box
      sx={{
        mt: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "100px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item?.video?.thumbnails[0]?.url}
              alt={item?.video?.title}
              style={{ borderRadius: "10px" }}
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title?.length > 50
                  ? item.video.title.slice(0, 50) + " ..."
                  : item.video.title}
              </Typography>
              <Typography variant="h6" color="gray">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercisevideos;
