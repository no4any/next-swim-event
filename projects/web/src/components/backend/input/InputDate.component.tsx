type InputTextProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {title: string};

export default function InputDate(props: InputTextProps) {
    const { type, className, title, ...rest } = props;
    return <div className="w-full">
        <div className="w-full font-bold">{title}</div>
        <input type="date" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...rest} />
    </div>
}