import DashboardPage from "@/components/DashboardPage";
import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";



export default async function Page() {
  

  return (

    <div className="min-h-screen flex flex-col">
    
          {/* PAGE CONTENT */}
          <div className="flex-1">
            <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN", "FRANCHISE", "EMPLOYEE","FACTORY","CUSTOMER"]}>
                <DashboardPage />
              </RoleWrapper>
          </div>
    
          <Footer/>
        </div>
    
    
  );
}
