// // ExaBackground with light mode signal transmission effect
// "use client";
// import { motion } from "motion/react";

// export default function ExaBackground({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/50">
//       {/* Signal Transmission Elements - Subtle for light mode */}
//       <div className="absolute inset-0">
//         {/* Pulsing concentric circles - very subtle */}
//         <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
//           <div className="absolute h-64 w-64 animate-pulse rounded-full border border-blue-100" />
//           <div
//             className="absolute h-40 w-40 animate-ping rounded-full border border-cyan-100"
//             style={{ animationDuration: "3s" }}
//           />
//           <div className="absolute h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-cyan-100 to-blue-100" />
//         </div>

//         {/* Right side signals */}
//         <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2">
//           <div
//             className="absolute h-80 w-80 animate-pulse rounded-full border border-blue-50"
//             style={{ animationDuration: "4s" }}
//           />
//         </div>

//         {/* Moving signal dots - subtle */}
//         <div className="absolute inset-0">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
//               initial={{
//                 x: Math.random() * 100 + "vw",
//                 y: Math.random() * 100 + "vh",
//                 opacity: 0,
//               }}
//               animate={{
//                 x: [null, Math.random() * 100 + "vw"],
//                 y: [null, Math.random() * 100 + "vh"],
//                 opacity: [0, 0.3, 0],
//               }}
//               transition={{
//                 duration: 4 + Math.random() * 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>

//         {/* Subtle grid background */}
//         <div
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage: `
//                             linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//                             linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
//                         `,
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Floating signal orbs */}
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={`orb-${i}`}
//             className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 shadow-sm"
//             style={{
//               left: `${20 + i * 30}%`,
//               top: `${30 + i * 20}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//             }}
//             transition={{
//               duration: 3 + i,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         {/* Animated connection lines */}
//         <svg className="absolute inset-0 h-full w-full">
//           <motion.path
//             d="M5%,40% C30%,30% 70%,50% 95%,60%"
//             stroke="url(#lightGradient)"
//             strokeWidth="1.5"
//             fill="none"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.15 }}
//             transition={{ duration: 2, delay: 0.5 }}
//           />
//           <motion.path
//             d="M10%,70% C40%,60% 60%,80% 90%,40%"
//             stroke="url(#lightGradient)"
//             strokeWidth="1.5"
//             fill="none"
//             strokeDasharray="5,5"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: 1, opacity: 0.1 }}
//             transition={{ duration: 2.5, delay: 1 }}
//           />
//           <defs>
//             <linearGradient
//               id="lightGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="0%"
//             >
//               <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
//               <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
//               <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Content container */}
//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// }


// ExaBackground with subtle grid and vertical gradient lines
"use client";
import { motion } from "motion/react";

export default function ExaBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/50">
      {/* Signal Transmission Elements - Subtle for light mode */}
      <div className="absolute inset-0">
        {/* Pulsing concentric circles - very subtle */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute h-64 w-64 animate-pulse rounded-full border border-blue-100" />
          <div
            className="absolute h-40 w-40 animate-ping rounded-full border border-cyan-100"
            style={{ animationDuration: "3s" }}
          />
          <div className="absolute h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-cyan-100 to-blue-100" />
        </div>

        {/* Right side signals */}
        <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2">
          <div
            className="absolute h-80 w-80 animate-pulse rounded-full border border-blue-50"
            style={{ animationDuration: "4s" }}
          />
        </div>

        {/* Moving signal dots - subtle */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
              initial={{
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
                opacity: 0,
              }}
              animate={{
                x: [null, Math.random() * 100 + "vw"],
                y: [null, Math.random() * 100 + "vh"],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical gradient lines on 2nd to last grid lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left side - 2nd to last grid line */}
          <motion.div
            className="absolute w-[2px] opacity-70 blur-sm"
            style={{
              background: "linear-gradient(to bottom, transparent, #06b6d4 20%, #3b82f6 50%, #06b6d4 80%, transparent)",
              left: "calc(80px * 2)", // 2nd grid line (0-based: 0, 80px, 160px)
              top: 0,
              height: "100%",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 1], // Pop quickly, then fade slowly
            }}
          />
          
          {/* Right side - 2nd to last grid line from right */}
          <motion.div
            className="absolute w-[2px] opacity-70 blur-sm"
            style={{
              background: "linear-gradient(to bottom, transparent, #06b6d4 20%, #3b82f6 50%, #06b6d4 80%, transparent)",
              right: "calc(80px * 2)", // 2nd grid line from right
              top: 0,
              height: "100%",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 1],
              delay: 5, // Start halfway through the cycle for alternating effect
            }}
          />
        </div>

        {/* Floating signal orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute h-6 w-6 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 shadow-sm"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated connection lines */}
        {/* the lines are too bright so lets make it blur */}
        <svg className="absolute inset-0 h-full w-full opacity-20 transition-opacity duration-1000 blur-sm">
          <motion.path
            d="M5%,40% C30%,30% 70%,50% 95%,60%"
            stroke="url(#lightGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M10%,70% C40%,60% 60%,80% 90%,40%"
            stroke="url(#lightGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2.5, delay: 1 }}
          />
          <defs>
            <linearGradient
              id="lightGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
}