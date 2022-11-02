import styled from '@emotion/styled';

export const Nav = styled.nav``;
export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`;

export const NavItem = styled.li`
	padding: 8px;
	border-bottom: 1px solid gray;
`;
export const NavItemWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const NavSubList = styled.ul``;
export const NavSubItem = styled.li`
	padding: 8px;
	:not(:last-of-type) {
		border-bottom: 1px solid gray;
	}
`;
export const NavMenuBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 50%;
	border: none;
	background-color: transparent;

	width: 25px;
	height: 25px;
`;
