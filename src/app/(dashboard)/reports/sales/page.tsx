import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";
import SalesReport from "@/components/SalesReport";

export const revalidate = 0;

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
          
          { <SalesReport searchParams={searchParams} /> }
        </RoleWrapper>
      </div>

      <Footer/>
    </div>
  );
}
