import React from "react";

const Verified = () => {
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
                        <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Real-name</span></div>
                        <div className="van-nav-bar__right van-haptics-feedback">
                            <div data-v-9b133d13="" data-v-cdb55647="" className="x-row x-row-between x-row-middle">
                                <div data-v-9b133d13="" className="right x-row x-row-middle-center"><img data-v-9b133d13=""
                                        className="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg"/><i
                                        data-v-9b133d13="" className="line"></i><img data-v-9b133d13="" className="close"
                                        src="https://arbpay.me/assets/close-51d692b1.svg"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-ed9b5755="" className="x-page x-verified">
                    <p data-v-ed9b5755="" className="x-tc">In order to create a healthy trading environment for users,
                        please complete real-name authentication first. Real-name authentication cannot be changed once
                        completed, and only UPI accounts that have been real-name authenticated can be used for
                        transactions.</p>
                    <div data-v-ed9b5755="" className="">
                        <div data-v-ed9b5755="" className="x-verified-from">
                            <p data-v-ed9b5755="" className="x-tc mt32 mb16 id">ID Document Front Photo</p>
                            <div data-v-ed9b5755="" className="upload_img x-tc"></div>
                            <div data-v-ed9b5755="" className="upload_action">
                                <div data-v-ed9b5755="" className="van-uploader">
                                    <div className="van-uploader__wrapper">
                                        <div className="van-uploader__input-wrapper">
                                            <div data-v-ed9b5755="" className="upload_btn"><span data-v-ed9b5755="">Upload
                                                    Image</span></div><input type="file" className="van-uploader__input"
                                                accept="image/*"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-ed9b5755="" className="item mt32"><label data-v-ed9b5755="" className="lab">Real
                                    Name</label><input data-v-ed9b5755="" className="input" type="text" maxlength="40"
                                    placeholder="Please enter your real name"
                                    oninput="value=value.replace(/[^a-zA-Z\s+$]/g,'')"/></div>
                            <div data-v-ed9b5755="" className="item"><label data-v-ed9b5755="" className="lab">ID
                                    Number</label><input data-v-ed9b5755="" className="input" type="text" maxlength="30"
                                    placeholder="Please enter your ID number"
                                    oninput="value=value.replace(/[^0-9a-zA-Z\s+$]/g,'')"/></div>
                        </div>
                    </div>
                    <div data-v-ed9b5755="" className="txt">
                        <h3 data-v-ed9b5755="" className="mb10">Warm Reminder</h3>
                        <p data-v-ed9b5755="" className="mb10">1. Please take a photo using the original government-issued
                            identification document.</p>
                        <p data-v-ed9b5755="" className="mb10">2. Place the identification document on a single-colored
                            background.</p>
                        <p data-v-ed9b5755="" className="mb10">3. When capturing the document, ensure the photo is clear and
                            free of obstructions or reflections.</p>
                        <p data-v-ed9b5755="">4. Do not use black and white photos.</p>
                    </div><button data-v-ed9b5755="" type="button"
                        className="van-button van-button--primary van-button--normal van-button--block mt25 x-btn x-verified-btn">
                        <div className="van-button__content"><span className="van-button__text">Next(1/2)</span>
                        </div>
                    </button>
                    <div data-v-167d7264="" data-v-ed9b5755=""></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Verified;
