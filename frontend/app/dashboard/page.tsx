"use client";
import { Appbar } from "@/components/Appbar";
import { DarkButton } from "@/components/buttons/DarkButton";
import React, { useEffect, useState } from "react";
import { BACKEDND_URL } from "../config";
import { useRouter } from "next/navigation";
import { LinkButton } from "@/components/buttons/LinkButton";

interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionId: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: {
      id: string;
      name: string;
    };
  };
}

function useZaps() {
  const [loading, setLoading] = useState(false);
  const [zaps, setZaps] = useState<Zap[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BACKEDND_URL}/api/v1/zap`, {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setZaps(data);
        setLoading(false);
      });
  }, []);

  return { loading, zaps };
}

const Dashboard = () => {
  const { loading, zaps } = useZaps();
const router = useRouter();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-8">
        <div className="max-w-screen-lg w-full">
          <div className="flex justify-between px-8">
            <div className="text-xl font-bold">My Zaps</div>
            <DarkButton onClick={() => {
                router.push('/zap/create')
            }}>Create</DarkButton>
          </div>
        </div>
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <div className="flex justify-center">
          <ZapTable zaps={zaps} />
        </div>
      )}
    </div>
  );
};

function ZapTable({ zaps }: { zaps: Zap[] }) {
  const router = useRouter();
  return (
    <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
          <div className="flex-1">Name</div>
          <div className="flex-1">Last Edit</div>
          <div className="flex-1">Running</div>
          <div className="flex-1">Go</div>
      </div>
      {zaps.map((zap) => (
        <div className="flex border-y pt-4" key={zap.id}>
          <div className="flex-1">
            {zap.trigger.type.name} {zap.actions.map((x) => x.type.name + " ")}
          </div>
          <div className="flex-1">2023-10-10</div>
          <div className="flex-1">Yes</div>
          <div className="flex-1">
            <LinkButton
              onClick={() => {
                router.push(`/zap/${zap.id}`);
              }}
            >
              Go
            </LinkButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
