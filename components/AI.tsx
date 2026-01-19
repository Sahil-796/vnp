"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { Send, ArrowUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

export function ExpandableChatDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message to the chat
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: userMessage,
        sender: "user",
      },
    ]);

    setIsLoading(true);

    try {
      // Chat History: Maintain a conversation window of the last 5 messages
      // This provides context for more natural, coherent conversations
      // while keeping token usage reasonable
      const currentMessages = [
        ...messages,
        {
          id: Date.now(),
          content: userMessage,
          sender: "user",
        },
      ];

      // Take the last 5 messages (exclude the initial greeting if more than 5)
      const recentMessages = currentMessages.slice(-5);

      // Format messages for API (convert to role-based format)
      const formattedMessages = recentMessages
        .filter((msg) => msg.sender !== "ai" || msg.id !== 1) // Exclude initial greeting
        .map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.content,
        }));

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: formattedMessages }),
      });

      const data = await response.json();
      const aiResponse =
        data.response || "Sorry, I couldn't generate a response.";

      // Add AI response immediately to the chat
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: aiResponse,
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error calling AI API:", error);
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          content: "Sorry, there was an error processing your request.",
          sender: "ai",
        },
      ]);
    }
  };

  return (
    <>
      <ExpandableChat
        size="lg"
        position="bottom-right"
        icon={
          <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
            <Image
              src="/ai-avatar.png"
              alt="AI Assistant"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        }
      >
        <ExpandableChatHeader className="flex-col text-center justify-center gap-1">
          <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-2 shadow-md">
            <Image
              src="/ai-avatar.png"
              alt="AI Assistant"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-semibold">Pathfinder</h1>
          <p className="text-sm text-muted-foreground">
            Ask me anything about the company
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody ref={chatBodyRef}>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                variant={message.sender === "user" ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src={
                    message.sender === "user"
                      ? "/user-avatar.png"
                      : "/ai-avatar.png"
                  }
                  fallback={message.sender === "user" ? "US" : "AI"}
                />
                <ChatBubbleMessage
                  variant={message.sender === "user" ? "sent" : "received"}
                  className={
                    message.sender === "user" ? "rounded-3xl" : "rounded-3xl"
                  }
                >
                  {message.sender === "ai" ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className="mb-3 last:mb-0 leading-relaxed whitespace-pre-wrap wrap-break-word">
                              {children}
                            </p>
                          ),
                          ul: ({ children }) => (
                            <ul className="mb-3 ml-5 list-disc space-y-1.5 leading-relaxed">
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="mb-3 ml-5 list-decimal space-y-1.5 leading-relaxed">
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="pl-1 leading-relaxed">{children}</li>
                          ),
                          code: ({ node, ...props }) => {
                            const isInline =
                              !node?.position ||
                              typeof props.children === "string";
                            return isInline ? (
                              <code className="bg-muted/60 px-1.5 py-0.5 rounded text-sm font-mono wrap-break-word">
                                {props.children}
                              </code>
                            ) : (
                              <code className="block bg-muted/60 p-2 rounded text-sm font-mono overflow-x-auto whitespace-pre">
                                {props.children}
                              </code>
                            );
                          },
                          pre: ({ children }) => (
                            <pre className="bg-muted/60 p-3 rounded-lg my-3 overflow-x-auto">
                              {children}
                            </pre>
                          ),
                          h1: ({ children }) => (
                            <h1 className="text-lg font-bold mb-2.5 mt-4 first:mt-0 leading-tight">
                              {children}
                            </h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-base font-bold mb-2 mt-3 first:mt-0 leading-tight">
                              {children}
                            </h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-sm font-bold mb-1.5 mt-2 first:mt-0 leading-tight">
                              {children}
                            </h3>
                          ),
                          a: ({ children, href }) => (
                            <a
                              href={href}
                              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors wrap-break-word"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {children}
                            </a>
                          ),
                          strong: ({ children }) => (
                            <strong className="font-semibold text-foreground">
                              {children}
                            </strong>
                          ),
                          em: ({ children }) => (
                            <em className="italic">{children}</em>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-muted-foreground/30 pl-4 my-3 italic text-muted-foreground">
                              {children}
                            </blockquote>
                          ),
                          hr: () => (
                            <hr className="my-4 border-muted-foreground/20" />
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap wrap-break-word">
                      {message.content}
                    </div>
                  )}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  src="/ai-avatar.png"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading className="rounded-3xl" />
              </ChatBubble>
            )}
            <div ref={messagesEndRef} />
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border bg-background focus-within:ring-2 focus-within:ring-ring transition-all"
          >
            <div className="flex items-center gap-2 p-2">
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-12 resize-none rounded-2xl bg-background border-0 p-3 shadow-none focus-visible:ring-0 flex-1"
              />
              <Button
                type="submit"
                size="icon"
                className="h-12 w-12 rounded-full shrink-0 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !input.trim()}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
    </>
  );
}
