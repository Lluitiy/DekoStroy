import { FormBox, FormText, FormTextUpper } from './WhiteForm.styled';

function WhiteForm() {
	return (
		<FormBox>
			<FormText>
           <FormTextUpper> Залишіть заявку і з вами зв'яжеться</FormTextUpper>
            наш дизайнер інтер'єру
            </FormText>
			
			<form>
				<input placeholder="Ім'я"></input>
				<input placeholder="Телефон"></input>
				<input placeholder="E-mail"></input>
				<button type="submit">надіслати</button>
			</form>
		</FormBox>
	);
}

export default WhiteForm;
