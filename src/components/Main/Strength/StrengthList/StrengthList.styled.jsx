import styled from '@emotion/styled';

export const StrengthsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;

	margin-bottom: 32px;
	@media screen and (min-width: 788px) {
		justify-content: center;
		gap: 32px;
	}
`;

export const StrengthItem = styled.li`
	position: relative;

	border-radius: 4px;
	overflow: hidden;
	box-shadow: ${p => p.theme.shadows.boxShadows};

	@media screen and (min-width: 1280px) {
		width: 400px;
		height: 400px;
	}
`;

export const StrengthImg = styled.img``;

export const StrengthWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	padding: 16px;
	background-color: ${p => p.theme.shadows.blur};
`;

export const StrngthItemHeading = styled.h3`
	text-align: center;

	margin-bottom: 16px;

	color: ${p => p.theme.colors.text};
`;

export const StrengthItemText = styled.p`
	color: ${p => p.theme.colors.text};
	font-weight: 500;
	font-size: 12px;
	@media screen and (min-width: 1280px) {
		font-size: 16px;
	}
`;
