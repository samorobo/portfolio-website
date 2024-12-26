// import { ElementType } from "react";

// interface TechIconProps {
//     component: ElementType; // The dynamic component type (like Image)
//     props: any; // The props specific to the dynamic component
// }

// export const TechIcon = ({ component: Component, props }: TechIconProps) => {
//     return <Component {...props} className="size-10" />;
// };


import { ElementType } from "react";

interface TechIconProps {
  component: ElementType; // Dynamic component type (like Image)
  [key: string]: any; // Spread props
}

export const TechIcon = ({ component: Component, ...props }: TechIconProps) => {
  return <>
   <Component {...props} className="size-10 fill-[url(#tech-icon-gradient)]" />;
   <svg className="size-0 absolute">
    <linearGradient id="tech-icon-gradient">
      <stop offset="0%" stopColor="rgb(110 231 183)" />
      <stop offset="100%" stopColor="rgb(56 189 248)" />
    </linearGradient>
   </svg>
   </>
};