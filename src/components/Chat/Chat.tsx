import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import CatIcon from "@site/static/img/cat-chat.svg";
import { Loader2, LoaderPinwheel } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { cn } from '@site/src/lib/utils';
import { Spinner } from '../Spinner/Spinner';

function QuestionAsker() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAskQuestion = async () => {
    setLoading(true);
    setError(null);
    setAnswer('');

    try {
      // Example POST request
      const response = await fetch('http://localhost:8000/v1/rag/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
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

  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="border-red hover:cursor-pointer bg-transparent hover:shadow-lg"><CatIcon /></Button>
      </SheetTrigger>
      <SheetContent>
        <div className="grid py-4 mt-8">
          <div className="flex flex-col items-center">
            <Textarea id="question" placeholder="Ask a question..." value={question} onChange={(e) => setQuestion(e.target.value)} className="col-span-3" type="textarea"/>
          </div>
        </div>
        <Button type="submit" onClick={handleAskQuestion} disabled={!question || loading} className="w-full bg-red border text-white hover:bg-red hover:cursor-pointer shadow">{loading ? "Asking..." : 'Ask CatGPT®'}</Button>
        <div className="mt-8 size-full relative">
            <CatIcon className={cn("absolute left-0 -top-4 size-8", loading || answer ? "visible" : "invisible")}/>
            <div className="pt-4">
                {loading ? <Spinner className="ml-1" /> : <ReactMarkdown>{answer}</ReactMarkdown>}
            </div>
        </div>
      </SheetContent>
    </Sheet>
    </>
  );
}

export default QuestionAsker;
