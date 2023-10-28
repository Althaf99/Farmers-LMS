import React from "react";

const ExpandIcon = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(1,-1)"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        transform="rotate(-180 12 12)"
        fill={props.color ? props.color : "#B5BDE9"}
      />
      <path
        d="M17.1486 13.7317C17.2296 13.6544 17.2749 13.5509 17.2749 13.4433C17.2749 13.3356 17.2296 13.2321 17.1486 13.1548V13.7317ZM17.1486 13.7317L17.1486 13.7317L17.1486 13.7317ZM17.2866 13.0101L17.2866 13.0101L17.2845 13.0081L12.0505 8.15694L11.9124 8.02894L11.7763 8.15908L6.70594 13.0082C6.58554 13.1209 6.51484 13.2763 6.51484 13.4419C6.51484 13.6076 6.58564 13.7632 6.7062 13.876C6.76511 13.9318 6.83462 13.9754 6.91021 14.005C6.98613 14.0347 7.06724 14.0498 7.14887 14.0498C7.23051 14.0498 7.31161 14.0347 7.38754 14.005C7.46349 13.9753 7.53324 13.9314 7.59228 13.8752L7.59229 13.8752L7.59385 13.8737L11.917 9.66797L16.3968 13.8766C16.397 13.8768 16.3971 13.8769 16.3972 13.877C16.4564 13.9332 16.5262 13.977 16.6022 14.0067C16.6784 14.0364 16.7597 14.0516 16.8416 14.0516C16.9234 14.0516 17.0048 14.0364 17.0809 14.0067C17.1571 13.9769 17.2271 13.933 17.2863 13.8766L17.2866 13.8764C17.4054 13.763 17.4749 13.608 17.4749 13.4433C17.4749 13.2785 17.4054 13.1235 17.2866 13.0101Z"
        fill="white"
        stroke="white"
        strokeWidth="0.4"
      />
    </svg>
  );
};

export default ExpandIcon;
