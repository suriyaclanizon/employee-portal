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
  } from '@mantine/core';
  import clanizon from "../assets/clanizon.JPG";
  
  
  const useStyles = createStyles((theme) => ({
    
  
    form: {
        
     
      maxWidth: 550,
         [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
    images: {
  width:'100%',
  height:'100%',
    },
    content: {
      height:'100%',
      display:'flex',
    },
   left: {
   
    width:'50%',
    height: '100vh',
   },
   last: {
textAlign:'center',
color:'gray !important',
paddingTop:'20px',
   },
   title: {
    width: '260px',
  height: '51px',
  flexGrow: 0,
  margin: '0 90px 76px 0',
  fontFamily: 'Jost',
  fontSize: '35px',
  fontWeight: '500',
   },
   right: {
    
    width:'50%',
    float:'right',
    height: '100vh',
   },
    
  
    
  }));
  
  
  export function Resetpwd() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <div className={classes.content}>
        <div className={classes.left}>
        <img
                        src={clanizon}
                        alt="clanizon"
                        className={classes.images}
                      />
                    </div>   
            <div className={classes.right}>          
        <Paper className={classes.form} radius={0} p={100} align="left">
          <Title order={2} className={classes.title} align="left" mt="md" mb={50}>
          Reset Password?
          </Title>
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <PasswordInput label="Reset Password" placeholder="Your password" mt="md" size="md" />
          
         
          <Button fullWidth mt="xl" size="md">
           Reset Password
          </Button>
  
          <div className={classes.last}>
            <Anchor className={classes.head} href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Back to Login
            </Anchor>
            </div>
        </Paper>
        </div>
      </div>
      </div>
    );
  }
  export default Resetpwd;