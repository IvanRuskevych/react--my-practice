import PageTitle from '../PageTitle/PageTitle';
import EventBoard from '../EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <PageTitle text="24th Core World Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
}
