import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footerTag">
                <h1>Chocolate Pizza</h1>
                <h4>POSTED ON 15 DEC 2013 / DESSERTS</h4>
                <img className="chocoPizza" src={this.props.pizza}/>
                <img className="printButton" src={this.props.print}/>
                <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook ove rmedium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                <p>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                <p>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e. let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.</p>
                <img id="notePad" src={this.props.notePad} />
            </div>
        );
    }
}