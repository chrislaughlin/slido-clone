import { useOthers } from "@liveblocks/react";
import Question from "./Question";
import { useEventListener } from "@liveblocks/react";

const MainContent = () => {
    
    useEventListener(({ connectionId, event }) => {
        if (event.type === "question") {
          alert('Someone asked a question!');
        }
      });
    
    return (
        <div>
            Hello Drunk World!
            <p>
                <ConnectedUsers />
            </p>
            <p>
                <Question/>
            </p>
        </div>
    )
}

function ConnectedUsers() {
    const others = useOthers();

    if (others.count === 0) {
        return "You’re the only one asking questions.";
    } else if (others.count === 1) {
        return "There is one other person here asking questions.";
    } else {
        return "There are " + others.count + " other people here asking questions.";
    }
}

export default MainContent;
