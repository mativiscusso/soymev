import React from 'react';
import './TitlePage.scss'

const TitlePage = ({title}) => {
    return (
        <h1 className="title-page">
            {title}
        </h1>
    );
}

export default TitlePage;
