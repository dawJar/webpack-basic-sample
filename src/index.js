import _ from 'lodash';
import './styles/style.css';
import './styles/scssStyles.scss';

function component() {
    var element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    element.innerHTML = _.join(['Hello', 'world'], ' ');
    element.classList.add('helloScss');

    var testEs6 = [1, 2, 3];
    console.log(...testEs6);

    return element;
}

document.body.appendChild(component());