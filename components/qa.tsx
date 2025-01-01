"use client";

import { useState } from "react";

// Define the type for each question object
interface Question {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function FAQSection() {
  // State to store questions, using the defined type 'Question'
  const [questions, setQuestions] = useState<Question[]>([
    { question: "Is this product durable?", answer: "Yes, it is made of high-quality materials.", isOpen: false },
    { question: "What is the warranty period?", answer: "The warranty period is 1 year.", isOpen: false },
  ]);

  const [newQuestion, setNewQuestion] = useState<string>("");

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQuestions([
        ...questions,
        { question: newQuestion, answer: "Answer coming soon!", isOpen: false },
      ]);
      setNewQuestion("");
    }
  };

  const toggleAnswer = (index: number) => {
    // Update the specific question by toggling the 'isOpen' state
    setQuestions(questions.map((q, i) => 
      i === index ? { ...q, isOpen: !q.isOpen } : q
    ));
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Questions & Answers</h2>
      <ul className="space-y-4">
        {questions.map((q, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
              <p className="font-semibold text-gray-700">{q.question}</p>
              <span className="text-blue-600">{q.isOpen ? "-" : "+"}</span>
            </div>
            {q.isOpen && <p className="text-gray-600 mt-2">{q.answer}</p>}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col space-y-2">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
        <button
          onClick={handleQuestionSubmit}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Submit Question
        </button>
      </div>
    </div>
  );
}

