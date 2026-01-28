import "./messagingHeader.css";
import { FaChevronLeft } from "react-icons/fa6";
import { IoCall, IoVideocam } from "react-icons/io5";

import { CONVERSATION_CONSTANTS } from "../helpers/constants";

export default function MessagingHeader(props) {
    /**
     * Handle Close button click based on the current conversation status.
     */
    function handleCloseButtonClick(evt) {
        if (evt) {
            if (props.conversationStatus === CONVERSATION_CONSTANTS.ConversationStatus.OPENED_CONVERSATION) {
                props.endConversation();
            } else if (props.conversationStatus === CONVERSATION_CONSTANTS.ConversationStatus.CLOSED_CONVERSATION || props.conversationStatus === CONVERSATION_CONSTANTS.ConversationStatus.NOT_STARTED_CONVERSATION) {
                props.closeMessagingWindow();
            }
        }
    }

    function generateCloseButtonTitle() {
        return `${props.conversationStatus === CONVERSATION_CONSTANTS.ConversationStatus.OPENED_CONVERSATION ? `End conversation` : `Close window`}`;
    }

    return (
        <div className="messagingHeader">
            <button className="messagingHeaderBackButton" onClick={handleCloseButtonClick} title={generateCloseButtonTitle()}>
                <FaChevronLeft className="messagingHeaderBackButtonIcon"/>
            </button>
            
            <div className="messagingHeaderContactInfo">
                <div className="messagingHeaderAvatar">
                    <div className="avatarPlaceholder">🤖</div>
                </div>
                <div className="messagingHeaderText">
                    <h2 className="messagingHeaderTitle">Agentforce Agent</h2>
                </div>
            </div>

            <button className="messagingHeaderActionButton">
                <IoVideocam className="messagingHeaderActionIcon"/>
            </button>
            <button className="messagingHeaderActionButton">
                <IoCall className="messagingHeaderActionIcon"/>
            </button>
        </div>
    )
}
