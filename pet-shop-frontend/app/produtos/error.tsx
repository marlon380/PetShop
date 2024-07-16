"use client";

import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-customBrown w-full flex justify-center items-center flex-col">
      <h2 className="section-title">Ocorreu um erro</h2>
      <SentimentDissatisfiedIcon className="w-32 h-16" />
    </div>
  );
}
