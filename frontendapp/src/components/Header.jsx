import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between">
      <Link to="/" className="logo flex items-center gap-1">
        <svg
          viewBox="0 0 99 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-68 "
        >
          <g clipPath="url(#clip0_1_2)">
            <path
              d="M4.28639 124.417C-0.164817 122.594 0.000794396 124.996 0.000794396 62.2666V4.48917L1.93153 2.24455L3.86224 -6.10352e-05H49.2008H94.5393L96.47 2.24455L98.4008 4.48917V62.3999V120.311L96.4704 122.555L94.5401 124.8L50.2704 124.959C25.9221 125.047 5.22932 124.803 4.28639 124.417ZM67.3261 107.651C72.7882 105.587 78.0432 100.319 78.8312 96.1194C79.5967 92.0383 77.3778 86.0868 73.7854 82.5864C69.165 78.0841 65.7889 77.0419 53.6008 76.3552C41.494 75.673 36.1226 74.5778 33.6678 72.2907C31.6341 70.396 31.5692 69.0895 33.4006 66.9156L34.8006 65.2539L39.6006 66.9124C45.3963 68.9149 51.4644 68.6177 57.2913 66.0462C71.1917 59.9116 74.7822 41.937 64.2698 31.1111C61.5883 28.3496 61.148 27.5075 62.0112 26.7911C63.2561 25.7579 67.9141 25.5744 72.6378 26.3724C76.4434 27.0154 76.7082 26.558 77.0224 18.7999L77.2008 14.3999L74.0008 14.6327C67.1214 15.1336 61.252 18.6476 59.2593 23.4584L58.3207 25.7244L53.7608 24.1745C50.3683 23.0215 47.9718 22.7386 44.4008 23.0699C31.8055 24.2383 24.5423 30.2531 22.3112 41.3628C21.0577 47.6044 22.7938 53.2843 27.5836 58.6117L31.1748 62.606L27.4956 65.4725C20.4349 70.9734 17.9245 76.4112 20.3132 81.0303C21.0028 82.364 21.9572 83.5852 22.4339 83.7441C23.0514 83.9501 23.0563 84.6757 22.449 86.2685C19.5353 93.9321 23.0435 101.425 31.5848 105.782C40.2565 110.205 58.1011 111.139 67.3261 107.651ZM40.3841 99.7917C34.9201 97.8576 31.2387 95.0862 29.9103 91.9067C27.8967 87.0875 28.1643 86.7974 34.6008 86.8233C47.662 86.8758 60.8969 88.3038 64.5031 90.0495C69.9906 92.706 70.2677 96.9481 65.127 99.6C61.473 101.485 45.5168 101.609 40.3841 99.7917ZM44.7703 63.1774C37.1645 57.5661 31.9697 43.0152 34.38 34.0735C36.904 24.71 45.3749 23.2377 52.4567 30.9317C57.7312 36.6622 60.1016 42.9417 60.1342 51.2708C60.1569 57.4621 58.1636 62.8142 55.2508 64.3732C52.4358 65.8797 47.7007 65.3395 44.7703 63.1774Z"
              fill="#d81e5b"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="98.4008" height="124.977" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span className="font-bold text-xl">bookingoa.online</span>
      </Link>

      <div className="flex gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 relative top-1"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  );
};

export default Header;
