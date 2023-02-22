import { useState } from 'react';
import { Modal } from '@mantine/core';
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
import { Select } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
    header: {
        height: "20%",
        paddingTop: theme.spacing.sm,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
            }`,
    },
    titleDialog: {
        borderRadius: "0px !important",
        fontWeight: "bold",
    },
    dateInput: {
        width: "150%",
        borderRadius: "0px",
    },
    formContent: {
        display: "flex",
    },
    formTextbox: {
        display: "flex",
    },
    dateInput2: {
        width: "150%",
        marginLeft: "50px",
        marginRight: "50px",
    },
    calanderimg: {
        width: "20px",
        height: "20px",
        position: "absolute",
        marginTop: "10px",
        left: "36%",
    },
    calanderimg2: {
        width: "20px",
        height: "20px",
        position: "absolute",
        marginTop: "10px",
        left: "84%",
    },
    dialoghead: {
        fontSize: "16px !important",
        color: "#2e2e2e !important",
        fontWeight: "bold",
    },
    dialoginput: {
        width: "200px",
        height: "35px",
        border: "1px solid #ced4da !important",
    },
    labelpart2: {
        marginLeft: "50px",
    },
    labelpart4: {
        marginLeft: "50px",
    },
    applybtn2: {
        fontSize: "16px",
    },
    dialogbtn2: {
        float: "right",
        marginRight: "30px"
    },
    cancelbtn: {
        marginLeft: "30px",
        backgroundColor: "rgba(216, 216, 216, 0.6)",
        color: "rgba(23, 23, 23, 0.5)"
    },
    labelPart5: {
        width: "203px",
    },
}));

export function LeaveDialog() {
    const [opened, setOpened] = useState(false);
    const { classes, theme, cx } = useStyles();

    return (
        <>
            <Modal size="40%"
                className={classes.titleDialog}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Leave Applycation"
            >
                {/* Modal content */}                
                
                <div className={classes.formContent}>
                    <div className={classes.labelpart}>
                        <h1 className={classes.dialoghead}>From</h1>
                        <input type='date' className={classes.dialoginput} placeholder='Select Start Date'></input>
                        {/* <img src={calander} className={classes.calanderimg} /> */}
                    </div>
                    <div className={classes.labelpart2}>
                        <h1 className={classes.dialoghead}>To</h1>
                        <input type='date' className={classes.dialoginput} placeholder='Select End Date'></input>
                        {/* <img src={calander} className={classes.calanderimg2} /> */}
                    </div>


                    {/* <DatePicker className={classes.dateInput} placeholder="Select Start Date" label="From"
                  />
                  <img src={calander} className={classes.calanderimg}/>
                  <DatePicker className={classes.dateInput2} placeholder="Select End Date" label="To"
                  />
                  <img src={calander} className={classes.calanderimg2}/> */}
                </div><br></br>
                <div className={classes.formTextbox}>
                    <div className={classes.labelpart3}>
                        <h1 className={classes.dialoghead}>Leave Type</h1>
                        <Select
                            data={['Casual Leave', 'Medical leave', 'Sick Leave']}
                        />
                    </div>
                    <div className={classes.labelpart4}>
                        <h1 className={classes.dialoghead}>Session</h1>
                        <Select
                            data={['Forenoon', 'Afternoon']}
                        />
                    </div>
                </div><br></br>
                <div className={classes.labelPart5}>
                    <h1 className={classes.dialoghead}>Manager</h1>
                    <Select
                            data={['Manager1', 'Manager2']}
                    />
                </div><br></br>
                <div className={classes.dialogbtn2}>
                    <Button className={classes.applybtn2}>
                        Apply
                    </Button>
                    <Button className={classes.cancelbtn}>Cancel</Button>
                </div>
            </Modal>

            <Group position="right">
                <Button onClick={() => setOpened(true)} className={classes.applybtn} variant="light">Apply</Button>
            </Group>
        </>
    );
}