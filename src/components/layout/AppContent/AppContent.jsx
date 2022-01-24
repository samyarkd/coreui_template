import { CContainer, CSpinner } from "@coreui/react";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/app/Dashboard/Dashboard";
import Test from "../../pages/app/Test/Test";

function AppContent() {
  return (
    <CContainer className='pt-3' lg>
      <Suspense fallback={<CSpinner color='primary' />}>
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<Navigate to='dashboard' />} />
        </Routes>
      </Suspense>
    </CContainer>
  );
}

export default AppContent;
