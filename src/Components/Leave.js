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
      backgroundColor: "#f0f0f0",
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
      color: "#ffffff",
    },
    center: {
      border: "1px #d8d8d8 solid",
      marginTop: "30px",
      borderRadius: "10px",
      maxHeight: "calc(100vh - 230px)",
      overflowY: "auto",
    },
    Container: {
      backgroundColor: "gray !important",
    },
    images: {
      width: "100px",
    },
    contentleft: {
      width: "20%",
      borderRight: "1px solid #f0f0f0",
      height: "100%",
    },
    contentright: {
      width: "100%",
      padding: "15px 30px",
    },
    content: {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
      background: "white",
    },
    tabstyles: {
      height: "100%",
    },
    thead_styles: {
      background: "aliceblue",
      textAlign: "left",
    },
    topic: {
      fontSize: "20px",
      color: "#1f96de",
      fontWeight: "600",
      marginTop: "40px",
      marginBottom: "20px",
    },
    tabicons: {
      width: "20px",
      height: "20px",
      marginRight: "10px",
    },
    tabicons1: {
      width: "20px",
      height: "20px",
      marginLeft: "10px",
    },
    applybtn: {
        float: "right",
    },
    heading1: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
        width: "114px",
      },
      heading2: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
        width: "100px",
      },
      heading3: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
      },
      heading4: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
      },
      heading5: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
      },
      heading6: {
        fontSize: "14px !important",
        color: "#747588",
        textAlign: "center !important",
        width: "100px",
      },
      bgcolour: {
        textAlign: "center !important",
        backgroundColor: "#f5fafd",
      },
      content: {
        fontSize: "14px !important",
        color: "#747588",
        fontWeight: "500",
        textAlign: "center !important", 
      },
  }));
  
  

export function Leave() {
    const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (

    <div>
        <Tabs.Panel value="Leave">
                <div className={classes.topic}>
                  <span>History</span>
                  <Button className={classes.applybtn} variant="light">
                    Apply
                  </Button>
                </div>
                <div className={classes.center}>
                  <Table sx={{ minWidth: 600 }}>
                    <thead className={classes.thead_styles}>
                      <tr className={classes.bgcolour}>
                        <th className={classes.heading1}>Date of Leave From</th>
                        <th className={classes.heading2}>Date of Leave To</th>
                        <th className={classes.heading3}>Leave Type</th>
                        <th className={classes.heading4}>No of Days</th>
                        <th className={classes.heading5}>Manager</th>
                        <th className={classes.heading6}>Approved Status</th>
                      </tr>
                    </thead>
                    <tr>
                      <td className={classes.content}> 11/02/22 </td>
                      <td className={classes.content}> 14/02/22 </td>
                      <td className={classes.content}> Medical Leave </td>
                      <td className={classes.content}> 4 days  </td>
                      <td className={classes.content}> Pavithra  </td>
                      <td className={classes.content}>
                        <Button>
                          Approved
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.content}> 02/01/22 </td>
                      <td className={classes.content}> 03/01/22 </td>
                      <td className={classes.content}> Casual Leave </td>
                      <td className={classes.content}> 2 days  </td>
                      <td className={classes.content}> Surya  </td>
                      <td className={classes.content}>
                        <Button>
                          Approved
                        </Button>
                      </td>
                    </tr>
                    </Table>
                </div>
                
              </Tabs.Panel>
    </div>
      

  )
}

export default Leave

