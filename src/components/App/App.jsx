/** @jsxImportSource theme-ui */

import { useColorMode } from 'theme-ui';

const App = () => {
	const [colorMode, setColorMode] = useColorMode();
	return (
		<div
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 40,
			}}
		>
			React homework template
			<input
				type="checkbox"
				checked={colorMode === 'light' ? true : false}
				onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
				sx={{
					bg: 'primary',
					padding: '10px 20px',
				}}
			/>
		</div>
	);
};

export default App;
