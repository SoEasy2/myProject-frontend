import React, {useState} from 'react';
import classes from './SectionMain.module.scss'
import SettingPart from "./SettingPart/SettingPart";
import Navigation from "./Navigation/Navigation";
const SectionMain:React.FC = ({children}) => {
    const [part, setPart] = useState<string>('Account')
    return (
        <div>
            <div className={classes.wrapper}>
                <h4 className={classes.title}>Settings</h4>
                <div className={classes.wrapperParts}>
                        <Navigation part={part} setPart={setPart}/>
                    <SettingPart part={part} children={children}/>
                </div>
            </div>
        </div>
    );
};

export default SectionMain;