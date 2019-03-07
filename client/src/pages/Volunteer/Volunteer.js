import React, { Component } from 'react';
import './vol.css';
// import '../../images/BarryChihuahuas'

class VolPage extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <h1>Interested in Volunteering?</h1>
                    <br></br>
                    <h3>Want to volunteer, but unable to foster?</h3>
                    <p>Often times, when people think of volunteering, they immediately think that means just fostering.
                        <br></br>
                        But there are so many other ways you can volunteer/help out!</p>
                    <h3>Ways you can volunteer:</h3>
                    <ul>
                        <li className="volunteerList">Fostering - we pay for food and medical!</li>
                        <li className="volunteerList">Dog Handler at events - we could always use an extra hand at events!</li>
                        <li className="volunteerList">Transport - From pulling from the shelter, to taking the foster to vet appointments!</li>
                        <li className="volunteerList">Photography - do you enjoy taking photos? A lot of times bad photos keep dogs from getting adopted, having good quality photos allows our fosters a better chance to be noticed!</li>
                        <li className="volunteerList">DIY dog beds or toys - if you're crafty and enjoy making blankets or toys, we could always use extra!</li>

                    </ul>
                    <br></br>
                    <br></br>
                    <h3>This page is dedicated in loving memory to Barry Carter &hearts;</h3>
                    <p>Barry Carter was a true guardian angel on earth for all the lost and forgotten souls of the canine world. Barry did so much in the rescue community from working with coalition to unchain dogs, volunteering at Char-Meck AC, fostering more dogs than you could count, transporting, and so much more. Barry could be around the meanest of dogs and they would quickly warm up to him. Not only did he touch so many canine lives, but he also touched so many other volunteers' lives. He was always willing to lend a helping hand to anyone he knew. Whether there was a fence that needed mending, or something around the house needed fixing, Barry did it. We lost this true and gentle loving spirit in August of 2018. The rescue world will never be the same without him. We have no doubts that he was greeted at the rainbow bridge with so many lives he helped save over the years.</p>
                    
                </div>
            </div>

        );
    }
}

export default VolPage;