// Sell.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Sell = () => {
    const navigate = useNavigate()
  return (
   <div id="app" data-v-app="">
        <div>
            <div data-v-1dea78b6="" class="container pt48">
                <div data-v-cdb55647="" data-v-1dea78b6=""
                    class="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
                    <div class="van-nav-bar__content">
                        <div class="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                    fill="#9399A6"></path>
                            </svg></div>
                        <div class="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Sell</span></div>
                        <div class="van-nav-bar__right van-haptics-feedback">
                            <div data-v-9b133d13="" data-v-cdb55647="" class="x-row x-row-between x-row-middle">
                                <div data-v-9b133d13="" class="right x-row x-row-middle-center"><img data-v-9b133d13=""
                                        class="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg"/><i
                                        data-v-9b133d13="" class="line"></i><img data-v-9b133d13="" class="close"
                                        src="https://arbpay.me/assets/close-51d692b1.svg"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-6a7cbe8e="" class="sell">
                    <div data-v-6a7cbe8e="" class="banner">
                        <div data-v-6a7cbe8e="" class="left">
                            <h3 data-v-6a7cbe8e="">ARB Selling Rules</h3><span data-v-6a7cbe8e="">please read the
                                rules</span>
                        </div>
                    </div>
                    <div data-v-6a7cbe8e="" class="amount">
                        <div data-v-6a7cbe8e="" class="item">
                            <div data-v-6a7cbe8e="" class="footer">Available Balance</div>
                            <div data-v-6a7cbe8e="" class="head">422.70 <span data-v-6a7cbe8e="">ARB</span></div>
                        </div>
                        <div data-v-6a7cbe8e="" class="item">
                            <div data-v-6a7cbe8e="" class="footer">Sell Balance</div>
                            <div data-v-6a7cbe8e="" class="head">0.00 <span data-v-6a7cbe8e="">ARB</span></div>
                        </div>
                        <div data-v-6a7cbe8e="" class="item">
                            <div data-v-6a7cbe8e="" class="footer">In Progress</div>
                            <div data-v-6a7cbe8e="" class="head">0.00 <span data-v-6a7cbe8e="">ARB</span></div>
                        </div>
                    </div>
                    <div data-v-6a7cbe8e="" class="container">
                        <div data-v-6a7cbe8e="" class="boxA">
                            <p data-v-6a7cbe8e="" class="title">Sell ARB</p>
                            <p data-v-6a7cbe8e="" class="count">0/10</p>
                        </div>
                        <div data-v-6a7cbe8e="" class="tip">sell orders can exist simultaneously</div>
                        <div data-v-6a7cbe8e="" class="operate">
                            <div data-v-6a7cbe8e=""   style={{ cursor: "pointer" }} onClick={()=>navigate("/collection")}>
                                <div data-v-6a7cbe8e=""  class="van-image"   style={{ width: "17px" }} 
><img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGlSURBVHgBzZbNTsJAEMdnt+qFS30DfAGjN73VJ5AH8GNJgHijJkq4UW9GeQAUE7bCHR+hHrya+Ab1DTgAF7M7Dgg1HgpF242/pNlJt9v/zszOZBn8EeF6thoOBePc5pxL2boOF33P4JdMhPR4XEWNLv3Fnr0eWB+5LSm9Qdy6NVhV6KzuKK0P1XAkpkI/t2zrjbFLoxe3PrGHUyGlGmQ6Sz5d6OVSD4/Ll4KGUxJzIBm2Wh8VaJQrCUaHgbFJfp5nTyI0eQn/hSiHlKM8KHA003lIEY48BAuCeblMBU9KtQYy9CBDKDXe4/3NFZsdig6YgLFzjgBVMAVilVNMd8AceQ6GWbm1JYKDZMjewZBgsXt3KyF2LynTbX+LiXJdiEqtkKngHCq3jgLVUYj940qtn7kgISILsWBCMIgsxp7mZjanlLAsq6i1Fqj1wMrlZKRNsUZIEbTwoNdqBnHzqQsSITVqP24yi5DmEbERN2m8tU0EQzAEhTrk1PN8MIQG7Vtvry/B9u7+JqnvQYZQXv1eu+lGd5qj0oVDV3UHMoDqMeg9fJXKJ4ssmhh3RTPaAAAAAElFTkSuQmCC"
                                        class="van-image__img"   style={{ objectFit: "cover" }} /></div>
                                Collection
                            </div>
                            <div data-v-6a7cbe8e="">
                                <div data-v-6a7cbe8e="" class="van-image"   style={{ width: "17px" }} 
><img
                                        src="https://arbpay.me/assets/customer-e21abb78.svg" class="van-image__img"
                                          style={{ objectFit: "cover" }} /></div> Customer Service
                            </div>
                        </div>
                    </div>
                    <div data-v-6a7cbe8e="" class="record">
                        <div data-v-6a7cbe8e="" class="head">
                            <div data-v-6a7cbe8e="" class="van-image"   style={{ width: "19px" }} 
><img
                                    src="https://arbpay.me/assets/progress-fcc4f817.svg" class="van-image__img"
                                      style={{ objectFit: "cover" }} /></div> In Progress
                        </div>
                        <div data-v-6a7cbe8e="">
                            <div data-v-644a5503="" data-v-6a7cbe8e="">
                                <div data-v-644a5503="" class="van-empty">
                                    <div class="van-empty__image"><img
                                            src="https://arbpay.me/assets/empty-f868ca75.svg"/></div>
                                    <p class="van-empty__description">No data for now~</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-3b3f438a="" data-v-6a7cbe8e=""></div>
                    <div data-v-9b42e670="" data-v-6a7cbe8e="">
                        <div data-v-167d7264="" data-v-9b42e670="" z-index="10000"></div>
                    </div>
                    <div data-v-058705f4="" data-v-6a7cbe8e=""></div>
                    <div data-v-2a5a3605="" data-v-6a7cbe8e=""></div>
                    <div data-v-8e151714="" data-v-6a7cbe8e="">
                        <div data-v-167d7264="" data-v-8e151714="" z-index="10000"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Sell;
