import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";

const Setting = () => {
    const { profile, loading } = useContext(ProfileContext);
    const USER = profile?.USER || {};
    const navigate = useNavigate()
    return (
        <div id="app" data-v-app="">
            <div>
                <div data-v-1dea78b6="" class="container pt48">
                    <div data-v-cdb55647="" data-v-1dea78b6=""
                        class="van-nav-bar van-nav-bar--fixed van-hairline--bottom navbar">
                        <div class="van-nav-bar__content">
                            <div onClick={() => navigate(-1)} class="van-nav-bar__left van-haptics-feedback"><svg data-v-cdb55647="" width="11"
                                height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path data-v-cdb55647="" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 9.00011L8.56066 0.439453L10.682 2.56077L4.24264 9.00011L10.682 15.4395L8.56066 17.5608L0 9.00011Z"
                                    fill="#9399A6"></path>
                            </svg></div>
                            <div class="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Settings</span></div>
                            <div class="van-nav-bar__right van-haptics-feedback">
                                <div data-v-9b133d13="" data-v-cdb55647="" class="x-row x-row-between x-row-middle">
                                    <div data-v-9b133d13="" class="right x-row x-row-middle-center"><img data-v-9b133d13=""
                                        class="refresh" src="https://arbpay.me/assets/refresh-4be8557e.svg" /><i
                                            data-v-9b133d13="" class="line"></i><img data-v-9b133d13="" class="close"
                                                src="https://arbpay.me/assets/close-51d692b1.svg" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-f38ca722="" class="x-page x-seting"><label data-v-f38ca722="" class="lab">Basic
                        Information</label>
                        <div data-v-f38ca722="" class="x-seting-list">
                            <div data-v-f38ca722="" style={{cursor:"pointer"}}  onClick={()=> navigate('/avatar')}  class="item x-row x-row-between">
                                <div data-v-f38ca722="" class="lab">Avatar</div>
                                <div data-v-f38ca722="" class="x-row x-row-middle">
                                    <div data-v-f38ca722="" class="van-image van-image--round img mr5"
                                        style={{ width: "32px", height: "32px" }} ><img
                                            src={USER.profile_image || "https://arbpay.me/assets/0-e04ebcda.jpg"}
                                            class="van-image__img"
                                            style={{ objectFit: "cover" }}
                                        /></div><svg data-v-f38ca722=""
                                            class="ml10" xmlns="http://www.w3.org/2000/svg" width="8" height="14"
                                            viewBox="0 0 8 14" fill="none">
                                        <path data-v-f38ca722="" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8 7.00016L1.58871 0.588867L4.76837e-07 2.17758L4.82258 7.00016L4.76837e-07 11.8227L1.58871 13.4114L8 7.00016Z"
                                            fill="#9399A6"></path>
                                    </svg>
                                </div>
                            </div>
                            <div onClick={() => navigate("/change-name")} data-v-f38ca722="" class="item x-row x-row-between">
                                <div data-v-f38ca722="" class="lab">Nickname</div>
                                <div data-v-f38ca722="" class="x-row x-row-middle sub"><span data-v-f38ca722=""
                                    class="nickname">{USER?.name}</span><svg data-v-f38ca722="" class="ml10"
                                        xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"
                                        fill="none">
                                        <path data-v-f38ca722="" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8 7.00016L1.58871 0.588867L4.76837e-07 2.17758L4.82258 7.00016L4.76837e-07 11.8227L1.58871 13.4114L8 7.00016Z"
                                            fill="#9399A6"></path>
                                    </svg></div>
                            </div>
                            <div data-v-f38ca722="" class="item x-row x-row-between">
                                <div data-v-f38ca722="" class="lab">UID</div>
                                <div data-v-f38ca722="" class="x-row x-row-middle sub">{USER?.my_code} <svg data-v-f38ca722=""
                                    class="ml10" width="10" height="12" viewBox="0 0 10 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path data-v-f38ca722="" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                        fill="#9399A6"></path>
                                </svg></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Setting;
