import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [status, setStatus] = useState<"idle" | "waiting" | "matched">("idle");
  const [roomId, setRoomId] = useState<number | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const userId = Math.floor(Math.random() * 10000);

  const requestMatch = async () => {
    setStatus("waiting");

    try {
      const res = await axios.post(
        `http://localhost:8000/chat/match/${userId}`,
      );

      if (res.data.status === "matched") {
        joinChat(res.data.room_id);
      } else {
        waitForMatch();
      }
    } catch (error) {
      console.error("매칭 요청 실패:", error);
      alert("서버 오류");
      setStatus("idle");
    }
  };

  const waitForMatch = () => {
    const eventSource = new EventSource(
      `http://localhost:8000/chat/wait/${userId}`,
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.status === "matched") {
        joinChat(data.room_id);
        eventSource.close();
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
    };
  };

  const joinChat = (roomId: number) => {
    setRoomId(roomId);
    setStatus("matched");

    const ws = new WebSocket(`ws://localhost:8000/ws/chat/${roomId}`);
    ws.onmessage = (event) => setMessages((prev) => [...prev, event.data]);
    setSocket(ws);
  };

  const sendMessage = () => {
    if (socket && message.trim()) {
      socket.send(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">랜덤 채팅</h1>

      {status === "idle" && (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={requestMatch}
        >
          매칭 시작
        </button>
      )}

      {status === "waiting" && <p className="mt-4 text-gray-500">매칭 중...</p>}

      {status === "matched" && roomId && (
        <div className="mt-4 w-96 p-4 border rounded">
          <p className="text-green-500">매칭 완료! 채팅방 ID: {roomId}</p>
          <div className="h-48 border overflow-y-auto mt-2 p-2">
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              className="border p-2 flex-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 ml-2"
              onClick={sendMessage}
            >
              전송
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
