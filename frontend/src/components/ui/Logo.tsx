import Image from "next/image";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Uma Techno Logo - Web Development Agency"
        width={100}
        height={100}
        priority
        className="w-full h-full object-contain"
      />
    </div>
  );
}
