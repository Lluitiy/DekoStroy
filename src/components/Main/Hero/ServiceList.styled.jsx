import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeroList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
`;

export const HeroItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 288px;
	min-height: 160px;

	padding: 16px;

	border: 1px solid transparent;
	border-radius: 4px;

	box-shadow: ${p => p.theme.shadows.boxShadow};
`;
export const HeroLink = styled(Link)`
	font-weight: 400;
	font-size: 12px;
	color: ${p => p.theme.colors.text};

	cursor: pointer;
`;
export const HeroItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	width: 50%;
`;

export const HeroItemImgWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;

	border-radius: 50%;
	overflow: hidden;
`;
