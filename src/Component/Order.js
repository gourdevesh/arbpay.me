import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("purchases"); // default tab
    const sales = [
        {
            id: "MS2025090512300012345",
            type: "Sell",
            amount: 200.0,
            utr: "1234567890",
            time: "2025-09-05 12:30:00",
            state: "Completed",
        },
    ];

    return (
        <div id="app" data-v-app="">
            <div>
                <div data-v-2d042b53="" className="container">
                    <div style={{ paddingLeft: "1%" }} data-v-b0a7af40="" data-v-2d042b53="" className="navbar x-row x-row-middle x-row-between">
                        <div data-v-b0a7af40="" className="x-row x-row-middle"><svg data-v-b0a7af40="" width="91" height="30"
                            viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path data-v-b0a7af40=""
                                d="M0.84 23.5L5.46 8.6H9.74L14.36 23.5H10.6L8.74 16.06C8.34 14.58 7.96 12.8 7.56 11.28H7.48C7.12 12.84 6.72 14.58 6.34 16.06L4.48 23.5H0.84ZM3.98 20.08V17.32H11.18V20.08H3.98ZM15.6031 23.5V8.6H21.0631C24.2431 8.6 26.8831 9.7 26.8831 13.3C26.8831 16.8 24.2431 18.26 21.0631 18.26H19.1831V23.5H15.6031ZM19.1831 15.44H20.7831C22.4831 15.44 23.4031 14.7 23.4031 13.3C23.4031 11.9 22.4831 11.44 20.7831 11.44H19.1831V15.44ZM23.6431 23.5L20.4231 17.34L22.8431 15L27.6431 23.5H23.6431Z"
                                fill="#F0B90B"></path>
                            <path data-v-b0a7af40=""
                                d="M30.5866 23.5L27.8866 8.6H31.5266L32.4666 15.4C32.6666 16.96 32.8666 18.52 33.0666 20.12H33.1466C33.4266 18.52 33.7266 16.94 34.0266 15.4L35.5466 8.6H38.5666L40.1066 15.4C40.4066 16.92 40.6666 18.52 40.9666 20.12H41.0666C41.2466 18.52 41.4466 16.94 41.6266 15.4L42.6066 8.6H45.9866L43.4066 23.5H38.9066L37.5666 17.02C37.3266 15.88 37.1266 14.68 36.9866 13.56H36.9066C36.7066 14.68 36.5266 15.88 36.3066 17.02L35.0066 23.5H30.5866ZM49.8678 23.78C47.7678 23.78 46.4878 22.22 46.4878 20.32C46.4878 17.92 48.3678 16.62 52.8078 16.14C52.7278 15.22 52.2478 14.68 51.0878 14.68C50.1878 14.68 49.2478 15.04 48.1078 15.68L46.8678 13.34C48.3678 12.44 49.9878 11.84 51.7678 11.84C54.7078 11.84 56.3678 13.48 56.3678 17.04V23.5H53.4678L53.2278 22.36H53.1278C52.1878 23.2 51.1278 23.78 49.8678 23.78ZM51.0878 21.02C51.8078 21.02 52.2878 20.68 52.8078 20.12V18.3C50.5878 18.58 49.8678 19.24 49.8678 20.04C49.8678 20.7 50.3478 21.02 51.0878 21.02ZM62.0367 23.78C59.5967 23.78 58.7967 22.18 58.7967 19.8V7.52H62.3567V19.92C62.3567 20.68 62.6967 20.9 62.9767 20.9C63.0967 20.9 63.1767 20.9 63.3767 20.86L63.7967 23.48C63.4167 23.64 62.8367 23.78 62.0367 23.78ZM68.3573 23.78C65.9173 23.78 65.1173 22.18 65.1173 19.8V7.52H68.6773V19.92C68.6773 20.68 69.0173 20.9 69.2973 20.9C69.4173 20.9 69.4973 20.9 69.6973 20.86L70.1173 23.48C69.7373 23.64 69.1573 23.78 68.3573 23.78ZM76.598 23.78C73.318 23.78 70.798 21.58 70.798 17.8C70.798 14.12 73.458 11.84 76.198 11.84C79.478 11.84 81.078 14.22 81.078 17.32C81.078 17.96 80.998 18.58 80.918 18.86H74.238C74.558 20.42 75.638 21.06 77.078 21.06C77.898 21.06 78.658 20.82 79.478 20.34L80.658 22.48C79.478 23.32 77.918 23.78 76.598 23.78ZM74.178 16.52H78.058C78.058 15.4 77.558 14.56 76.258 14.56C75.278 14.56 74.418 15.18 74.178 16.52ZM87.1409 23.78C84.2809 23.78 83.1209 21.96 83.1209 19.28V14.9H81.5809V12.26L83.3409 12.12L83.7409 9.1H86.6809V12.12H89.3609V14.9H86.6809V19.24C86.6809 20.5 87.2809 21 88.1209 21C88.4809 21 88.8809 20.88 89.1609 20.78L89.7209 23.36C89.1209 23.54 88.3009 23.78 87.1409 23.78Z"
                                fill="#29303A"></path>
                        </svg></div>
                        <div data-v-9b133d13="" data-v-b0a7af40="" className="x-row x-row-between x-row-middle">
                            <div data-v-9b133d13="" className="right x-row x-row-middle-center"><img data-v-9b133d13="" className="refresh"
                                src="https://arbpay.me/assets/refresh-4be8557e.svg" /><i data-v-9b133d13="" className="line"></i><img
                                    data-v-9b133d13="" className="close" src="https://arbpay.me/assets/close-51d692b1.svg" /></div>
                        </div>
                    </div>
                    <div data-v-239525cb="" data-v-2d042b53="" className="x-order pr15 pl15 pt10 main">
                        <div data-v-239525cb="" className="x-order-header">
                            <div className="x-order-tab x-row x-row-middle">
                                <div
                                    className={`item mr24 ${activeTab === "purchases" ? "active" : ""}`}
                                    onClick={() => setActiveTab("purchases")}
                                >
                                    <span style={{ fontSize: '16px' }} >My Purchases</span>
                                </div>
                                <div
                                    className={`item ${activeTab === "sales" ? "active" : ""}`}
                                    onClick={() => setActiveTab("sales")}
                                >
                                    <span style={{ fontSize: '16px' }}>My Sales</span>
                                </div>

                                <style>{`
        .item {
          cursor: pointer;
          padding: 8px 12px;
          transition: all 0.3s ease;
        }
        .item span {
          color: #555;
        }
        .item.active span {
          color: #F0B90B;
          font-weight: 600;
          border-bottom: 2px solid #F0B90B;
        }
      `}</style>
                            </div>
                            <div data-v-239525cb="" className="x-order-filter x-row">
                                <div data-v-239525cb="" className="item x-flex x-row x-row-middle-center mr12">All <svg data-v-239525cb=""
                                    className="ml10" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path data-v-239525cb=""
                                        d="M5.76799 6.5791C5.36821 7.05848 4.63179 7.05848 4.23201 6.5791L0.738901 2.39046C0.195782 1.7392 0.658881 0.75 1.50689 0.75L8.49311 0.750001C9.34112 0.750001 9.80422 1.7392 9.2611 2.39047L5.76799 6.5791Z"
                                        fill="#A2A7AC"></path>
                                </svg></div>
                                <div data-v-239525cb="" className="item x-flex x-row x-row-middle-center ml12">Choose Time <svg
                                    data-v-239525cb="" className="ml10" width="10" height="7" viewBox="0 0 10 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-v-239525cb=""
                                        d="M5.76799 6.5791C5.36821 7.05848 4.63179 7.05848 4.23201 6.5791L0.738901 2.39046C0.195782 1.7392 0.658881 0.75 1.50689 0.75L8.49311 0.750001C9.34112 0.750001 9.80422 1.7392 9.2611 2.39047L5.76799 6.5791Z"
                                        fill="#A2A7AC"></path>
                                </svg></div>
                            </div>
                        </div>
                        <div className="x-order-list">
                            <div role="feed" className="van-list" aria-busy="false">
                                {activeTab === "purchases" ? (
                                    <>
                                        <div data-v-239525cb="" className="item mb16" platformorder="MR2025090613171002483">
                                            <div data-v-239525cb="" className="x-row x-row-between head">
                                                <div data-v-239525cb="" className="type"><span data-v-239525cb="" onClick={()=>navigate("/order-complete")}>Buy</span></div>
                                                <div data-v-239525cb="" className="state state-13">Payment Timeout <span data-v-239525cb="" className="pl4"
                                                    style={{ display: "none" }}> / <i data-v-239525cb=""
                                                        className="van-badge__wrapper van-icon van-icon-arrow"></i></span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt12"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Amount</label>
                                                <div data-v-239525cb="" className="moeny"><span data-v-239525cb="">₹100.00</span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">UTR</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">-----</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Time</label>
                                                <div data-v-239525cb="" className="time">2025-09-06 13:17:10</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Order Number</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">MR2025090613171002483 <svg data-v-239525cb=""
                                                    className="ml5" width="10" height="12" viewBox="0 0 10 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path data-v-239525cb="" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                        fill="#9399A6"></path>
                                                </svg></div>
                                            </div>
                                        </div>
                                        <div data-v-239525cb="" className="item mb16" platformorder="MR2025090613171002483">
                                            <div data-v-239525cb="" className="x-row x-row-between head">
                                                <div data-v-239525cb="" className="type"><span data-v-239525cb=""  onClick={()=>navigate("/order-complete")}>Buy</span></div>
                                                <div data-v-239525cb="" className="state state-13">Payment Timeout <span data-v-239525cb="" className="pl4"
                                                    style={{ display: "none" }}> / <i data-v-239525cb=""
                                                        className="van-badge__wrapper van-icon van-icon-arrow"></i></span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt12"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Amount</label>
                                                <div data-v-239525cb="" className="moeny"><span data-v-239525cb="">₹100.00</span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">UTR</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">-----</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Time</label>
                                                <div data-v-239525cb="" className="time">2025-09-06 13:17:10</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Order Number</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">MR2025090613171002483 <svg data-v-239525cb=""
                                                    className="ml5" width="10" height="12" viewBox="0 0 10 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path data-v-239525cb="" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                        fill="#9399A6"></path>
                                                </svg></div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    sales.map((sale) => (
                                        <div data-v-239525cb="" className="item mb16" platformorder="MR2025090613171002483" >
                                            <div data-v-239525cb="" className="x-row x-row-between head">
                                                <div data-v-239525cb="" className="type" onClick={()=>navigate("/sell-detail-order")}><span data-v-239525cb="" >Sell</span></div>
                                                <div data-v-239525cb="" className="state state-13">Payment Timeout <span data-v-239525cb="" className="pl4"
                                                    style={{ display: "none" }}> / <i data-v-239525cb=""
                                                        className="van-badge__wrapper van-icon van-icon-arrow"></i></span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt12"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Amount</label>
                                                <div data-v-239525cb="" className="moeny"><span data-v-239525cb="">₹100.00</span></div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">UTR</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">-----</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Time</label>
                                                <div data-v-239525cb="" className="time">2025-09-06 13:17:10</div>
                                            </div>
                                            <div data-v-239525cb="" className="x-row x-row-between mt8"><label data-v-239525cb=""
                                                className="lab x-row x-row-middle-center">Order Number</label>
                                                <div data-v-239525cb="" className="order x-row x-row-middle">MR2025090613171002483 <svg data-v-239525cb=""
                                                    className="ml5" width="10" height="12" viewBox="0 0 10 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path data-v-239525cb="" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                        fill="#9399A6"></path>
                                                </svg></div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div data-v-2a5a3605="" data-v-239525cb=""></div>
                        <div data-v-167d7264="" data-v-239525cb=""></div>
                    </div>
                    <div data-v-118c888b="" role="tablist"
                        className="van-tabbar van-tabbar--fixed van-hairline--top-bottom van-safe-area-bottom tabbar">
                        <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
                            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
                            <div className="van-tabbar-item__text">
                                <div onClick={() => navigate("/")}
                                    data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                                        src="https://arbpay.me/assets/home-0e21c2c5.svg" className="img" /></div>
                                <p data-v-118c888b="">Home</p>
                            </div>
                        </div>
                        <div data-v-118c888b="" role="tab" className="van-tabbar-item van-tabbar-item--active" tabindex="0"
                            aria-selected="true">
                            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
                            <div className="van-tabbar-item__text">
                                <div onClick={() => navigate("/order")}
                                    data-v-118c888b="" className="icon x-row x-row-middle-center active"><img data-v-118c888b=""
                                        src="https://arbpay.me/assets/order-active-87ff0e60.svg" className="img active" /></div>
                                <p data-v-118c888b="">Order</p>
                            </div>
                        </div>
                        <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
                            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
                            <div className="van-tabbar-item__text">
                                <div data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                                    src="https://arbpay.me/assets/payment-4a3d3b4c.svg" className="img" /></div>
                                <p data-v-118c888b=""></p>
                            </div>
                        </div>
                        <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
                            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
                            <div className="van-tabbar-item__text">
                                <div onClick={() => navigate("/task")}
                                    data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                                        src="https://arbpay.me/assets/task-a7f58389.svg" className="img" /></div>
                                <p data-v-118c888b="">Rewards</p>
                            </div>
                        </div>
                        <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
                            <div className="van-badge__wrapper van-tabbar-item__icon"></div>
                            <div className="van-tabbar-item__text">
                                <div onClick={() => navigate("/main")}
                                    data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                                        src="https://arbpay.me/assets/user-b38ce39c.svg" className="img" /></div>
                                <p data-v-118c888b="">My</p>
                            </div>
                        </div>
                    </div>
                    <div data-v-058705f4="" data-v-118c888b=""></div>
                </div>
            </div>
        </div>
    );
};

export default Order;
