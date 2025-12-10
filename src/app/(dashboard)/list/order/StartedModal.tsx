"use client";

import { getSessionUser } from "@/lib/getSessionUser";
import { useState } from "react";

export default function StartedModal({ data, onClose, onSuccess }) {
   const user = getSessionUser();              // 👉 Get logged-in user
  const role = user?.role;

  const [expectedDate, setExpectedDate] = useState("");

  const updateStatus = async () => {
    if (!expectedDate) return;

    let body = {};

    // 🔥 DEFECT HANDLING
    if (data.isDefect) {
      // EMPLOYEE / FRANCHISE → NO expected date required
      if (role === "EMPLOYEE" || role === "FRANCHISE") {
        body = {
          status: "PENDING",
          defectedStatus: 1,
          defExpectedDate: null,   
        };
      } else {
        // FACTORY (or admin) must give expected date
        body = {
          status: "Started",
          defectedStatus: 1,
          expectedDeliveryDate: expectedDate,
          defExpectedDate: expectedDate,
        };
      }
    }

    // 🔥 Normal STARTED handling
    else {
      body = {
        status: data.newStatus,
        expectedDeliveryDate: expectedDate,
      };
    }

    // // 🔥 Handle Defect - Replacement Status
    // if (data.isDefect) {
    //   body = {
    //     status: "Started",
    //     defectedStatus: 1,
    //     expectedDeliveryDate: expectedDate,
    //     defExpectedDate: expectedDate,
    //   };
    // } else {
    //   // 🔥 Normal Started status update
    //   body = {
    //     status: data.newStatus,
    //     expectedDeliveryDate: expectedDate,
    //   };
    // }

    await fetch(`/api/orders/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {data.isDefect ? "Set Replacement Expected Date" : "Set Expected Delivery Date"}
        </h2>

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
