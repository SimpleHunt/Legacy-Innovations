import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";
import UserList from "@/components/UserList";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">
    
          {/* PAGE CONTENT */}
          <div className="flex-1">
            <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <UserList searchParams={searchParams} />
            </RoleWrapper>
          </div>
    
          <Footer/>
        </div>
    
    
  );
}
