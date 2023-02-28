import Question from "../question";
import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="mt-16 flex flex-col items-center relative bg-white">
      <Image
        className="absolute top-0 left-0 w-0 md:w-16 lg:w-20 xl:w-24 object-contain"
        src="/images/promise-section/left-vector.png"
        alt="promise-bg"
        width={100}
        height={100}
      />
      <Image
        className="absolute top-0 right-0 w-0 md:w-16 lg:w-20 xl:w-24 object-contain"
        src="/images/promise-section/right-vector.png"
        alt="promise-bg"
        width={100}
        height={100}
      />
      <h1 className="top-0 title px-8 md:px-20 z-20 text-secondary">
        Frequently Asked Questions
      </h1>
      <div className="w-full p-8 py-16 md:px-20 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-7">
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
        <Question
          question="This is an example question"
          answer="The answer to this question is a bit tricky but yes we are the best."
        />
      </div>
    </div>
  );
}
