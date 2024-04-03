import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive" />
      <div className="relative p-4 flex justify-center items-center object-contain h-screen w-screen bg-cover bg-[url('/images/bg-image-mobile.jpg')] md:bg-[url('/images/bg-image.jpg')]">

        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
        <p className="bg-yellow-100 opacity-70 text-xs border absolute top-5 border-yellow-300 px-4 py-1 rounded-full">Website Under Development 🟡👷‍♂️</p>
        <div className="text-white text-center z-10">
          <h1 className="text-3xl lg:text-7xl font-semibold py-6">Cleanse & Detox, Heal, Revialatize & Regenerate</h1>
          <p className="text-sm lg:text-base">
            Revitalize Your Body and Mind, Discover Inner Peace at Our Healing Detox Retreat Center
          </p>
          <button className="bg-green-400 text-lg font-bold px-8 text-gray-800 py-2 rounded-md my-8  " data-tally-open="w8KJ5P" data-tally-layout="modal" data-tally-width="450" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="0">Book a discovery call 🧘‍♂️😊 </button>
        </div>
      </div>
    </div>
  );
}
