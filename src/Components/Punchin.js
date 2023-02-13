import { useState } from "react";
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Button,
  Burger,
  Header,
  HoverCard,
  Divider,
  Navbar,
  Code,
  Table,
  ScrollArea,
  center,
  Drawer,
  Box,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconChevronDown,
} from "@tabler/icons";
import { IconLogout } from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import profile from "../assets/profile.png";
import clanizon from "../assets/clanizon.png";
import logo from "../assets/logo.png";
import Headerfile from "./Headerfile";

const useStyles = createStyles((theme, _params, getRef) => ({
  header: {
    height: "20%",
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
  },
  mainpart: {
    height: "100%",
  },

  // mainSection: {
  //   paddingBottom: theme.spacing.sm,
  // },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
  btn: {
    color: "#9feb09",
    width: "85px",
    paddingLeft: "50px",
  },
  center: {
    padding: "50px",
    border: "2px gray solid",
    margin: "10px",
    borderRadius: "10px",
  },
  Container: {
    backgroundColor: "gray !important",
  },
  images: {
    width: "100px",
  },
  contentleft: {
    width: "20%",
  },
  contentright: {
    width: "80%,",
  },
  content: {
    width: "100%",
    border: "2px gray solid",
    paddingBottom: "10px",
    borderRadius: "10px",
  },
}));

export default function HeaderTabs(HeaderTabsProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <>
      <Headerfile></Headerfile>
      <Container>
        <div className={classes.content}>
          <Tabs defaultValue="gallery" orientation="vertical">
            <div className={classes.contentleft}>
              <Tabs.List>
                <Tabs.Tab value="punch">punch</Tabs.Tab>
                <Tabs.Tab value="payslip">payslip</Tabs.Tab>
              </Tabs.List>
            </div>
            <div className={classes.contentright}>
              <Tabs.Panel value="punch">
                <div className={classes.btn}>
                  <Button fullWidth mt="xs" size="xs">
                    Punch In
                  </Button>
                </div>
                <div className={classes.center}>
                  <Table sx={{ minWidth: 600 }}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Day</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                      </tr>
                    </thead>
                    <tr>
                      <td>10/01/2022</td>
                      <td>Monday</td>
                      <td>10:00 AM</td>
                      <td>05:00 PM</td>
                    </tr>
                    <tr>
                      <td>10/01/2022</td>
                      <td>Monday</td>
                      <td>10:00 AM</td>
                      <td>05:00 PM</td>
                    </tr>
                    <tr>
                      <td>10/01/2022</td>
                      <td>Monday</td>
                      <td>10:00 AM</td>
                      <td>05:00 PM</td>
                    </tr>
                    <tr>
                      <td>10/01/2022</td>
                      <td>Monday</td>
                      <td>10:00 AM</td>
                      <td>05:00 PM</td>
                    </tr>
                    <tr>
                      <td>10/01/2022</td>
                      <td>Monday</td>
                      <td>10:00 AM</td>
                      <td>05:00 PM</td>
                    </tr>
                  </Table>
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="payslip">Messages tab content</Tabs.Panel>
            </div>
          </Tabs>
        </div>
      </Container>
      {/* </div> */}
    </>
  );
}
