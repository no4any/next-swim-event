"use client"

import Grid from "../grid/Grid.component"
import InputCheckbox from "../input/InputCheckbox.component";
import InputDate from "../input/InputDate.component";
import InputSelect from "../input/InputSelect.component";
import InputText from "../input/InputText.component"

type RegisterSwimmerFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & { skipMail?: boolean };

export default function RegisterSwimmerForm(props: RegisterSwimmerFormProps) {
    return <div className="mb-4 mt-4">
        <Grid>
            <div><InputText title="Vorname" name="firstName" required /> </div>
            <div><InputText title="Name" name="lastName" required /> </div>
            {!props.skipMail && <div><InputText title="E-Mail" name="email" required /></div>}
            <div><InputText title="Stadt" name="city" /></div>
            <div><InputSelect title="Geschlecht" name="gender" options={[
                { name: "Keine Angabe", value: "0" },
                { name: "Männlich", value: "M" },
                { name: "Weiblich", value: "W" }
            ]} /></div>
            <div><InputDate title="Geburtsdatum" name="birthday" /></div>
        </Grid >
        <div className="mt-4">
            <InputCheckbox name="breakfast">Ich möchte Frühstück (6€ bei Anmeldung zusätzlich zu bezahlen)</InputCheckbox>
            <InputCheckbox name="distanceRating">Ich möchte <span className="font-bold underline">NICHT</span> an der Distanzwertung  teilnehmen (<span className="font-bold italic">Führt zum Ausschluss von allen Wertungen und Siegerehrungen</span>)</InputCheckbox>
            <InputCheckbox name="allowsPublishingName">Ich möchte <span className="font-bold underline">NICHT</span> dass mein Name mit meinen Leistungen veröffentlicht wird (<span className="font-bold italic">Führt dazu, dass bei veröffentlichung von Ergebnissen Ihr name nicht angezeigt wird)</span>)</InputCheckbox>
            {!props.skipMail && <InputCheckbox name="newsletter">Ich möchte über zukünftige Veranstaltungen per Mail informiert werden</InputCheckbox>}
        </div>
    </div >
}