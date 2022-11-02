import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as BurgerIcon } from 'Assets/svg/burgerIcon.svg';
import { Container } from 'components/Common/Common.styled';
import { Head, HeadWrapper } from './Header.styled';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import BurgerButton from '../BurgerButton/BurgerButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	const [isOpenBurger, setIsOpenBurger] = useState(false);

	const onToggleBurger = () => {
		setIsOpenBurger(prevState => !prevState);
	};
	const onOverlayBurgerClose = e => {
		if (e.target === e.currentTarget) {
			setIsOpenBurger(prevState => !prevState);
		}
	};
	return (
		<Head>
			<Container>
				<HeadWrapper>
					<Logo />
					{!isDesktop && <Socials />}
					<ThemeSwitcher />
					{!isDesktop && !isOpenBurger && (
						<BurgerButton onClick={onToggleBurger}>
							<BurgerIcon
								width={16}
								height={16}
								aria-label="open burger menu"
							/>
						</BurgerButton>
					)}
				</HeadWrapper>
			</Container>
			{!isDesktop && isOpenBurger && (
				<BurgerMenu
					onToggleBurger={onToggleBurger}
					onToggleOverlay={onOverlayBurgerClose}
				/>
			)}
		</Head>
	);
};

export default Header;
