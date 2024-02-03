import type { SVGProps } from "react";

export const CodeIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className="relative shrink-0 overflow-visible"
      style={{ transform: "translate(-19.52px, 0px)" }}
      width="111"
      height="88"
      viewBox="0 0 111 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.0442 19.2296L8.99431 30.7243L20.0289 54.9888"
        stroke="#5D4AF6"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88.1736 39.2949L99.2082 63.5594L75.1583 75.0541"
        stroke="#5D4AF6"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.6529 67.7902L73.718 20.5362"
        stroke="#5D4AF6"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ZeroIcon = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className=" shrink-0 overflow-visible"
      //   style={{ transform: "translate(-152.93px, -39.35px)" }}
      width="131"
      height="88"
      viewBox="0 0 131 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.4642 54.3108L90.5424 57.4234L89.9098 67.04L41.8316 63.9274L42.4642 54.3108ZM-19.7769 2.33332L91.9836 34.0419L89.3587 43.3154L-22.4018 11.6068L-19.7769 2.33332ZM25.734 -15.7878L100.169 18.1373L96.1879 26.9126L21.753 -7.01246L25.734 -15.7878Z"
        fill="#5D4AF6"
      />
    </svg>
  );
};
