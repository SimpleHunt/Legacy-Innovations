import RoleWrapper from "@/components/RoleWrapper";
import UserList from "@/components/UserList";

<<<<<<< HEAD
export default function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
      <UserList searchParams={searchParams} />
    </RoleWrapper>
  );
=======

const columns = [
  {
    header: "ID",
    accessor: "info",
  },
  {
    header: "Login UserId",
    accessor: "loginUserId",
    className: "hidden lg:table-cell",
  },
  {
    header: "Password",
    accessor: "password",
    className: "hidden lg:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden lg:table-cell",
  },
  {
    header: "FullName",
    accessor: "fullName",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "UserType",
    accessor: "type",
    className: "hidden lg:table-cell",
  },
  
  
  
  { header: "IsActive", accessor: "isActive", className: "hidden md:table-cell" },
  
  
  {
    header: "Actions",
    accessor: "action",
  },
];
  const renderRow = (item: User) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
        <td className=" md:table-cell py-4 ">#</td>
        <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.loginUserId}</h3>
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.password}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.fullName}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.role}</td>
      <td className="hidden md:table-cell">
      {item.isActive ? (
        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          Active
        </span>
      ) : (
        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
          Inactive
        </span>
      )}
    </td>
      
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/product/${item.id}`}> */}
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button> */}
          {/* </Link> */}
          {["SUPER_ADMIN", "ADMIN"].includes(role) && item.isActive &&(
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                // <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="users" type="delete" id={item.id}/>
            )}
          
        </div>
      </td>
    </tr>
  );
const FranchiseListPage = async({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {

  // ✅ params MUST be defined here FIRST
    const params = await searchParams;
  
    const page = Number(params.page) || 1;
    const search = params.search || "";
    const isActive = params.isActive || "";
    const sortBy = params.sortBy || "id";
    const sortOrder = params.sortOrder || "desc";
  
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
    const res = await fetch(
      `${baseUrl}/api/users?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );
  
    const { users: data, count } = await res.json();
  
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">User List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
            <div className="flex items-center gap-4 self-end">            
              <FiltersBar params={params} role={role} table="franchise" />            
              {["SUPER_ADMIN", "ADMIN"].includes(role) && <FormModal table="users" type="create" />}
            </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={page} count={count} />
    </div>
  )
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
}
