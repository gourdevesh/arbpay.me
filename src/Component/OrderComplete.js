import React from "react";

const OrderComplete = () => {
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
                        <div className="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Completed</span></div>
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
                <div data-v-3dcf042f="" data-v-1dea78b6="" className="orderdetail_content">
                    <div data-v-3dcf042f="" className="detail_content">
                        <div data-v-b62f0b3c="" data-v-3dcf042f="" className="custom_step">
                            <div data-v-b62f0b3c="" className="item"><img data-v-b62f0b3c=""
                                    src="data:image/png;base64,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"
                                    className="stepicon" alt=""/>
                                <div data-v-b62f0b3c="" className="text">Transfer</div>
                            </div>
                            <div data-v-b62f0b3c="" className="item"><img data-v-b62f0b3c=""
                                    src="data:image/png;base64,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"
                                    className="stepicon" alt=""/>
                                <div data-v-b62f0b3c="" className="text">Awaiting payment</div>
                            </div>
                            <div data-v-b62f0b3c="" className="item"><img data-v-b62f0b3c=""
                                    src="data:image/png;base64,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"
                                    className="stepicon" alt=""/>
                                <div data-v-b62f0b3c="" className="text">Awaiting confirmation</div>
                            </div>
                            <div data-v-b62f0b3c="" className="item activeStyle"><img data-v-b62f0b3c=""
                                    src="data:image/png;base64,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"
                                    className="stepicon" alt=""/>
                                <div data-v-b62f0b3c="" className="text">Completed</div>
                            </div>
                        </div>
                        <div data-v-ce0e4801="" data-v-3dcf042f="" className="custom_statusInfo">
                            <div data-v-ce0e4801="" className="done">
                                <div data-v-ce0e4801="" className="title x-row x-row-between">
                                    <div data-v-ce0e4801="" className="x-row x-row-middle"><img data-v-ce0e4801=""
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgBxVmNsZswDBadwCOwQdngZZM4Ezw2eNkg2QA2STpB0gloJ6AbqPI9cUf1JGODSb87HRfr70PCYDsVrAQiHujSkLzx1bEE/CH5xfKT5F5V1R32BpFyJB8kI+ZjIOlIaigNJnbBcuiKEaVA77iuYksYSDxsAcarNnIlPElD4mZ+jseCrsf4DV4gF5zgFrnzdk4oMaZnXw2PrHjsoFWshY3gm9NwSw1wMapWQyGEWKhX87Lk6FEvfw2FwSS1TrWQcVdFK5eYMzxKTjPuFMMadgaTHKOtZqO0Uu9DUps4bm7QydbCDqC4TUQ3CA7nmNJDeXJHjv1h6GUVx0lxUBX7kEOLJH5+HOSzeAiKsxjsoCAUchMaxbYXNu03Gv8u7H5AIQRydOkV1YnWh09l/C5+H7TPmvkgT0k58SI5o3I+4tMI2wGUvrvEpMdEuyRy7OeE/QgyQmbSY6LdIrmZ/798vgzYjt5IfCxFziKY02KTJJYhp7Z4EINLk8QiuYkcx5aT5BFeM3K6RwnS66GnywmWcWLbHMjcvwNB+d57gwUkkFxDTsv9VD91mLg/MNrtYSVQ+9QZiuSlliDpYSWUmx3myrOpTA/uYQPw62Tt5kqntOqVC9Z3JX8tja7C4H8u+TvNUFuPDfj6TZOdE/W9wau3nX7J8ao4Dfiajfs1NcBNcS519GGdlj1ygjij/FM1PWSA47VoHx7dMPMwagp8RRupx28dxo/f0toaIRk7NtuCIo/MRDI81D2WQ+hMfksziA6Yj1Cxcy6xClYCP1caQcK2tWaZ/w0RJKw1w3LuufZviL9maRQJZ0PvOwAAAABJRU5ErkJggg=="
                                            alt=""/><span data-v-ce0e4801="">Completed</span></div>
                                </div>
                                <div data-v-ce0e4801="" className="text mt6">You have completed this transaction</div>
                                <div data-v-3dcf042f="" className="btn_group">
                                    </div>
                            </div>
                        </div>
                        <div data-v-3dcf042f="" className="info box_style">
                            <div data-v-3dcf042f="" className="title">Buy</div>
                            <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle">
                                <div data-v-3dcf042f="">Order Amount</div>
                                <div data-v-3dcf042f="" className="fw500">₹600.00</div>
                            </div>
                            <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle">
                                <div data-v-3dcf042f="">Reward</div>
                                <div data-v-3dcf042f="" className="color_0 fw500">₹0.00</div>
                            </div>
                            <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle">
                                <div data-v-3dcf042f="">Order Time</div>
                                <div data-v-3dcf042f="">2025-09-15 23:13:53</div>
                            </div>
                            <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle">
                                <div data-v-3dcf042f="">Payment Time</div>
                                <div data-v-3dcf042f="" className="color_2">2025-09-15 23:14:32</div>
                            </div>
                            <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle driver">
                                <div data-v-3dcf042f="">Order Number</div>
                                <div data-v-3dcf042f="">MR2025091523135209782 <svg data-v-3dcf042f=""
                                        xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12"
                                        fill="none">
                                        <path data-v-3dcf042f="" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                            fill="#9399A6"></path>
                                    </svg></div>
                            </div>
                            <div data-v-3dcf042f="">
                                <div data-v-3dcf042f="" className="item x-row x-row-between x-row-middle">
                                    <div data-v-3dcf042f="">UTR</div>
                                    <div data-v-3dcf042f="">825767650558 <svg data-v-3dcf042f=""
                                            xmlns="http://www.w3.org/2000/svg" width="10" height="12"
                                            viewBox="0 0 10 12" fill="none">
                                            <path data-v-3dcf042f="" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                                fill="#9399A6"></path>
                                        </svg></div>
                                </div>
                            </div>
                            <div data-v-3dcf042f=""
                                className="item utr_item x-row x-row-between x-row-middle box_style driver">
                                <div data-v-3dcf042f="">UPI</div>
                                <div data-v-3dcf042f="">9198185799@freecharge <svg data-v-3dcf042f=""
                                        xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12"
                                        fill="none">
                                        <path data-v-3dcf042f="" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.5 1.375C2.5 0.822715 2.94772 0.375 3.5 0.375H9C9.55228 0.375 10 0.822715 10 1.375V8.125C10 8.67729 9.55228 9.125 9 9.125H8.125V3.75C8.125 2.92157 7.45343 2.25 6.625 2.25H2.5V1.375ZM1 2.875C0.447715 2.875 0 3.32272 0 3.875V10.625C0 11.1773 0.447715 11.625 1 11.625H6.5C7.05228 11.625 7.5 11.1773 7.5 10.625V3.875C7.5 3.32272 7.05228 2.875 6.5 2.875H1Z"
                                            fill="#9399A6"></path>
                                    </svg></div>
                            </div>
                        </div>
                        <div data-v-3dcf042f=""></div>
                    </div>
                    <div data-v-167d7264="" data-v-3dcf042f=""></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrderComplete;
