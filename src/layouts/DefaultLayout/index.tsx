import type { ConnectedProps } from "react-redux";

import Image from "next/image";
import React from "react";
import { connect } from "react-redux";

import logo from "@/assets/logo.jpg";

interface Props {
  children?: React.ReactNode;
}
const DefaultLayout = ({ children }: PropsFromRedux & Props) => {
  return (
    <div className="p-1 m-0 bg-background-img bg-cover bg-center min-h-screen">
      <div className="flex min-h-[40px]">
        <Image className="h-[100px] w-[200px]" src={logo} alt="" />
      </div>
      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = ({ login }: RootState) => {
  return {
    currentLogin: login.info,
  };
};

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(DefaultLayout);
