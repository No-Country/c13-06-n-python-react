import React from 'react';
import avatar from '../assets/avatar.svg'
import Cookies from 'js-cookie';
export function Avatar(props){
	const [showMenu, setShowMenu] = React.useState(false);
	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};
	
	return(
		<React.Fragment>
			<div className="relative inline-block text-left">
				<div onClick={handleShowMenu}>
					{/* <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
						Options
						<svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
						</svg>
					</button> */}
					<div className="p-4 shadow-sm bg-white w-14 h-14 rounded-full">
						<img src={avatar} alt="" className="w-full h-full" />
					</div>
				</div>
				<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" style={{ display: showMenu ? 'block':'none'}}>
					<div className="py-1" role="none">
						<div className="divide-y divide-blue-200">
							<a href="#" className="text-gray-700 hover:text-blue-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Perfil</a>
							<a href="/" className="text-gray-700 hover:text-blue-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Salir</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}