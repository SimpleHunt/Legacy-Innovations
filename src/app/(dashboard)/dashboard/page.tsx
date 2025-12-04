import DashboardPage from "@/components/DashboardPage";
import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";



<<<<<<< HEAD
export default async function Page() {
  

=======
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
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
