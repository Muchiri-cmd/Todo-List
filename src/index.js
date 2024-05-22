import _ from 'lodash';
import './index.css';
/*
function test(){
    const elem = document.createElement('div');

    elem.innerHTML = _.join(['Test','Successful'],' ');
    
    return elem
}
document.body.appendChild(test());
*/
const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');

displayForm.addEventListener('click',()=>{
    modal.showModal();
})
hideForm.addEventListener('click',(e)=>{
    modal.close();
})
