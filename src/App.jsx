import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Dashboard from "./users/dashboard/dashboard";
import Admin from "./users/admin/admin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/admin" element={<Admin/>} />
            </Routes>
        </Router>
    );
}

export default App;
