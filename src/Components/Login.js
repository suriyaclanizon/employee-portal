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
    width: "50%",
    height: "100vh",
  },
  right: {
    width: "50%",
    float: "right",
    height: "100vh",
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
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
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
              <Anchor
                onClick={(event) => event.preventDefault()}
                href="#"
                size="sm"
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" size="md">
              Login
            </Button>

            <Text align="left" mt="md">
              New user?{" "}
              <Anchor
                href="#"
                weight={700}
                onClick={(event) => event.preventDefault()}
              >
                <Link to="SignUp"> Sign up</Link>
              </Anchor>
            </Text>
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default Login;
