import { Outlet } from "react-router";

export default function Layout(){
  return(
    <main>
      <div>Nav</div>
      <Outlet />
    </main>
  )  
}