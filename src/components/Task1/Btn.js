import './btn.scss';
import { useState } from 'react';

const Btn = ({props}) => {
    const [count, setCount] = useState(props);

    function handlerClick() {
        setCount(count +1)
    }

    return (
        <div className='btn' onClick={handlerClick}>{count}</div>
    )
}

export default Btn;