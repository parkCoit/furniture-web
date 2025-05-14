import Chat from "@/components/common/Chat";

export interface AuthPageProps {}

const ChatPage = (props: AuthPageProps) => {
  return (
    <div className="p-4">
      <Chat />
    </div>
  );
};

export default ChatPage;
