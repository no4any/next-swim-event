"use client"

import { ReactNode, useId } from "react";

type InputCheckboxProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { children: ReactNode };

export default function InputCheckbox(props: InputCheckboxProps) {
    const { type, children, id, ...rest } = props;

    const checkId = id || useId();

    return <div className="flex select-none gap-4">
        <div className="flex-none">
            <input type="checkbox" id={checkId} {...rest} />
        </div>
        <label htmlFor={checkId} className="flex-auto">
            {children}
        </label>
    </div>
}