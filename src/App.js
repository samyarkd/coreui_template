import "./App.css";
import AppContent from "./components/layout/AppContent/AppContent";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";

function App() {
  return (
    // <div className='h-screen'>
    <div className='flex flex-row-reverse items-start justify-start '>
      <Sidebar />

      <div className='flex flex-col justify-between bg-neutral-200 w-full'>
        <div>
          <Header />
          <AppContent />
        </div>
        <Footer />
      </div>
    </div>
    // <div>
    //   <Sidebar />
    //   <div className='will-change-auto flex flex-col min-h-screen bg-blend-lighten'>
    //     <Header />
    //     <div className='flex-grow px-3'>
    //       <AppContent />
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
