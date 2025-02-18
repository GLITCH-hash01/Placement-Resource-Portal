import React, { useEffect, useState } from "react";

export default function HeroAnimation() {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setArrow(true);
    }, 1000);
  }, []);
  return (
    <div className="min-w-96 h-full min-h-96 max-h-96 bg-primary rounded-2xl border border-black relative">
      <div className="w-full h-full overflow-hidden relative">
        <div
          className={
            " absolute bottom-14 right-18 -translate-x-170 transition-all duration-900 " +
            (arrow ? "translate-x-0" : "-translate-x-170")
          }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="60"
            viewBox="0 0 84 85"
            fill="none">
            <mask
              id="mask0_353_1886"
              maskType="luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="84"
              height="85">
              <path
                d="M83.6621 84.32L83.6621 0.925537L0.267662 0.925537L0.267662 84.32L83.6621 84.32Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_353_1886)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.6851 84.32L83.6621 42.6228L41.6851 0.925537L41.6851 42.0669L0.267662 0.925537L0.267662 84.32L41.6851 43.1786L41.6851 84.32Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none">
          <path
            d="M49.8403 29.4145C44.224 18.1726 25.3015 20.647 22.5984 32.9959C20.9673 40.4479 27.8441 45.6626 28.7325 52.6417H44.4969C44.9604 50.7758 45.9031 48.5564 46.5566 47.1921C47.9139 44.3587 49.8341 42.506 50.5628 39.3448C51.2566 36.337 51.176 32.0889 49.8403 29.4145Z"
            fill="black"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.4426 62.1519C28.438 59.9984 28.3325 57.8457 28.3697 55.6929C28.3845 54.8402 28.2387 53.7976 28.9767 53.2015C30.0542 52.3317 31.6566 52.2053 32.993 52.1728C35.4992 52.1131 38.024 52.134 40.5326 52.1394C41.6752 52.141 43.3799 51.9425 44.4093 52.5108C45.3892 53.0495 45.6372 54.5201 45.7481 55.5131C45.9589 57.4154 46.5217 61.6643 44.9062 63.1372C43.8884 64.0651 42.3016 64.2589 40.9992 64.4193C37.5426 64.8449 28.4473 64.7604 28.4426 62.1519Z"
            fill="white"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M37.6552 64.6035C37.6831 65.7756 37.697 66.9539 37.6048 68.1228"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3209 46.7114C11.5511 46.0626 12.8348 45.5285 14.0775 44.9083"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3209 21.4904C11.6938 22.3625 13.0069 23.3253 14.3829 24.1896"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M37.414 11.1602C37.366 9.43387 37.376 7.71991 37.4319 5.99432"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M58.6609 22.9183C60.3841 21.778 62.1586 20.7059 63.9113 19.6113"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M55.6551 46.4401C56.9838 47.6308 58.3179 48.8083 59.6039 50.0447"
            stroke="black"
            stroke-width="2.53043"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
