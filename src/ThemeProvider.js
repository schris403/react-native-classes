import React from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ styles, children }) => (
	<ThemeContext.Provider value={styles}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
