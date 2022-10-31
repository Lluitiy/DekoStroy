import { useColorMode } from 'theme-ui';
import { Input } from './App.styled';

const App = () => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<Input
			type="checkbox"
			checked={colorMode === 'light' ? true : false}
			onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
		/>
	);
};

export default App;
