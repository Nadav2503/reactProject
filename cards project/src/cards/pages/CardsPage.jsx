import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsFeedback from '../components/CardsFeedback';
import PageHeader from '../../components/PageHeader';

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getAllCards = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        );
        setCards(response.data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);

    };

    getAllCards();
  }, []);

  const handleDelete = (id) => {
    console.log("Card " + id + " deleted");
  };
  const handleLike = (id) => {
    console.log("Card " + id + " has been liked");
  };

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories" />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        handleDelete={handleDelete}
        handleLike={handleLike}
      />
    </div>
  );
}
