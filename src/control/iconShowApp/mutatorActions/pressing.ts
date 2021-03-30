import {mutatorAction} from 'satcheljs'
import getStore from '../store/store';


export let press = mutatorAction(
    'PRESS',
    function pressing() {
        getStore().widthShow = !getStore().widthShow;     
    });

