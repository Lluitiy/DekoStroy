import { SocialsItem, SocialsList } from './Socials.styled';
import { ReactComponent as InstaIcon } from 'Assets/svg/instagramIcon.svg';
import { ReactComponent as FaceBookIcon } from 'Assets/svg/facebookIcon.svg';
import { ReactComponent as TelegramIcon } from 'Assets/svg/telegramIcon.svg';
import { ReactComponent as PhoneIcon } from 'Assets/svg/phone.svg';

const Socials = () => {
	return (
		<SocialsList>
			<SocialsItem>
				<a href="/" rel="noreferrer noopener" target="_blank">
					<FaceBookIcon width={16} height={16} aria-label="facebook link" />
				</a>
			</SocialsItem>
			<SocialsItem>
				<a
					href="https://www.instagram.com/deco_stroy/"
					rel="noreferrer noopener"
					target="_blank"
				>
					<InstaIcon width={16} height={16} aria-label="Instagram link" />
				</a>
			</SocialsItem>
			<SocialsItem>
				<a href="/" rel="noreferrer noopener" target="_blank">
					<TelegramIcon width={16} height={16} aria-label="Telegram link" />
				</a>
			</SocialsItem>
			<SocialsItem>
				<a href="/" rel="noreferrer noopener" target="_blank">
					<PhoneIcon width={16} height={16} aria-label="Make a call" />
				</a>
			</SocialsItem>
		</SocialsList>
	);
};

export default Socials;
