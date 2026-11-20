/** @format */

import HeaderComponant from '@/componants/HeaderComponant';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
        <p className="text-green-500 text-shadow-green-300 text-shadow-[0px_0px_8px]">
          Essai de texte long avec le theme
        </p>
      </main>
    </div>
  );
}
