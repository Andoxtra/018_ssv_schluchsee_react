import Heading from "../../components/texts/Heading.tsx";
import {trainingTimes} from "../../data/clubData.ts";
const TrainingTimes = () => <section aria-label="Trainingszeiten">
    <Heading level={2}>Trainingszeiten</Heading>
    <dl className="fact-list">{trainingTimes.map(item => <div key={item.label + item.day}>
        <dt>{item.label} · {item.day}</dt><dd>{item.time}</dd>
    </div>)}</dl>
</section>;
export default TrainingTimes;
