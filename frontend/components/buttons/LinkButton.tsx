export const LinkButton = ({children,onClick}: { children: React.ReactNode,onClick: ()=> void }) => {
    return <div className="px-4 py-2 whitespace-nowrap cursor-pointer hover:bg-slate-200 font-light text-sm" onClick={onClick}>
        {children}
    </div>
}
