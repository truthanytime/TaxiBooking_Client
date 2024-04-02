import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import { Container } from "reactstrap";
import EditDriverProfile from "./EditDriverProfile";

const ProfilePage = () => {

    const [user, setUser] = useState({
        "_id": "64f5e3359b5333e76b851a56",
        "accountUuid": "efe47f44-7bf2-4138-8181-d9c339b68078",
        "driverUuid": "20a07a4d-c4af-4095-b10a-36d90c7022ec",
        "created": "2023-09-04T14:01:09.370Z",
        "email": "sigma.trading4@outlook.com",
        "firstName": "sdf",
        "lastName": "sdf",
        "country": "asdf",
        "state": "asdf",
        "address": "asdfasdf",
        "phone": "sdf",
        "role": "Driver",
        "phoneVerified": false,
        "enable2FA": true,
        "status": "Active",
        "__v": 0
    });

    return (
        <Container>
            <Fade left>
                <EditDriverProfile user={user} />
            </Fade>
        </Container>
    )
}

export default ProfilePage;