import type {FormEvent} from "react";
import MediumBox from "../../components/boxes/MediumBox.tsx";
import Heading from "../../components/texts/Heading.tsx";

type LoginFormProps = {
    busy: boolean;
    onLogin: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginForm = ({busy, onLogin}: LoginFormProps) => (
    <MediumBox>
        <form onSubmit={onLogin} className="site-form">
            <Heading level={2}>Anmelden</Heading>
            <label>Benutzername<input name="username" required autoComplete="username"/></label>
            <label>Passwort<input name="password" type="password" required autoComplete="current-password"/></label>
            <button disabled={busy}>Anmelden</button>
        </form>
    </MediumBox>
);

export default LoginForm;
