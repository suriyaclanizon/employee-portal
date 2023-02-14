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
import { Link } from "react-router-dom";
import clanizon from "../assets/clanizon.png";

const useStyles = createStyles((theme) => ({
  form: {
    maxWidth: 600,
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
  right: {
    marginLeft: "45px",
    width: "55%",
    float: "right",
    height: "100vh",
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  // label: {
  //   marginBottom: "15px",
  // },
}));

export function Login() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={clanizon} alt="clanizon" className={classes.images} />
        </div>
        <div className={classes.right}>
          <Paper className={classes.form} radius={0} p={120} align="left">
            <Title
              order={2}
              className={classes.title}
              align="left"
              mt="md"
              mb={50}
            >
              Login
            </Title>

            <TextInput
              label="User Name"
              placeholder="hello@gmail.com"
              size="md"
              labelProps={{ className: classes.label }}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              labelProps={{ className: classes.label }}
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Link to="/Forgetpwd">
                <Anchor size="sm">Forgot password?</Anchor>
              </Link>
            </Group>

            <Link to="/Punchin">
              <Button fullWidth mt="xl" size="md">
                Login
              </Button>
            </Link>
            <Text align="left" mt="md">
              New user?{" "}
              <Link to="/SignUp">
                <Anchor
                  // href="#"
                  weight={700}
                  // onClick={(event) => event.preventDefault()}
                >
                  Sign up
                </Anchor>
              </Link>
            </Text>
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default Login;
