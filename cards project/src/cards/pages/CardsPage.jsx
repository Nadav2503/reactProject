import React from 'react'
import Cards from '../components/Cards'
import PageHeader from '../../components/PageHeader'

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories" />
      <Cards />
    </div>
  )
}
