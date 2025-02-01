import { useEffect, useState, useCallback } from "react";
import getRandomEmoji from "./Hooks/useEmoji";

function App() {
  const [emoji, setEmoji] = useState("😀");
  const [loading, setLoading] = useState(false);

 
  const fetchEmoji = useCallback(async () => {
    if (loading) return; 
    setLoading(true);
    const newEmoji = await getRandomEmoji();
    setEmoji(newEmoji);
    setLoading(false);
  }, []);

  return (
    <div className="w-full bg-red-300 h-screen flex justify-center items-center">
      <div className="w-1/3 h-[25rem] bg-white rounded-xl shadow-red-700 shadow-xl 
        flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-slate-500 to-slate-800">
        <p className="text-3xl font-serif font-bold text-white">Random Emoji Generator</p>
        <span className="w-1/3 h-1/3 flex justify-center items-center hover:bg-white hover:bg-opacity-60 rounded-xl transition-all">
          <p className="text-8xl cursor-pointer" onClick={fetchEmoji}>
            {loading ? "⏳" : emoji}
          </p>
        </span>
      </div>
    </div>
  );
}

export default App;
