import { ethers } from "ethers";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import AdminMarketCard from "@/components/AdminMarketCard";
import AdminNavbar from "@/components/AdminNavbar";
import { predictionWorld3Address } from "@/config";
import PredictionWorld from "../../utils/abis/PredictionWorld3.json";

export default function Markets() {
    const [markets, setMarkets] = useState([]);

    const getMarkets = async () => {
        try {
            const { ethereum } = window;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const predictionWorldContract = new ethers.Contract(predictionWorld3Address, PredictionWorld.abi, signer);

            let marketCount = await predictionWorldContract.totalMarkets();
            let markets = [];

            for (let i = 0; i < marketCount; i++) {
                let market = await predictionWorldContract.markets(i);
                markets.push({
                    id: market.id,
                    question: market.info.question,
                    imageHash: market.info.creatorImageHash,
                    totalAmount: market.totalAmount,
                    totalYesAmount: market.totalYesAmount,
                    totalNoAmount: market.totalNoAmount,
                    timestamp: market.info.timestamp,
                    endTimestamp: market.info.endTimestamp
                });
            }
            setMarkets(markets);
        } catch (error) {
            console.error(`Error getting markets, ${error}`);
        }
    };

    useEffect(() => {
        getMarkets();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center h-full">
                <Head>
                    <title>Prediction World</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <AdminNavbar />
                <div className="w-full max-w-5xl m-auto">
                    <Link legacyBehavior href="/admin">
                        <a
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={() => {}}
                        >
                            Back
                        </a>
                    </Link>
                </div>

                <main className="w-full flex flex-row flex-wrap py-4 max-w-5xl pb-6">
                    {markets.map((market) => (
                        <div key={market.id} className="w-1/2 pr-2">
                            <AdminMarketCard id={market.id} title={market.question} totalAmount={market.totalAmount} />
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}
