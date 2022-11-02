import styled from '@emotion/styled';

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	background-color: ${p => p.theme.colors.overlay};
`;
export const Burger = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px 16px;
	background-color: ${p => p.theme.colors.primary};
`;

export const BtnWrapper = styled.div`
	width: 33px;
	height: 33px;
	margin-left: auto;
`;
