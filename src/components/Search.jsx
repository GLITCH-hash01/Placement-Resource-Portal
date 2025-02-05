import searchicon from "../assets/images/searchicon.png";

export default function Search() {
    return (
        <>
            <div className="relative w-200 h-10">
                <input
                    type="text"
                    id="search"
                    className="w-full h-full rounded-3xl pl-14 pr-4 outline-0"
                    placeholder="Search"
                    style={{ boxShadow: "2px 3px 2px 0px #000000" }}
                />
                <img
                    src={searchicon}
                    alt="searchicon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <div className="absolute left-10 top-0 bottom-0 w-px border-l-2 border-black"></div>
            </div>
        </>
    );
}