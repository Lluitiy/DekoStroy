import styled from '@emotion/styled';
import testBgImg from 'Assets/img/MainHero/statbg.jpg';

export const StatWrapper = styled.div`
	background-image: url(${testBgImg});
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
	background-color: ${p => p.theme.shadows.blur};
	/* background-color: ${p => p.theme.colors.overlay}; */
`;
export const StatList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 16px;

	@media screen and (min-width: 768px) {
		justify-content: space-between;
	}
	@media screen and (min-width: 1280px) {
		justify-content: space-evenly;
	}
`;

export const StatItem = styled.li`
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	align-items: center;

	width: 135px;
	min-height: 100px;

	padding: 8px;
	gap: 8px;
	border-radius: 4px;
	background-color: ${p => p.theme.shadows.blur};
	box-shadow: ${p => p.theme.shadows.boxShadow};

	@media screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		width: 155px;
		min-height: 125px;
	}
`;
export const StatCounter = styled.div`
	font-weight: 800;
	font-size: 18px;

	color: ${p => p.theme.colors.text};
	li > div:not(:last-child) {
		margin-bottom: 8px;
	}
`;

export const StatText = styled.p`
	font-weight: 400;
	font-size: 14px;
	color: ${p => p.theme.colors.text};

	padding: 8px 0px;
	border-top: 1px dotted ${p => p.theme.colors.theme};
	border-bottom: 1px dotted ${p => p.theme.colors.theme};
	min-height: 70px;
`;
