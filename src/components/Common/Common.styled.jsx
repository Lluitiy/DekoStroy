import styled from '@emotion/styled';

export const Section = styled.div`
	padding: 16px 0px;
	@media screen and (min-width: 768px) {
		padding: 32px 0px;
	}
`;

export const Container = styled.div`
	width: 320px;
	margin: 0px auto;
	padding: 0px 16px;

	@media screen and (min-width: 768px) {
		width: 768px;
		padding: 0px 32px;
	}
	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;

export const Hidden = styled.h2`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`;
