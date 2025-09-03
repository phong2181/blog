import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoWrapperProps {
  src: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({
  src,
  title,
  description,
  thumbnail,
  className = '',
  autoPlay = false,
  controls = true
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden ${className}`}>
      <div className="relative group">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-auto max-h-[500px] object-cover"
          poster={thumbnail}
          autoPlay={autoPlay}
          muted={isMuted}
          onClick={togglePlay}
        />
        
        {/* Custom Controls */}
        {controls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                
                <div className="text-white text-sm">
                  {videoRef.current?.duration && (
                    `${Math.floor(videoRef.current.currentTime)} / ${Math.floor(videoRef.current.duration)}s`
                  )}
                </div>
              </div>
              
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-600 h-1 rounded mt-2">
              <div 
                className="bg-blue-500 h-1 rounded transition-all"
                style={{
                  width: videoRef.current ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : '0%'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {(title || description) && (
        <div className="p-4">
          {title && (
            <h3 className="text-white text-lg font-semibold mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-300 text-sm">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoWrapper;