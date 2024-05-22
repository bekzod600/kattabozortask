import Header from "../components/Header";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../store/detailsSlice";
import { useEffect } from "react";

const Detail = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.details);
  const { id } = useParams();
  const data = useSelector((state) =>
    state.details.data.find((d) => d.id === +id)
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchDetails());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      {data && (
        <Container>
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" component="h3" sx={{ mb: 4 }}>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Home
              </Link>{" "}
              / {data.category}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: { xs: "center", sm: "start" } }}
            >
              <Grid item md={6} sx={{ order: 2 }}>
                <Typography variant="h3" component="h1">
                  {data.name}
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                  Brand: {data.brand}
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                  Descriptions:
                </Typography>
                <List>
                  {data.attributes.map((a) => (
                    <ListItem key={a.name}>
                      <Typography variant="body1" component="p">
                        {a.name}: {a.value}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  order: { xs: 1, md: 2 },
                  display: "flex",
                }}
              >
                <img
                  width={"100%"}
                  style={{ aspectRatio: "1/1", objectFit: "contain" }}
                  src={data.image.url}
                  alt={data.name}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Detail;
