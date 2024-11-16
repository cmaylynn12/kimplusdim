import "./message.css";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="message">
      <img src="/cupid.png" height={200} width={200} />
      {message}
    </div>
  );
};

export default Message;
