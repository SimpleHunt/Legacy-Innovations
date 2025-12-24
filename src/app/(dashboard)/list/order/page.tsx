import Footer from "@/components/footer";
import OrderList from "@/components/OrderList";
import RoleWrapper from "@/components/RoleWrapper";

export const revalidate = 0;



export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN", "FRANCHISE", "EMPLOYEE", "FACTORY", "CUSTOMER"]}>
          <OrderList searchParams={searchParams} />
        </RoleWrapper>
      </div>

      <Footer/>
    </div>
  );
}
