import { ReactNode } from 'react';
export function Body({ children }: { children: ReactNode }) {
    return <div className="py-10 flex-grow overflow-y-auto">
        <div className="max-w-lg mx-auto bg-slate-10 rounded-md p-100 space-y-6 mt-4">
            {children}
        </div>
    </div>
}