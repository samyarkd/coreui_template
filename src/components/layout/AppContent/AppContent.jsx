import { CContainer, CSpinner } from "@coreui/react";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

function AppContent() {
  return (
    <div className='bg-neutral-200 h-screen -z-10'>
      <CContainer lg>
        <Suspense fallback={<CSpinner color='primary' />}>
          <Routes>
            <Route path='/dashboard' element={<div>hello</div>} />
          </Routes>
        </Suspense>
      </CContainer>
    </div>
  );
}

export default AppContent;
