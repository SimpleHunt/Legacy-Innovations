import RoleWrapper from "@/components/RoleWrapper";
import FranchiseList from "@/components/FranchiseList";
import Footer from "@/components/footer";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">
            
                  {/* PAGE CONTENT */}
                  <div className="flex-1">
                    <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
                      <FranchiseList searchParams={searchParams} />
                    </RoleWrapper>
                    
                  </div>
            
                  <Footer/>
                </div>
    
  );
}
