import React from "react";

import Grid from "@material-ui/core/Grid";

import ServicesBlock from "../services-block/services-block.component";
import { servicesOptions } from "./services-section.data";

const ServicesSection = ({ reverseOrientation }) => (
  <Grid item>
    {servicesOptions.map((option, i) => (
      <ServicesBlock
        key={option.title}
        index={reverseOrientation ? i + 1 : i}
        {...option}
      />
    ))}
  </Grid>
);

export default ServicesSection;
