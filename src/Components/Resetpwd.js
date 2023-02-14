import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Group,
  Anchor,
} from "@mantine/core";
import clanizon from "../assets/clanizon.png";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  form: {
    maxWidth: 550,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },
  images: {
    width: "100%",
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
  },
  left: {
    width: "45%",
    height: "100vh",
  },
  last: {
    textAlign: "center",
    color: "gray !important",
    paddingTop: "20px",
  },
  head: {
    color: "#a4a4a4 !important",
  },
  title: {
    width: "260px",
    height: "51px",
    flexGrow: 0,
    margin: "0 90px 76px 0",
    fontFamily: "Jost",
    fontSize: "35px",
    fontWeight: "500",
  },
  right: {
    marginLeft: "45px",
    width: "55%",
    float: "right",
    height: "100vh",
  },
  title: {
    fontWeight: "500",
    fontSize: "35px",
  },
  // label: {
  //   marginBottom: "15px",
  // },
}));

export function Resetpwd() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={clanizon} alt="clanizon" className={classes.images} />
        </div>
        <div className={classes.right}>
          <Paper className={classes.form} radius={0} p={100} align="left">
            <Title
              order={2}
              className={classes.title}
              align="left"
              mt="md"
              mb={50}
            >
              Reset Password?
            </Title>
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              labelProps={{ className: classes.label }}
            />
            <PasswordInput
              label="Reset Password"
              placeholder="Your password"
              mt="md"
              size="md"
              labelProps={{ className: classes.label }}
            />

            <Button fullWidth mt="xl" size="md">
              Reset Password
            </Button>

            <div className={classes.last}>
              <Link to="/">
                <Anchor className={classes.head} weight={700}>
                  Back to Login
                </Anchor>
              </Link>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default Resetpwd;
