import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  closeAlert: {},
  openAlert: {
    display: "block",
  },
}));

const ActionAlerts = ({ message, severity }) => {
  const classes = useStyles();

  const [opendialog, setOpendialog] = React.useState(true);
  const handleOpen = () => {
    setOpendialog(true);
  };
  const handleClose = () => {
    setOpendialog(false);
    console.log(opendialog);
  };
  return (
    <div className={classes.root}>
      <Alert
        severity={severity}
        onClose={() => {
          handleClose();
        }}
        className={`${opendialog ? "openAlert" : classes.closeAlert} `}
      >
        <AlertTitle>{severity}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default ActionAlerts;

//   <Alert
//     severity={props.severity}
//     onClose={() => {
//       handleClose();
//     }}
//     className={`${opendialog ? "openAlert" : classes.closeAlert} `}
//   >
//     {props.message}
//   </Alert>;
