import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from '../components/AddNewCardButton';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CardsPage() {
  const query = useQuery();
  const searchQuery = query.get('search') || '';
  const { cards, error, isLoading, getAllCards, handleDelete, handleLike, handleEditCard } = useCards();
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    if (cards) {
      setFilteredCards(
        cards.filter(card =>
          card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [cards, searchQuery]);

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories" />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={filteredCards}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEditCard}
      />
      <AddNewCardButton />
    </div>
  );
}
