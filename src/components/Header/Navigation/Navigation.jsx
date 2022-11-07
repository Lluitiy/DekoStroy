import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navData from './navData.json';
import { ReactComponent as ArrowDown } from 'Assets/svg/arrow-down.svg';
import { ReactComponent as ArrowUp } from 'Assets/svg/arrow-up.svg';

import {
	Nav,
	NavItem,
	NavItemWrapper,
	NavList,
	NavMenuBtn,
	NavSubItem,
	NavSubList,
} from './Navigation.styled';

const { services, price, examples } = navData;

const Navigation = () => {
	const [servicesIsOpen, setServicesIsOpen] = useState(false);
	const [priceIsOpen, setPriceIsOpen] = useState(false);
	const [examplesIsOpen, setExamplesIsOpen] = useState(false);
	const onToggleSubMenu = e => {
		const btnName = e.currentTarget.name;

		switch (btnName) {
			case 'services':
				setServicesIsOpen(prevState => !prevState);
				break;
			case 'price':
				setPriceIsOpen(prevState => !prevState);
				break;
			case 'examples':
				setExamplesIsOpen(prevState => !prevState);
				break;
			default:
				return;
		}
	};
	return (
		<Nav>
			<NavList>
				<NavItem>
					<NavItemWrapper>
						<NavLink to="services">Послуги</NavLink>
						<NavMenuBtn onClick={onToggleSubMenu} name="services">
							{servicesIsOpen ? (
								<ArrowUp aria-label="open submenu with services" fill="black" />
							) : (
								<ArrowDown
									aria-label="close submenu with services"
									fill="black"
								/>
							)}
						</NavMenuBtn>
					</NavItemWrapper>
					{servicesIsOpen && (
						<NavSubList>
							{services.map(service => (
								<NavSubItem key={service}>{service}</NavSubItem>
							))}
						</NavSubList>
					)}
				</NavItem>
				<NavItem>
					<NavItemWrapper>
						<NavLink>Ціни</NavLink>
						<NavMenuBtn onClick={onToggleSubMenu} name="price">
							{priceIsOpen ? (
								<ArrowUp aria-label="open submenu with prices" fill="black" />
							) : (
								<ArrowDown
									aria-label="close submenu with prices"
									fill="black"
								/>
							)}
						</NavMenuBtn>
					</NavItemWrapper>
					{priceIsOpen && (
						<NavSubList>
							{price.map(type => (
								<NavSubItem key={type}>{type}</NavSubItem>
							))}
						</NavSubList>
					)}
				</NavItem>
				<NavItem>
					<NavItemWrapper>
						<NavLink>Приклади</NavLink>
						<NavMenuBtn onClick={onToggleSubMenu} name="examples">
							{examplesIsOpen ? (
								<ArrowUp aria-label="open submenu with examples" fill="black" />
							) : (
								<ArrowDown
									aria-label="close submenu with examples"
									fill="black"
								/>
							)}
						</NavMenuBtn>
					</NavItemWrapper>
					{examplesIsOpen && (
						<NavSubList>
							{examples.map(example => (
								<NavSubItem key={example}>{example}</NavSubItem>
							))}
						</NavSubList>
					)}
				</NavItem>
				<NavItem>
					<NavLink>Контакти</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Відгуки</NavLink>
				</NavItem>
				<NavItem>
					<NavLink>Статті</NavLink>
				</NavItem>
			</NavList>
		</Nav>
	);
};

export default Navigation;
