"use client";

import axios from "axios";
import { toast } from "react-toastify";

export default function CompleteModal({ data, onClose, onSuccess }: any) {
  const markComplete = async () => {
    try {
      await axios.put(`/api/orders/${data.id}`, {
        status: "Completed",
      });

      toast.success("Order marked as Completed!");
      onSuccess?.();
      onClose?.();
    } catch (e) {
      console.log(e);
      toast.error("Failed to complete order");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-sm shadow-lg">
        
        <h2 className="text-lg font-semibold text-center mb-4">
          Complete Order?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Are you sure you want to mark this order as <b>Completed</b>?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={markComplete}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Yes, Complete
          </button>
        </div>
      </div>
    </div>
  );
}
