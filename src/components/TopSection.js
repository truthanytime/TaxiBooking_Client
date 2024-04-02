import React, { useState } from 'react'
import Styled from 'styled-components'
import { FiCalendar } from "react-icons/fi"
import { BiDollarCircle, BiSpaceBar } from "react-icons/bi"
import { FaShieldAlt } from "react-icons/fa"
import { FaRegHandPointRight } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import { Col, Row } from 'reactstrap'
import BookingCard from './BookingPage/Components/BookingCard'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { PaymentMode } from 'res/constants'
import SearchPage from './Search Page/SearchPage'
import Searchbar from './Searchbar'

const TopSection = () => {

    const navigate = useNavigate();

    const [travelInfo, setTravelInfo] = useState({
        pickupLocation: '',
        destLocation: '',
        payment_mode: PaymentMode.ONE_WAY,
        duration: 0
    })

    const handleBook = () => {
        navigate(`/booking?from=${travelInfo?.pickupLocation}&to=${travelInfo?.destLocation}&du=${travelInfo?.duration}`);
    }

    return (
        <Wrapper>
            <section className="top__section py-12">
                <div className="container top_container px-4 pt-10">
                    <Fade left>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-4xl py-9 font-semibold">YOUR PERSONAL <br />{'CHAUFFEUR SERVICE'}</h1>
                    </Fade>

                    <div className='d-flex'>
                        <Fade left>
                            <div className="flex space-x-3">
                                <FiCalendar className="text-white text-4xl" />
                                <div className="flex flex-col">
                                    <span className="text-white md:text-lg">Free cancellation</span>
                                    <span className="text-white text-sm md:text-sm">and changes</span>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="flex space-x-3">
                                <BiDollarCircle className="text-white text-4xl" />
                                <div className="flex flex-col">
                                    <span className="text-white md:text-lg">Pay online</span>
                                    <span className="text-white text-sm md:text-sm">or in cash on-site</span>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="flex space-x-3">
                                <FaShieldAlt className="text-white text-4xl" />
                                <div className="flex flex-col">
                                    <span className="text-white md:text-lg">24-hour support in English</span>
                                    <span className="text-white text-sm md:text-sm">and licensed drivers</span>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <Row>
                        <Col>
                            <Fade left>
                                <div className="flex items-center space-x-4 justify-center md:justify-start lg:justify-start xl:justify-start">
                                    <div className="flex space-x-2">
                                        <FaRegHandPointRight className="text-white text-3xl" />
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm">Secure</span>
                                            <span className="text-white text-sm">payment</span>
                                        </div>

                                        <div className="flex items-center space-x-4 pl-6">
                                            <FaCcVisa className="text-white text-2xl" />
                                            <FaCcApplePay className="text-white text-2xl" />
                                            <FaCcMastercard className="text-white text-2xl" />
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                        </Col>
                        <Col>
                            <Fade right>
                                <div className="flex items-center space-x-4 justify-center md:justify-end lg:justify-end xl:justify-end z-10">
                                    <Col>
                                        <span className="text-gray-300 text-sm">TripAdvisor</span>
                                        <div className="flex items-center space-x-1">
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <span className="text-gray-300 text-sm">Google</span>
                                        <div className="flex items-center space-x-1">
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                            <FaStar className="text-gray-300 text-sm" />
                                        </div>
                                    </Col>
                                </div>
                            </Fade>
                        </Col>

                    </Row>

                    <div className="py-9" style={{ position: 'absolute', top: 50, right: 10, zIndex: 999 }}>
                        <Fade right>
                            <BookingCard onClick={handleBook} travelInfo={travelInfo} setTravelInfo={setTravelInfo} ignoreValidation />
                        </Fade>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = Styled.section`
.top__section{
    background:url('../../assets/top-section-banner-image.png');
    background-size:cover;
    background-repeat:no-repeat;
    height:500px;
    margin:0px 0px;
    max-width:100%;
}
`

export default TopSection
