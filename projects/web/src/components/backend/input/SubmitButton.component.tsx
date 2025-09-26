type SubmitbuttonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function SubmitButton(props: SubmitbuttonProps) {
    const { type, className, ...rest } = props;
    return <button type="submit" {...rest} className="p-2 mt-2 bg-dlrg-blue rounded w-full font-bold cursor-pointer">
        {props.children}
    </button>
}