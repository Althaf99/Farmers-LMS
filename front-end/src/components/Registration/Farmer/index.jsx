import React from "react";
import { TextField, Button, Typography, Box, Grid } from "@material-ui/core";
import { Formik, Form, Field } from "formik";

import DialogBox from "../../DialogBox";

import useRegisterFarmer from "../../../hooks/services/useRegisterFarmer";

import { AccountCircle } from "@material-ui/icons";

import { useStyles } from "./styles";

const FarmerRegistration = ({
  openRegisterFarmers,
  setOpenRegisterFarmers,
}) => {
  const classes = useStyles();

  const closeDialog = () => {
    setOpenRegisterFarmers(false);
  };

  const { mutateAsync: registerFarmer } = useRegisterFarmer();

  const handleSubmit = (values) => {
    registerFarmer(values);
    setOpenRegisterFarmers(false);
  };

  return (
    <DialogBox
      title={"Register Farmer"}
      open={openRegisterFarmers}
      setOpen={closeDialog}
      maxWidth="sm"
      height="800px"
      children={
        <Grid className={classes.container}>
          <AccountCircle className={classes.icon} />
          <Formik
            initialValues={{
              farmerName: "",
              farmerAge: "",
              location: "",
              phoneNo: "",
              userName: "",
              role: "FARMER",
              password: "",
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validate={(values) => {
              const errors = {};
              if (!values.farmerName) {
                errors.farmerName = "Farmer Name is required";
              }
              if (!values.userName) {
                errors.userName = "User Name is required";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
          >
            {({ isValid = false }) => (
              <Form className={classes.form}>
                <Field
                  as={TextField}
                  name="role"
                  label="ROLE"
                  variant="outlined"
                  disabled={true}
                />
                <Field
                  as={TextField}
                  name="farmerName"
                  label="Farmer Name"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  name="farmerAge"
                  label="Age"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  name="location"
                  label="Location"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  name="phoneNo"
                  label="Phone Number"
                  variant="outlined"
                />
                <Field
                  as={TextField}
                  name="userName"
                  label="User Name"
                  variant="outlined"
                />

                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!isValid} // Disable the button when the form is invalid
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <Box className={classes.infoBox}>
            <Typography variant="body1">
              Information Box - Display some information here.
            </Typography>
          </Box>
        </Grid>
      }
    ></DialogBox>
  );
};

export default FarmerRegistration;
