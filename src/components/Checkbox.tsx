export default function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input type="checkbox" className="h-4 w-4" />
      {label}
    </label>
  );
}
