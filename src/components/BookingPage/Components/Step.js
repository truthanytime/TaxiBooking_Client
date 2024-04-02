import Steps from "rc-steps";
import React from "react";
import Fade from 'react-reveal';
import 'rc-steps/assets/index.css';

const Step = ({ current = 0 }) => {

    return (
        <Fade left>
            <div style={{ margin: '20px', position: 'fixed' }} >
                <Steps
                    current={current}
                    direction="vertical"
                    items={[
                        { title: 'Get Started' },
                        { title: 'Select Car', },
                        { title: 'Booking Details', },
                        { title: 'Payment Details', },
                    ]}
                />
            </div>
        </Fade>
    )
}

export default Step;
