import { useObject } from "@liveblocks/react";

const QuestionItem = ({ question, uuid }) => {
    const questionData = useObject('questions');

    const onUpVote = () => {
        questionData.set( 
            uuid, 
            {
                votes: question.votes + 1, 
                question: question.question 
            }
        );
    }

    return (
        <li key={uuid}>
            <span>
                {question.question}
            </span>
            <span>
                Votes: {question.votes}
            </span>
            <div>
                <button
                    onClick={onUpVote}
                >
                    Upvote
                </button>
            </div>
        </li>
    )
}

export default QuestionItem;