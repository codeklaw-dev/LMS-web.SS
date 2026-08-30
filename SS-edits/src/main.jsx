import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global layers first, so component stylesheets imported deeper in the tree
// always cascade *after* them rather than depending on module resolution order.
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
