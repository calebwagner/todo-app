import React from 'react';

const NavBar = ({totalNotes}) => {
    console.log("NavBar rendered ...")

    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='tbt'>
                Navbar{""}
                <span className="badge badge-pill badge-secondary">
                    {totalNotes}
                </span>
            </a>
        </nav>
    );
}

export default NavBar;