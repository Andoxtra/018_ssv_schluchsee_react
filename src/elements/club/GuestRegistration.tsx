import ArrowLink from "../../components/links/ArrowLink.tsx";
import Heading from "../../components/texts/Heading.tsx";
import {documents, guestRegistrationText} from "../../data/clubData.ts";
import webPaths from "../../config/webPaths.ts";
const GuestRegistration = () => <section id="gast-training" tabIndex={-1}>
    <Heading level={2}>Als Gast am Training teilnehmen</Heading>
    <p>{guestRegistrationText}</p>
    <p><a href={documents.guestRegistration.url} target="_blank" rel="noopener noreferrer">{documents.guestRegistration.title}</a></p>
    <ArrowLink to={webPaths.contactFormSite}>Besuch anfragen</ArrowLink>
</section>;
export default GuestRegistration;
