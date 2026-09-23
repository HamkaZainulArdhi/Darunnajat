import Image from 'next/image';

export default function BrandLogo({ className = '', variant = 'dark' }) {
  // 'dark' for light backgrounds (green/black text), 'light' for dark backgrounds (white text)
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';
  const subTextColor = variant === 'light' ? 'text-gray-200' : 'text-[#1a1a1a]';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image 
        src="/darunnjat-logo.png" 
        alt="Darunnajat Logo" 
        width={60} 
        height={60} 
        className="w-14 md:w-16 h-auto object-contain shrink-0" 
      />
      <div className="flex flex-col justify-center items-start text-left">
        <span className={`text-[9px] md:text-[11.5px] font-bold tracking-widest ${subTextColor} leading-none uppercase`}>
          Pondok Pesantren Modern
        </span>
        <span className={`text-2xl md:text-3xl font-bold font-headline-md ${textColor} leading-none tracking-wide`}>
          DARUNNAJAT
        </span>
        <span className={`text-[6px] md:text-[8px] ${subTextColor} leading-none pt-1`}>
          Tegalmunding Pruwatan Bumiayu Brebes Jawa Tengah
        </span>
      </div>
    </div>
  );
}
