import React, { Component } from 'react';
import './application.css';

class ApplicationPage extends Component {
    render() {
        return (
            <div className='Application'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 id='appTitle'> Adoption Application</h1>
                    </div>
                </div>
                <br></br>
                <form id='applicationSection'>
                    <div className='form-group row'>
                        <label htmlFor='inputName' className='col-sm-3 col-form-label'>Name</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputName' placeholder='Your Name'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label htmlFor='inputAddress' className='col-sm-3 col-form-label'>Address</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label htmlFor='inputAddress2' className='col-sm-3 col-form-label'>Address 2</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, floor'></input>
                        </div>
                    </div>

                    <div className='form-group row' id='cityState'>
                        <label htmlFor='cityState' className='col-sm-1 col-form-label'></label>
                        <div className="form-group col-sm-3">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control" defaultValue='state'>
                                <option selected>Choose...</option>
                                <option>North Carolina</option>
                                <option>South Carolina</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label htmlFor='inputPhone' className='col-sm-3 col-form-label'>Phone Number</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputPhone' placeholder='(* * *) * * * - * * * *'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label htmlFor='inputEmail' className='col-sm-3 col-form-label'>Email</label>
                        <div className='col-sm-8'>
                            <input type='email' className='form-control' id='inputEmail' placeholder='JohnDoe@example.com'></input>
                        </div>
                    </div>

                    <h2 id='aboutYou'>About You</h2>

                    <div className='form-group row'>
                        <label htmlFor='inputOccupation' className='col-sm-3 col-form-label'>Occupation</label>
                        <div className='col-sm-4'>
                            <input type='text' className='form-control' id='inputOccupation' placeholder='Job Type'></input>
                        </div>
                        <div className='col-sm-4'>
                            <input type='text' className='form-control' id='inputTime' placeholder='How long?'></input>
                        </div>
                    </div>

                    <br></br>
                    <fieldset className='form-group'>
                        <div className='row'>
                            <legend className='col-form-label col-sm-3 pt-0' id='livingStatus'>Housing: </legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineHouse' value='houseoption1'></input>
                                <label className='form-check-label' htmlFor='inlineHouse'>House</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineApartment' value='houseoption2'></input>
                                <label className='form-check-label' htmlFor='inlineApartment'>Apartment</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineTownhome' value='houseoption3'></input>
                                <label className='form-check-label' htmlFor='inlineTownhome'>Townhome</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineOther' value='houseoption4'></input>
                                <label className='form-check-label' htmlFor='inlineOther'>Other</label>
                            </div>
                        </div>
                    </fieldset>

                    {/* Rent or Own */}
                    <fieldset className='form-group2'>
                        <div className='row'>
                            <legend class='col-form-label col-sm-3 pt-0' id='rentOwn'>Do you : </legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions2' id='inlineOwn' value='oroption1'></input>
                                <label className='form-check-label' htmlFor='inlineOwn'>Own</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions2' id='inlineRent' value='oroption2'></input>
                                <label className='form-check-label' htmlFor='inlineRent'>Rent</label>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Fenced Yard */}
                    <fieldset className='form-group10'>
                        <div className='form-group10'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='appFence'>Do you have a fenced in yard?</legend>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions10' id='appFenceYes' value='question10Value1'></input>
                                    <label className='form-check-label' htmlFor='appFenceYes'>Yes!</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions10' id='appFenceNo' value='question10Value2'></input>
                                    <label className='form-check-label' htmlFor='appFenceNo'>No</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Questions */}
                    {/* People live with you? */}
                    <fieldset className='form-group3'>
                        <div className='form-group3'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='peopleHouse'>How many people live with you?</legend>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioOptions3' id='inline0' value='people1'></input>
                                    <label className='form-check-label' htmlFor='inline0'>0</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioOptions3' id='inline1' value='people2'></input>
                                    <label className='form-check-label' htmlFor='inline1'>1</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioOptions3' id='inline2' value='people3'></input>
                                    <label className='form-check-label' htmlFor='inline2'>2</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioOptions3' id='inline3' value='people4'></input>
                                    <label className='form-check-label' htmlFor='inline3'>3 or More</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Adoption agreement */}
                    <fieldset className='form-group4'>
                        <div className='form-group4'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='agreeAdopt'>Everyone in agreement to adoption?</legend>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions4' id='agreeYes' value='question4Value1'></input>
                                    <label className='form-check-label' htmlFor='agreeYes'>Yes!</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions4' id='agreeNo' value='question4Value2'></input>
                                    <label className='form-check-label' htmlFor='agreeNo'>No</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Currently have pets */}
                    <fieldset className='form-group5'>
                        <div className='form-group5'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='currentPet'>Do you currently have pets?</legend>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions5' id='petYes' value='question5Value1'></input>
                                    <label className='form-check-label' htmlFor='petYes'>Yes!</label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className='form-check-input' type='radio' name='inlineRadioQuestions5' id='petNo' value='question5Value2'></input>
                                    <label className='form-check-label' htmlFor='petNo'>No</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Answered yes to current pets */}
                    <fieldset className='form-group6'>
                        <div className='form-group6'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='currentPetYes'>If you answered yes above...</legend>
                                <div className='col-sm-4'>
                                    <input type='number' className='form-control' id='currentPetNumber' placeholder='How many current pets?'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='currentPetAge' placeholder='Current age(s)'></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='currentPetCont'></legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='currentPetLong' placeholder='How long have you had your pet(s)?'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='currentPetSN' placeholder='Spayed or Neutered?'></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* More Current Pet */}
                    <fieldset className='form-group17'>
                        <div className='form-group17'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='moreCurrentPet'>Tell us more about your current/past pets!</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='moreCurrentPet' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Dog Apply For */}
                    <fieldset className='form-group7'>
                        <div className='form-group7'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='applyWhichDog'>Which dog(s) are you applying for?</legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='applyDogName' placeholder='Spot or Fido'></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Know Rescue */}
                    <fieldset className='form-group15'>
                        <div className='form-group15'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='hearRescue'>How did you hear about this rescue?</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='hearRescue' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Adoption Reason */}
                    <fieldset className='form-group8'>
                        <div className='form-group8'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='applyReason'>Reason for adopting?</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='applyReason' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Dog Responsibilities */}
                    <fieldset className='form-group9'>
                        <div className='form-group9'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='applyResponsibility'>In your opinion, what are the responsibilities of having a dog?</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='applyReason' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Home Life */}
                    <fieldset className='form-group16'>
                        <div className='form-group16'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='homeLife'>Tell us about your family and home life!</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='homeLife' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Daily Life New Dog */}
                    <fieldset className='form-group18'>
                        <div className='form-group18'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='dailyLife'>What would a day in the life of your new dog look like?</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='dailyLife' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    {/* Dog food */}
                    <fieldset className='form-group19'>
                        <div className='form-group19'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='dogFood'>Which dog food/treats do you plan on feeding your new dog?</legend>
                                <div className='col-sm-8'>
                                    <textarea className='form-control' id='dogFood' rows='4'></textarea>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>
                    <h2 id='references'>Personal References</h2>

                    {/* Personal references */}
                    <fieldset className='form-group11'>
                        <div className='form-group11'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef1'>#1 Name & Phone Number</legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference1Name' placeholder='John Doe'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference1Number' placeholder='(* * *) * * * - * * * *'></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef1Email'>Their Email</legend>
                                <div className='col-sm-8'>
                                    <input type="email" class="form-control" id="personalRef1Email" placeholder="JohnDoe@example.com"></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    <fieldset className='form-group12'>
                        <div className='form-group12'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef2'>#2 Name & Phone Number</legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference2Name' placeholder='John Doe'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference2Number' placeholder='(* * *) * * * - * * * *'></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef2Email'>Their Email</legend>
                                <div className='col-sm-8'>
                                    <input type="email" class="form-control" id="personalRef2Email" placeholder="JohnDoe@example.com"></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    <fieldset className='form-group13'>
                        <div className='form-group13'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef3'>#3 Name & Phone Number</legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference3Name' placeholder='John Doe'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='reference3Number' placeholder='(* * *) * * * - * * * *'></input>
                                </div>
                            </div>
                            <br></br>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='personalRef3Email'>Their Email</legend>
                                <div className='col-sm-8'>
                                    <input type="email" class="form-control" id="personalRef3Email" placeholder="JohnDoe@example.com"></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>

                    <fieldset className='form-group14'>
                        <div className='form-group14'>
                            <div className='row'>
                                <legend class='col-form-label col-sm-3 pt-0' id='vetReference'>Vet Reference</legend>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='vetRefName' placeholder='Vet Name'></input>
                                </div>
                                <div className='col-sm-4'>
                                    <input type='text' className='form-control' id='vetRefContact' placeholder='Phone Number or Email'></input>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                


                </form>
                <br></br>
            </div>
        );
    }
}

export default ApplicationPage;