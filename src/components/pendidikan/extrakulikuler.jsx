import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function Extrakulikuler() {
  return (
    <ScrollReveal className="py-section-gap bg-white">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Kegiatan & Ekstrakurikuler
            </h2>
            <p className="opacity-70">
              Wadah bagi santri untuk mengeksplorasi minat, bakat, dan mengasah
              jiwa kepemimpinan.
            </p>
          </div>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-primary hover:text-white transition-all">
            Lihat Galeri
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
            <Image
              alt="A dynamic action shot of students playing soccer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNKkHnRiROc051D9BSnSzY6App5nfhaAA0kqs4kVKZbk3p7ljR4J0v86w50KtxCz112hqi1Ynv_M3uEjIViqGHFA8Du5pw2V5zOPsaEFpwTnxR6ZV79DI8LlX6OKxWW-UAPqA1DjfWkhQedduOUBHY3TbpKjB4Iso0Vwuj71IRi0MXVw4c1wYw3pJKiCbNI2qpl79DgwwkQ4aslONlYkWuI-byd05COUQXyflP_0vbC2zJFmEO0MH5hgdrqsdCJQUYODl3Ocrf70k"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-headline-sm text-headline-sm">
                Olahraga & Prestasi
              </h4>
              <p className="text-white/80 text-sm">
                Futsal, Basket, Pencak Silat, Memanah.
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-xl">
            <Image
              alt="Students performing traditional music or arts"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx8LPjSzw-lzl0aMSsFkVNwejWjJ-F0ZOkWzWqzCpPaNsLoxQcQBXfwefFKfAyi5G8Q27PxnNawh9KIJWhFhuY0uXOdpGmntQfEYzIC7-c6ArYTrnopG-lMwkTSMdHGt4qZYhWKNvYhFX80Fu1jvWGNd8kmani0Q6HKoSHMnquErPyONOut2UmdBfNVD_DFHEaxJ-yKVKTA7UsCqQHU5ucyUBXhqfg0fHLXd_hRAqvwkuj13V4ow_RXJOXy3a6BsIoyOuyHNNGS6Y"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-headline-sm text-headline-sm !text-[18px]">
                Seni & Budaya
              </h4>
            </div>
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
            <Image
              alt="A leadership training session"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl9XHO-8x93Y17WEavdZ6P_m8l78c_hF2XAHQHURY82hMJba_xgkJWqyi_fY_nMW01jwO38JVxavuNDKmboTYYa6pkVgEOBqnJsv5wUDvlFQkp6LTZ6Bo3KT729QQlRgOm2KCflLN7gtdCemUhxhkDmBhswPLwCzxDjBAOiujuZSuGlsWydS4YiQU15PIbJC2kXVeLTCewM2i3wm3ZSaLJTY4U5XOauaE4wUBR5MJZY1rKRfWjVrE7qu-hfuKeA8PDm1fOBZx1NLc"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-headline-sm text-headline-sm !text-[16px]">
                Organisasi
              </h4>
            </div>
          </div>
          <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl">
            <Image
              alt="A student focusing on calligraphy"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP7vjPdLX7VPtnAzN1kiP8etDs2ZoHHEos7YWl1irsXVZVxnPz19ChN9dkXhD0C4igth-cJzDQW8qds9qHoz3gIJo8GLDHmJj1rB3jz66GlwV89ZTWuV_hn9at4PGoAKNGsGIdiraQb2FVOJQu4ab14RBOtW0-r-mADSg52E9l60IPx7qutKB70F9x1gc8jgN5YvcKqO4e9zoUq7Xs4yovg_eGOtG2zftKgbTpmZOOCRdzuYm5GdrVhFUx3_0mF_nDh8hCv0BGWe0"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-headline-sm text-headline-sm !text-[16px]">
                Kaligrafi
              </h4>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}