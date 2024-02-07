import './btn2.scss';
import { useState } from 'react';

export default function Btn2({ label, props }) {
    const [count, setCount] = useState(props);

    function clickBtn(){
        setCount(count + +label);
    }
    return (
        <>
            <div className="btn__wrap">
                <div className="btn__wrap__btn" onClick={clickBtn}>{label}</div>
                <div className="btn__wrap__screen">{count}</div>
            </div>
        </>
    )
}