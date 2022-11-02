import { BurgerBtn } from './BurgerButton.styled';

const BurgerButton = ({ children, onClick }) => {
	return (
		<>
			<BurgerBtn onClick={onClick}>{children}</BurgerBtn>
		</>
	);
};
export default BurgerButton;
