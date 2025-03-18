import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "Exchaero";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setProgress((index / fullText.length) * 100);
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    if (onComplete) {
                        onComplete();
                    }
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-900 animate-fade-in">
            {/* Typing Effect */}
            <div className="mb-4 text-5xl font-bold tracking-wide text-black">
                <span className="text-black">{text}</span>
                <span className="ml-1 animate-blink">|</span>
            </div>

            {/* Loading Bar */}
            <div className="relative w-[220px] h-2 bg-gray-300 rounded-full mt-6 overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-black shadow-[0_0_8px_#2563eb] transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Subtle Pulse Animation */}
            <p className="mt-4 text-sm text-gray-600 animate-pulse">Loading, please wait...</p>
        </div>
    );
};
