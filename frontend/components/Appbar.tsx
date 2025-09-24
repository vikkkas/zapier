"use client"
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton";

export const Appbar = () => {
    const router = useRouter();
    return <div className="flex justify-between border-b p-3">
        <div className="flex flex-col cursor-pointer justify-center text-2xl font-extrabold" onClick={()=>{
            router.push('/')
        }}>
            Zapier
        </div>

        <div className="flex items-center gap-4"> 
            <LinkButton onClick={()=>{}}>Contact Sales</LinkButton>
            <LinkButton onClick={()=>{
                router.push('/login')
            }}>Log In</LinkButton>

            <PrimaryButton onClick={()=>{
                router.push('/signup')
            }}>Sign Up</PrimaryButton>
        </div>
    </div>
}   