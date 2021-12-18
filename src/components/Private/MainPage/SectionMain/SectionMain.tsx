import React from 'react';
import classes from './SectionMain.module.scss'
import Container from "../../../Global/Container/Container";
import CategoriesList from "./CategoriesList/CategoriesList";
import Filters from "./Filters/Filters";
import CardContent from "./CardContent/CardContent";
const SectionMain = () => {
    return (
        <section>
            <Container>
            <div className={classes.wrapper}></div>
                    <CategoriesList/>
                    <div className={classes.mainParts}>
                        <Filters/>
                        <CardContent/>
                    </div>
            </Container>
        </section>
    );
};

export default SectionMain;