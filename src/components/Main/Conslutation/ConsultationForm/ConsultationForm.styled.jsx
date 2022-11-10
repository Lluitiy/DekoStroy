import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ConsultForm = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	gap: 16px;
	padding: 32px 16px;
	border-radius: 4px;

	box-shadow: ${p => p.theme.shadows.boxShadow};

	@media screen and (min-width: 768px) {
		flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
	}
`;

export const ConsultLabel = styled.label`
	position: relative;

	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 75%;

	font-weight: 400;
	font-size: 14px;
	color: ${p => p.theme.colors.text};
	@media screen and (min-width: 768px) {
		width: 320px;
	}
`;

export const ConsultInput = styled(Field)`
	padding: 8px 8px;

	border: none;
	border-radius: 4px;

	font-weight: 500;
	font-size: 16px;

	box-shadow: ${p => p.theme.shadows.boxShadow};
	background-color: ${p => p.theme.colors.background};
    @media screen and (min-width: 768px) {
		padding: 16px 8px;
	}
`;

export const ConsultError = styled(ErrorMessage)`
	position: absolute;

	font-weight: 400;
	font-size: 14px;
	top: 55px;
	left: 5px;
	color: ${p => p.theme.colors.error};
`;

export const ConsultButton = styled.button`
	padding: 8px 16px;
	width: 50%;
	margin-top: 10px;

	border-radius: 4px;
	border: none;

	font-weight: 500;
	font-size: 14px;
	text-transform: uppercase;

	color: ${p => p.theme.colors.text};
	background-color: ${p => p.theme.colors.background};

    @media screen and (min-width: 768px) {
		width: 33%;

        padding: 16px 32px;
	}
`;
