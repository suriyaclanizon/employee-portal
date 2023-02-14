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
    width: "50%",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "55%",
  },
  title: {
    fontWeight: "500",
    fontSize: "35px",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  label: {
    marginBottom: "15px",
  },
}));

export function SignUp() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.left}>
          <img src={clanizon} alt="clanizon" className={classes.images} />
        </div>
        <div className={classes.right}>
          <Paper className={classes.form} radius={0} align="left">
            <Title
              order={2}
              className={classes.title}
              align="left"
              mt="md"
              mb={50}
            >
              Sign Up
            </Title>

            <TextInput
              label="User Name"
              placeholder="hello@gmail.com"
              size="md"
              labelProps={{ className: classes.label }}
            />
            <TextInput
              label="Email"
              placeholder="hello@gmail.com"
              mt="md"
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
            <PasswordInput
              label="Reset Password"
              placeholder="Your password"
              mt="md"
              size="md"
              labelProps={{ className: classes.label }}
            />
            <Button fullWidth mt="xl" size="md">
              Create Account
            </Button>

            <Text align="center" mt="md">
              Already have an account?{" "}
              <Link to="/">
                <Anchor weight={700}>Login</Anchor>
              </Link>
            </Text>
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
