import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../components/AppContext.js";
import { useNavigate } from "react-router-dom";
import OptionPanel from "../option-panel";
import { styles } from "./styles";

import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";

import LazyLoadingTable from "../../../components/LazyLoadingTable";
import PageLayout from "../../../components/PageLayout";
import FarmerRegistration from "../../../components/Registration/Farmer";

import { ROLE } from "../../../constants.js";

import useGetRegisteredFarmers from "../../../hooks/services/useGetRegisteredFarmers";

const ListFarmers = () => {
  const classes = styles();
  const navigate = useNavigate();
  const { role } = useContext(AppContext);
  const [deleted, setDeleted] = useState(false);

  const [farmerName, setFarmerName] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState("");

  const [openRegisterFarmers, setOpenRegisterFarmers] = useState(false);
  const handleViewProfile = (values) => {
    navigate(`/lms/farmer/profile/${values.id}`, {
      state: { name: values.farmerName, farmerId: values.id },
    });
  };

  const { data: registeredFarmers } = useGetRegisteredFarmers({
    farmerName: farmerName,
    location: location,
    id: id,
  });

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
      width: "5%",
    },
    {
      Header: "FarmerName",
      accessor: "farmerName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Age",
      accessor: "farmerAge",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Location",
      accessor: "location",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Phone No",
      accessor: "phoneNo",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Actions",
      accessor: "actions",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      Cell: ({
        cell: {
          row: { values },
        },
      }) => {
        return (
          <OptionPanel
            values={values}
            deleted={deleted}
            setDeleted={setDeleted}
          />
        );
      },
    },
  ];

  const handleRegisterFarmers = () => {
    setOpenRegisterFarmers(true);
  };

  let no = 0;
  registeredFarmers?.forEach((element) => {
    no = no + 1;
    element.no = no;
  });

  return (
    <>
      <Grid container classes={{ container: classes.gridContainer }}>
        <PageLayout
          pageHeading={"Farmers"}
          pageActions={
            role === ROLE.ADMIN && (
              <Grid>
                <Button
                  id="btn-registerFarmer"
                  variant="contained"
                  onClick={handleRegisterFarmers}
                >
                  <HowToRegSharpIcon styles={{ marginRight: "10px" }} />
                  {"Register Farmer"}
                </Button>
              </Grid>
            )
          }
        >
          {registeredFarmers && registeredFarmers.length > 0 && (
            <Grid item className={classes.listTable} xs={12}>
              <LazyLoadingTable
                columns={columns}
                data={registeredFarmers}
                hiddenColumns={["id"]}
                maxHeightInRows={10}
                onClickTableRow={(index, row) => {
                  handleViewProfile(row);
                }}
              />
            </Grid>
          )}
        </PageLayout>
        <FarmerRegistration
          openRegisterFarmers={openRegisterFarmers}
          setOpenRegisterFarmers={setOpenRegisterFarmers}
        />
      </Grid>
    </>
  );
};
export default ListFarmers;
