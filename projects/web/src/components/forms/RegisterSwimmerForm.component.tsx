"use client"

import Grid from "../grid/Grid.component"
import InputCheckbox from "../input/InputCheckbox.component";
import InputDate from "../input/InputDate.component";
import InputSelect from "../input/InputSelect.component";
import InputText from "../input/InputText.component"

type RegisterSwimmerFormProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

export default function RegisterSwimmerForm(props: RegisterSwimmerFormProps) {
    return <div>

        <Grid>
            <div><InputText title="Vorname" /> </div>
            <div><InputText title="Name" /> </div>
            <div><InputText title="E-Mail" /> </div>
            <div><InputText title="Stadt" /></div>
            <div><InputSelect title="Geschlecht" options={[
                { name: "Keine Angabe", value: "0" },
                { name: "Männlich", value: "M" },
                { name: "Weiblich", value: "W" }
            ]} /></div>
            <div><InputDate title="Geburtsdatum" /></div>
        </Grid>
        <div>
            <InputCheckbox name="breakfast">Ich möchte Frühstück (6€ bei Anmeldung zusätzlich zu bezahlen)</InputCheckbox>
            <InputCheckbox name="distanceRating">Ich möchte <span className="font-bold underline">NICHT</span> an der Distanzwertung  teilnehmen</InputCheckbox>
            <InputCheckbox name="publishName">Ich möchte <span className="font-bold underline">NICHT</span> dass mein Name mit meinen Leistungen veröffentlicht wird (<span className="font-bold italic">Führt zum Ausschluss von allen Wertungen und Siegerehrungen</span>)</InputCheckbox>
            <InputCheckbox name="newsletter">Ich möchte über zukünftige Veranstaltungen per Mail informiert werden</InputCheckbox>
        </div>
    </div>
}