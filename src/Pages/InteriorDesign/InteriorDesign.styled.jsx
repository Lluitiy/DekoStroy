import styled from '@emotion/styled';
import heroImg from '../../img/InteriorDesign/hero.jpg';
import formSectionImg from '../../img/InteriorDesign/bg-form-1.jpg';

export const HeroBox = styled.div`
	padding: 55px 0 30px;
	background-image: url(${heroImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.3);
`;

export const TitleDesign = styled.h2`
	margin-top: 20px;
	margin-bottom: 10px;
	text-align: center;
	text-transform: uppercase;
	line-height: 1.3;
	font-size: 18px;

	@media screen and (min-width: 1280px) {
		font-size: 30px;
		font-weight: 700;
	}
`;

export const TextDesign = styled.p`
	margin-bottom: 10px;
	text-align: center;
	text-transform: uppercase;
	line-height: 1.3;
	font-weight: 500;
	font-size: 18px;
	color: ${p => p.theme.colors.primary};

	@media screen and (min-width: 1280px) {
		font-size: 24px;
	}
`;

export const TextDesignDescription = styled.p`
	margin-bottom: 10px;
	text-align: center;
	line-height: 1.8;
	font-size: 14px;

	@media screen and (min-width: 1280px) {
		font-size: 16px;
	}
`;

export const FormSection = styled.section`
	padding: 30px 0 30px;
	background-image: url(${formSectionImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.3);
`;

