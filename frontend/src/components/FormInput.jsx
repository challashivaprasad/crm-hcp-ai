export default function FormInput({
  label,
  placeholder,
  value,
  onChange
}) {
  return (
    <div>

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 p-4 rounded-lg"
      />

    </div>
  );
}