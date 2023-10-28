import React, { useState } from "react";
import { useFormik } from "formik";

import Grid from "@material-ui/core/Grid";
import { Button, FormControl } from "@mui/material";

import { useSnackbar } from "notistack";

import { styles } from "./styles";

import DialogBox from "../../../components/DialogBox";
import LabeledTextField from "../../../components/LabeledTextField";

import useAssignFarmerCourses from "../../../hooks/services/useAssignFarmerCourses";
import useGetCourse from "../../../hooks/services/useGetCourse";

import { AddCircleOutline } from "@mui/icons-material";
import Courses from "./courses";

const AssignCourses = ({
  setOpenAssignCourse,
  openAssignCourse,
  courseName,
  farmerDetails,
}) => {
  const classes = styles();
  const [openAddCourse, setOpenAddCourse] = useState(false);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState([]);
  const { data: courseData } = useGetCourse({ courseName: courseName });

  const coursesList = courseData?.map(({ id, courseName }) => ({
    name: courseName,
    value: courseName,
  }));

  const { enqueueSnackbar } = useSnackbar();

  const setEnqueueSnackbar = (msg, snackerVariant) => {
    enqueueSnackbar(msg, {
      variant: snackerVariant,
      autoHideDuration: 3000,
    });
  };
  const handleOpenCourseAddFunc = () => {
    setOpenAddCourse(true);
  };
  const { mutateAsync: assignCoursesForFarmers } = useAssignFarmerCourses();

  const handleAddCourse = () => {
    const values = formik.values;
    courseData?.forEach((element) => {
      if (values.courses === element.courseName) {
        const obj = {
          courseName: element.courseName,
          courseDescription: element.courseDescription,
          grade: element.grade,
          courseId: element.courseId,
        };
        setSelectedCourseDetails([...selectedCourseDetails, obj]);
      }
    });
    formik.setFieldValue("courses", "");
  };
  const formik = useFormik({
    initialValues: {
      farmerName: farmerDetails ? farmerDetails?.farmerName : "",
      courses: "",
      userName: farmerDetails ? farmerDetails?.userName : "",
      farmerId: farmerDetails ? farmerDetails?.farmerId : "",
    },

    onSubmit: async (values) => {
      try {
        const farmer = {
          farmerName: values.farmerName,
          farmerId: values.farmerId,
          courses: selectedCourseDetails,
          userName: values.userName,
          password: values.userName,
          teacherId: farmerDetails.teacherId,
        };
        await assignCoursesForFarmers(farmer);
        formik.resetForm();
        setEnqueueSnackbar("Teacher Added Succesfully", "success");
      } catch (e) {
        setEnqueueSnackbar("Error Occured during Teacher Submission", "error");
      }
    },
  });
  const closeDialog = () => {
    setOpenAssignCourse(false);
  };

  return (
    <>
      {farmerDetails && (
        <DialogBox
          title={"Assign Course"}
          open={openAssignCourse}
          setOpen={closeDialog}
          maxWidth="sm"
          height="600px"
          children={
            <Grid
              container
              classes={{ container: classes.container }}
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              {/* <Grid item xs={12}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid xs={12} item className={classes.textField}>
                    <Grid item>
                      <Grid>
                        <FormControl fullWidth>
                          <LabeledTextField
                            id="farmerName"
                            name="farmerName"
                            label="Farmer Name"
                            placeholder="Enter Farmer Name"
                            onChange={(value) =>
                              formik.setFieldValue("farmerName", value)
                            }
                            value={formik.values.farmerName}
                            disbaled
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} item className={classes.textField}>
                    <Grid item>
                      <Grid>
                        <FormControl fullWidth>
                          <LabeledTextField
                            id="userName"
                            name="userName"
                            label="User Name"
                            placeholder="Enter User Name"
                            onChange={(value) =>
                              formik.setFieldValue("userName", value)
                            }
                            value={formik.values.userName}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.textField}>
                    <Grid item>
                      <Grid>
                        <Button
                          id="btn-create-purchase-order"
                          variant="contained"
                          onClick={handleOpenCourseAddFunc}
                          className={classes.itemNameButton}
                        >
                          <AddCircleOutline className={classes.plusIcon} />
                          {"Add Courses"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container className={classes.block}>
                    <Button
                      id="btn-general-info-next"
                      className={classes.button}
                      type="submit"
                      variant="contained"
                      disbaled={formik.isSubmitting}
                    >
                      Save
                    </Button>
                  </Grid>
                </form>
              </Grid> */}
              <Courses
                formik={formik}
                openAddCourse={openAddCourse}
                setOpenAddCourse={setOpenAddCourse}
                classes={classes}
                handleAddCourse={handleAddCourse}
                courses={selectedCourseDetails}
                coursesList={coursesList}
              />
            </Grid>
          }
        />
      )}
    </>
  );
};
export default AssignCourses;
