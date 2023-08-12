import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-slate-50 hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={handleSidebarToggle}
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div class="h-full  overflow-y-auto no-scrollbar bg-teal-900 text-sm">
          <div className="w-32 h-20 relative px-3 py-4">
            <img src="/desktop6364/Ellipse.png" alt="" />
            <div className="absolute top-10 px-2">
              <p className="self-center  text-xl font-semibold whitespace-nowrap text-white font-poppins">
                My Classroom
              </p>
            </div>
          </div>
          <ul className="space-y-1 text-base px-3 py-4 font-poppins">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50 "
              >
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3882 0H7.72574V6.76477L5.36638 5.31517L3.00702 6.76477V0H2.06327C1.56268 0 1.08259 0.203633 0.728614 0.566101C0.374641 0.928569 0.175781 1.42018 0.175781 1.93279V17.3951C0.175781 17.9077 0.374641 18.3993 0.728614 18.7618C1.08259 19.1243 1.56268 19.3279 2.06327 19.3279H13.3882C13.8888 19.3279 14.3689 19.1243 14.7229 18.7618C15.0768 18.3993 15.2757 17.9077 15.2757 17.3951V1.93279C15.2757 1.42018 15.0768 0.928569 14.7229 0.566101C14.3689 0.203633 13.8888 0 13.3882 0ZM9.61323 9.66395C9.98654 9.66395 10.3515 9.77731 10.6619 9.98969C10.9723 10.2021 11.2142 10.5039 11.357 10.8571C11.4999 11.2103 11.5373 11.5989 11.4645 11.9738C11.3916 12.3487 11.2119 12.6931 10.9479 12.9634C10.6839 13.2337 10.3476 13.4178 9.98147 13.4924C9.61533 13.567 9.23582 13.5287 8.89092 13.3824C8.54603 13.2361 8.25124 12.9884 8.04384 12.6705C7.83644 12.3527 7.72574 11.979 7.72574 11.5967C7.72574 11.0841 7.9246 10.5925 8.27858 10.2301C8.63255 9.86758 9.11264 9.66395 9.61323 9.66395ZM13.3882 17.3951H5.83825V16.4287C5.83825 15.1434 8.35805 14.4959 9.61323 14.4959C10.8684 14.4959 13.3882 15.1434 13.3882 16.4287V17.3951Z"
                    fill="white"
                  />
                </svg>

                <span class="ml-3">Courses</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
              >
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0142 8.70054C10.2476 8.79129 10.4748 8.89111 10.6959 9C10.917 9.10889 11.132 9.23291 11.3408 9.37205C11.2057 9.51724 11.0828 9.66849 10.9723 9.82578C10.8618 9.98307 10.7604 10.1525 10.6683 10.3339C10.1954 10.0315 9.69181 9.80158 9.15751 9.64429C8.6232 9.487 8.07354 9.40835 7.50853 9.40835C6.96808 9.40835 6.44606 9.47792 5.94246 9.61706C5.43886 9.75621 4.96904 9.94979 4.533 10.1978C4.09696 10.4459 3.70084 10.7483 3.34463 11.1053C2.98843 11.4622 2.68136 11.8554 2.42342 12.285C2.16548 12.7145 1.96588 13.1773 1.82463 13.6734C1.68338 14.1694 1.61275 14.6836 1.61275 15.216H0.433594C0.433594 14.4901 0.541069 13.7913 0.756019 13.1198C0.970969 12.4483 1.28111 11.8282 1.68645 11.2595C2.09178 10.6909 2.57081 10.1857 3.12354 9.74411C3.67627 9.30248 4.3027 8.95463 5.00282 8.70054C4.30884 8.25287 3.76839 7.69025 3.38148 7.01269C2.99457 6.33513 2.79805 5.58497 2.79191 4.76222C2.79191 4.12096 2.91473 3.51902 3.16039 2.9564C3.40605 2.39378 3.74076 1.90074 4.16452 1.47726C4.58828 1.05378 5.0888 0.721054 5.6661 0.479068C6.24339 0.237082 6.85754 0.116089 7.50853 0.116089C8.15952 0.116089 8.77059 0.237082 9.34175 0.479068C9.9129 0.721054 10.4134 1.05076 10.8433 1.46819C11.2732 1.88561 11.611 2.37866 11.8567 2.94732C12.1023 3.51599 12.2252 4.12096 12.2252 4.76222C12.2252 5.1615 12.176 5.5517 12.0778 5.93283C11.9795 6.31396 11.8321 6.67391 11.6356 7.01269C11.439 7.35147 11.2087 7.66303 10.9447 7.94736C10.6806 8.23169 10.3704 8.48275 10.0142 8.70054ZM3.97106 4.76222C3.97106 5.24619 4.06318 5.69689 4.24743 6.11432C4.43167 6.53174 4.68347 6.90077 5.00282 7.2214C5.32218 7.54203 5.69681 7.79309 6.12671 7.97458C6.55661 8.15607 7.01721 8.24682 7.50853 8.24682C7.9937 8.24682 8.45124 8.15607 8.88114 7.97458C9.31104 7.79309 9.68567 7.54506 10.005 7.23048C10.3244 6.9159 10.5792 6.54687 10.7696 6.12339C10.96 5.69992 11.0521 5.24619 11.046 4.76222C11.046 4.2843 10.9539 3.8336 10.7696 3.41012C10.5854 2.98665 10.3336 2.61762 10.0142 2.30304C9.69488 1.98846 9.31718 1.7374 8.88114 1.54986C8.4451 1.36232 7.98756 1.27157 7.50853 1.27762C7.01721 1.27762 6.55968 1.36837 6.13592 1.54986C5.71216 1.73135 5.33753 1.97938 5.01203 2.29396C4.68654 2.60854 4.43167 2.9806 4.24743 3.41012C4.06318 3.83965 3.97106 4.29035 3.97106 4.76222ZM17.5314 12.3122C17.5314 12.6268 17.4822 12.9323 17.384 13.2287C17.2857 13.5251 17.1383 13.8004 16.9418 14.0545V18.7006L14.5835 17.5391L12.2252 18.7006V14.0545C12.0348 13.8004 11.8904 13.5251 11.7922 13.2287C11.6939 12.9323 11.6417 12.6268 11.6356 12.3122C11.6356 11.9129 11.7123 11.5378 11.8659 11.1869C12.0194 10.8361 12.2282 10.5306 12.4923 10.2704C12.7564 10.0103 13.0696 9.80158 13.4319 9.64429C13.7943 9.487 14.1781 9.40835 14.5835 9.40835C14.9888 9.40835 15.3696 9.48397 15.7258 9.63521C16.082 9.78645 16.3921 9.99517 16.6562 10.2614C16.9203 10.5275 17.1322 10.8361 17.2918 11.1869C17.4515 11.5378 17.5314 11.9129 17.5314 12.3122ZM14.5835 10.5699C14.3378 10.5699 14.1075 10.6153 13.8926 10.706C13.6776 10.7967 13.4903 10.9208 13.3306 11.0781C13.1709 11.2353 13.045 11.4199 12.9529 11.6316C12.8608 11.8433 12.8147 12.0702 12.8147 12.3122C12.8147 12.5542 12.8608 12.781 12.9529 12.9928C13.045 13.2045 13.1709 13.389 13.3306 13.5463C13.4903 13.7036 13.6776 13.8276 13.8926 13.9184C14.1075 14.0091 14.3378 14.0545 14.5835 14.0545C14.8291 14.0545 15.0594 14.0091 15.2744 13.9184C15.4893 13.8276 15.6766 13.7036 15.8363 13.5463C15.996 13.389 16.1219 13.2045 16.214 12.9928C16.3061 12.781 16.3522 12.5542 16.3522 12.3122C16.3522 12.0702 16.3061 11.8433 16.214 11.6316C16.1219 11.4199 15.996 11.2353 15.8363 11.0781C15.6766 10.9208 15.4893 10.7967 15.2744 10.706C15.0594 10.6153 14.8291 10.5699 14.5835 10.5699ZM15.7626 16.8222V14.971C15.3941 15.1343 15.0011 15.216 14.5835 15.216C14.1658 15.216 13.7728 15.1343 13.4043 14.971V16.8222C13.6008 16.7254 13.7974 16.6316 13.9939 16.5409C14.1904 16.4501 14.3869 16.3503 14.5835 16.2414C14.78 16.3443 14.9765 16.4411 15.173 16.5318C15.3696 16.6226 15.5661 16.7194 15.7626 16.8222Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Leaderboard</span>
              </a>
            </li>
            <li >
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100/50"
              >
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.175781 22.4358V2.88024C0.175781 2.20801 0.413781 1.63235 0.889781 1.15324C1.36497 0.674939 1.9365 0.435791 2.60435 0.435791H14.7472C15.4151 0.435791 15.987 0.674939 16.463 1.15324C16.9382 1.63235 17.1758 2.20801 17.1758 2.88024V22.4358L8.67578 18.7691L0.175781 22.4358Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Book marks</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100/50"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.83973 0.706787C4.58031 0.706787 0.175781 4.48316 0.175781 9.25567C0.175781 11.5081 1.18604 13.5286 2.77761 15.0399C2.5837 15.5455 2.30905 16.0162 1.96436 16.4338C1.50708 16.9885 1.00186 17.5019 0.454549 17.9681C0.334505 18.0644 0.247312 18.1956 0.205003 18.3436C0.162694 18.4915 0.167354 18.649 0.218341 18.7942C0.269328 18.9394 0.364128 19.0652 0.489658 19.1543C0.615188 19.2433 0.76526 19.2912 0.919162 19.2913C2.56575 19.2913 3.74996 19.2727 4.82191 18.9895C5.78087 18.7353 6.60528 18.203 7.44679 17.4559C8.21247 17.6395 9.00269 17.8045 9.83973 17.8045C15.0992 17.8045 19.5037 14.0282 19.5037 9.25567C19.5037 4.48316 15.0992 0.706787 9.83973 0.706787ZM9.83973 2.19355C14.3929 2.19355 18.0169 5.40495 18.0169 9.25567C18.0169 13.1064 14.3929 16.3178 9.83973 16.3178C9.03019 16.3178 8.18943 16.178 7.42374 15.9691C7.3013 15.9384 7.17303 15.9393 7.05104 15.9718C6.92904 16.0043 6.81733 16.0673 6.72645 16.155C5.89015 16.9571 5.27389 17.331 4.45022 17.5488C4.0711 17.6492 3.33961 17.6254 2.8237 17.6655C2.92778 17.5481 3.02516 17.4856 3.12626 17.363C3.71056 16.6493 4.24356 15.8948 4.40413 15.0399C4.42625 14.9116 4.41427 14.7797 4.36939 14.6575C4.32451 14.5352 4.24831 14.4269 4.14841 14.3434C2.59103 13.0573 1.66254 11.2546 1.66254 9.25567C1.66254 5.40495 5.28652 2.19355 9.83973 2.19355ZM8.42285 5.09719C8.292 5.12656 8.17153 5.19078 8.0742 5.28304L6.95913 6.32898L7.95824 7.42026L8.84063 6.58396H10.6292L11.3265 7.37491V8.46694L9.42121 9.74407C9.31937 9.81342 9.23636 9.907 9.17966 10.0164C9.12295 10.1258 9.09432 10.2475 9.09635 10.3707V11.8575H10.5831V10.7885L12.4884 9.51139C12.5903 9.44197 12.6734 9.34827 12.7301 9.23874C12.7868 9.12922 12.8154 9.0073 12.8133 8.88398V7.0954C12.8123 6.91573 12.7463 6.7425 12.6274 6.60774L11.5123 5.35292C11.443 5.27308 11.3573 5.20897 11.2612 5.16487C11.165 5.12077 11.0606 5.0977 10.9548 5.09719H8.58491C8.53105 5.09129 8.47671 5.09129 8.42285 5.09719ZM9.09635 12.6009V14.0876H10.5831V12.6009H9.09635Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Ask Doubts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
              >
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8448 15.7539V7.35287H5.77648V15.7539H18.8448ZM18.8448 2.68563C19.3399 2.68563 19.8148 2.88232 20.1649 3.23243C20.515 3.58254 20.7117 4.05739 20.7117 4.55252V15.7539C20.7117 16.2491 20.515 16.7239 20.1649 17.074C19.8148 17.4241 19.3399 17.6208 18.8448 17.6208H5.77648C5.28135 17.6208 4.80649 17.4241 4.45638 17.074C4.10627 16.7239 3.90958 16.2491 3.90958 15.7539V4.55252C3.90958 4.05739 4.10627 3.58254 4.45638 3.23243C4.80649 2.88232 5.28135 2.68563 5.77648 2.68563H6.70993V0.818726H8.57683V2.68563H16.0444V0.818726H17.9113V2.68563H18.8448ZM15.6057 10.2092L11.4612 14.3537L8.95954 11.8521L9.949 10.8626L11.4612 12.3748L14.6162 9.21977L15.6057 10.2092ZM2.04268 19.4877H15.111V21.3546H2.04268C1.54755 21.3546 1.0727 21.1579 0.722584 20.8078C0.372472 20.4577 0.175781 19.9829 0.175781 19.4877V8.28632H2.04268V19.4877Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Events</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7506 14.6009V16.4733C13.7506 16.5981 13.7974 16.7073 13.891 16.8009C13.9847 16.8945 14.0939 16.9414 14.2187 16.9414C14.3435 16.9414 14.4528 16.8945 14.5464 16.8009C14.64 16.7073 14.6868 16.5981 14.6868 16.4733V14.6009H16.5592C16.684 14.6009 16.7932 14.5541 16.8869 14.4604C16.9805 14.3668 17.0273 14.2576 17.0273 14.1328C17.0273 14.0079 16.9805 13.8987 16.8869 13.8051C16.7932 13.7115 16.684 13.6647 16.5592 13.6647H14.6868V11.7923C14.6868 11.6675 14.64 11.5582 14.5464 11.4646C14.4528 11.371 14.3435 11.3242 14.2187 11.3242C14.0939 11.3242 13.9847 11.371 13.891 11.4646C13.7974 11.5582 13.7506 11.6675 13.7506 11.7923V13.6647H11.8782C11.7534 13.6647 11.6442 13.7115 11.5506 13.8051C11.4569 13.8987 11.4101 14.0079 11.4101 14.1328C11.4101 14.2576 11.4569 14.3668 11.5506 14.4604C11.6442 14.5541 11.7534 14.6009 11.8782 14.6009H13.7506ZM14.2187 18.8137C12.9236 18.8137 11.8196 18.3572 10.9065 17.4441C9.99335 16.531 9.53711 15.4272 9.53773 14.1328C9.53773 12.8377 9.99429 11.7336 10.9074 10.8205C11.8205 9.90741 12.9243 9.45117 14.2187 9.4518C15.5138 9.4518 16.6179 9.90835 17.531 10.8215C18.4441 11.7346 18.9003 12.8383 18.8997 14.1328C18.8997 15.4278 18.4431 16.5319 17.53 17.445C16.6169 18.3581 15.5132 18.8144 14.2187 18.8137ZM4.85676 5.70702H12.3463C12.6116 5.70702 12.8341 5.61714 13.0138 5.43739C13.1936 5.25764 13.2831 5.03545 13.2825 4.77082C13.2825 4.50557 13.1926 4.28306 13.0129 4.10331C12.8331 3.92356 12.611 3.834 12.3463 3.83463H4.85676C4.5915 3.83463 4.369 3.9245 4.18925 4.10425C4.0095 4.284 3.91994 4.50619 3.92056 4.77082C3.92056 5.03608 4.01044 5.25858 4.19019 5.43833C4.36994 5.61808 4.59213 5.70764 4.85676 5.70702ZM8.29728 16.9414H2.04817C1.53327 16.9414 1.09232 16.7579 0.725329 16.3909C0.358341 16.0239 0.175159 15.5833 0.175783 15.069V1.96224C0.175783 1.44733 0.359277 1.00638 0.726266 0.639392C1.09325 0.272403 1.53389 0.0892212 2.04817 0.0898453H15.1549C15.6698 0.0898453 16.1108 0.27334 16.4777 0.640328C16.8447 1.00732 17.0279 1.44795 17.0273 1.96224V8.23474C16.5748 8.0163 16.1183 7.85246 15.6576 7.74324C15.197 7.63402 14.7174 7.57941 14.2187 7.57941C14.0471 7.57941 13.887 7.58315 13.7384 7.59064C13.5899 7.59813 13.4379 7.61779 13.2825 7.64962C13.1421 7.61841 12.9861 7.59907 12.8144 7.59158C12.6428 7.58409 12.4867 7.58003 12.3463 7.57941H4.85676C4.5915 7.57941 4.369 7.66928 4.18925 7.84903C4.0095 8.02878 3.91994 8.25097 3.92056 8.5156C3.92056 8.78086 4.01044 9.00336 4.19019 9.18311C4.36994 9.36286 4.59213 9.45242 4.85676 9.4518H9.65476C9.3739 9.71705 9.12019 10.0057 8.89363 10.3178C8.66707 10.6298 8.46829 10.9653 8.29728 11.3242H4.85676C4.5915 11.3242 4.369 11.4141 4.18925 11.5938C4.0095 11.7736 3.91994 11.9958 3.92056 12.2604C3.92056 12.5256 4.01044 12.7481 4.19019 12.9279C4.36994 13.1076 4.59213 13.1972 4.85676 13.1966H7.73556C7.70435 13.3526 7.68469 13.5049 7.67658 13.6534C7.66847 13.802 7.66472 13.9618 7.66534 14.1328C7.66534 14.6477 7.71215 15.1276 7.80577 15.5726C7.89939 16.0176 8.06323 16.4739 8.29728 16.9414Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Notes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6045 7.28488C17.1916 7.28489 17.7649 7.46125 18.2485 7.79062C18.7321 8.12 19.1033 8.58686 19.3128 9.12943C19.5223 9.672 19.5603 10.2647 19.4218 10.8291C19.2834 11.3935 18.9749 11.9031 18.5373 12.2903V17.0271C18.5373 17.1086 18.5162 17.1888 18.4761 17.2599C18.4359 17.3311 18.378 17.391 18.3079 17.4338C18.2378 17.4766 18.1578 17.501 18.0755 17.5046C17.9932 17.5082 17.9113 17.4909 17.8376 17.4544L16.6045 16.8445L15.3714 17.4544C15.2977 17.4909 15.2158 17.5082 15.1335 17.5046C15.0512 17.501 14.9712 17.4766 14.9011 17.4338C14.8309 17.391 14.7731 17.3311 14.7329 17.2599C14.6928 17.1888 14.6717 17.1086 14.6717 17.0271V12.2903C14.2341 11.9031 13.9256 11.3935 13.7872 10.8291C13.6487 10.2647 13.6867 9.672 13.8962 9.12943C14.1057 8.58686 14.4769 8.12 14.9605 7.79062C15.4441 7.46125 16.0174 7.28489 16.6045 7.28488ZM17.5709 0.59314C18.0835 0.59314 18.5751 0.794574 18.9376 1.15313C19.3001 1.51168 19.5037 1.99799 19.5037 2.50506V6.32891C18.5732 5.63857 17.4222 5.30341 16.262 5.38498C15.1018 5.46654 14.0102 5.95935 13.1878 6.77293C12.3653 7.5865 11.8671 8.66625 11.7847 9.81393C11.7022 10.9616 12.041 12.1002 12.7389 13.0207V15.8885H2.10857C1.59596 15.8885 1.10435 15.6871 0.741882 15.3285C0.379414 14.97 0.175781 14.4837 0.175781 13.9766V2.50506C0.175781 1.99799 0.379414 1.51168 0.741882 1.15313C1.10435 0.794574 1.59596 0.59314 2.10857 0.59314H17.5709ZM5.97415 9.1968H4.04136C3.78506 9.1968 3.53925 9.29752 3.35802 9.4768C3.17678 9.65607 3.07497 9.89923 3.07497 10.1528C3.07497 10.4063 3.17678 10.6495 3.35802 10.8287C3.53925 11.008 3.78506 11.1087 4.04136 11.1087H5.97415C6.23046 11.1087 6.47626 11.008 6.6575 10.8287C6.83873 10.6495 6.94055 10.4063 6.94055 10.1528C6.94055 9.89923 6.83873 9.65607 6.6575 9.4768C6.47626 9.29752 6.23046 9.1968 5.97415 9.1968ZM9.83973 5.37295H4.04136C3.79505 5.37322 3.55813 5.46652 3.37902 5.63378C3.19992 5.80105 3.09213 6.02965 3.0777 6.27289C3.06326 6.51613 3.14327 6.75564 3.30136 6.94248C3.45945 7.12933 3.6837 7.24941 3.92829 7.27818L4.04136 7.28488H9.83973C10.086 7.28461 10.323 7.19131 10.5021 7.02404C10.6812 6.85678 10.789 6.62818 10.8034 6.38494C10.8178 6.1417 10.7378 5.90219 10.5797 5.71535C10.4216 5.5285 10.1974 5.40842 9.9528 5.37964L9.83973 5.37295Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">Certificates</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
              >
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1888 3.93323H12.9008C12.9008 2.89224 12.4851 1.89389 11.7451 1.1578C11.0052 0.42171 10.0016 0.00817871 8.95513 0.00817871C7.90868 0.00817871 6.90509 0.42171 6.16514 1.1578C5.42519 1.89389 5.00949 2.89224 5.00949 3.93323H1.72146C1.37265 3.93323 1.03812 4.07107 0.791467 4.31644C0.544817 4.5618 0.40625 4.89458 0.40625 5.24158V15.0542C0.40625 15.4012 0.544817 15.734 0.791467 15.9794C1.03812 16.2247 1.37265 16.3626 1.72146 16.3626H16.1888C16.5376 16.3626 16.8721 16.2247 17.1188 15.9794C17.3654 15.734 17.504 15.4012 17.504 15.0542V5.24158C17.504 4.89458 17.3654 4.5618 17.1188 4.31644C16.8721 4.07107 16.5376 3.93323 16.1888 3.93323ZM8.95513 1.31653C9.65276 1.31653 10.3218 1.59222 10.8151 2.08294C11.3084 2.57367 11.5856 3.23924 11.5856 3.93323H6.32471C6.32471 3.23924 6.60184 2.57367 7.09514 2.08294C7.58844 1.59222 8.2575 1.31653 8.95513 1.31653Z"
                    fill="white"
                  />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">
                  Placed Edflinger
                </span>
              </a>
            </li>
          </ul>
            <img src="./desktop6364/blobs.png" alt="blob" className=" h-1/5 w-full mt-5"/>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
