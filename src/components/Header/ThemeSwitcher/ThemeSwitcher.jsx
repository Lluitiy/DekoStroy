import { useColorMode } from 'theme-ui';
import { Input } from './ThemeSwitcher.styled';

const ThemeSwitcher = () => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<Input
			type="checkbox"
			checked={colorMode === 'light' ? true : false}
			onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
		/>
	);
};

export default ThemeSwitcher;
