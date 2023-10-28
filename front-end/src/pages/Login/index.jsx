import React, { useContext, useState } from "react";
import { AppContext } from "../../components/AppContext.js";

import { useSnackbar } from "notistack";

import { TextField, Button, Typography, Box, Grid } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

import { AccountCircle } from "@material-ui/icons";

import { useStyles } from "./styles";

import { ROLE } from "../../constants.js";

import useGetRegisteredTeachers from "../../hooks/services/useGetRegisteredTeachers";
import useGetRegisteredFarmers from "../../hooks/services/useGetRegisteredFarmers";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { role, setRole, setId, setUserDetails, userDetails, id } =
    useContext(AppContext);

  const { data: registeredTeachers } = useGetRegisteredTeachers();

  const { data: registeredFarmers } = useGetRegisteredFarmers({
    farmerName: "",
    location: "",
    id: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const setEnqueueSnackbar = (msg, snackerVariant) => {
    enqueueSnackbar(msg, {
      variant: snackerVariant,
      autoHideDuration: 3000,
    });
  };

  const validateUser = (values) => {
    const validateFarmer =
      registeredFarmers &&
      registeredFarmers?.find(
        (element) =>
          element.userName === values.username &&
          element.password === values.password
      );
    if (validateFarmer) {
      setId(validateFarmer.id);
      setUserDetails(validateFarmer);
      setRole("FARMER");
    }

    return validateFarmer ? true : false;
  };

  const handleSubmit = async (values, actions) => {
    const validation = await validateUser(values);

    if (values.username === "iresh@gmail.com" && values.password === "iresh") {
      setRole("ADMIN");
      setEnqueueSnackbar("Admin Logged in Succesfully", "success");
      navigate("/lms/farmers");
    } else if (validation && userDetails) {
      setEnqueueSnackbar("Login SuccessFull", "success");
      navigate(`/lms/farmer/profile/${id}`, {
        state: { name: userDetails?.farmerName, farmerId: id },
      });
    } else {
      setEnqueueSnackbar("User not found", "error");
    }
  };

  return (
    <Grid className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        Farmer Learning Management
      </Typography>
      <AccountCircle className={classes.icon} />
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, action) => {
          handleSubmit(values, action);
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "User Name is required";
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
              name="username"
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default Login;
