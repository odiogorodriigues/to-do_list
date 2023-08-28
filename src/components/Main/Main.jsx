import { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './index.scss';


const Main = () => {

    return (
        <div className='Main'>
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <TodoList/>
        </div>
    )

}

export default Main