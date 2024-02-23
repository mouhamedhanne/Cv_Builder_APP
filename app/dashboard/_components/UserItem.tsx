export default function UserItems() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div
        className="avatar rounded-full min-h-10 min-w-10 bg-[#ed5f1e] text-white font-[700]
        flex items-center justify-center"
      >
        <p>MH</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Mouhamed Hanne</p>
        <p className="text-[12px] text-neutral-500">contact@mouhamed.com</p>
      </div>
    </div>
  );
}
