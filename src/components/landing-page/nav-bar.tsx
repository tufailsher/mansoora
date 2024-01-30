import Image from "next/image";



function NavBar() {
    return (
        <div className="navbar md:px-8 px-0 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Products</a></li>
                    </ul>
                </div>
                
                <Image width={50} height={40} src={"images/mansoora-logo.svg"} alt="logo"/>

                {/* <a className="btn btn-ghost text-xl">Mansoora</a> */}
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <ListItem title="Home" />
                    <ListItem title="About" />
                    <ListItem title="Services" />
                    <ListItem title="Products" />
                </ul>
            </div>

            <div className=" navbar-end ">
                <a className="btn bg-custom-buttonColor text-white hover:text-black">Book Appointment</a>
            </div>
        </div>
    );
}

export default NavBar;

const ListItem = ({ title }: { title: string }) => {
    return (
        <li className=" hover:text-custom-buttonColor hover:bg-transparent">
            <a>{title}</a>
        </li>
    );
}
