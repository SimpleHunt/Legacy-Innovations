"use client";

import { useState } from "react";

export default function StartedModal({ data, onClose, onSuccess }) {
  const [expectedDate, setExpectedDate] = useState("");

  const updateStatus = async () => {
    await fetch(`/api/orders/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: data.newStatus,
        expectedDeliveryDate: expectedDate,
      }),
    });

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Set Expected Delivery Date</h2>

        <input
          type="date"
          value={expectedDate}
          onChange={(e) => setExpectedDate(e.target.value)}
          className="border w-full p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>

          <button
            onClick={updateStatus}
            className="px-4 py-2 bg-blue-600 text-white rounded"
            disabled={!expectedDate}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
