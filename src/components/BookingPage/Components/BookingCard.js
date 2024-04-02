import { useState } from "react";
import Zoom from 'react-reveal/Zoom';
import { PaymentMode } from "res/constants";
import ReactGoogleAutocomplete from 'react-google-autocomplete'

const BookingCard = ({ onClick, travelInfo, setTravelInfo, ignoreValidation }) => {

    const hourValues = ['Hire Duration', '3 hours', '4 hours', '5 hours', '6 hours', '7 hours', '8 hours', '9 hours', '10 hours', '11 hours', '12 hours', '13 hours'];
    const [isOneWay, setOneWay] = useState(true);
    const [errors, setErrors] = useState({});

    const validate = () => {
        if (ignoreValidation) return true;
        let tempErrors = {};

        if (!travelInfo?.pickupLocation) {
            tempErrors.pickupLocation = "Pickup location is required!";
        }

        if (isOneWay && !travelInfo?.destLocation) {
            tempErrors.destLocation = "Destination location is required!";
        }

        if (!isOneWay && !travelInfo?.duration) {
            tempErrors.duration = "Duration is required!";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; // returns true if no errors
    };

    const handleChangeMode = () => {
        setTravelInfo({ ...travelInfo, payment_mode: isOneWay ? PaymentMode.ONE_WAY : PaymentMode.BY_HOUR });
        setOneWay(!isOneWay);
    }

    const handleBooking = () => {
        if (validate() && onClick) {
            onClick();
        }
    };

    return (
        <Zoom>
            <div className="cart_container m-3">
                <h3 className="justify-content-center d-flex">GET A PRICE & BOOK</h3>
                <div className="btn-group">
                    <button type="button" className={`btn_top ${isOneWay ? 'btn_active' : 'btn_inActvie'}`} onClick={handleChangeMode}>One Way</button>
                    <button type="button" className={`btn_top ${!isOneWay ? 'btn_active' : 'btn_inActvie'}`} onClick={handleChangeMode}>By The Hour</button>
                </div>

                {isOneWay &&
                    <div>
                        <div className="form-floating mt-3 mb-3">
                            <ReactGoogleAutocomplete
                                className="form-control"
                                apiKey={'AIzaSyBq0S-tRVqgncxagGf9TTK6o8uZ-GEhdzk'}
                                onPlaceSelected={(place) => setTravelInfo(prev => ({ ...prev, pickupLocation: place?.formatted_address }))}
                                defaultValue={travelInfo?.pickupLocation}
                            />
                            <label htmlFor="desc"><i className="fas fa-thin fa-crosshairs mr-5" /> Where From:</label>
                        </div>
                        {errors.pickupLocation && <p className="text-danger">{errors.pickupLocation}</p>}
                        <div className="form-floating mt-3 mb-3">
                            <ReactGoogleAutocomplete
                                className="form-control"
                                apiKey={'AIzaSyBq0S-tRVqgncxagGf9TTK6o8uZ-GEhdzk'}
                                onPlaceSelected={(place) => setTravelInfo(prev => ({ ...prev, destLocation: place?.formatted_address }))}
                                defaultValue={travelInfo?.destLocation}
                            />
                            <label htmlFor="descTo"><i className="fas fa-map mr-5" /> Where To:</label>
                        </div>
                        {errors.destLocation && <p className="text-danger">{errors.destLocation}</p>}
                    </div>}

                {!isOneWay &&
                    <div>
                        <div className="form-floating mt-3 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="desc"
                                placeholder="Enter Destination Address"
                                name="desc"
                                value={travelInfo?.pickupLocation}
                                onChange={(e) => setTravelInfo({ ...travelInfo, pickupLocation: e.target.value })}
                            />
                            <label htmlFor="desc"><i className="fas fa-thin fa-crosshairs mr-5" /> Where From:</label>
                        </div>

                        {errors.pickupLocation && <p className="text-danger">{errors.pickupLocation}</p>}
                        <select
                            className="form-select mb-3"
                            value={travelInfo?.duration}
                            onChange={(e) => setTravelInfo({ ...travelInfo, duration: e.target.value })}
                        >
                            {hourValues.map(value => <option key={`select_${value}`} value={value}>{value}</option>)}
                        </select>
                        {errors.duration && <p className="text-danger">{errors.duration}</p>}
                    </div>}

                <button type="button" className="btn btn-primary" onClick={handleBooking}>
                    <label>Continue Book</label>
                    <i className="fas fa-arrow-right ml-5" />
                </button>
            </div>
        </Zoom >
    );
}

export default BookingCard;
