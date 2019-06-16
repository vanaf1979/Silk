
/**
 * Local dependencies.
 */
import Sidebar from './components/sidebar.js';
import './store/uistore.js'
import './store/settingsstore.js'
import icons from './icons/icons.js'

/**
 * WordPress dependencies.
 */
const { registerPlugin } = wp.plugins;

/**
 * Register the sidebar plugin.
 */
registerPlugin("silk", {
    icon: icons.butterfly,
    render: Sidebar
});