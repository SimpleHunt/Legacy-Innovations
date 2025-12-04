import RoleWrapper from "@/components/RoleWrapper";
import UserList from "@/components/UserList";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
      <UserList searchParams={searchParams} />
    </RoleWrapper>
  );
}
