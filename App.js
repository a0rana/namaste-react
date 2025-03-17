import React from 'react';
import {createRoot} from 'react-dom/client';

const header = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'inside header'),
        React.createElement('h2', {}, 'inside header 2')]));
const root = createRoot(document.getElementById('root'));
root.render(header);