import * as React from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/avatar.svg'

export function Avatar(props){
	const [showMenu, setShowMenu] = React.useState(false);
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	return(
		<React.Fragment>
			<div className="relative inline-block text-left">
				<div onClick={handleShowMenu}>
					<div className="p-4 shadow-sm bg-white w-14 h-14 rounded-full">
						<img src={avatar} alt="" className="w-full h-full" />
					</div>
				</div>
				<div onMouseLeave={handleShowMenu} className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" style={{ display: showMenu ? 'block':'none'}}>
					<div className="py-1" role="none">
						<div className="divide-y divide-blue-200">
							<Link to="/perfil" className="text-gray-700 hover:text-blue-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Perfil</Link>
							<Link to="/" onClick={props.closeSession} className="text-gray-700 hover:text-blue-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Salir</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}