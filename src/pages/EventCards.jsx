import React, { useEffect, useState } from 'react';
import '../css/eventCards.css';
import axios from "axios";
import RegistrationForm from '../components/RegistrationForm';

const EventCards = () => {
    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openRegistrationForm, setOpenRegistrationForm] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState('');
    const [selectedCategoryEmojie, setSelectedCategoryEmojie] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    
    const fetchCardsData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${process.env.API_URL}/get-events`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
           
            if(response.status === 200) {
                setIsLoading(false);
                setCardsData(response.data.data);
            }
            else {
                setIsLoading(false);
                setCardsData([]);
            }
        }
         catch (error) {
            setIsLoading(false);
            console.log("Events Data Fetching Failed : ", error);
        } 
         finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCardsData();
    }, [])

  return (
    <div className="cards-page-container">
      <header className="page-header">
        <h1 style={{fontWeight: 'bold'}}>Up coming Eventra Events</h1>
        <div className="divider"></div>
      </header>

    {
        isLoading ? (
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Loading reservations...</p>
            </div>
        ) :
        cardsData.length === 0 ? (
            <div className="no-events">
                <p>No Upcoming Events found <span style={{ fontSize: '2rem'}}>🤷‍♂️</span></p>
            </div>
        ) : 
        (
            <>
            {
                !openRegistrationForm ? (
                     <div className="cards-grid">
                        {cardsData.map((card, index) => (
                            <div className="card-item" key={index}>
                                <div className="card-icon">{card.category_emojie}</div>
                                <div className="card-content">
                                    <span className="card-category">{card.category_name}</span>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <p>{card.location}</p>
                                    <p>{card.dateTime}</p>
                                    <p>{card.contact_email}</p>
                                </div>
                                <button className="card-btn" onClick={() => {setSelectedCategoryName(card.category_name); setSelectedCategoryEmojie(card.category_emojie); setOpenRegistrationForm(true); setSelectedTitle(card.title); setSelectedDateTime(card.dateTime)}}>Resgister</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <RegistrationForm selectedCategoryName={selectedCategoryName} selectedCategoryEmojie={selectedCategoryEmojie} setOpenRegistrationForm={setOpenRegistrationForm} selectedDateTime={selectedDateTime} selectedTitle={selectedTitle} />
                )
            }
            </>
        )
    }
    </div>
  );
};

export default EventCards;