import { Helmet } from 'react-helmet-async';
import ContactsSection from '../components/ContactsSection/ContactsSection';

export default function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactsSection />
    </>
  );
}
