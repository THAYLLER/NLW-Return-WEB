import { useState } from 'react';
import bugImgUrl from '../../assets/imgs/bug.svg';
import emojiImgUrl from '../../assets/imgs/emoji.svg';
import ideaImgUrl from '../../assets/imgs/idea.svg';

import { FeedbackContentStep } from './steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImgUrl,
      alt: 'Imagem de um insento'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImgUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outros',
    image: {
      source: emojiImgUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypes | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div 
      className="
        bg-zinc-900 
        p-4 
        relative 
        rounded-2xl 
        mb-4 
        flex 
        flex-col 
        items-center 
        shadow-lg 
        w-[calc(100vw-2rem)]
        md:w-auto
      ">
        
        {
          feedbackSent ? (
            <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
          ): (
            <>
              {!feedbackType ? (
                <>
                  <FeedbackTypeStep OnFeedbackTypeChanged={setFeedbackType} />
                </>
              ) : (
                <FeedbackContentStep 
                  feedbackType={feedbackType}  
                  onFeedbackRestartRequested={handleRestartFeedback} 
                  onFeedbackSent={() => setFeedbackSent(true)}
                />
              )}
            </>
          )
        }
        <footer className="text-xs text-neutral-400" >
          Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        </footer>
      </div>
  )
}