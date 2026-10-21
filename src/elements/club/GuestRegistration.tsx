import {Link} from "react-router-dom";
import Heading from "../../components/texts/Heading.tsx";
import {documents, guestRegistrationText} from "../../data/clubData.ts";
import webPaths from "../../config/webPaths.ts";
const GuestRegistration = () => <section>
    <Heading level={2}>Als Gast am Training teilnehmen</Heading>
    <p>{guestRegistrationText}</p>
    <p><a href={documents.guestRegistration.url} target="_blank" rel="noopener noreferrer">{documents.guestRegistration.title}</a></p>
    <Link to={webPaths.contactFormSite}>Besuch anfragen →</Link>
</section>;
export default GuestRegistration;
