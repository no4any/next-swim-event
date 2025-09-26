type SmallButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { color: "RED" | "GREEN" }

export default function SmallButton(props: SmallButtonProps) {
    const { className, children, color, ...rest } = props;

    if(color === "RED") {
        return <button className={`p-1 rounded bg-red-700 hover:bg-red-400 cursor-pointer ${className}`} {...rest}>{children}</button>
    }
    return <button className={`p-1 rounded bg-green-700 hover:bg-green-400 cursor-pointer ${className}`} {...rest}>{children}</button>
}