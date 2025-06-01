import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/routes/Home";
import Layout from "@/components/Layout";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
