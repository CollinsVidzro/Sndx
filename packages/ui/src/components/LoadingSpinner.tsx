// components/LoadingSpinner.tsx
import Image from "next/image";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  /** Whether the spinner should take up the full screen */
  fullScreen?: boolean;
  /** Display text below the spinner */
  text?: string;
  /** Size of the logo */
  size?: "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes */
  className?: string;
  /** Custom logo/image URL */
  logoUrl?: string;
  /** Delay before showing spinner (ms) to prevent flicker */
  delay?: number;
  /** Whether to show a backdrop with blur effect */
  withBackdrop?: boolean;
  /** Whether to show a subtle orbit animation around the logo */
  withOrbit?: boolean;
  /** Loading state variations */
  state?: "loading" | "success" | "error";
  /** Text to show for success state */
  successText?: string;
  /** Text to show for error state */
  errorText?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullScreen = true,
  text = "Loading...",
  size = "lg",
  className = "",
  logoUrl = "/favicon.png",
  delay = 0,
  withBackdrop = true,
  withOrbit = true,
  state = "loading",
  successText = "Success!",
  errorText = "Something went wrong",
}) => {
  const [show, setShow] = useState(delay === 0);

  const sizeClasses = {
    sm: { logo: 40, orbit: 56, text: "text-sm" },
    md: { logo: 64, orbit: 80, text: "text-base" },
    lg: { logo: 80, orbit: 100, text: "text-lg" },
    xl: { logo: 100, orbit: 120, text: "text-xl" },
  };

  const stateConfig = {
    loading: {
      text,
      logoAnimation: "animate-spin-slow",
      orbitAnimation: withOrbit ? "animate-spin" : "",
      color: "text-primary",
    },
    success: {
      text: successText,
      logoAnimation: "animate-pulse",
      orbitAnimation: "",
      color: "text-green-500",
    },
    error: {
      text: errorText,
      logoAnimation: "animate-pulse",
      orbitAnimation: "",
      color: "text-red-500",
    },
  };

  const currentState = stateConfig[state];
  const sizeConfig = sizeClasses[size];

  // Handle delay before showing spinner
  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [delay]);

  if (!show) return null;

  const spinnerContent = (
    <div className={`flex flex-col items-center justify-center space-y-6 ${className}`}>
      <div className="relative">
        {/* Orbit ring (optional) */}
        {withOrbit && state === "loading" && (
          <div
            className={`absolute inset-0 rounded-full border border-primary/20 ${currentState.orbitAnimation}`}
            style={{
              width: `${sizeConfig.orbit}px`,
              height: `${sizeConfig.orbit}px`,
              margin: `-${(sizeConfig.orbit - sizeConfig.logo) / 2}px`,
            }}
          />
        )}
        
        {/* Logo/Spinner */}
        <div className={`relative ${currentState.logoAnimation} ${currentState.color}`}>
          <Image
            src={logoUrl}
            alt="Loading"
            width={sizeConfig.logo}
            height={sizeConfig.logo}
            className="object-contain"
            priority
          />
          
          {/* Loading indicator dot for loading state */}
          {state === "loading" && withOrbit && (
            <div
              className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{ transform: 'translateX(-50%) translateY(-50%)' }}
            />
          )}
          
          {/* Success/Error overlay */}
          {state !== "loading" && (
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
              <div className={`h-8 w-8 rounded-full ${currentState.color} flex items-center justify-center`}>
                {state === "success" ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Text content */}
      <div className="text-center space-y-2">
        <p className={`font-medium ${sizeConfig.text} ${currentState.color}`}>
          {currentState.text}
        </p>
        
        {/* Optional subtitle for loading state */}
        {state === "loading" && (
          <p className="text-sm text-muted-foreground animate-pulse">
            Please wait...
          </p>
        )}
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${
          withBackdrop ? "bg-background/95 backdrop-blur-xs" : ""
        }`}
      >
        {spinnerContent}
      </div>
    );
  }

  return spinnerContent;
};

// For inline loading states
export const InlineLoadingSpinner: React.FC<Omit<LoadingSpinnerProps, 'fullScreen'>> = (props) => {
  return <LoadingSpinner {...props} fullScreen={false} />;
};

// For auth-specific loading
export const AuthLoadingSpinner: React.FC<Partial<LoadingSpinnerProps>> = (props) => {
  return (
    <LoadingSpinner
      fullScreen={true}
      text="Verifying session..."
      size="lg"
      withBackdrop={true}
      withOrbit={true}
      delay={300}
      {...props}
    />
  );
};