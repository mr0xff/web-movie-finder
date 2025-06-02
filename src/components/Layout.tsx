import { Outlet } from "react-router";
import NavBar from "@/components/NavBar";
import SearchMobile from "@/components/SearchMobile";

export default function Layout(){
  return(
    <main>
      <NavBar />
      
      <section className="mt-48 md:mt-32 px-3 md:flex md:flex-col md:items-center">
        <Outlet />
      </section>
      
      <SearchMobile />
    </main>
  )  
}