import FactoryList from "@/components/FactoryList";
import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";


export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">
        
              {/* PAGE CONTENT */}
              <div className="flex-1">
                <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
                  <FactoryList searchParams={searchParams} />
                </RoleWrapper>
                
              </div>
        
              <Footer/>
            </div>
    
  );
}
