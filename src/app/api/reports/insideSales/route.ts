// GET /api/report/insideSales/summary

import prisma from "@/lib/db";

export async function GET() {
  // const employeeList = await prisma.user.findMany({
  //   where: { role: "Employee" },
  //   select: { id: true, name: true }
  // });

  // const response = [];

  // for (const e of employeeList) {
  //   const count = await prisma.order.count({
  //     where: { employeeId: e.id }
  //   });

  //   response.push({
  //     id: e.id,
  //     name: e.name,
  //     count
  //   });
  // }

  // return Response.json(response);
}
