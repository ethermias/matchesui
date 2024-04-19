import { ReactNode } from "react";

type TBasicIcon = {
    children: ReactNode,
    label: string,
    labelPosition?: 'L' | 'R' | 'B'
}
export default function BasicIcon({ children, label, labelPosition = 'L' }: TBasicIcon) {
    const className = "text-gray-600 hover:text-gray-800 cursor-pointer";
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {labelPosition == 'L' || 'B' && <span>{label}&nbsp;&nbsp;</span>}
            <span className={className}>{children}</span>
            {labelPosition  == 'R' || 'B' && <span>&nbsp;&nbsp;{label}</span>}
        </div>
    );
}