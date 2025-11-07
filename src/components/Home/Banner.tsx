import { IconPlus } from "@tabler/icons-react";
import { useState } from "react"

export const Banner = () => {
    const [show, setShow] = useState<boolean>(true);
  return (
    <>
    {show && (
        <div className="bg-yellow-400 rounded-xl mx-5">
        <div className="max-w-360 mx-auto py-4 flex gap-5 xl:flex-row flex-col items-center">
        <p className="text-sky-800 font-semibold text-shadow-2xs text-center">Bring joy home with RightChoice. Shop toys, clothes, and essentials your kids love. Every purchase supports smiles and comfort. Shop now, it matters.</p>
        <div className="flex gap-3 items-center">
            <button className="bg-sky-800 px-6 py-2.5 text-yellow-400 rounded-lg hover:bg-neutral-50 hover:text-sky-800 transition-all duration-300 ease-in-out text-sm">Visit Now</button>
        <span onClick={() => setShow(false)} className="xl:ml-10 rotate-45 text-sky-800 cursor-pointer"><IconPlus/></span>
        </div>
        </div>
    </div>
    )}
    </>
  )
}
