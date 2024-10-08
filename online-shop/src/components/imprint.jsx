import React from 'react';
import { useNavigate } from 'react-router-dom';

function Imprint() {
    const navigate = useNavigate();

    return (
        <div className='imprint-main-container'>
            <button onClick={() => navigate(-1)}>Zurück</button>
            <div className="imprint-container">

                <div className="imprint-content">
                    <h1>Imprint</h1>
                    <p>Alex Zeiser | Märkische Allee 156 | 12681 Berlin</p>
                    <h2>Contact</h2>
                    <p>
                        <span>Phone:
                            <a className="adress-phone-email" id='phone' href="tel:+4917622695088">+49 (0) 17622695088</a>
                        </span>
                        <br />
                        <span>Email:
                            <a className="adress-phone-email" id='mail' href="mailto:kontakt@alex-zeiser-developer.de">kontakt@alex-zeiser-developer.de</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Imprint;