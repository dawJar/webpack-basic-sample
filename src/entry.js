import ReactDOM from 'react-dom';
import reactCompRender from './js/tryReact';
import jQueryMod from './js/tryJQuery';
import './styles/sass-styles.scss';
import './styles/css-styles.css';

console.log('works');

jQueryMod();

ReactDOM.render(reactCompRender, document.getElementById('app'))
