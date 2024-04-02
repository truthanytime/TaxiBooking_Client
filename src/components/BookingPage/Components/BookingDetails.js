import { useState } from "react";
import DatePicker from "react-datepicker";
import Zoom from 'react-reveal/Zoom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const BookingDetails = ({ onClick, onPrev, travelInfo, setTravelInfo, userInfo, setUserInfo }) => {

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (!userInfo?.firstName) {
            tempErrors.firstName = "First name is required!";
        }

        if (!userInfo?.lastName) {
            tempErrors.lastName = "Last name is required!";
        }

        if (!userInfo?.phone) {
            tempErrors.phone = "Phone number is required!";
        }

        if (!userInfo?.email) {
            tempErrors.email = "Email is required!";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // returns true if no errors
    };

    const handleClick = () => {
        if (validate() && onClick) {
            onClick();
        }
    }

    const hourValues = ['Number of Passengers', 1, 2, 3];

    return (
        <Zoom>
            <div className="cart_container m-3">
                <h3 className="justify-content-center d-flex">BOOKING DETAILS</h3>
                <button type="button" class="btn btn-primary mb-3">
                    <i className="fas fa-calendar-alt mr-5" />
                    <label>CHOOSE TIME</label>
                </button>
                <div style={{ gap: '10px', display: 'flex' }}>
                    <DatePicker selected={travelInfo?.startAt} onChange={(date) => setTravelInfo({ ...travelInfo, startAt: date })} className="form-control date-picker d-flex" />
                </div>
                <div>
                    <div className="form-floating mt-3 mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="firstname"
                            name="firstname"
                            value={userInfo?.firstName}
                            onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                        />
                        <label>First Name <span style={{ color: 'red' }}>*</span></label>
                    </div>
                    
                    {errors.firstName && <p className="text-danger">{errors.firstName}</p>}

                    <div className="form-floating mt-3 mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="lastname"
                            name="lastname"
                            value={userInfo?.lastName}
                            onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}

                        />
                        <label>Last Name <span style={{ color: 'red' }}>*</span></label>
                    </div>

                    {errors.lastName && <p className="text-danger">{errors.lastName}</p>}

                    <div>
                        <label className="ml-1" style={{ color: '#777' }}>Phone Number <span style={{ color: 'red' }}>*</span></label>
                        <PhoneInput
                            className="form-control mb-3"
                            placeholder="Enter phone number"
                            value={userInfo?.phone}
                            onChange={(e) => setUserInfo({ ...userInfo, phone: e })}
                        />
                    </div>

                    {errors.phone && <p className="text-danger">{errors.phone}</p>}

                    <div className="form-floating mt-3 mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="email"
                            name="email"
                            value={userInfo?.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                        <label>Email <span style={{ color: 'red' }}>*</span></label>
                    </div>

                    {errors.email && <p className="text-danger">{errors.email}</p>}

                    <select className="form-select mb-3">
                        {hourValues.map(value => <option id={`select_${value}`}>{value}</option>)}
                    </select>
                </div>

                <button type="button" class="btn btn-primary" onClick={handleClick}>
                    <label>Go To Payment</label>
                    <i className="fas fa-arrow-right ml-5" />
                </button>
                <button type="button" class="btn btn-secondary mt-3" onClick={onPrev}>
                    <i className="fas fa-arrow-left mr-5" />
                    <label>Go Back</label>
                </button>
            </div>
        </Zoom>
    );
}

export default BookingDetails;