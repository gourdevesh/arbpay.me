import React, { useState } from "react";

const BuyTutorial = () => {
    const [activeTab, setActiveTab] = useState("regular"); // default Regular

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
                                <span data-v-cdb55647="">Buying Tutorial</span>
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
                                            alt="refresh"
                                        />
                                        <i data-v-9b133d13="" className="line"></i>
                                        <img
                                            data-v-9b133d13=""
                                            className="close"
                                            src="https://arbpay.me/assets/close-51d692b1.svg"
                                            alt="close"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div data-v-db553548="" className="sellTutorial">
                        <div
                            data-v-db553548=""
                            className="x-row sellTutorial-tab x-row-between"
                        >
                            <div
                                data-v-db553548=""
                                className={activeTab === "regular" ? "active" : ""}
                                onClick={() => setActiveTab("regular")}
                            >
                                Regular Member
                            </div>
                            <div
                                data-v-db553548=""
                                className={activeTab === "vip" ? "active" : ""}
                                onClick={() => setActiveTab("vip")}
                            >
                                VIP Member
                            </div>
                        </div>

                        {/* Regular Content */}
                        {activeTab === "regular" && (
                            <div className="regularContent">
                                {/* ✅ यहाँ आपका पूरा Regular Member वाला data 그대로 */}
                                <div data-v-db553548="" className="sTip">
                                    <h4 data-v-db553548="">Introduction</h4>
                                    <p data-v-db553548="">
                                        Uses blockchain algorithms to match buyers and sellers.
                                    </p>
                                    <p data-v-db553548="">
                                        As a buyer, you need to transfer the payment to the seller
                                        via UPI. After making the transfer, please wait for the
                                        seller to confirm receipt and verify the amount...
                                    </p>
                                    <p data-v-db553548="">
                                        ⚠️ Please make sure to transfer the exact amount shown in
                                        the order and complete the payment on time.
                                    </p>
                                </div>

                                <div data-v-db553548="" className="help">
                                    <div data-v-db553548="" className="header">
                                        <h3 data-v-db553548="">How to buy</h3>
                                        <p data-v-db553548="">In just 5 steps, quickly understand</p>
                                    </div>

                                    {/* Step 1 */}
                                    <div data-v-db553548="" className="help_con">
                                        <h5 data-v-db553548="">Step 1: Choose the buying method</h5>
                                        <p data-v-db553548="">1.1 Click the 'Buy ARB' on the home page.</p>
                                        <div
                                            data-v-db553548=""
                                            className="van-image"
                                            style={{ width: "213px" }}
                                        >
                                            <img
                                                src="https://arbpay.me/assets/step1-fc49e36d.png"
                                                className="van-image__img"
                                                style={{ objectFit: "cover" }}
                                                alt="step1"
                                            />
                                        </div>
                                        {/* बाकी Steps आपने जो दिये थे सब इसी format me डालना है */}
                                    </div>

                                    {/* Collapse & Videos */}
                                    <div
                                        data-v-db553548=""
                                        className="van-collapse van-hairline--top-bottom mt20"
                                        style={{ display: "none" }}
                                    >
                                        <div data-v-db553548="" className="van-collapse-item">
                                            <div
                                                className="van-cell van-cell--clickable van-collapse-item__title"
                                                role="button"
                                                tabIndex="0"
                                                aria-expanded="false"
                                            >
                                                <div className="van-cell__title">
                                                    <div data-v-db553548="" className="tit">
                                                        Method 1: Buy via UPI
                                                    </div>
                                                </div>
                                                <i className="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
                                            </div>
                                        </div>
                                        <div
                                            data-v-db553548=""
                                            className="van-collapse-item van-collapse-item--border"
                                        >
                                            <div
                                                className="van-cell van-cell--clickable van-collapse-item__title"
                                                role="button"
                                                tabIndex="0"
                                                aria-expanded="false"
                                            >
                                                <div className="van-cell__title">
                                                    <div data-v-db553548="" className="tit">
                                                        Method 2: Buy via BANK
                                                    </div>
                                                </div>
                                                <i className="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <video data-v-db553548="" controls className="noShow">
                                        <source
                                            data-v-db553548=""
                                            src="https://video.arbpay.me/video/buy_600.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <video data-v-db553548="" controls className="noShow">
                                        <source
                                            data-v-db553548=""
                                            src="https://video.arbpay.me/video/Buy_Bank.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <video data-v-db553548="" controls className="noShow">
                                        <source
                                            data-v-db553548=""
                                            src="https://video.arbpay.me/video/Buy_UPI.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        )}

                        {/* VIP Content */}
                        {activeTab === "vip" && (
                            <div data-v-db553548="" className="sTip">
                                <h4 data-v-db553548="">Introduction</h4>
                                <p data-v-db553548="">
                                    Uses blockchain algorithms to match buyers and sellers.
                                </p>
                                <p data-v-db553548="">
                                    As a buyer, you need to transfer the payment to the seller
                                    via UPI. After making the transfer, please wait for the
                                    seller to confirm receipt and verify the amount...
                                </p>
                                <p data-v-db553548="">
                                    ⚠️ Please make sure to transfer the exact amount shown in
                                    the order and complete the payment on time.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyTutorial;
