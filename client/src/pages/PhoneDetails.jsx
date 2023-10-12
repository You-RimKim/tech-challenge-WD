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
        
    }
}