import React, { useState } from "react";

import { Grid, Button, Divider, Box } from "@mui/material";

import EditIcon from "../../../components/EditIcon";
import DeleteIcon from "../../../components/DeleteIcon";

import { styles } from "../ListFarmers/styles";

import useDeleteFarmer from "../../../hooks/services/useDeleteFarmer";

const OptionPanel = ({ values, setDeleted, deleted }) => {
  const classes = styles();

  const [isDeleting, setIsDeleting] = useState(false);
  const deleteMutation = useDeleteFarmer({ id: values?.id });

  const handleDelete = async () => {
    if (isDeleting) {
      return; // If delete operation is already in progress, prevent further calls
    }

    try {
      setIsDeleting(true); // Set the flag to true to indicate delete operation in progress
      await deleteMutation.mutateAsync({});
      console.log("Delete successful");

      // Call the get endpoint after the delete is successful
      setDeleted(!deleted);
    } catch (error) {
      console.error("Error during delete:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Grid>
      <Box>
        <Button
          id="btn-delete-credential"
          variant="text"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          classes={classes.deleteBtn}
          startIcon={<DeleteIcon className={classes.menuIconRoot} />}
        >
          <span className={classes.btnText}>Delete</span>
        </Button>
      </Box>
    </Grid>
  );
};

export default OptionPanel;
