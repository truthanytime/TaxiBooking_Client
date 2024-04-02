import { useEffect, useState } from "react";
import './index.css';
import BookingCard from "./Components/BookingCard";
import BookingDetails from "./Components/BookingDetails";
import { Col, Row } from "reactstrap";
import BookingPayment from "./Components/BookingPayment";
import Step from "./Components/Step";
import { PaymentMode } from "res/constants";
import Swal from "sweetalert2";
import BookingAPI from "res/apis/booking";
import CarsCart from "components/Search Page/CarsCart";

const BookingPage = () => {

    const [index, setIndex] = useState(0);


    const [travelInfo, setTravelInfo] = useState({
        pickupLocation: '',
        destLocation: '',
        startAt: new Date(),
        payment_mode: PaymentMode.ONE_WAY
    })

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const [paymentInfo, setPaymentInfo] = useState({
        paymentMethodID: ''
    })

    const handleNext = () => {
        if (index < 3)
            setIndex(prev => prev + 1);
    }

    useEffect(() => {
        // Parse the URL parameters
        const params = new URLSearchParams(window.location.search);

        // Extract the 'from' and 'to' values
        const fromValue = params.get('from');
        const toValue = params.get('to');

        // Update the state with the extracted values
        setTravelInfo(prevState => ({
            ...prevState,
            pickupLocation: fromValue || prevState.pickupLocation,
            destLocation: toValue || prevState.destLocation
        }));
    }, []); // Empty dependency array ensures this useEffect runs only once when the component mounts

    useEffect(() => {
        if (paymentInfo?.paymentMethodID) {
            const data = { travelInfo, userInfo, paymentInfo };
            BookingAPI.bookOneTime(data).then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Success!',
                    text: 'A New Booking is successfully created!'
                }).then((result) => {
                });
                console.log('Booking Result: ', result);
            }).catch(e => { console.log(e) })
        }
    }, [paymentInfo?.paymentMethodID])

    const handlePrev = () => {
        setIndex(prev => prev - 1);
    }

    return (
        <div style={{ marginTop: '80px' }}>
            <Row>
                <Col md={4} className="d-flex justify-content-center">
                    <Step current={index} />
                </Col>
                {index == 0 && <Col>
                    <BookingCard
                        onClick={handleNext}
                        travelInfo={travelInfo}
                        setTravelInfo={setTravelInfo}
                    />
                </Col>}
                {index == 1 && <Col>
                    <CarsCart onClick={handleNext} />
                </Col>}
                {index == 2 && <Col>
                    <BookingDetails
                        onClick={handleNext}
                        onPrev={handlePrev}
                        travelInfo={travelInfo}
                        setTravelInfo={setTravelInfo}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                    />
                </Col>}
                {index == 3 && <Col>
                    <BookingPayment
                        onClick={handleNext}
                        onPrev={handlePrev}
                        paymentInfo={paymentInfo}
                        setPaymentInfo={setPaymentInfo}
                    />
                </Col>}
            </Row>
        </div>
    )
}

export default BookingPage;