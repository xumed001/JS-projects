import { GrGraphQl } from "react-icons/gr";

function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <GrGraphQl />
                    <div>Project Mgmt</div>
                </div>
            </a>
        </div>
    </nav>
  )
}

export default Header