import { createRoot } from 'react-dom/client';

import './Asset/index.css';


import App from './App/index';

const rootDOMElement = document.getElementById('app');
const root = createRoot(rootDOMElement);
root.render(<App />);