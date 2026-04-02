import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import TransactionsTable from "./components/dashboard/TransactionsTable"
import Overview from "./components/dashboard/Overview"
import InsightsPanel from "./components/dashboard/InsightsPanel"
import Settings from "./components/dashboard/Settings"
import Budget from "./components/dashboard/Budgets"

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<DashboardLayout />}>
 
  <Route index element={<Overview />} />
  <Route path="/transactions" element={<TransactionsTable />}/>
  <Route path="/insights" element={<InsightsPanel />}/>
  <Route path="/budget" element={<Budget />}/>
  <Route path="/settings" element={<Settings />}/>

  <Route path="*" element={<div>Page Not Found</div>} />
 </Route>
</Routes>
</BrowserRouter>
  )
}

export default App
