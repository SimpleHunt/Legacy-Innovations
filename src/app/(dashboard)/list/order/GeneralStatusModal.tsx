"use client";

type GeneralStatusData = {
  id: number;
  newStatus: string;
};

type Props = {
  data: GeneralStatusData;
  onClose: () => void;
  onSuccess: () => void;
};

export default function GeneralStatusModal({
  data,
  onClose,
  onSuccess,
}: Props) {
  const updateStatus = async () => {
    await fetch(`/api/orders/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: data.newStatus,
      }),
    });

    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          Update Status to: {data.newStatus}
        </h2>

        <p className="mb-6">Are you sure you want to change the order status?</p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>

          <button
            onClick={updateStatus}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
