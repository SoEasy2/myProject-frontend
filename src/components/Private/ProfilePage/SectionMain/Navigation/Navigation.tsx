import React, {useState} from 'react';
import Button from "./Button/Button";

interface IProps{
    part:string;
    setPart(obj:string):void
}

const Navigation:React.FC<IProps> = ({part, setPart}) => {

    return (
        <div>
            <ul>
                <li>
                    <Button name={'Account'} handleParts={setPart} part={part}/>
                </li>
                <li>
                    <Button name={'Password'} handleParts={setPart} part={part}/>
                </li>
                <li>
                    <Button name={'Logs'} part={part} handleParts={setPart}/>
                </li>
                <li>
                    <Button name={'Transactions'} handleParts={setPart} part={part}/>
                </li>
                <li>
                    <Button name={'Actions'} handleParts={setPart} part={part}/>
                </li>

            </ul>
        </div>
    );
};

export default Navigation;