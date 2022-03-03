import { useState } from 'react';
import { useObject } from "@liveblocks/react";
import { v4 as uuid } from 'uuid';
import QuestionItem from './QuestionItem';
import { useBroadcastEvent } from "@liveblocks/react";

function compare( a, b ) {
    if ( a[1].votes > b[1].votes ){
      return -1;
    }
    if ( a[1].votes < b[1].votes ){
      return 1;
    }
    return 0;
}

const Question = () => {
    const [question, setQuestion] = useState('');
    const questionData = useObject('questions');
    const broadcast = useBroadcastEvent();

    const askQuestion = () => {
        questionData.set(
            uuid(),
            { question, votes: 0 }
        );
        broadcast({ type: "question", value: question });
    }

    return (
        <div className="question-container">
            <div className="field-row">
                <input
                    id="text17"
                    type="text"
                    placeholder='Whats you question?'
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button
                    onClick={askQuestion}
                >
                    Ask!
                </button>
            </div>
            <div className="field-row questions-list">
                <ul>
                    {
                        questionData && Object.entries(questionData.toObject())
                            .sort(compare)
                            .map(([uuid, question]) => {
                                return (
                                    <QuestionItem
                                        uuid={uuid}
                                        question={question}
                                    />
                                )
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Question;
