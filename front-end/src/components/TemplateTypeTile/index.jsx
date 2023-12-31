import React from "react";

import { Typography, Paper, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styles from "./styles";

const TemplateTypeTile = ({
  templateTitle,
  templateDescription,
  children,
  handleClick,
  ...props
}) => {
  const theme = useTheme();
  const classes = styles(theme, props);

  return (
    <Paper
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      sx={classes.tile}
    >
      <Grid sx={classes.tileContent}>
        {templateTitle && (
          <Grid sx={classes.tileHeader}>
            <Typography variant="h4" sx={classes.templateTitle}>
              {templateTitle}
            </Typography>
            {templateDescription && (
              <Typography variant="h6" sx={classes.templateDescription}>
                {templateDescription}
              </Typography>
            )}
          </Grid>
        )}
        <Grid sx={classes.tileBody}>{children}</Grid>
      </Grid>
    </Paper>
  );
};

export default TemplateTypeTile;
