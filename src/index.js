import _ from 'lodash';

function test(){
    const elem = document.createElement('div');

    elem.innerHTML = _.join(['Test','Successful'],' ');

    return elem
}
document.body.appendChild(test());