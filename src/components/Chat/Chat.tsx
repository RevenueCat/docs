import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import CatIcon from "@site/static/img/cat-chat.svg";
import CatIconStatic from "@site/static/img/sprite-1.svg";
import { Textarea } from "../ui/textarea";
import { cn } from "../../lib/utils";
import { Spinner } from "../Spinner/Spinner";
import SmartLink from "../SmartLink/SmartLink";
import styles from "./item.styles.module.css";

function QuestionAsker() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const typingTimeoutRef = useRef(null);

  const handleAskQuestion = async () => {
    setLoading(true);
    setError(null);
    setAnswer("");

    try {
      // Example POST request
      const response = await fetch("http://localhost:8000/v1/rag/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      // Assuming the API returns the answer in data.answer
      setAnswer(data.answer);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    setIsTyping(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="border-none hover:cursor-pointer bg-transparent hover:shadow-lg shadow-none"
          >
            <CatIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <div className="grid py-4 mt-16 relative">
            <div className="flex flex-col items-center">
              <Textarea
                id="question"
                placeholder="Ask a question..."
                value={question}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="col-span-3 border-base-200 focus-visible:ring-primary focus-visible:ring-2 font-body"
              />
            </div>
            {question && !isTyping && (
              <CatIconStatic className="absolute -top-2 right-0 w-11 h-8" />
            )}
            {isTyping && !loading && !answer && (
              <div
                className={`${styles["image-animation"]} absolute -top-2 right-0`}
              ></div>
            )}
          </div>
          <Button
            type="submit"
            onClick={handleAskQuestion}
            disabled={!question || loading}
            className="w-full bg-primary border-none text-white hover:bg-primaryDark hover:cursor-pointer shadow font-semibold"
          >
            {loading ? (
              <span className="flex items-center gap-1">
                Asking... <Spinner />
              </span>
            ) : (
              "Ask CatGPT®"
            )}
          </Button>
          <div className="mt-8 size-full relative">
            <CatIcon
              className={cn(
                "absolute left-0 size-8 transition-all duration-300 delay-75",
                answer ? "opacity-100 -top-4" : "opacity-0 top-0"
              )}
            />
            <div className="py-4">
              {loading ? (
                <Spinner className="absolute top-1 left-5" />
              ) : (
                <ReactMarkdown
                  className="text-sm"
                  components={{
                    a: SmartLink,
                  }}
                >
                  {error ? error : answer}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default QuestionAsker;
