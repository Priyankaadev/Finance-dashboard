import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<DashboardLayout />}/>
  <Route path="*" element={<div>Page Not Found</div>} />
</Routes>
</BrowserRouter>
  )
}

export default App
