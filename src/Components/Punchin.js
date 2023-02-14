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
import punch from "../assets/punch.png";
import payslip from "../assets/payslip.png";

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
  Containerpart: {
    backgroundColor: "#ebe3e3",
    height: "calc(100vh - 120px)",
    padding: "30px 90px",
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
    background: "#9feb09",
    color: "white",
  },
  center: {
    // padding: "50px",
    border: "2px gray solid",
    marginTop: "30px",
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
    borderRight: "1px solid grey",
    height: "100%"
  },
  contentright: {
    width: "100%",
    padding: "15px 30px",
  },
  content: {
    width: "100%",
    height: "100%",
    border: "1px gray solid",
    borderRadius: "10px",
    background: "white",
  },
  tabstyles: {
    height: "100%",
  },
  thead_styles: {
    background: "aliceblue",
  },
  tabicons: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
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
      <div className={classes.Containerpart}>
      {/* <Container> */}
        <div className={classes.content}>
          <Tabs defaultValue="gallery" orientation="vertical" className={classes.tabstyles}>
            <div className={classes.contentleft}>
              <Tabs.List>
                <Tabs.Tab value="punch"><img src={punch} className={classes.tabicons} /><span>Punch</span></Tabs.Tab>
                <Tabs.Tab value="payslip"><img src={payslip} className={classes.tabicons} /><span>Payslip</span></Tabs.Tab>
              </Tabs.List>
            </div>
            <div className={classes.contentright}>
              <Tabs.Panel value="punch">
                <div>
                  <Button mt="xs" size="xs" className={classes.btn}>
                    Punch In
                  </Button>
                </div>
                <div className={classes.center}>
                  <Table sx={{ minWidth: 600 }}>
                    <thead className={classes.thead_styles}>
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
      {/* </Container> */}
      </div>
    </>
  );
}
