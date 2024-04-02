import { useEffect, useState } from "react";
import Zoom from 'react-reveal/Zoom';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"; import Swal from "sweetalert2";
;

const BookingPayment = ({ onClick, onPrev, paymentInfo, setPaymentInfo }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const createSubscription = async () => {
        try {
            setLoading(true);
            const paymentMethod = await stripe?.createPaymentMethod({
                type: "card",
                card: elements?.getElement(CardElement),
                billing_details: {},
            });

            console.log(paymentMethod?.paymentMethod.id);
            if (paymentMethod) {
                setPaymentInfo({ paymentMethodID: paymentMethod?.paymentMethod.id });
                onClick();
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something else...'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Zoom>
            <div className="cart_container m-3">
                <h3 className="justify-content-center d-flex">YOUR BILLING DETAILS</h3>
                <div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="firstname" name="firstname" />
                        <label>Company Name</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="lastname" name="lastname" />
                        <label>Billing Address</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="lastname" name="lastname" />
                        <label>City</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="lastname" name="lastname" />
                        <label>Post/Zip Code</label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                        <input type="text" class="form-control" id="lastname" name="lastname" />
                        <label>Country</label>
                    </div>
                </div>

                <div className="stripe-image mb-4" />
                <div className="form-control mb-4" style={{ height: '30px' }}>
                    <CardElement />
                </div>

                <button type="button" class="btn btn-primary" onClick={createSubscription}>
                    {!loading ?
                        <>
                            <label>CONFIRM BOOKING</label>
                            <i class="fas fa-arrow-right ml-5" />
                        </> : <div className="spinner-border spinner-border-sm" />}
                </button>
                <button type="button" class="btn btn-secondary mt-3" onClick={onPrev}>
                    <i class="fas fa-arrow-left mr-5" />
                    <label>PREVIOUS STEP</label>
                </button>
            </div>
        </Zoom>
    );
}

export default BookingPayment;