import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react';

const RegisterLwl = () => {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
        "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
        "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
        "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
        "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
        "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
        "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan",
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const countrycodes = [
        { "name": "Afghanistan", "code": "+93" },
        { "name": "Albania", "code": "+355" },
        { "name": "Algeria", "code": "+213" },
        { "name": "Andorra", "code": "+376" },
        { "name": "Angola", "code": "+244" },
        { "name": "Argentina", "code": "+54" },
        { "name": "Armenia", "code": "+374" },
        { "name": "Australia", "code": "+61" },
        { "name": "Austria", "code": "+43" },
        { "name": "Azerbaijan", "code": "+994" },
        { "name": "Bahrain", "code": "+973" },
        { "name": "Bangladesh", "code": "+880" },
        { "name": "Belarus", "code": "+375" },
        { "name": "Belgium", "code": "+32" },
        { "name": "Bhutan", "code": "+975" },
        { "name": "Bolivia", "code": "+591" },
        { "name": "Bosnia and Herzegovina", "code": "+387" },
        { "name": "Brazil", "code": "+55" },
        { "name": "Bulgaria", "code": "+359" },
        { "name": "Cambodia", "code": "+855" },
        { "name": "Cameroon", "code": "+237" },
        { "name": "Canada", "code": "+1" },
        { "name": "Chile", "code": "+56" },
        { "name": "China", "code": "+86" },
        { "name": "Colombia", "code": "+57" },
        { "name": "Costa Rica", "code": "+506" },
        { "name": "Croatia", "code": "+385" },
        { "name": "Cuba", "code": "+53" },
        { "name": "Cyprus", "code": "+357" },
        { "name": "Czech Republic", "code": "+420" },
        { "name": "Denmark", "code": "+45" },
        { "name": "Ecuador", "code": "+593" },
        { "name": "Egypt", "code": "+20" },
        { "name": "Estonia", "code": "+372" },
        { "name": "Ethiopia", "code": "+251" },
        { "name": "Finland", "code": "+358" },
        { "name": "France", "code": "+33" },
        { "name": "Germany", "code": "+49" },
        { "name": "Greece", "code": "+30" },
        { "name": "Hong Kong", "code": "+852" },
        { "name": "Hungary", "code": "+36" },
        { "name": "Iceland", "code": "+354" },
        { "name": "India", "code": "+91" },
        { "name": "Indonesia", "code": "+62" },
        { "name": "Iran", "code": "+98" },
        { "name": "Iraq", "code": "+964" },
        { "name": "Ireland", "code": "+353" },
        { "name": "Israel", "code": "+972" },
        { "name": "Italy", "code": "+39" },
        { "name": "Japan", "code": "+81" },
        { "name": "Jordan", "code": "+962" },
        { "name": "Kazakhstan", "code": "+7" },
        { "name": "Kenya", "code": "+254" },
        { "name": "Kuwait", "code": "+965" },
        { "name": "Laos", "code": "+856" },
        { "name": "Latvia", "code": "+371" },
        { "name": "Lebanon", "code": "+961" },
        { "name": "Libya", "code": "+218" },
        { "name": "Lithuania", "code": "+370" },
        { "name": "Luxembourg", "code": "+352" },
        { "name": "Malaysia", "code": "+60" },
        { "name": "Maldives", "code": "+960" },
        { "name": "Mali", "code": "+223" },
        { "name": "Malta", "code": "+356" },
        { "name": "Mexico", "code": "+52" },
        { "name": "Moldova", "code": "+373" },
        { "name": "Monaco", "code": "+377" },
        { "name": "Mongolia", "code": "+976" },
        { "name": "Morocco", "code": "+212" },
        { "name": "Myanmar", "code": "+95" },
        { "name": "Nepal", "code": "+977" },
        { "name": "Netherlands", "code": "+31" },
        { "name": "New Zealand", "code": "+64" },
        { "name": "Nigeria", "code": "+234" },
        { "name": "North Korea", "code": "+850" },
        { "name": "Norway", "code": "+47" },
        { "name": "Oman", "code": "+968" },
        { "name": "Pakistan", "code": "+92" },
        { "name": "Palestine", "code": "+970" },
        { "name": "Panama", "code": "+507" },
        { "name": "Peru", "code": "+51" },
        { "name": "Philippines", "code": "+63" },
        { "name": "Poland", "code": "+48" },
        { "name": "Portugal", "code": "+351" },
        { "name": "Qatar", "code": "+974" },
        { "name": "Romania", "code": "+40" },
        { "name": "Russia", "code": "+7" },
        { "name": "Saudi Arabia", "code": "+966" },
        { "name": "Senegal", "code": "+221" },
        { "name": "Serbia", "code": "+381" },
        { "name": "Singapore", "code": "+65" },
        { "name": "Slovakia", "code": "+421" },
        { "name": "Slovenia", "code": "+386" },
        { "name": "South Africa", "code": "+27" },
        { "name": "South Korea", "code": "+82" },
        { "name": "Spain", "code": "+34" },
        { "name": "Sri Lanka", "code": "+94" },
        { "name": "Sudan", "code": "+249" },
        { "name": "Sweden", "code": "+46" },
        { "name": "Switzerland", "code": "+41" },
        { "name": "Syria", "code": "+963" },
        { "name": "Taiwan", "code": "+886" },
        { "name": "Tajikistan", "code": "+992" },
        { "name": "Thailand", "code": "+66" },
        { "name": "Tunisia", "code": "+216" },
        { "name": "Turkey", "code": "+90" },
        { "name": "Ukraine", "code": "+380" },
        { "name": "United Arab Emirates", "code": "+971" },
        { "name": "United Kingdom", "code": "+44" },
        { "name": "United States", "code": "+1" },
        { "name": "Uruguay", "code": "+598" },
        { "name": "Uzbekistan", "code": "+998" },
        { "name": "Venezuela", "code": "+58" },
        { "name": "Vietnam", "code": "+84" },
        { "name": "Yemen", "code": "+967" },
        { "name": "Zimbabwe", "code": "+263" }
    ];

    const router = useRouter();
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [registerContentStatus, setRegisterContentStatus] = useState(false);

    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [email, setEmail] = useState('');
    const [favorableTeam, setFavorableTeam] = useState('');
    const [residingCountry, setResidingCountry] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [billingCity, setBillingCity] = useState('');
    const [billingState, setBillingState] = useState('NA');
    const [billingPincode, setBillingPincode] = useState('');
    const [errors, setErrors] = useState({});
    const [accountMessage, setAccountMessage] = useState('');

    function handleTerms() {
        setLoaderStatus(true);

        setTimeout(() => {
            setLoaderStatus(false);
            setRegisterContentStatus(true);
        }, 2000);

        const interval = setInterval(() => {
            if (typeof smartech !== "undefined") {
                smartech('dispatch', 'agree_and_continue', {
                    'page_url': router.route
                });
                clearInterval(interval);
            }
        }, 500);
    }

    console.log(dob);


    const validateForm = () => {
        let formErrors = {};
        let formIsValid = true;

        // Validate Name
        if (!name) formErrors.name = "Name is required";

        // Validate Date of Birth
        if (!dob || !/^\d{2}-\d{2}-\d{4}$/.test(dob))
            formErrors.dob = "Date of Birth must be in DD-MM-YYYY format";

        // Validate WhatsApp Number
        if (!whatsappNumber || !/^\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}$/.test(whatsappNumber))
            formErrors.whatsappNumber = "Valid contact number is required";

        // Validate Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailRegex.test(email))
            formErrors.email = "Valid email is required";

        // Validate Residing Country
        if (!residingCountry) formErrors.residingCountry = "Billing country is required";

        // Validate Favorite Team
        if (!favorableTeam) formErrors.favorableTeam = "Favorite team selection is required";

        // Validate Billing Address
        if (!billingAddress) formErrors.billingAddress = "Billing address is required";

        // Validate Billing City
        if (!billingCity) formErrors.billingCity = "Billing city is required";

        // Validate Billing Pincode/Zipcode
        if (!billingPincode) formErrors.billingPincode = "Billing pincode/zipcode is required";

        // Set errors and return validation result
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        let currency = residingCountry === "India" ? "INR" : "USD";
        let totalAmount = residingCountry === "India" ? "1239" : "12";

        const response = await fetch("/api/lwl/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                dob,
                contactNumber: countryCode + whatsappNumber,
                email,
                residingCountry,
                favorableTeam: favorableTeam,
                address: billingAddress,
                city: billingCity,
                state: billingState != "" ? billingState : "NA",
                pincode: billingPincode,
                currencyType: currency,
                orderAmount: totalAmount,
            }),
        });

        const result = await response.json();
        if (response.ok) {
            if (result.statusCode === 200 && result.status === "success" && result.data?.paymentLink) {
                smartech("contact", 3, {
                    "pk^email": email,
                    mobile: countryCode + whatsappNumber,
                    NAME: name,
                    DOB: dob,
                    COUNTRY: residingCountry,
                    FAVOURABLE_TEAM: favorableTeam,
                    BILLING_CITY: billingCity,
                    BILLING_PINCODE: billingPincode,
                });

                smartech("identify", email);

                smartech("dispatch", "paynow", {
                    name,
                    dob,
                    mobile: countryCode + whatsappNumber,
                    email,
                    country: residingCountry,
                    favourable_team: favorableTeam,
                    billing_city: billingCity,
                    billing_pincode: billingPincode,
                });
                setCookie(null, "current_user", JSON.stringify(result.data), { path: "/" });
            } else if (result.statusCode === 200 && result.status === "success" && !result.data?.paymentLink) {
                setAccountMessage("You've already paid. Log in to your LWL dashboard.");
            }
        } else {
            console.error("Error:", result);
        }
    };

    return (
        <>
            <div className="main">
                <Header />
                <div className="body">
                    {
                        registerContentStatus ?
                            <div className="lwl-container">
                                <div className="lwl-header-container">
                                    <div className="page-headers">
                                        <h1>Live with the Legends Registration</h1>
                                    </div>
                                </div>
                                <div className="registeration-container">
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            Name
                                            <input type="text" placeholder="Your full name" onChange={(e) => setName(e.target.value)} />
                                            {errors.name && <span className="error">{errors.name}</span>}
                                        </label>
                                        <label>
                                            Date of Birth
                                            <input type="date" max="2012-12-31" onChange={(e) => setDob(e.target.value.split("-").reverse().join("-"))} />
                                            {errors.dob && <span className="error">{errors.dob}</span>}
                                        </label>
                                        <label>
                                            WhatsApp Number
                                            <div className="number">
                                                <div className="country-code">
                                                    <select onChange={(e) => setCountryCode(e.target.value)}>
                                                        {countrycodes.map((country, index) => (
                                                            <option key={index} value={country.code} selected={country.code === "+91"} >
                                                                {country.code}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 6L8 10L12 6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <input type="text" placeholder="Your whatsapp number" onChange={(e) => setWhatsappNumber(countryCode + e.target.value)} className="phone-number" />
                                            </div>
                                            {errors.whatsappNumber && <span className="error">{errors.whatsappNumber}</span>}
                                        </label>
                                        <label>
                                            Email Address
                                            <input type="text" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </label>
                                        <label>
                                            Favourite Team
                                            <select onChange={(e) => setFavorableTeam(e.target.value)} >
                                                <option value="Australia Champions">Australia Champions</option>
                                                <option value="England Champions">England Champions</option>
                                                <option value="India Champions">India Champions</option>
                                                <option value="Pakistan Champions">Pakistan Champions</option>
                                                <option value="South Africa Champions">South Africa Champions</option>
                                                <option value="West Indies Champions">West Indies Champions</option>
                                            </select>
                                            {errors.favorableTeam && <span className="error">{errors.favorableTeam}</span>}
                                        </label>
                                        <label>
                                            Billing Address
                                            <input
                                                type="text"
                                                placeholder="Your billing address"
                                                onChange={(e) => setBillingAddress(e.target.value)}
                                            />
                                            {errors.billingAddress && <span className="error">{errors.billingAddress}</span>}
                                        </label>
                                        <div className="flex-fields">
                                            <label>
                                                Billing City
                                                <input
                                                    type="text"
                                                    placeholder="Your billing city"
                                                    onChange={(e) => setBillingCity(e.target.value)}
                                                />
                                                {errors.billingCity && <span className="error">{errors.billingCity}</span>}
                                            </label>
                                            <label>
                                                Billing State (Optional)
                                                <input
                                                    type="text"
                                                    placeholder="Your billing state"
                                                    onChange={(e) => setBillingState(e.target.value)}
                                                />
                                                {errors.billingState && <span className="error">{errors.billingState}</span>}
                                            </label>
                                        </div>
                                        <label>
                                            Billing Pincode/Zipcode
                                            <input
                                                type="text"
                                                placeholder="Your billing pincode"
                                                onChange={(e) => setBillingPincode(e.target.value)}
                                            />
                                            {errors.billingPincode && <span className="error">{errors.billingPincode}</span>}
                                        </label>
                                        <label>
                                            Billing Country
                                            <select onChange={(e) => setResidingCountry(e.target.value)}>
                                                <option value="">Select your country</option>
                                                {countries.map((country, index) => (
                                                    <option key={index} value={country}>{country}</option>
                                                ))}
                                            </select>
                                            {errors.residingCountry && <span className="error">{errors.residingCountry}</span>}
                                        </label>
                                        <input type="submit" value="Pay Now" />
                                    </form>
                                    {accountMessage && <p style={{ color: '#fff' }}>{accountMessage}</p>}
                                </div>
                            </div>
                            :
                            <div className="lwl-container">
                                <div className="lwl-header-container">
                                    <div className="page-headers">
                                        <h1>Terms and conditions for participation</h1>
                                    </div>
                                </div>
                                <div className="policy-content">
                                    <div>
                                        <h2>Eligibility</h2>
                                        <ul>
                                            <li>Participants must be at least 13 years old.</li>
                                            <li>Ages 13–17 require written permission from a parent or guardian.</li>
                                            <li>Open worldwide, except for WCL employees and their immediate family members.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Entry Fee</h2>
                                        <ul>
                                            <li>A $12 non-refundable fee is required to participate.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Selection Process</h2>
                                        <ul>
                                            <li>Participants must complete all contest rounds, including:</li>
                                            <li>Round 1: Quiz round</li>
                                            <li>Round 2: Video submission</li>
                                            <li>Round 3: Captain’s call</li>
                                            <li>Judges’ decisions are final and binding.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Prizes & Rewards</h2>
                                        <ul>
                                            <li>Round 1: Every participant will receive a signed photo of their chosen team captain.</li>
                                            <li>Round 1 Qualification Bonus: The first 20,000 participants who qualify will receive a ₹750 EaseMyTrip coupon.</li>
                                            <li>Round 2: 60 participants who qualify will get an opportunity for a video call with their favorite captain.</li>
                                            <li>Round 3: 12 deserving participants will win an all-expenses-paid trip to the UK.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Prize Terms</h2>
                                        <ul>
                                            <li>Prizes are non-transferable and cannot be exchanged for cash.</li>
                                            <li>EaseMyTrip coupon codes are valid for a limited time and subject to EaseMyTrip’s terms of use.</li>
                                            <li>Video call schedules with captains will be arranged by WCL and are subject to availability.</li>
                                            <li>Participants selected for the UK trip must have a valid passport and comply with all visa requirements.</li>
                                            <li>Failure to complete any required contest rounds may result in forfeiture of prizes.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Travel and Accommodation</h2>
                                        <ul>
                                            <li>Winners will receive an all-expenses-paid trip to the UK, covering flights, visas, and accommodation.</li>
                                            <li>WCL will handle visa processing and logistics.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Participation in Activities</h2>
                                        <ul>
                                            <li>Winners must attend all scheduled training sessions, matches, and media events.</li>
                                            <li>Adherence to WCL rules and guidelines is mandatory.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Media and Publicity</h2>
                                        <ul>
                                            <li>Winners agree to media appearances and promotional activities related to the contest.</li>
                                            <li>WCL may use winners’ names, images, and videos for promotional purposes without additional compensation.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Code of Conduct</h2>
                                        <ul>
                                            <li>Participants must maintain respectful behavior throughout the contest.</li>
                                            <li>Any form of misconduct or violation of rules may lead to disqualification.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Anti-Corruption Compliance</h2>
                                        <ul>
                                            <li>Participants must adhere to WCL’s anti-corruption code.</li>
                                            <li>Any suspicious activity must be reported to WCL immediately.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Liability</h2>
                                        <ul>
                                            <li>WCL is not responsible for any personal injury, loss, or damages incurred during the contest.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Privacy Policy</h2>
                                        <ul>
                                            <li>Personal information provided by participants will be used solely for contest administration.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Disqualification</h2>
                                        <ul>
                                            <li>False information, rule violations, or non-compliance may result in immediate disqualification.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Governing Law</h2>
                                        <ul>
                                            <li>The contest is governed by Dubai law, and any disputes will be resolved in Dubai courts.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2>Payment Partner</h2>
                                        <ul>
                                            <li>SAI TELEMATICS - E2 Swaran Jayanti Puram, Govindpuram, Ghaziabad, Uttar Pradesh 201002.</li>
                                        </ul>
                                    </div>
                                    <button onClick={handleTerms}>
                                        {loaderStatus ? (
                                            <span className="loader"></span>
                                        ) : (
                                            <span>I Agree and Continue</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                    }
                </div>
                <Footer />
            </div>

            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .lwl-container {
                    width: 100%;
                    max-width: 1280px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    margin-top: 80px;
                }

                .lwl-header-container {
                    width: 100%;
                }

                .lwl-header-container ul {
                    display: flex;
                    gap: 5px;
                    list-style: none;
                }

                .lwl-header-container ul li {
                    color: #ABB1CB;
                    font-family: "Poppins Regular";
                    font-size: 16px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .page-headers {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    text-align: center;
                }

                .page-headers div {
                    color: #ffffff;
                    font-family: "Poppins Semibold";
                    font-size: 35px;
                    text-transform: uppercase;
                }

                .policy-content {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    margin: auto;
                    padding: 0 0 50px 0;
                }

                .policy-content div {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .policy-content h2 {
                    font-family: "Poppins Bold";
                    font-weight: 500;
                    text-transform: uppercase;
                    color: #ffffff;
                }

                .policy-content ul {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    list-style: disc;
                    padding-left: 40px;
                    text-align: left;
                    padding: 0 0 0 15px;
                }

                .policy-content ul li {
                    font-family: "Poppins Light";
                    font-weight: 500;
                    color: #ABB1CB;
                }

                .policy-content p {
                    color: #ABB1CB;
                    font-family: "Poppins Light";
                    font-weight: 500;
                    text-transform: uppercase;
                }

                .policy-content p a {
                    color: #ffffff;
                    text-decoration-line: underline;
                }

                .policy-content button {
                    width: 200px;
                    height: 45px;
                    padding: 0 20px;
                    margin-top: 20px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Poppins Medium";
                    font-size: 14px;
                    text-transform: uppercase;
                    text-align: center;
                    cursor: pointer;
                }

                .loader {
                    height: 20px;
                    width: 20px;
                    border: 2px solid #ffffff;
                    border-top: 3px solid #000000;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    display: inline-block;
                    vertical-align: middle;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .registeration-container {
                    width: 100%;
                    margin: auto;
                    padding: 0 2rem 50px 2rem;
                }

                .registeration-container form .flex-fields {
                    display: flex;
                    gap: 15px;
                }

                @media screen and (max-width: 767px) {
                .registeration-container form .flex-fields {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                }

                .registeration-container form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .registeration-container form label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    color: #ffffff;
                    font-family: "Poppins Medium";
                    font-size: 16px;
                    text-transform: uppercase;
                }

                .registeration-container form input,
                .registeration-container form select {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: solid 2px #ABB1CB;
                    outline: none;
                    border-radius: 10px;
                    background-color: transparent;
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    transition: all .2s;
                }

                .registeration-container form select {
                    color: #ffffff !important;
                }

                .registeration-container form select option {
                    color: #000000 !important;
                }

                .registeration-container form input:hover,
                .registeration-container form input:active,
                .registeration-container form input:focus {
                    border: solid 2px #ffffff;
                }

                .registeration-container form select {
                    -webkit-appearance: none;
                }

                .registeration-container form input::placeholder {
                    color: #ABB1CB;
                }

                .registeration-container form span {
                    color: red;
                    font-size: 14px;
                    margin-top: 5px;
                }

                .registeration-container form input[type='submit'] {
                    width: 100%;
                    height: 50px;
                    padding: 0 10px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    background-color: #ffffff;
                    color: #2D3B7D;
                    font-family: "Poppins Medium";
                    font-size: 16px;
                    text-transform: uppercase;
                    cursor: pointer;
                }

                .number {
                    display: flex;
                    position: relative;
                }

                .country-code {
                    display: flex;
                    align-items: center;
                    width: 60px;
                    max-width: 60px;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    border: none !important;
                }

                .country-code select {
                    border: none !important;
                }

                .phone-number {
                    padding: 0 0 0 70px !important;
                }

                .registeration-container p {
                    margin-top: 20px;
                    color: #ffffff;
                    font-family: "Poppins Regular";
                    font-weight: 500;
                    font-size: 16px;
                    text-transform: uppercase;
                }
            `}</style>
        </>
    );
};

export async function getServerSideProps(context) {
    const cookies = parseCookies(context);
    const current_user = cookies?.current_user ? JSON.parse(cookies.current_user) : null;

    if (current_user) {
        return {
            redirect: {
                destination: "/lwl/dashboard",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

export default RegisterLwl;
