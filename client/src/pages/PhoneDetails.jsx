import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";


function PhoneDetails([phonesList]) {

    const [phonesDetails, setPhoneDetails] = useState(null);
    const [fetchingDetails, setFetchingDetails] = useState(true);

    const {phoneId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPhoneDetails();
    }, [phoneId]);

    const getPhoneDetails = async () => {
        setFetchingDetails(true);

        const phoneToRender = phonesList.find(eachPhone => eachPhone.id === Number(phoneId));

        setTimeout(() => {
            if (!phoneToRender) {
                navigate("/not-found");
                return;
            }
            setPhoneDetails(phoneToRender);
            setFetchingDetails(false);
        }, 500);

    };

    if (fetchingDetails) {
        return  <Spinner animation="border" variant="info"/>   
    }

    const {
        name,
        manufacturer,
        description,
        color,
        price,
        screen,
        processor,
        ram,
        imageFileName
    } = phoneDetails;

    return (
        <Card>{name}
        {manufacturer}
        {description}
        {color}
        {price}
        {screen}
        {processor}
        {ram}
        {imageFileName}</Card>
    )




}