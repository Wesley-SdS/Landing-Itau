import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Container({ children }: Props) {
    return (
        <div className="flex items-center justify-between w-full max-w-full px-[15px] mx-auto overflow-x-hidden">
            {children}
        </div>
    );
}
