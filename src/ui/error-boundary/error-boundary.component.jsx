import React, { Component } from "react";

import { Typography } from "@material-ui/core";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDrivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <Typography align="center" variant="h2">
        Something Went Wrong
      </Typography>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
