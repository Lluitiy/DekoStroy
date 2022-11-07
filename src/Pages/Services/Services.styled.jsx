import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import heroImg from '../../img/Services/hero.jpg';

export const HeroBox = styled.div`
	padding: 55px 0 30px;
	background-image: url(${heroImg});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.3);

`;

export const Title = styled.h1`
	text-align: center;
	color: ${p => p.theme.colors.white};
	text-transform: uppercase;
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		font-size: 36px;
	}

	@media screen and (min-width: 1280px) {
		font-size: 40px;
	}
`;

export const MenuList = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;

	color: ${p => p.theme.colors.white};
`;
export const MenuItem = styled.li`
	position: relative;


	&:not(:last-child)::before {
		position: absolute;
		height: 8px;
		content: '';
		left: 66px;
		top: 4px;
		bottom: 0;
		margin: auto 0;
		border: 4px solid transparent;
		border-left: 6px solid ${p => p.theme.colors.primary};
	}
`;

export const MenuLink = styled(Link)`
	color: ${p => p.theme.colors.white};

`;

export const ServicesBox = styled.div`
	padding-top: 30px;

`;

export const ServicesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export const ServicesItem = styled.li`
	width: 300px;
	background-color: ${p => p.theme.colors.white};

	@media screen and (min-width: 768px) {
		width: 320px;
	}

	@media screen and (min-width: 1280px) {
		width: 350px;
	}
`;

export const ImgBox = styled.div`
	overflow: hidden;
	height: 210px;

`;

export const ServicesLink = styled(Link)`

	&:hover, &:focus {

		/* a > div > img, a > div {
			transition: all 250ms linear;
		}

		a:hover > div {
			background: rgb(161, 38, 38);
		}

		a:hover > div > img {
			transform: scale(1.2);
		} */


		Img {
			transform: scale(1.2);
		}

		/* ImgBox {
			background: rgb(161, 38, 38);
		} */

		& > div {
			background: rgb(161, 38, 38);
		}
	}
`;



export const Img = styled.img`
	width: 100%;
	height: 100%;

	transition: all 250ms linear;
`;

export const RoundBox = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	min-height: 85px;

`;
export const ServicesSpan = styled.span`
	height: 7px;
	width: 7px;
	background-color: ${p => p.theme.colors.primary};
	border-radius: 50%;
	display: inline-block;

`;

export const ServicesTitle = styled.h3`
	margin: 0;

	text-transform: uppercase;
	font-weight: 500;
	font-size: 16px;
	line-height: 1.3;
	color: ${p => p.theme.colors.text};
	background: ${p => p.theme.colors.white};

`;
