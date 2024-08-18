import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import AddNewCardButton from '../components/AddNewCardButton';
export default function CardsPage() {
  const { cards, error, isLoading, getAllCards, handleDelete, handleLike } =
    useCards();
  useEffect(() => {
    getAllCards();
  }, []);

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
      <AddNewCardButton />
    </div>
  );
}
