import ScrollReveal from "../ScrollReveal";

const items = [
  {
    num: "01",
    icon: "loyalty",
    title: "Keikhlasan",
    body: "Bekerja dan beribadah semata-mata karena Allah SWT.",
  },
  {
    num: "02",
    icon: "accessibility_new",
    title: "Kesederhanaan",
    body: "Bersahaja, namun memiliki jiwa yang agung dan kuat.",
  },
  {
    num: "03",
    icon: "shield",
    title: "Berdikari",
    body: "Kemandirian dalam berpikir, bertindak, dan ekonomi.",
  },
  {
    num: "04",
    icon: "groups",
    title: "Ukhuwah",
    body: "Persaudaraan Islam yang melampaui sekat suku dan bangsa.",
  },
  {
    num: "05",
    icon: "psychology",
    title: "Kebebasan",
    body: "Bebas dalam menentukan masa depan dengan tetap berpegang pada nilai.",
  },
];

export default function PancaJiwa() {
  return (
    <ScrollReveal className="py-15 px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Panca Jiwa Pondok
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Lima pilar ruhani yang menjadi landasan setiap langkah santri dan
          asatidz di Darunnajat.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 max-w-container-max mx-auto">
        {items.map(({ num, icon, title, body }) => (
          <div
            key={title}
            className="group flex flex-col gap-3 bg-surface border border-primary rounded-2xl p-6 hover:border-primary/30 hover:bg-green-50/50 transition-colors duration-200"
          >
            {/* Nomor urut */}
            <span className="text-[11px] font-sans text-gray-500 ">
              {num}
            </span>

            {/* Icon container */}
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-[20px] text-green-800"
                data-weight="fill"
              >
                {icon}
              </span>
            </div>

            {/* Accent rule */}
            <div className="w-6 h-0.5 bg-primary rounded-full opacity-60" />

            {/* Title */}
            <h3 className="font-headline-sm text-headline-sm text-primary leading-snug">
              {title}
            </h3>

            {/* Body */}
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-auto">
              {body}
            </p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
