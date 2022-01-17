import "@coreui/coreui/dist/css/coreui.rtl.css";
import "./App.css";
import AppContent from "./components/layout/AppContent/AppContent";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";

function App() {
  return (
    <div className='flex flex-row-reverse items-start justify-start '>
      <Sidebar />

      <div className='w-full'>
        <Header />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
