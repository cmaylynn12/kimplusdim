import "./message.css";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="message">
      <div className="submessage">{message}</div>
    </div>
  );
};

export default Message;
