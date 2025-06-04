import { BrowserRouter, Routes, Route } from 'react-router';

export default function RouteContainerTest({ component }: { component: React.ReactNode }){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={component} />
      </Routes>
    </BrowserRouter>
  )
}