import React, { useContext, useState } from "react";
import { AppContext } from "../../../components/AppContext.js/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";
import { NoteAddRounded } from "@material-ui/icons";
import { useFormik } from "formik";

import { css } from "@emotion/react";

import { ROLE } from "../../../constants.js";

import AssignCourses from "../AssignCourses/index.jsx";

import useGetAssignedCourses from "../../../hooks/services/useGetAssignedCourses.js";
import useGetRegisteredFarmers from "../../../hooks/services/useGetRegisteredFarmers.js";
import useGetCourse from "../../../hooks/services/useGetCourse.js";
import useAssignFarmerCourses from "../../../hooks/services/useAssignFarmerCourses.js";

import { styles } from "./styles.js";

import LabelledEditableSelect from "../../../components/LabelledEditableSelect/index.js";
import TemplateTypeTile from "../../../components/TemplateTypeTile/index.jsx";
import PageLayout from "../../../components/PageLayout/index.jsx";
import LazyLoadingTable from "../../../components/LazyLoadingTable/index.js";

import { FarmerReport } from "../../ReportPrinter/FarmerReport.js";
import Courses from "../AssignCourses/courses.jsx";

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "No",
    accessor: "no",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Course Name",
    accessor: "courseName",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "courseId",
    accessor: "courseId",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
  {
    Header: "Attendance",
    accessor: "attendancePercentage",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
    Cell: ({ value }) => (
      <>
        {value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </>
    ),
  },
];

const secondTable = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "date",
    accessor: "date",
    headerStyles: { textAlign: "center" },
    cellStyles: { textAlign: "center" },
  },
];

const FarmerProfile = () => {
  const useStyles = (theme) => {
    const headingTitle = css`
      font-family: Ubuntu !important;
      font-weight: 600 !important;
      font-style: normal !important;
      line-height: 41px !important;
      font-weight: 500;
      font-size: 28px !important;
      line-height: 48px;
      color: Black;
    `;
    const subTitle = css`
      font-family: Ubuntu !important;
      font-weight: 500 !important;
      font-style: normal !important;
      line-height: 41px !important;
      font-weight: 300;
      font-size: 22px !important;
      line-height: 48px;
      color: Black;
    `;

    return {
      headingTitle,
      subTitle,
    };
  };

  const classes = styles();
  const headingStyles = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { role } = useContext(AppContext);

  const [openAssignCourse, setOpenAssignCourse] = useState(false);
  const [openPrintPreview, setOpenPrintPreview] = useState();
  const [attendanceDateData, setAttendanceDateData] = useState();
  const [selectedCourseDetails, setSelectedCourseDetails] = useState([]);

  const [courseName, setCourseName] = useState();
  const [selectedCourse, setSelectedCourse] = useState();

  const { data: farmerData } = useGetAssignedCourses({
    farmerId: id,
    courseId: "",
    courseName: "",
  });

  const { mutateAsync: assignCoruseForFarmer } = useAssignFarmerCourses();

  const { data: courseData } = useGetCourse({ courseName: courseName });

  const coursesList = courseData?.map(({ id, courseName }) => ({
    name: courseName,
    value: courseName,
  }));

  const { data: registeredFarmers } = useGetRegisteredFarmers({
    id: id,
  });

  const uniqueCourses = farmerData?.reduce((acc, item) => {
    if (!acc.find((course) => course.courseId === item.courseId)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const handleClick = (element) => {
    navigate(`/lms/courses/units/${element?.courseId}`, {
      state: { courseId: element.courseId, courseName: element.courseName },
    });
  };

  const handleAssignCourse = () => {
    setOpenAssignCourse(true);
  };

  const handleOpenPrintPreview = () => {
    setOpenPrintPreview(true);
  };

  const handleAddCourse = () => {
    console.log(selectedCourse);
    // const values = formik.values;
    courseData?.forEach((element) => {
      if (selectedCourse === element.courseName) {
        const obj = {
          courseName: element.courseName,
          courseDescription: element.courseDescription,
          grade: element.grade,
          courseId: element.courseId,
        };
        const sendingObj = {
          courseId: element.courseId,
          farmerId: id,
        };
        assignCoruseForFarmer(sendingObj);
        setSelectedCourseDetails([...selectedCourseDetails, obj]);
      }
    });
    // formik.setFieldValue("courses", "");
  };
  // const formik = useFormik({
  //   initialValues: {
  //     // farmerName: farmerDetails ? farmerDetails?.farmerName : "",
  //     // courses: "",
  //     // userName: farmerDetails ? farmerDetails?.userName : "",
  //     // farmerId: farmerDetails ? farmerDetails?.farmerId : "",
  //   },

  //   onSubmit: async (values) => {
  //     try {
  //       const farmer = {
  //         farmerName: values.farmerName,
  //         farmerId: values.farmerId,
  //         courses: selectedCourseDetails,
  //         userName: values.userName,
  //         password: values.userName,
  //         // teacherId: farmerDetails.teacherId,
  //       };
  //       // await assignCoursesForFarmers(farmer);
  //       formik.resetForm();
  //       // setEnqueueSnackbar("Teacher Added Succesfully", "success");
  //     } catch (e) {
  //       // setEnqueueSnackbar("Error Occured during Teacher Submission", "error");
  //     }
  //   },
  // });

  return (
    <>
      <PageLayout
        pageHeading={"Farmer Profile"}
        pageActions={
          role === ROLE.ADMIN && (
            <Grid item container spacing={2} justifyContent="space-between">
              <Grid item>
                <Button
                  id="btn-assignCourses"
                  variant="contained"
                  onClick={handleAssignCourse}
                >
                  <NoteAddRounded className={classes.plusIcon} />
                  {"Assign Courses"}
                </Button>
              </Grid>{" "}
            </Grid>
          )
        }
      >
        <Grid container spacing={2} className={classes.topCards}>
          <Grid item xs={2} className={classes.section}>
            <LabelledEditableSelect
              label="Farmer Name"
              placeholder={location?.state?.name}
            />
          </Grid>
          <Grid item xs={2} className={classes.section}>
            <LabelledEditableSelect
              label="FarmerId"
              placeholder={location.state.farmerId}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.templateContainer}>
          {uniqueCourses?.map((element) => (
            <Grid item xs={6}>
              <TemplateTypeTile
                handleClick={() => handleClick(element)}
                height={"80%"}
                templateTitle={element.courseName}
                templateDescription={element.courseDescription}
              />
            </Grid>
          ))}
        </Grid>
      </PageLayout>
      {registeredFarmers && (
        // <AssignCourses
        //   openAssignCourse={openAssignCourse}
        //   setOpenAssignCourse={setOpenAssignCourse}
        //   farmerDetails={registeredFarmers}
        // />
        <Courses
          setSelectedCourse={setSelectedCourse}
          selectedCourse={selectedCourse}
          openAddCourse={openAssignCourse}
          setOpenAddCourse={setOpenAssignCourse}
          classes={classes}
          handleAddCourse={handleAddCourse}
          courses={selectedCourseDetails}
          coursesList={coursesList}
        />
      )}
      {farmerData && (
        <FarmerReport
          openPrintPreview={openPrintPreview}
          setOpenPrintPreview={setOpenPrintPreview}
          // persontageTable={AttendanceSheet}
          coursesList={uniqueCourses}
          farmerData={farmerData[0]}
        />
      )}
    </>
  );
};

export default FarmerProfile;
