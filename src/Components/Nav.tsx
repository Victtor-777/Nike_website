import headerLogo from "../assets/images/header-logo.svg";
import hamburguer from "../assets/icons/hamburger.svg";

export function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li key={"home"}>
            <a
              href={"/"}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </a>
          </li>
          <li key={"about"}>
            <a
              href={"/"}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              About Us
            </a>
          </li>
          <li key={"products"}>
            <a
              href={"/"}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Products
            </a>
          </li>
          <li key={"contact"}>
            <a
              href={"/"}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburguer} alt="menu hamburguer" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}
