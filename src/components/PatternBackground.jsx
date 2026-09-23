export default function PatternBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/element/background.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px auto",
        }}
      />

      {/* Overlay putih tipis agar tidak terlalu ramai */}
      {/* <div className="absolute inset-0 bg-white/60" /> */}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}