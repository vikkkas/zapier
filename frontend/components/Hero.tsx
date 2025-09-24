"use client";
import { useRouter } from "next/navigation"
import { PrimaryButton } from "./buttons/PrimaryButton";
import { SecondaryButton } from "./buttons/SecondaryButton";
import { Feature } from "./Feature";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center pt- px-4">
      <div className="text-5xl font-semibold text-center mt-20 max-w-2xl mx-auto">
        Automate as fast as you can type
      </div>

      <div className="flex justify-center">
        <div className="text-xl text-center pt-8 max-w-2xl">
          AI gives you automation superpowers, and Zapier puts them to work.
          Pairing AI and Zapier helps you turn ideas into workflows and bots
          that work for you.
        </div>
      </div>

      <div className="flex justify-center items-center w-[60%] gap-4 mt-8">
        <PrimaryButton size="big" onClick={() => {router.push('/signup')}}>
          Get Started Free
        </PrimaryButton>
        <SecondaryButton onClick={() => {}} size="big">
          Contact Sales
        </SecondaryButton>
      </div>

      <div className="flex justify-center gap-2 mt-4 ">
        <Feature title={"Free Forever"} subtitle="for core features" />
        <Feature title={"More apps"} subtitle="than any other platforms" />
        <Feature title={"Cutting edge"} subtitle="AI features" />
      </div>
    </div>
  );
};
