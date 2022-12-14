import styled from '@emotion/styled';
export const Input = styled.input`
	display: none;
	background-color: ${p => p.theme.colors.primary};
`;

export const Label = styled.label`
	cursor: pointer;
`;
export const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	transform: translateY(10%);
	@media screen and (min-width: 1280px) {
		transform: translate(-200%,70%);
	}
`;
