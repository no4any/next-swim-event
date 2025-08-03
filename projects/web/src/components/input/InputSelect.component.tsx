type InputSelectProps = React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & { title: string } & { options: { name: string, value: string }[] };

export default function InputSelect(props: InputSelectProps) {
    const { title, ...rest } = props;
    return <div className="w-full">
        <div className="w-full font-bold">{title}</div>
        <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...rest}>
            {props.options.map((o, i) => <option key={o.value} selected={i == 0}>{o.name}</option>)}
        </select>
    </div>
}