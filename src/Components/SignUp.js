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
import { useForm } from "@mantine/form";
import clanizon from "../assets/clanizon.png";
import { Link, useNavigate } from "react-router-dom";

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
  btn: {
    width: "100%",
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
  const form = useForm({
    initialValues: { name: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      Password: (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/.test(value)
          ? null
          : "Must contain at least one number & one uppercase & lowercase letter & 5 or more characters",
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
    onSubmit: (values) => console.log(values),
  });
  const navigate = useNavigate();

  const handle = (value) => {
    console.log(value);
    navigate("/Punchin");
  };
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
            <form
              onSubmit={form.onSubmit((values) => {
                console.log(values);
                handle(values);
              })}
            >
              <TextInput
                label="User Name"
                placeholder="Enter the name"
                size="md"
                {...form.getInputProps("name")}
                labelProps={{ className: classes.label }}
              />
              <TextInput
                label="Email"
                placeholder="hello@gmail.com"
                mt="md"
                size="md"
                {...form.getInputProps("email")}
                labelProps={{ className: classes.label }}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                mt="md"
                size="md"
                {...form.getInputProps("Password")}
                labelProps={{ className: classes.label }}
              />
              <PasswordInput
                label="Reset Password"
                placeholder="Your password"
                mt="md"
                size="md"
                labelProps={{ className: classes.label }}
              />
              <Button type="submit" mt="xl" size="md" className={classes.btn}>
                Create Account
              </Button>
            </form>
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
