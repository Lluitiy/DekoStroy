import styled from '@emotion/styled';

export const FormBox = styled.div`
	padding: 10% 25px;
	max-width: 425px;
	margin-left: auto;
	background-color: ${p => p.theme.colors.white}; ;
`;

export const FormText = styled.p`
position: relative;
   font-weight: 500;
   font-size: 16px;
   line-height: 1.2;
   color: ${p => p.theme.colors.text}
`;

export const FormTextUpper = styled.span`
	text-transform: uppercase;
   font-size: 18px;
   line-height: 1.2;
`;