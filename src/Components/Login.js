import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  NumberInput,
  Title,
  Text,
  Group,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import clanizon from "../assets/clanizon.png";

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
  },
  btn: {
    width: "100%",
  },
  label: {
    marginBottom: "15px",
  },
}));

export function Login() {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: { name: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      Password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/.test(value)
          ? null
          : "Invalid password",
    },
    onSubmit: (values) => console.log(values),
  });

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
              Login
            </Title>
            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                label="User Name"
                placeholder="Enter the name"
                size="md"
                {...form.getInputProps("name")}
                labelProps={{ className: classes.label }}
              />
              <TextInput
                mt="md"
                label="Password"
                placeholder="Password"
                {...form.getInputProps("Password")}
                labelProps={{ className: classes.label }}
              />
              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                <Link to="/Forgetpwd">
                  <Anchor size="sm">Forgot password?</Anchor>
                </Link>
              </Group>
              {/* <Link to="/Punchin"> */}
              <Button type="submit" mt="xl" size="md" className={classes.btn}>
                Login
              </Button>
              {/* </Link> */}
            </form>
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

            {/* <div className={classes.line}>
              <form onSubmit={form.onSubmit(console.log)}>
                <TextInput
                  label="Name"
                  placeholder="Name"
                  {...form.getInputProps("name")}
                />

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
              </form>
            </div>
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
            </Text> */}
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default Login;
