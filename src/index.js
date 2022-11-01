import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import App from 'components/App/App';
import theme from 'components/Common/theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
