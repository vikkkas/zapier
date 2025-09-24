"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { CheckFeature } from "@/components/CheckFeature";
import Input from "@/components/Input";
import axios from "axios";
import { useState } from "react";
import { BACKEDND_URL } from "../config";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div>
      <Appbar />
      <div className="flex pt-8 justify-center items-center px-24">
        <div className="flex-1 px-4">
          <div className="font-semibold text-3xl pb-4">
            Join Millions worldwide who automate their work using Zapier
          </div>
          <div className="pb-8 gap-2 flex flex-col text-sm text-gray-600">
            <CheckFeature label="Easy setup, no coding required" />
            <CheckFeature label="Connect 10,000+ apps" />
            <CheckFeature label="Free forever plan available" />
          </div>
        </div>
        <div className="flex-1 mt-18 px-4 max-w-4xl border border-gray-300 rounded-lg shadow-lg p-8">
          <Input
            label="Email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your email"
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <div className="pt-8">
            <PrimaryButton size="big" onClick={async() => {
              const res =await axios.post(`${BACKEDND_URL}/api/v1/user/signin`, {
                username:email,
                password,
              })
              localStorage.setItem("token", res.data?.token);
              router.push('/dashboard')
            }}>
              Login
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
