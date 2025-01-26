import { Route ,Routes} from "react-router-dom";
import CategoriesList from "./pages/categories";
import ItemsList from "./pages/itemsList";


function Layout() {
  return (
    <Routes>
      <Route path="/" element={<CategoriesList />} />
      <Route path="/item" element={<ItemsList />} />
    </Routes>
  );
}

export default Layout;
