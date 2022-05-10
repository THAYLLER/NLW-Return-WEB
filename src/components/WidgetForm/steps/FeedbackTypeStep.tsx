import { FeedbackTypes, feedbackTypes } from "..";
import { ClosetButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  OnFeedbackTypeChanged: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({OnFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <ClosetButton />
    </header>
    <div className="flex py-8 gap-2 w-full">
      {
        Object.entries(feedbackTypes).map(([key, value]) => (
          <button 
            key={key}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent houver:border-brand-500 focus:border-brand-500 focus:outline-none"
            type="button"
            onClick={() => OnFeedbackTypeChanged(key as FeedbackTypes)}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))
      }
    </div>
    </>
  )
}