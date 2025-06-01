import { Outlet } from "react-router";
import NavBar from "@/components/NavBar";

export default function Layout(){
  return(
    <main>
      <NavBar />
      
      <section className="mt-32 md:mt-16 border">
        <Outlet />
      </section>
    </main>
  )  
}