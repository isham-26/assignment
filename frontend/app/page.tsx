"use client";
import React from "react";
import ProgressCard from "@/app/components/ProgressCard";
import ExamCard from "@/app/components/ExamCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const progressCards = [
    {
      title: "GATE XE",
      description: "Fluid Mechanics, Food Technology, Math, General Aptitude.",
      progress: 50,
      imageUrl: "/carcol.webp",
    },
    {
      title: "CFTRI",
      description: "Central Food Technology research Institute 2025",
      progress: 50,
      imageUrl: "/docter.webp",
    },
  ];

  const liveTests = [
    {
      examType: "Full Length",
      examTitle: "FLT 1: Food Technology",
      liveStatus: "Will be live in 2 days",
      details: ["100 Questions", "100 Marks", "60 Min", "English"],
      syllabusLink: "#",
    },
    {
      examType: "Full Length",
      examTitle: "FLT 1: Food Technology",
      liveStatus: "Live",
      details: ["100 Questions", "100 Marks", "60 Min", "English"],
      syllabusLink: "#",
      buttonLabel: "Start Test",
      onButtonClick: () => alert("Starting test..."),
    },
  ];

  const reattemptTests = [
    {
      examType: "Full Length",
      examTitle: "FLT 1: Food Technology",
      details: ["100 Questions", "100 Marks", "60 Min", "English"],
      syllabusLink: "#",
      buttonLabel: "Reattempt",
      extraInfo: "Score: 86/100 | Rank: 90",
      onButtonClick: () => alert("Reattempt test..."),
    },
    {
      examType: "Full Length",
      examTitle: "FLT 1: Food Technology",
      details: ["100 Questions", "100 Marks", "60 Min", "English"],
      syllabusLink: "#",
      buttonLabel: "Reattempt",
      extraInfo: "Score: 50/100 | Rank: 150",
      onButtonClick: () => alert("Reattempt test..."),
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 w-full fixed">
      {/* Static Sidebar */}
      <Sidebar />

      {/* Scrollable Main Content */}
      <main className="md:ml-24 ml-16 overflow-y-auto p-3 scrollbar-hide">
        <h1 className="text-xl font-semibold mb-6 text-center md:text-left">My Test Series</h1>
        <div className="flex flex-col md:flex-row md:gap-10 gap-5">

        {/* Progress Cards in Column Order */}
        <div className="flex flex-col gap-4">
          {progressCards.map((card, index) => (
            <ProgressCard key={index} {...card} />
          ))}
        </div>
        

        {/* Live Tests */}
        <div className="bg-white md:p-5 p-2 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Live Test</h2>
          <div className="flex flex-col gap-3">
            {liveTests.map((test, index) => (
              <ExamCard key={index} {...test} />
            ))}
          </div>

          {/* Reattempt Section */}
          <h2 className="text-lg font-semibold mb-4">
            Reattempt to perform better
          </h2>
          <div className="space-y-4">
            {reattemptTests.map((test, index) => (
              <ExamCard key={index} {...test} />
            ))}
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}