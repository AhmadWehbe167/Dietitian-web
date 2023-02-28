import Image from "next/image";

export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="w-full flex gap-3 align-top">
      <Image
        className="w-6 h-6 object-contain relative top-1"
        src="/images/faq-section/question.png"
        alt="question"
        width={100}
        height={100}
      />
      <div className="w-full flex flex-col">
        <p className="text-secondary font-extrabold font-inter text-start text-xl">
          {question}
        </p>
        <p className="text-gray-500 font-inter text-base">{answer}</p>
      </div>
    </div>
  );
}
