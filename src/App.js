import './App.css';
import Layout from './components/layout/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CanopyTent from './pages/products/CanopyTent/CanopyTent';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/products/canopy-tent" element={<CanopyTent />}>
            </Route>
            <Route path="/" element={<CanopyTent />}>
            </Route>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App;
