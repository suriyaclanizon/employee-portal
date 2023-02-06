// import {
//     Paper,
//     createStyles,
//     TextInput,
//     PasswordInput,
//     Checkbox,
//     Button,
//     Title,
//     Text,
//     Group,
//     Anchor,
//   } from '@mantine/core';
//   import logoimage from "../assets/logoimage.png";
  
  
//   const useStyles = createStyles((theme) => ({
    
  
//     form: {
     
//       maxWidth: 600,
//          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
//         maxWidth: '100%',
//       },
//     },
//     images: {
//   width:'100%',
//   height:'100%',
//     },
//     content: {
//       height:'100%',
//       display:'flex',
//     },
//    left: {
   
//     width:'50%',
//     height: '100vh',
//    },
//    head: {
// textAlign:'center',
//    },
//    right: {
    
//     width:'50%',
//     float:'right',
//     height: '100vh',
//    },
//     title: {
//       color: theme.colorScheme === 'dark' ? theme.white : theme.black,
//       fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     },
  
    
//   }));
  
  
//   export function Forgetpwd() {
//     const { classes } = useStyles();
//     return (
//       <div className={classes.wrapper}>
//         <div className={classes.content}>
//         <div className={classes.left}>
//         <img
//                         src={logoimage}
//                         alt="logoimage"
//                         className={classes.images}
//                       />
//                     </div>   
//             <div className={classes.right}>          
//         <Paper className={classes.form} radius={0} p={90} align="left">
//           <Title order={2} className={classes.title} align="left" mt="md" mb={50}>
//           Forgot Password?
//           </Title>
  
          
//           <TextInput label="Email" placeholder="hello@gmail.com" size="md" />
//           <Button fullWidth mt="xl" size="md">
//            Reset Password
//           </Button>
  
          
//             <Anchor className={classes.head} href="#" weight={700} onClick={(event) => event.preventDefault()}>
//               Back to Login
//             </Anchor>
          
//         </Paper>
//         </div>
//       </div>
//       </div>
//     );
//   }
//   export default Forgetpwd;