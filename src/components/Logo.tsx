import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center ">
      <Image
        src="/LegacyLogo.png"
        alt="Skyline Logo"
        width={220}      // adjust size
        height={100}      // adjust size
        priority
      />
    </div>
  );
}