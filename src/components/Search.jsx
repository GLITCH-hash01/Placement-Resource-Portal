import { IoMdSearch } from "react-icons/io";

export default function Search() {
    return (
        <>
            <div className="relative w-200 h-10 bg-secondary">
                <input
                    type="text"
                    id="search"
                    className="w-full h-full rounded-3xl pl-14 pr-4 outline-0"
                    placeholder="Search"
                    style={{ boxShadow: "2px 3px 2px 0px #000000" }}
                />
                <IoMdSearch className="absolute left-3 top-2 text-2xl"/>          
                <div className="absolute left-10 top-0 bottom-0 w-px border-l-2 border-black"></div>
            </div>
        </>
    );
}