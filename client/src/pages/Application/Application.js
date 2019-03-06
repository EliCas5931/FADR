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
                <form>
                    <div className='form-group row'>
                        <label for='inputName' className='col-sm-2 col-form-label'>Name</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputName' placeholder='Name'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label for='inputAddress' className='col-sm-2 col-form-label'>Address</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label for='inputAddress2' className='col-sm-2 col-form-label'>Address 2</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, floor'></input>
                        </div>
                    </div>

                    <div className='form-group row' id='cityState'>
                        <div className="form-group col-md-3">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"></input>
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>North Carolina</option>
                                <option>South Carolina</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label for='inputPhone' className='col-sm-2 col-form-label'>Phone Number</label>
                        <div className='col-sm-8'>
                            <input type='text' className='form-control' id='inputPhone' placeholder='(* * *) * * * - * * * *'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label for='inputEmail' className='col-sm-2 col-form-label'>Email</label>
                        <div className='col-sm-8'>
                            <input type='email' className='form-control' id='inputEmail' placeholder='JohnDoe@example.com'></input>
                        </div>
                    </div>

                    <h2>About You</h2>

                    <div className='form-group row'>
                        <label for='inputOccupation' className='col-sm-2 col-form-label'>Occupation</label>
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
                            <legend class='col-form-label col-sm-2 pt-0' id='livingStatus'>Housing: </legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineHouse' value='option1'></input>
                                <label className='form-check-label' for='inlineHouse'>House</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineApartment' value='option2'></input>
                                <label className='form-check-label' for='inlineApartment'>Apartment</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineTownhome' value='option3'></input>
                                <label className='form-check-label' for='inlineTownhome'>Townhome</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions' id='inlineOther' value='option4'></input>
                                <label className='form-check-label' for='inlineOther'>Other</label>
                            </div>
                        </div>
                    </fieldset>
                    {/* Rent or Own */}
                    <fieldset className='form-group2'>
                        <div className='row'>
                            <legend class='col-form-label col-sm-2 pt-0' id='rentOwn'>Do you : </legend>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions2' id='inlineOwn' value='option1'></input>
                                <label className='form-check-label' for='inlineOwn'>Own</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' name='inlineRadioOptions2' id='inlineRent' value='option2'></input>
                                <label className='form-check-label' for='inlineRent'>Rent</label>
                            </div>
                        </div>
                    </fieldset>

                    {/* Questions */}
                    <div className='form-group3'>
                        <div className='row'>
                            <legend class='col-form-label col-sm-2 pt-0' id='question1'>How many people live with you?</legend>
                            <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='inlineRadioQuestions' id='questionValue1' value='question1'></input>
                            <label className='form-check-label' for='questionValue1'>0</label>
                            </div>
                            <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='inlineRadioQuestions' id='questionValue2' value='question1'></input>
                            <label className='form-check-label' for='questionValue2'>1</label>
                            </div>
                            <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='inlineRadioQuestions' id='questionValue3' value='question1'></input>
                            <label className='form-check-label' for='questionValue3'>2</label>
                            </div>
                            <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' name='inlineRadioQuestions' id='questionValue4' value='question1'></input>
                            <label className='form-check-label' for='questionValue4'>3 or More</label>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default ApplicationPage;