type SmallButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { color: "RED" | "GREEN" }

export default function SmallButton(props: SmallButtonProps) {
    const { className, children, color, ...rest } = props;
    const bgColor = color === "RED" ? "red" : "green";
    return <button className={`p-1 rounded bg-${bgColor}-700 hover:bg-${bgColor}-400 cursor-pointer ${className}`} {...rest}>{children}</button>
}