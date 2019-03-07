import React, { Component } from 'react';
import './vol.css';
import BarryChihuahuas from '../../images/BarryChihuahuas.jpg'
import barrydoghug from '../../images/barrydoghug.jpg'
import barryblackpup from '../../images/barryblackpup.jpg'
import barrygrass from '../../images/barrygrass.jpg'
import FADRPoolPawty from '../../images/FADRPoolPawty.jpg'
import TanyaFudgie from '../../images/TanyaFudgie.jpg'
import KaleighRescuePuppies from '../../images/KaleighRescuePuppies.jpg'
import martine from '../../images/martine.jpg'
import landonfadrevents from '../../images/landonfadrevents.jpg'
import CFAP from '../../images/CFAP.png'
// import pawprintbg from '../../images/pawprintbg.jpg'

class VolPage extends Component {
    render() {
        return (
            <div className='VolPage'>
                <div className='row'>
                    <div className='col'>
                        <h1>Interested in Volunteering?</h1>
                        <img src={FADRPoolPawty} alt="Volunteers" className="volunteerPhotoFADR"></img>
                        <img src={TanyaFudgie} alt="VolunteerBigDog" className="volunteerPhotoFADR"></img>
                        <img src={KaleighRescuePuppies} alt="TinyPuppies" className="volunteerPhotoFADR"></img>
                        <img src={martine} alt="Martine" className="volunteerPhotoFADR"></img>
                        <img src={landonfadrevents} alt="Wendy with puppy" className="volunteerPhotoFADR"></img>
                        <br></br>
                        <h3>Want to volunteer, but unable to foster?</h3>
                        <p>Often times, when people think of volunteering, they immediately think that means just fostering.
                        <br></br>
                            But there are so many other ways you can volunteer/help out!</p>
                        <h3>Ways you can volunteer:</h3>
                        <div class="container">
                            <ul>
                                <li className="volunteerList">Fostering - we pay for food and medical!</li>
                                <li className="volunteerList">Dog Handler at events - we could always use an extra hand at events!</li>
                                <li className="volunteerList">Transport - From pulling from the shelter, to taking the foster to vet appointments!</li>
                                <li className="volunteerList">Photography - do you enjoy taking photos? A lot of times bad photos keep dogs from getting adopted, having good quality photos allows our fosters a better chance to be noticed!</li>
                                <li className="volunteerList">DIY dog beds or toys - if you're crafty and enjoy making blankets or toys, we could always use extra!</li>
                            </ul>
                        </div>
                        <br></br>
                        <br></br>
                        <h3>This page is dedicated in loving memory to Barry Carter &hearts;</h3>
                        <img src={BarryChihuahuas} alt="Barry with chihuahuas" className="barryPhoto"></img>
                        <img src={barrydoghug} alt="Barry hugging dog" className="barryPhoto"></img>
                        <img src={barryblackpup} alt="Barry kissing puppy" className="barryPhoto"></img>
                        <img src={barrygrass} alt="Barry with dog in grass" className="barryPhoto"></img>
                        <p>Barry Carter was a true guardian angel on earth for all the lost and forgotten souls of the canine world. Barry did so much in the rescue community from working with coalition to unchain dogs, volunteering at Char-Meck AC, fostering more dogs than you could count, transporting, and so much more. Barry could be around the meanest of dogs and they would quickly warm up to him. Not only did he touch so many canine lives, but he also touched so many other volunteers' lives. He was always willing to lend a helping hand to anyone he knew. Whether there was a fence that needed mending, or something around the house needed fixing, Barry did it. We lost this truly gentle loving spirit in August of 2018. The rescue world will never be the same without him. We have no doubts that he was greeted at the rainbow bridge with so many lives he helped save over the years.</p>
                        {/* Link to Compassion Fatigue information website: http://www.compassionfatigue.org/ */}
                        <a href="http://www.compassionfatigue.org/" alt="CompassionFatigueLink"><img src={CFAP} alt="CompassionFatigue" className="CFAP"></img></a>


                    </div>
                </div>
            </div>

        );
    }
}

export default VolPage;