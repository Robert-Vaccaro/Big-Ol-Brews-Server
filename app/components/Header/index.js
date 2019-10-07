import React from 'react';  



class Header extends React.Component {
    render() {
        return (
            <div className="slds-page-header" role="banner">
                <div className="slds-grid  slds-grid--vertical-align-center">
                    <div className="slds-col">
                        <h1 className='heading'><u>Big Ol' Brews</u></h1>
                    </div>
                    <div className="slds-col slds-no-flex">
                        <a href="https://github.com/Robert-Vaccaro/Big-Ol-Brews">
                            <img src="pics/GitHub-Mark-Light-32px.png"/>
                        </a>
                    </div>
                </div>
                    <div className="introduction">
                        <h2>The only database you need to find your the beer of your dreams! 
                        Here you will be able to search a massive database of all the beers in Belgium.</h2>
                        <div>
                            <br></br>
                            <h2><u>You can search by:</u></h2>
                            <h2>-The name of the beer</h2>
                            <h2>-The type of beer</h2>
                            <h2>-The name of the brewery</h2>
                            <br></br>
                            <h2><u>Helpful Hints:</u></h2>
                            <h2>-You can use the slider below the search bar to filter the beers by alcohol content.</h2>
                            <h2>-You can click on the information below and it will filter based on what you clicked.</h2>
                        </div>
                    </div>
            </div>
            
        );
    }
};

export default Header;