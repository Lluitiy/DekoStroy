import { Burger, Overlay, BtnWrapper } from './BurgerMenu.styled';
import BurgerButton from '../BurgerButton/BurgerButton';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as CrossClose } from 'Assets/svg/crossClose.svg';

const BurgerMenu = ({ onToggleBurger, onToggleOverlay }) => {
	return (
		<Overlay onClick={onToggleOverlay}>
			<Burger>
				<BtnWrapper>
					<BurgerButton onClick={onToggleBurger}>
						<CrossClose
							aria-label="close burger menu"
							fill="black"
							idth={16}
							height={16}
						/>
					</BurgerButton>
				</BtnWrapper>
				<Navigation />
			</Burger>
		</Overlay>
	);
};
export default BurgerMenu;
