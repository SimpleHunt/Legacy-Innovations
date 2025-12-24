import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

function parseId(s: string) {
  const n = Number(s);
  if (Number.isNaN(n)) throw new Error("Invalid id");
  return n;
}

// ---------------------- PUT: Update Customer ----------------------
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ MUST await
    const customerId = parseId(id);
    const body = await req.json();

    const updateData: any = { ...body };

    if (body.employeeId) {
      updateData.employee = { connect: { id: Number(body.employeeId) } };
    }

    if (body.franchiseId) {
      updateData.franchise = { connect: { id: Number(body.franchiseId) } };
    }

    delete updateData.employeeId;
    delete updateData.franchiseId;
    delete updateData.id;

    const updated = await prisma.customer.update({
      where: { id: customerId },
      data: updateData,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || String(err) },
      { status: 400 }
    );
  }
}

// ---------------------- DELETE: Delete Customer ----------------------
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const customerId = Number(id);

    if (isNaN(customerId)) {
      return NextResponse.json(
        { error: "Invalid ID. Expected a number." },
        { status: 400 }
      );
    }

    const existing = await prisma.customer.findUnique({
      where: { id: customerId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: `Customer with ID ${customerId} not found` },
        { status: 404 }
      );
    }

    const deleted = await prisma.customer.delete({
      where: { id: customerId },
    });

    return NextResponse.json({
      message: "Customer deleted",
      customer: deleted,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || String(err) },
      { status: 500 }
    );
  }
}
