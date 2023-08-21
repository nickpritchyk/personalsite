'use client';

function Navbar() {
  return (
    <div className="w-full h-fit p-4">
        <ul className="flex gap-12 justify-end mr-24 text-3xl">
            <li className="absolute left-12 font-extrabold"> Nick Pritchyk </li>
            <li className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150"> About </li>
            <li className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150"> Projects </li>
            <li className="hover:text-[#2d59a1] hover:scale-[1.05] transition-all delay-150"> Contact </li>
        </ul>
    </div>
  )
}

export default Navbar