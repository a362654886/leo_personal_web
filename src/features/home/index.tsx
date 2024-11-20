import type { ConnectedProps } from "react-redux";

import React from "react";
import { connect } from "react-redux";
import DefaultLayout from "@/layouts/DefaultLayout";
import Introduction from "./components/introduce";
import Resume from "./components/resume";
import Contact from "./components/contact";

const HomeViewPage = () => {
  return (
    <DefaultLayout>
      <Introduction />
      <Resume />
      <Contact />
    </DefaultLayout>
  );
};

const mapDispatchToProps = {};

const connector = connect(null, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(HomeViewPage);
