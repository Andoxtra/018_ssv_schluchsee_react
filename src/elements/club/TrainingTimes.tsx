import Heading from "../../components/texts/Heading.tsx";
import {documents, trainingTimes, trainingNote} from "../../data/clubData.ts";
const TrainingTimes = () => <section aria-label="Trainingszeiten">
    <Heading level={2}>Trainingszeiten</Heading>
    <dl className="fact-list">{trainingTimes.map(item => <div key={item.label + item.day}>
        <dt>{item.label} · {item.day}</dt><dd>{item.time}</dd>
    </div>)}</dl>
    <p className="content-note">{trainingNote}</p>
    <a href={documents.openingHours.url} target="_blank" rel="noopener noreferrer">{documents.openingHours.title}</a>
</section>;
export default TrainingTimes;
