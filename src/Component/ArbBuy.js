// ArbBuy.jsx
import React, { useEffect, useRef, useState } from "react";

const ArbBuy = () => {

    const tabs = [
        { id: "van-tabs-4-0", label: "Quick buy" },
        { id: "van-tabs-4-1", label: "Watchlist" },
        { id: "van-tabs-4-2", label: "BANK" },
        { id: "van-tabs-4-3", label: "USDT" },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].label);
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabRefs = useRef([]);
    

  useEffect(() => {
  const index = tabs.findIndex((t) => t.label === activeTab);
  const currentTab = tabRefs.current[index];

  if (currentTab) {
    const { offsetLeft, offsetWidth } = currentTab;
    const underlineWidth = 20; // fixed underline width

    setUnderlineStyle({
      width: `${underlineWidth}px`,
      transform: `translateX(${offsetLeft + (offsetWidth - underlineWidth) / 2}px)`,
      backgroundColor: "rgb(0, 0, 0)",
      transitionDuration: "0.3s",
    });
  }
}, [activeTab, tabs]);



    return (
        <div id="app" data-v-app="">
            <div>
                <div data-v-1dea78b6="" className="container pt48">
                    {/* Navbar */}
                    <div
                        data-v-cdb55647=""
                        data-v-1dea78b6=""
                        className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar"
                    >
                        <div className="van-nav-bar__content">
                            <div className="van-nav-bar__left van-haptics-feedback">
                                <svg
                                    data-v-cdb55647=""
                                    width="11"
                                    height="18"
                                    viewBox="0 0 11 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        data-v-cdb55647=""
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                        fill="#9399A6"
                                    ></path>
                                </svg>
                            </div>
                            <div className="van-nav-bar__title van-ellipsis">
                                <span data-v-cdb55647="">Buy</span>
                            </div>
                            <div className="van-nav-bar__right van-haptics-feedback">
                                <div
                                    data-v-9b133d13=""
                                    data-v-cdb55647=""
                                    className="x-row x-row-between x-row-middle"
                                >
                                    <div
                                        data-v-9b133d13=""
                                        className="right x-row x-row-middle-center"
                                    >
                                        <img
                                            data-v-9b133d13=""
                                            className="refresh"
                                            src="https://arbpay.me/assets/refresh-4be8557e.svg"
                                        />
                                        <i data-v-9b133d13="" className="line"></i>
                                        <img
                                            data-v-9b133d13=""
                                            className="close"
                                            src="https://arbpay.me/assets/close-51d692b1.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div data-v-86a99fef="" data-v-1dea78b6="" className="x-arb">
                        <div data-v-86a99fef="">
                            <p data-v-86a99fef="" className="x-tc x-arb-tip mb12">
                                1INR = 1ARB
                            </p>
                            <div data-v-86a99fef="" className="van-tabs van-tabs--line">
                                <div className="van-tabs__wrap">
                                    <div
                                        role="tablist"
                                        className="van-tabs__nav van-tabs__nav--line"
                                        aria-orientation="horizontal"
                                        style={{ borderColor: "rgb(0, 0, 0)" }}
                                    >
                                        {tabs.map((tab, i) => (
                                            <div
                                                key={tab.id}
                                                id={tab.id}
                                                role="tab"
                                                ref={(el) => (tabRefs.current[i] = el)}
                                                tabIndex={activeTab === tab.label ? 0 : -1}
                                                aria-selected={activeTab === tab.label}
                                                className={`van-tab van-tab--line ${activeTab === tab.label ? "van-tab--active" : ""
                                                    }`}
                                                onClick={() => setActiveTab(tab.label)}
                                            >
                                                <span className="van-tab__text van-tab__text--ellipsis" style={{fontSize:'14px'}}>
                                                    {tab.label}
                                                </span>
                                            </div>
                                        ))}

                                        {/* underline */}
                                        <div className="van-tabs__line" style={underlineStyle}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Active Tab Content */}

                        <div data-v-86a99fef="" className="van-tabs__content" style={{ padding: "12px" }}>
                            {/* Quick buy tab */}
                            <div
                                data-v-86a99fef=""
                                id="van-tab-5"
                                role="tabpanel"
                                className="van-tab__panel"
                                tabIndex={-1}
                                aria-labelledby="van-tabs-4-0"
                                data-allow-mismatch="attribute"
                                style={{ display: activeTab === "Quick buy" ? "block" : "none" }}
                            >

                                <div data-v-86a99fef="" className="x-arb-quick">
                                    <div data-v-86a99fef="" className="item mb30"><label data-v-86a99fef="">You will
                                        pay</label>
                                        <div data-v-86a99fef="" className="inr x-row x-row-middle x-row-between">
                                            <p data-v-86a99fef="" className="pamount">Please enter the amount 100-50000
                                            </p>
                                            <div data-v-86a99fef="" className="x-row x-row-middle"><svg
                                                data-v-86a99fef="" className="mr4" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect data-v-86a99fef="" width="22" height="22" rx="11"
                                                    fill="#B75DC9"></rect>
                                                <path data-v-86a99fef=""
                                                    d="M15.0967 7.91113L14.6484 9.61621H6.36035L6.81738 7.91113H15.0967ZM10.8516 17.5L6.61523 12.4814L6.60645 10.9785H8.67188C9.15234 10.9785 9.54785 10.8848 9.8584 10.6973C10.1689 10.5098 10.4004 10.2578 10.5527 9.94141C10.7051 9.61914 10.7812 9.26172 10.7812 8.86914C10.7812 8.45898 10.7109 8.0957 10.5703 7.7793C10.4297 7.46289 10.2041 7.2168 9.89355 7.04102C9.58301 6.85937 9.16992 6.76855 8.6543 6.76855H6.36914L6.8877 4.70312H8.6543C9.70898 4.70312 10.5879 4.86133 11.291 5.17773C11.9941 5.49414 12.5215 5.95117 12.873 6.54883C13.2246 7.14062 13.4004 7.8584 13.4004 8.70215C13.4004 9.44043 13.2832 10.0879 13.0488 10.6445C12.8145 11.2012 12.4424 11.6611 11.9326 12.0244C11.4229 12.3818 10.752 12.6338 9.91992 12.7803L13.7344 17.377V17.5H10.8516ZM15.1143 4.70312L14.6572 6.39941H7.79297L8.25 4.70312H15.1143Z"
                                                    fill="white"></path>
                                            </svg> INR </div>
                                        </div>
                                    </div>
                                    <div data-v-86a99fef="" className="item"><label data-v-86a99fef="">You will
                                        receive</label>
                                        <div data-v-86a99fef="" className="arb x-row x-row-middle x-row-between">
                                            <p data-v-86a99fef="" className="amount">0.00</p>
                                            <div data-v-86a99fef="" className="x-row x-row-middle"><svg
                                                data-v-86a99fef="" className="mr4" width="22" height="22"
                                                viewBox="0 0 22 22" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect data-v-86a99fef="" width="22" height="22" rx="11"
                                                    fill="#FFC40B"></rect>
                                                <path data-v-86a99fef=""
                                                    d="M14.9001 16.5641H18L12.3005 5.43591H8.88343L4 16.5641H11.8988L12.9156 14.7299L11.6641 12.4642L10.7255 14.0603H8.00824L10.5756 8.40344L14.9001 16.5641Z"
                                                    fill="white"></path>
                                            </svg> ARB </div>

                                        </div>

                                    </div>

                                </div>

                                <div data-v-86a99fef="">
                                    <div data-v-86a99fef="" className="van-number-keyboard">
                                        <div className="van-number-keyboard__body">
                                            <div className="van-number-keyboard__keys">
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">1</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">2</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">3</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">4</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">5</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">6</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">7</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">8</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">9</div>
                                                </div>
                                                <div className="van-key__wrapper van-key__wrapper--wider">
                                                    <div role="button" tabindex="0" className="van-key">0</div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0" className="van-key">00</div>
                                                </div>
                                            </div>
                                            <div className="van-number-keyboard__sidebar">
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0"
                                                        className="van-key van-key--large van-key--delete"><svg
                                                            className="van-key__delete-icon" viewBox="0 0 32 22">
                                                            <path
                                                                d="M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z"
                                                                fill="currentColor"></path>
                                                        </svg></div>
                                                </div>
                                                <div className="van-key__wrapper">
                                                    <div role="button" tabindex="0"
                                                        className="van-key van-key--blue van-key--large">Buy</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* yaha apka pura Quick buy ka content rahega (You will pay / receive / keyboard) */}
                            </div>

                            {/* Watchlist tab */}
                            <div
                                data-v-86a99fef=""
                                id="van-tab-6"
                                role="tabpanel"
                                className="van-tab__panel"
                                tabIndex="-1"
                                aria-labelledby="van-tabs-4-1"
                                data-allow-mismatch="attribute"
                                style={{ display: activeTab === "Watchlist" ? "block" : "none" }}
                            >
  <div data-v-d4654350="" data-v-86a99fef="" className="x-buyList mt24">
                                        <div data-v-d4654350=""
                                            className="x-buyList-filter kyc x-row x-row-middle x-row-between mb24">
                                            <div data-v-d4654350="" className="x-row x-row-middle">
                                                <div data-v-d4654350="" className="x-row box">
                                                    <div data-v-d4654350="" className="item active">
                                                        <p data-v-d4654350="" className="txt">Secure UPI</p>
                                                    </div>
                                                    <div data-v-d4654350="" className="item">
                                                        <p data-v-d4654350="" className="txt">Quick UPI</p>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="ml10 x-row x-row-middle"><svg
                                                        data-v-d4654350="" width="20" height="20" viewBox="0 0 20 20"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle data-v-d4654350="" cx="10" cy="10" r="9.25"
                                                            fill="#99A1AC" fill-opacity="0.1" stroke="#99A1AC"
                                                            stroke-width="1.5"></circle>
                                                        <path data-v-d4654350=""
                                                            d="M10.1759 4.35205C11.2159 4.35205 12.0639 4.62405 12.7039 5.20005C13.3439 5.76005 13.6639 6.52805 13.6639 7.50405C13.6639 8.30405 13.4559 8.96005 13.0719 9.47205C12.9279 9.63205 12.4639 10.0641 11.6959 10.7361C11.4079 10.9761 11.1999 11.2481 11.0559 11.5361C10.8959 11.8561 10.8159 12.1921 10.8159 12.5761V12.8001H8.97594V12.5761C8.97594 11.9681 9.07194 11.4401 9.29594 11.0081C9.50394 10.5761 10.1279 9.90405 11.1679 8.97605L11.3599 8.75205C11.6479 8.40005 11.7919 8.01605 11.7919 7.61605C11.7919 7.08805 11.6319 6.67205 11.3439 6.36805C11.0399 6.06405 10.6079 5.92005 10.0639 5.92005C9.35994 5.92005 8.86394 6.12805 8.55994 6.57605C8.28794 6.94405 8.15994 7.47205 8.15994 8.14405H6.33594C6.33594 6.96005 6.67194 6.03205 7.37594 5.36005C8.06394 4.68805 8.99194 4.35205 10.1759 4.35205ZM9.88794 13.5841C10.2399 13.5841 10.5439 13.6961 10.7839 13.9201C11.0079 14.1441 11.1359 14.4321 11.1359 14.7841C11.1359 15.1361 11.0079 15.4401 10.7679 15.6641C10.5279 15.8881 10.2399 16.0001 9.88794 16.0001C9.53594 16.0001 9.24794 15.8721 9.00794 15.6481C8.76794 15.4241 8.65594 15.1361 8.65594 14.7841C8.65594 14.4321 8.76794 14.1441 9.00794 13.9201C9.24794 13.6961 9.53594 13.5841 9.88794 13.5841Z"
                                                            fill="#99A1AC"></path>
                                                    </svg></div>
                                            </div>
                                            <div data-v-d4654350="" className="filter">
                                                <p data-v-d4654350="" className="txt x-row sort-0">Sorting</p>
                                            </div>
                                        </div>
                                        <div data-v-d4654350="" className="x-buyList-list">
                                            <div data-v-d4654350="">
                                                <div data-v-d4654350="" className="item mb32" index="1" maximumamount="3000"
                                                    platformorder="C2C2025091708573106109" memberid="7692284">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="2" maximumamount="3000"
                                                    platformorder="C2C2025091708094805485" memberid="2330108">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="3" maximumamount="800"
                                                    platformorder="C2C2025091705145306269" memberid="3705972">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹800.00 <span
                                                                        data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +32.00</p>
                                                                    <p data-v-d4654350="">Limit 800-800</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="4" maximumamount="3500"
                                                    platformorder="C2C2025091707444709632" memberid="8721053">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,500.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +70.00</p>
                                                                    <p data-v-d4654350="">Limit 3500-3,500</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="5" maximumamount="3000"
                                                    platformorder="C2C2025091709434200616" memberid="2683990">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="6" maximumamount="2400"
                                                    platformorder="C2C2025091708243703651" memberid="8728180">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹2,400.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +48.00</p>
                                                                    <p data-v-d4654350="">Limit 2400-2,400</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="7" maximumamount="3000"
                                                    platformorder="C2C2025091708104407875" memberid="8727342">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="8" maximumamount="4000"
                                                    platformorder="C2C2025091709503304792" memberid="1629634">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹4,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +80.00</p>
                                                                    <p data-v-d4654350="">Limit 4000-4,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="9" maximumamount="3000"
                                                    platformorder="C2C2025091708003708979" memberid="8727581">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="10"
                                                    maximumamount="3500" platformorder="C2C2025091709390100338"
                                                    memberid="3695465">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,500.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +70.00</p>
                                                                    <p data-v-d4654350="">Limit 3500-3,500</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="11"
                                                    maximumamount="3000" platformorder="C2C2025091708171400109"
                                                    memberid="8678120">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="12"
                                                    maximumamount="3000" platformorder="C2C2025091705033208498"
                                                    memberid="4337758">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="13"
                                                    maximumamount="3000" platformorder="C2C2025091706560003868"
                                                    memberid="3078030">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="14"
                                                    maximumamount="3100" platformorder="C2C2025091707421104913"
                                                    memberid="8255439">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,100.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +62.00</p>
                                                                    <p data-v-d4654350="">Limit 3100-3,100</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-167d7264="" data-v-d4654350=""></div>
                                    </div>                            </div>

                            {/* Bank tab */}
                            <div
                                data-v-86a99fef=""
                                id="van-tab-7"
                                role="tabpanel"
                                className="van-tab__panel"
                                tabIndex="-1"
                                aria-labelledby="van-tabs-4-2"
                                data-allow-mismatch="attribute"
                                style={{ display: activeTab === "BANK" ? "block" : "none" }}
                            >
 <div data-v-d4654350="" data-v-86a99fef="" className="x-buyList mt24">
                                        <div data-v-d4654350=""
                                            className="x-buyList-filter x-row x-row-middle x-row-between mb24">
                                            <div data-v-d4654350="" className="x-row">
                                                <div data-v-d4654350="" className="item active">
                                                    <p data-v-d4654350="" className="txt">Default</p>
                                                </div>
                                                <div data-v-d4654350="" className="item">
                                                    <p data-v-d4654350="" className="txt">Large</p>
                                                </div>
                                                <div data-v-d4654350="" className="item">
                                                    <p data-v-d4654350="" className="txt">Small</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-d4654350="" className="x-buyList-list">
                                            <div data-v-d4654350="">
                                                <div data-v-d4654350="" className="item mb32" index="1" maximumamount="3000"
                                                    platformorder="C2C2025091708573106109" memberid="7692284">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="2" maximumamount="3000"
                                                    platformorder="C2C2025091708094805485" memberid="2330108">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="3" maximumamount="800"
                                                    platformorder="C2C2025091705145306269" memberid="3705972">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹800.00 <span
                                                                        data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +32.00</p>
                                                                    <p data-v-d4654350="">Limit 800-800</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="4" maximumamount="3500"
                                                    platformorder="C2C2025091707444709632" memberid="8721053">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,500.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +70.00</p>
                                                                    <p data-v-d4654350="">Limit 3500-3,500</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="5" maximumamount="3000"
                                                    platformorder="C2C2025091709434200616" memberid="2683990">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="6" maximumamount="2400"
                                                    platformorder="C2C2025091708243703651" memberid="8728180">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹2,400.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +48.00</p>
                                                                    <p data-v-d4654350="">Limit 2400-2,400</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="7" maximumamount="3000"
                                                    platformorder="C2C2025091708104407875" memberid="8727342">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="8" maximumamount="4000"
                                                    platformorder="C2C2025091709503304792" memberid="1629634">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹4,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +80.00</p>
                                                                    <p data-v-d4654350="">Limit 4000-4,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="9" maximumamount="3000"
                                                    platformorder="C2C2025091708003708979" memberid="8727581">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="10"
                                                    maximumamount="3500" platformorder="C2C2025091709390100338"
                                                    memberid="3695465">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,500.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +70.00</p>
                                                                    <p data-v-d4654350="">Limit 3500-3,500</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="11"
                                                    maximumamount="3000" platformorder="C2C2025091708171400109"
                                                    memberid="8678120">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="12"
                                                    maximumamount="3000" platformorder="C2C2025091705033208498"
                                                    memberid="4337758">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="13"
                                                    maximumamount="3000" platformorder="C2C2025091706560003868"
                                                    memberid="3078030">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,000.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +60.00</p>
                                                                    <p data-v-d4654350="">Limit 3000-3,000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                                <div data-v-d4654350="" className="item mb32" index="14"
                                                    maximumamount="3100" platformorder="C2C2025091707421104913"
                                                    memberid="8255439">
                                                    <div data-v-d4654350="" className="x-row x-row-between">
                                                        <div data-v-d4654350="" className="x-row x-row-middle">
                                                            <div data-v-d4654350=""
                                                                className="van-image van-image--round img"
                                                                 style={{ width: "34px", height: "34px" }} 
