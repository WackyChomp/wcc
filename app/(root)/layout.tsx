
import ActualSidebar from "@/components/ActualSidebar";
import Navbar from "@/components/Navbar";

interface DashboardLayout{
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayout) => {
  return (
    <div className="min-h-screen">
      
      <div className="flex w-full h-full">

        {/* Left Side */}
        {/* 
        <div className="bg-green-800 fixed left-0 top-0 hidden lg:block lg-w-[270px] h-full overflow-y-auto">
          <ActualSidebar />
        </div> 
        */}

        {/* Right Side */}
        <div className="bg-blue-800 lg:pl-[270px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <main className="h-full py-8 px-6 flex flex-col">
              {children}
            </main>
          </div>
        </div>

      </div>
    </ div>
  )
}

export default DashboardLayout