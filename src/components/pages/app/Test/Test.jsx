import { CCard, CCardBody, CCardFooter, CCardHeader } from "@coreui/react";
import React from "react";

const Test = () => {
  return (
    <div>
      <CCard>
        <CCardHeader>Test Header</CCardHeader>
        <CCardBody>Hello</CCardBody>
        <CCardFooter>Footer</CCardFooter>
      </CCard>
    </div>
  );
};

export default Test;
