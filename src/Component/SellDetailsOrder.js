import React, { useState } from "react";

const SellDetailOrder = () => {
 const [activeTab, setActiveTab] = useState("All 30");

  const tabs = ["All 30", "In Progress 0", "Completed 30"];

    return (
        <div id="app" data-v-app="">
            <div>
                <div data-v-1dea78b6="" className="container pt48" >
                    <div data-v-cdb55647="" data-v-1dea78b6="" 
                        className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
                        <div className="van-nav-bar__content">
                            <div className="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                    fill="#9399A6"></path>
                            </svg></div>
                            <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Partial success</span>
                            </div>
                            <div className="van-nav-bar__right van-haptics-feedback">
                                <div data-v-9b133d13="" data-v-cdb55647="" className="x-row x-row-between x-row-middle">
                                    <div data-v-9b133d13="" className="right x-row x-row-middle-center"><img data-v-9b133d13=""
                                        className="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg" /><i
                                            data-v-9b133d13="" className="line"></i><img data-v-9b133d13="" className="close"
                                                src="https://arbpay.me/assets/close-51d692b1.svg" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-9ce75994="" data-v-1dea78b6="" style={{padding:'12px'}}>
                        <div data-v-a3da6353="" data-v-9ce75994="" classNameName="detailsOther">
                            <div data-v-a3da6353="" classNameName="container">
                               <div data-v-a3da6353="" className="itemOrder pt0">
  <div data-v-a3da6353="">
    <span data-v-a3da6353="">Sell Quantity</span>
    <p data-v-a3da6353="" className="b1">
      12400<span data-v-a3da6353=""> ARB</span>
    </p>
  </div>
  <div data-v-a3da6353="">
    <span data-v-a3da6353="">Sell Amount</span>
    <p data-v-a3da6353="" className="b1">₹12,400.00</p>
  </div>
  <div data-v-a3da6353="" className="border-b">
    <span data-v-a3da6353="">Reward</span>
    <p data-v-a3da6353="" className="green">
      124.00 <span data-v-a3da6353="">ARB</span>
    </p>
  </div>

  <div
    data-v-99623bc6=""
    data-v-a3da6353=""
    className="x-row x-row-between x-row-middle x-kyc-tag mt5"
    style={{ color: "rgb(126, 133, 142)" }}
  >
    <div data-v-99623bc6="">KYC</div>
    <span data-v-99623bc6="" className="tag tag4">KYC Ban</span>
  </div>

  <div data-v-a3da6353="" className="mb5">
    <span data-v-a3da6353="">UPI ID</span>
    <p data-v-a3da6353="" className="b1">8932080291@axl</p>
  </div>

  <div data-v-a3da6353="" className="time">
    <span data-v-a3da6353="">Sold quantity</span>
    <p data-v-a3da6353="">
      <span data-v-a3da6353="">12400</span>ARB
    </p>
  </div>

  <div data-v-a3da6353="">
    <span data-v-a3da6353="">Remaining quantity</span>
    <p data-v-a3da6353="">
      <span data-v-a3da6353="" className="red">0</span>ARB
    </p>
  </div>

  <div data-v-a3da6353="" className="time border-b">
    <span data-v-a3da6353="">C2C2025090918380704983</span>
    <span data-v-a3da6353="">2025-09-09 18:38:08</span>
  </div>
</div>

                                <div data-v-6eb9bd7c="" data-v-a3da6353="" className="subOrders">
                                    <div data-v-6eb9bd7c="" className="head">
                                        <div data-v-6eb9bd7c="" className="van-image" style={{ width: "20px" }}><img
                                            src="https://arbpay.me/assets/progress-fcc4f817.svg" className="van-image__img"
                                              style={{ objectFit: "cover" }} 
 /></div>
                                        <h4 data-v-6eb9bd7c="">Sell sub-order</h4>
                                    </div>
                                     <div data-v-6eb9bd7c="" className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          data-v-6eb9bd7c=""
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
<div className="tab-content">
  {activeTab === "All 30" && (
    <div>
  <div data-v-6eb9bd7c="" className="record">
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state7">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">UTR</span>
                                                <p data-v-6eb9bd7c="">291384862095</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:14:16</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919141609317
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:13:43</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919134208218
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:12:57</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919125706926
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>



                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹1,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:15</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918401509908
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:00</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918395909334
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹3,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:38:45</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918384506991
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
    </div>
  )}

  {activeTab === "In Progress 0" && (
    <div>
  <div data-v-6eb9bd7c="" className="record">
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state7">Progress </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">UTR</span>
                                                <p data-v-6eb9bd7c="">291384862095</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:14:16</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919141609317
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Progress </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹2,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:13:43</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919134208218
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Progress </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹2,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:12:57</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919125706926
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>



                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹1,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:15</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918401509908
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹2,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:00</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918395909334
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹3,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:38:45</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918384506991
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
    </div>
  )}

  {activeTab === "Completed 30" && (
    <div>
  <div data-v-6eb9bd7c="" className="record">
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state7">Completed </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹2,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">UTR</span>
                                                <p data-v-6eb9bd7c="">291384862095</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:14:16</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919141609317
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹2,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:13:43</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919134208218
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 19:12:57</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090919125706926
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>



                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹1,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:15</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918401509908
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹9,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:40:00</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918395909334
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                        <div data-v-6eb9bd7c="" className="itemOther">
                                            <div data-v-6eb9bd7c="" className="head"><span data-v-6eb9bd7c="">Sell</span><span
                                                data-v-6eb9bd7c="" className="state8">Canceled </span></div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Amount</span>
                                                <p data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">₹3,000.00</span></p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Time</span>
                                                <p data-v-6eb9bd7c="">2025-09-09 18:38:45</p>
                                            </div>
                                            <div data-v-6eb9bd7c=""><span data-v-6eb9bd7c="">Order Number</span>
                                                <p data-v-6eb9bd7c="">MC2025090918384506991
                                                    <div data-v-6eb9bd7c="" className="van-image" style={{ width: "10px" }}><img
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC8SURBVHgB7ZRNCsIwEIXfjD1Aj9KbuBOka7spoj2B7Q2UIvizLoKn6U3MAXRioCAUI2oS6KbfcoZ8GfLIED6wP10ToUeMH2E9UXk2a8nWrM+XDUSX+Bemkq0NF1l3bs0ISxzZ67rCNwhTaErey3APoD40WxCtekKfAJaLeVUfm5vRvIZhnwC6kbjt3QN3rE8UOuVROAqHF4quInhyhxSRcMwiKs/T1ltYZGmwv2zFCLVCQMz6wg4uiH2rPwEZCELYSSUFXAAAAABJRU5ErkJggg=="
                                                        className="van-image__img"   style={{ objectFit: "cover" }} 
 />
                                                    </div>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
    </div>
  )}
</div>

                                  
                                </div>
                            </div>
                            <div data-v-167d7264="" data-v-a3da6353=""></div>
                            <div data-v-167d7264="" data-v-a3da6353="" className="unmatchPopup"></div>
                        </div>
                        <div data-v-2a5a3605="" data-v-9ce75994=""></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SellDetailOrder;
