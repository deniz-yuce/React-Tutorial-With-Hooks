import {GameInfo} from './index'


export function jumpTo ({xIsNext, stepNumber}) {
    stepNumber= step;
    xIsNext= (step % 2) === 0;
}