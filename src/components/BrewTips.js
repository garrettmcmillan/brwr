import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class BrewTips extends Component {
    render() {
        return (
            <div className="full-page-container-tips">
                <div className="tip-container">
                <div className="tip-div">
                    <h1 className="about-title">
                        Brew Guides.
                    </h1>
                    <h4 className="tip-slogan">
                        Here are a few brewing guides if you need 'em. While I do geek out over coffee, I don't like to take it too seriously and encourage experimentation at every step.
                    </h4>
                    <div className="list-container">
                        <h2 className="list-title">
                            <strong>Pour Over
                            </strong>
                        </h2>
                    <ListGroup variant="flush" className="tip-list">
                        <ListGroup.Item className="tip-list-item">
                            1 - Start heating up your water, I like to experiment with temps between 180°F-208°F (b'c why not).
                        </ListGroup.Item>
                        <ListGroup.Item className="tip-list-item">
                            2 - Weigh out your coffee and grind on your desired setting (medium-fine is a good start).
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            3 - Place filter in pour over and rinse with boiled water. Remember to empty the water from your carafe (fancy word for container).
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            4 - Place brewer on scale and pour coffee in your filter. Give it a lil shake to even out the grinds. 
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            5 - Tare your scale to zero.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            6 - Start your timer and pour your bloom amount. Pour slowly and in a clockwise motion. Don't sweat it if you go over a lil, the goal here is even saturation.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            7 - After letting your coffee bloom for 30 secs, start adding water in stages of 100g or so until you reach your destination (i.e. your total water amount).
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            8 - Let that beast go until there are a few seconds between each drip. I like to shoot for a brew time between 3-4 minutes or so.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            9 - Pour that action into your favorite mug and drink it down.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            10 - Repeat.
                        </ListGroup.Item >
                    </ListGroup>
                    </div>
                    <br/>
                    <div className="list-container">
                        <h2 className="list-title">
                            <strong>French Press
                            </strong>
                        </h2>
                    <ListGroup variant="flush" className="tip-list">
                        <ListGroup.Item className="tip-list-item">
                            1 - Start heating up your water, I like to experiment with temps between 180°F-208°F (b'c why not).
                        </ListGroup.Item>
                        <ListGroup.Item className="tip-list-item">
                            2 - Weigh out your coffee and grind it real chunky (coarse).
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            3 - Place french press on scale and pour coffee in. Give it a lil shake to even out the grinds. 
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            4 - Tare your scale to zero.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            5 - Start your timer and pour your bloom amount. Pour slowly and in a clockwise motion. Don't sweat it if you go over a lil, the goal here is even saturation.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            6 - After letting your coffee bloom for 30 secs, start pouring water  until you reach your destination (i.e. your total water amount).
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            7 - Dance.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            8 - After 4-5 minutes, press slowly until the filter hits the grinds in the bottom.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            9 - Pour that action into a carafe to stop it from over extracting and then  into your favorite mug.
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            10 - Repeat.
                        </ListGroup.Item >
                    </ListGroup>
                    </div>
                    <br/>
                    {/* <div className="list-container">
                        <h2 className="list-title">
                            <strong>Coffee Recos
                            </strong>
                        </h2>
                        <ListGroup variant="flush" className="tip-list">
                        <ListGroup.Item className="tip-list-item">
                            - Have fun.
                        </ListGroup.Item >
                            <ListGroup.Item className="tip-list-item">
                                - I suggest investing in an electric (goose neck) kettle like this<a href="https://fellowproducts.com/products/staggekg" target="_blank" rel="noopener noreferrer"> <span className="link-span" >one.</span> </a>
                            </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item">
                            - More to come...
                        </ListGroup.Item >
                        <ListGroup.Item className="tip-list-item"></ListGroup.Item > 
                        </ListGroup>
                    </div> */}
                </div>
                </div>
            </div>
        )
    }
}
