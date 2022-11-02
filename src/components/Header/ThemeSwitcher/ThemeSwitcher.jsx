import { useColorMode } from 'theme-ui';
import { Input, Label, IconWrapper } from './ThemeSwitcher.styled';
import { ReactComponent as SunIcon } from 'Assets/svg/sun.svg';
import { ReactComponent as MoonIcon } from 'Assets/svg/moon.svg';

const ThemeSwitcher = () => {
	const [colorMode, setColorMode] = useColorMode();

	return (
		<Label>
			<IconWrapper>
				{colorMode === 'light' ? (
					<SunIcon
						width={16}
						height={16}
						aria-label="color theme light, change to dark"
					/>
				) : (
					<MoonIcon
						width={16}
						height={16}
						aria-label="color theme dark, change to light"
					/>
				)}
			</IconWrapper>
			<Input
				type="checkbox"
				checked={colorMode === 'light' ? true : false}
				onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
			/>
		</Label>
	);
};

export default ThemeSwitcher;
