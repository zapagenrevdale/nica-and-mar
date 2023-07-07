import React, { useRef, useState } from "react";
import MusicalNoteIcon from "@heroicons/react/24/outline/MusicalNoteIcon";
import PlayCircleIcon from "@heroicons/react/24/outline/PlayCircleIcon";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // create state

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // toggle state
    }
  };

  return (
    <div className="fixed right-[5vw] bottom-[5vh] ">
      <div className="flex items-center space-x-2">
        <motion.div
          className="font-xs font-quickSand flex items-center justify-center bg-custom-brown/60 text-white shadow-sm rounded-l-full p-2 px-4 h-10 truncate overflow-hidden border-r-4 border-r-custom-brown"
          animate={{
            width: isPlaying ? ["0px", "250px"] : ["250px", "0px"],
            opacity: isPlaying ? 100 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
        >
          <MusicalNoteIcon className="h-4 w-4 mr-2" /> Pasilyo - SunKissed Lola
        </motion.div>

        <div>
          <audio ref={audioRef}>
            <source src="/music/pasilyo.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <button
            onClick={handlePlayPause}
            className="rounded-full border-white bg-custom-brown/60 border-4 p-2 w-16 h-16 text-white shadow-sm flex items-center justify-center"
          >
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }} // define keyframes from 0 to 360 degrees
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <MusicalNoteIcon className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  scale: [1, 1.1, 1, 1.1, 1], // similar to keyframes in CSS
                  rotate: [0, 5, -5, 5, 0], // rotation values to simulate wiggle
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              >
                <PlayCircleIcon className="h-9 w-9" />
              </motion.div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
