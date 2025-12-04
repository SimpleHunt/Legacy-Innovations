"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function StatusModal({ data, onClose, onSuccess }: any) {
  const [expectedDate, setExpectedDate] = useState("");

const updateStatus = async () => {
  try {
    let nextStatus = "Processing";

    if (data.status === "Processing") {
      nextStatus = "Completed";
    }

    await axios.put(`/api/orders/${data.id}`, {
      status: nextStatus,
      expectedDeliveryDate: expectedDate || data.expectedDeliveryDate,
    });

    toast.success(`Order marked as ${nextStatus}!`);
    onSuccess?.();
    onClose?.();
  } catch (e) {
    console.log(e);
    toast.error("Failed to update status");
  }
};

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[400px]">

        <h2 className="text-lg font-semibold mb-4">Update Order Status</h2>

        <label className="text-sm text-gray-600">Expected Delivery Date</label>
        <input
          type="date"
          className="w-full border p-2 rounded-md mt-1"
          value={expectedDate}
          onChange={(e) => setExpectedDate(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={updateStatus}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
