// GET /api/report/franchise/summary
import prisma from "@/lib/db";

export async function GET() {
  const franchiseList = await prisma.franchise.findMany({
    select: { id: true, name: true },
  });

  const response = [];

  for (const f of franchiseList) {
    const count = await prisma.order.count({
      where: { franchiseId: f.id }
    });

    response.push({
      id: f.id,
      name: f.name,
      count
    });
  }

  return Response.json(response);
}
