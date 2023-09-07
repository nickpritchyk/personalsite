'use client';

function Navbar() {
  return (
    <div className="w-full h-fit p-4">
        <ul className="flex gap-12 items-center justify-end mr-24 text-xl">
            <li className="absolute left-12 font-extrabold select-none cursor-default"> Nicholas Pritchyk </li>
            <li className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150 text-sm invisible sm:visible"> 352-445-0562 </li>
            <li className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150 text-sm invisible sm:visible"> nickpritchyk20@gmail.com </li>
        </ul>
    </div>
  )
}

export default Navbar