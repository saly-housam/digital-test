import { Route ,Routes} from "react-router-dom";

import LocationPage from "./pages/locationPage";
import SalePage from "./pages/salePage";
import CongradulationPage from "./pages/congradulation";


function Layout() {
  return (
    <Routes>
      <Route path="/" element={<LocationPage/>} />
      <Route path="/sale" element={<SalePage />} />
      <Route path="/congrad" element={<CongradulationPage/>} />
      
    </Routes>
  );
}

export default Layout;
