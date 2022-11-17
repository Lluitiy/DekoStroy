import styled from '@emotion/styled';

export const StrengthHeading = styled.h2`
	color: ${p => p.theme.colors.text};
	text-align: center;
	margin-bottom: 32px;
`;

export const StrnegthCallback = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 8px;

	padding: 16px;

	border-radius: 4px;
	fill: ${p => p.theme.colors.text};
	color: ${p => p.theme.colors.text};
	box-shadow: ${p => p.theme.shadows.boxShadow};
	@media screen and (min-width: 788px) {
		width: 608px;
		margin: 0px auto;
	}
    @media screen and (min-width: 1280px){
        width: 832px;
    }
`;
