import styled from '@emotion/styled';
import testBgImg from 'Assets/img/MainConsultation/repairs-img.png';

export const ConsultationWrapper = styled.div`
	background-image: url(${testBgImg});
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
	background-color:${p => p.theme.shadows.blur};
	/* background-color: ${p => p.theme.colors.overlay}; */
`;

export const ConsultationHeader = styled.h2`
	margin-bottom: 16px;

	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 16px;
	color: ${p => p.theme.colors.text};
`;

export const ConsultationText = styled.p`
	margin-bottom: 16px;
	text-align: center;
	font-weight: 500;
	font-size: 14px;
	color: ${p => p.theme.colors.text};
`;