><img
                                                                    src="https://arbpay.me/assets/0-e04ebcda.jpg"
                                                                    className="van-image__img"
                                                                      style={{ objectFit: "cover" }} 
/></div>
                                                            <div data-v-d4654350="" className="ml10">
                                                                <div data-v-d4654350=""
                                                                    className="mb6 x-row x-row-middle amount">₹3,100.00
                                                                    <span data-v-d4654350=""
                                                                        className="ml10 x-row x-row-middle"><img
                                                                            data-v-d4654350="" className="paytype"
                                                                            src="https://arbpay.me/assets/1-56ddd21a.svg"/></span><img
                                                                        data-v-d4654350="" className="logo color2"
                                                                        src="https://arbpay.me/assets/icon2-59a868c3.svg"
                                                                       style={{ display: "none" }}/></div>
                                                                <div data-v-d4654350="" className="x-row">
                                                                    <p data-v-d4654350=""
                                                                        className="award x-row x-row-middle-center"><svg
                                                                            className="mr5" width="12" height="13"
                                                                            viewBox="0 0 12 13" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            data-v-d4654350="">
                                                                            <path
                                                                                d="M1.06299 6.22559H10.9373V10.3399C10.9373 11.2488 10.2005 11.9856 9.29156 11.9856H2.7087C1.7998 11.9856 1.06299 11.2488 1.06299 10.3399V6.22559Z"
                                                                                fill="#FF7D41" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="0.51416" y="3.75708"
                                                                                width="10.9714" height="2.46857"
                                                                                rx="0.548571" fill="#FF631B"
                                                                                data-v-d4654350=""></rect>
                                                                            <path
                                                                                d="M2.16013 1.15869C3.39442 1.15869 4.35442 1.98155 5.17727 2.80441C5.31442 3.35298 5.32426 3.49012 5.17727 3.76441C4.41599 3.76441 1.61586 3.75967 1.61586 3.75967C1.04814 3.7094 0.9302 3.05173 1.20445 2.51664C1.4787 1.98155 1.73571 1.15869 2.16013 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M9.83987 1.15869C8.60558 1.15869 7.64558 1.98155 6.82273 2.80441C6.68558 3.35298 6.67574 3.49012 6.82273 3.76441C7.58401 3.76441 10.3841 3.75967 10.3841 3.75967C10.9519 3.7094 11.0698 3.05173 10.7956 2.51664C10.5213 1.98155 10.2643 1.15869 9.83987 1.15869Z"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M4.76029 3.76463C3.999 3.76463 1.61586 3.75989 1.61586 3.75989C1.04814 3.70962 0.9302 3.05195 1.20445 2.51686C1.73317 1.48526 4.49585 3.35315 4.76029 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <path
                                                                                d="M7.23971 3.76463C8.001 3.76463 10.3841 3.75989 10.3841 3.75989C10.9519 3.70962 11.0698 3.05195 10.7956 2.51686C10.2668 1.48526 7.50415 3.35315 7.23971 3.76463Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="3.75708"
                                                                                width="2.19429" height="2.46857"
                                                                                fill="#FFCE3E" data-v-d4654350="">
                                                                            </rect>
                                                                            <path
                                                                                d="M5.17725 2.80438C5.17725 2.80438 5.67876 2.66724 6.0001 2.66724C6.32145 2.66724 6.82296 2.80438 6.82296 2.80438V3.75714H5.17725V2.80438Z"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </path>
                                                                            <rect x="4.90283" y="6.22559"
                                                                                width="2.19429" height="5.76"
                                                                                fill="#FFA53E" data-v-d4654350="">
                                                                            </rect>
                                                                        </svg> Reward +62.00</p>
                                                                    <p data-v-d4654350="">Limit 3100-3,100</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-v-d4654350="" className="x-row x-row-middle"><button
                                                                data-v-d4654350="" type="button"
                                                                className="van-button van-button--primary van-button--normal van-button--block van-button--round btn x-btn">
                                                                <div className="van-button__content"><span
                                                                        className="van-button__text">Buy</span></div>
                                                            </button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-167d7264="" data-v-d4654350=""></div>
                                    </div>                            </div>

                            {/* USDT tab */}
                            <div
                                data-v-86a99fef=""
                                id="van-tab-8"
                                role="tabpanel"
                                className="van-tab__panel"
                                tabIndex="-1"
                                aria-labelledby="van-tabs-4-3"
                                data-allow-mismatch="attribute"
                                style={{ display: activeTab === "USDT" ? "block" : "none" }}
                            >
                                 <div data-v-7c1a276d="" data-v-86a99fef="" className="x-usdt">
                        <div data-v-7c1a276d="" className="mt16">
                            <div data-v-7c1a276d="" className="x-row x-row-between x-row-middle mb8">
                                <div data-v-7c1a276d="" className="trc">Main Network:TRC-20</div>
                                <div data-v-7c1a276d="" className="usdtCurrency">1 USDT = 96 ARB</div>
                            </div>
                        </div>
                        <div data-v-7c1a276d="" className="x-usdt-content">
                            <div data-v-7c1a276d="" className="item">
                                <div data-v-7c1a276d="" className="x-row x-row-between x-row-middle">
                                    <p data-v-7c1a276d="">Deposit amount (minimum 10 USDT)</p>
                                    <div data-v-7c1a276d="" className="icon usdt x-row x-row-middle">USDT</div>
                                </div><input data-v-7c1a276d="" type="text"
                                    placeholder="Please enter the recharge amount"
                                    oninput="value=value.match(/\d+\.?\d{0,2}/,'')" maxlength="8"/>
                            </div>
                            <div data-v-7c1a276d="" className="item">
                                <div data-v-7c1a276d="" className="x-row x-row-between x-row-middle">
                                    <p data-v-7c1a276d="">Recharge quantity</p>
                                    <div data-v-7c1a276d="" className="icon arb">ARB</div>
                                </div><input data-v-7c1a276d="" type="text"
                                    placeholder="Please enter the recharge amount"
                                    oninput="value=value.match(/\d+\.?\d{0,2}/,'')" maxlength="10"/>
                            </div><button data-v-7c1a276d="" type="button"
                                className="van-button van-button--default van-button--normal van-button--block van-button--disabled btn x-btn-gray mt16"
                                disabled="">
                                <div className="van-button__content"><span
                                        className="van-button__text">Recharge</span></div>
                            </button>
                        </div>
                        <div data-v-7c1a276d="" className="x-usdt-rate mt40">
                            <div data-v-7c1a276d="" className="title x-row x-row-between">
                                <div data-v-7c1a276d="" className="icon arb guide">ARB Wallet Exchange Rate</div>
                            </div>
                            <p data-v-7c1a276d="">Please make sure that the amount of USDT paid is not less than the
                                minimum purchase value, otherwise you will not be able to buy coins</p>
                            <div data-v-7c1a276d="" className="line"></div>
                            <div data-v-7c1a276d="" className="title">
                                <div data-v-7c1a276d="" className="icon arb rate">ARB Wallet Quick Earning Guide</div>
                            </div>
                            <p data-v-7c1a276d="">You can use the ARB wallet to top up USDT to purchase ARB, and use ARB
                                to purchase USDT, and then earn rewards and rebates by buying and selling ARB on the
                                platform.</p>
                        </div>
                        <div data-v-7c1a276d="" className="x-usdt-list">
                            <div data-v-7c1a276d="" className="title x-row x-row-between">
                                <div data-v-7c1a276d="" className="lab">Recharge Record</div>
                                <div data-v-7c1a276d="" className="all">All Records &gt;</div>
                            </div>
                            <div data-v-7c1a276d="">
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">160</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-7">Completed</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">15360</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-09 14:08:55</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090914085406374 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">161</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-13">Payment Expired</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">15456</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-09 13:31:06</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090913310603034 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">99</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-7">Completed</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">9504</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-08 16:52:13</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090816521301832 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">99</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-13">Payment Expired</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">9504</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-08 16:20:26</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090816202602903 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">100</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-13">Payment Expired</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">9600</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-08 14:05:12</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090814051206746 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">111</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-7">Completed</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">10656</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-09-08 13:37:46</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025090813374507073 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">10.52</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-13">Payment Expired</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">999.4</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-08-25 17:58:11</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025082517581002398 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                                <div data-v-0d78e4a4="" className="item mb16">
                                    <div data-v-0d78e4a4="" className="head x-row x-row-between">
                                        <div data-v-0d78e4a4="" className="num"><span data-v-0d78e4a4="">10</span> USDT
                                        </div>
                                        <div data-v-0d78e4a4="" className="state state-13">Payment Expired</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt14"><label data-v-0d78e4a4=""
                                            className="lab">Quantity</label>
                                        <div data-v-0d78e4a4="" className="moeny"><span data-v-0d78e4a4="">940</span> ARB
                                        </div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Time</label>
                                        <div data-v-0d78e4a4="" className="time">2025-08-16 21:52:35</div>
                                    </div>
                                    <div data-v-0d78e4a4="" className="x-row x-row-between mt8"><label data-v-0d78e4a4=""
                                            className="lab">Order Number</label>
                                        <div data-v-0d78e4a4="" className="order x-row x-row-middle-center">
                                            UB2025081621523507672 <svg data-v-0d78e4a4="" className="ml5" width="10"
                                                height="12" viewBox="0 0 10 12" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path data-v-0d78e4a4="" fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                    fill="#9399A6"></path>
                                            </svg></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-3b3f438a="" data-v-7c1a276d=""></div>
                        <div data-v-0a29e36a="" data-v-7c1a276d=""></div>
                        <div data-v-9b42e670="" data-v-7c1a276d="">
                            <div data-v-167d7264="" data-v-9b42e670="" z-index="10000"></div>
                        </div>
                    </div> 
                           </div>
                        </div>


                        {/* baaki content untouched */}
                        <div data-v-167d7264="" data-v-86a99fef="" className="matchFail"></div>
                        <div data-v-124c1930="" data-v-86a99fef=""></div>
                        <div data-v-3b3f438a="" data-v-86a99fef=""></div>
                        <div data-v-0a29e36a="" data-v-86a99fef=""></div>
                        <div data-v-9b42e670="" data-v-86a99fef="">
                            <div data-v-167d7264="" data-v-9b42e670="" z-index="10000"></div>
                        </div>
                        <div data-v-167d7264="" data-v-86a99fef="" className="matchFail"></div>
                        <div data-v-167d7264="" data-v-86a99fef="" className="matchFail"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArbBuy;
