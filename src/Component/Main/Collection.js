import React from "react";

const Collection = () => {
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
              <div class="van-nav-bar__title van-ellipsis"><span data-v-cdb55647="">Collection</span></div>
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
          <div data-v-da446287="" data-v-1dea78b6="" class="x-collection">
            <div data-v-da446287="" class="x-collection-tab x-row x-row-between">
              <div data-v-da446287="" class="item active"><span data-v-da446287="">Recommend <i
                data-v-da446287=""><svg data-v-da446287="" width="8" height="10" viewBox="0 0 8 10"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-da446287=""
                    d="M1.11227e-05 1C2.39881e-05 0.692506 1.50001 0 4.00001 0C6.50001 0 8 0.661119 8.00001 1C8.00003 1.50018 8.00001 3.5 8.00001 6C8.00001 7.31424 4.77382 10 3.99999 10C3.22616 10 1.04374e-05 7.22006 6.67572e-06 6C-5.48604e-07 3.65685 -9.80431e-06 1.50018 1.11227e-05 1Z"
                    fill="white"></path>
                  <path data-v-da446287=""
                    d="M6.11423 3.41421L3.99291 5.53553C3.79764 5.7308 3.48106 5.7308 3.2858 5.53553L2.22514 4.47487"
                    stroke="#FAC10C" stroke-linecap="round"></path>
                </svg> Safe</i></span></div>
              <div data-v-da446287="" class="item"><span data-v-da446287="">USDT </span></div>
            </div>
            <div data-v-da446287="" class="x-collection-list">
              <div data-v-da446287="" role="feed" class="van-list" aria-busy="false">
                <div data-v-da446287="" class="item mb16 kyc bgairtel" id="2912289">
                  <div data-v-da446287=""><span data-v-da446287="" class="tag tag4">KYC Ban</span>
                    <div data-v-da446287="" class="title mt15 pb5 x-row x-row-between x-row-middle">
                      <div data-v-da446287="" class="x-row x-row-middle"><img data-v-da446287=""
                        class="kycIcon mr12"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUqSURBVHgBvVkxbNRAENwzlBRfUhoJaj49EqGDDiQQJYloQZCaglAg6ABRo0+LQApU0OVR0ifUicTTpSNF2vexs3dn39s++2x/MtLF/o//PN7b251dKxoArfWID6s8bvJIeYx5jOwATnjM7PGAxy8eU6XUCZ0nmOgqjx0e/3Q/bPO4Sz2gulxsb/KOjDXNdwdsuMNDczw6In16SoQBXLpE6vJlIoyrV0mtrJAaj/0pZzxescW3KBJRhJloyocJmeUXQvrLF8q+fi3IxYLJg3Syvm4exADuco+Jz9p+3kqYyT7jwybBL0F0MjFElwB1+7ZPHH4Na79v/A01k31pyRqLbm11t2gbmGyytkbqzh33zSaTfhW6PEh4gezHj0uzapDI/fuUPH3qPgZJ1xLOybI1sxcvzIY6ByjemMmHD7JZKUC6Qtj6rPjR/PFj2fnnCdmQIG2wUfbpBcI2GuzzGPV1AwXr8GZS165xGhmbz8ZipPHwCH0/fjSumuce2IgrfvQoEwbZMSbM3r6lTkRBjnd8Kc4Goff2ZG/o4+Pa/ydPnpB68ACnyIy3KoSZ7Boh1vIE82fsFYGJhhJdAN8j43vVkuZVufD5s1sdxOhvZcJ/+JBmb96Q/vmz9V5YasXLhlg6CDAQ9kpNuPRcY8aEr+AksWSRclP8OIosNsanT8PJAsh8TKwOusikKfRLTpjxCH+yyYTagOWXXVyk1cFIjK/WIuOEZfFSrrUSUZRTW7wVspyVlg74acAAuohUY3CFhVflHyDbsNEk758FWTd/aMWgX4whRXtfJEd4fz88GVtAREofWGUnMZjP1Y0bLlxFQ7N8tVFICF+Xb5syGt+ks88GJCispfhzJwPAwuYhU7iElDO6yR26WoSJzh8+DKs7ThqV3zTsH10Y8zosnMppE2EWJVHgieccx7vqj1ZxVTz0CIRHpS/rf2D1QOj/uV6OQWkuSIFGeIQTikBTfIZ1kKmiyTI8sS4r20W+wsJQRCN56oCVEQsz7HDcCJsP7oPCEwKmo1ZWtqbL54Z123RLsSInUYRlYk7ZMWm7Fe6hAYifCAnrxegZCMNEKTaWjlRolQmhf7mEz2NuYB5l6zcHCK2oGrEgLBb+K6dYpppw00gUiu3164UlxrmorzqyRSUh1Xe0OxVR6jc23VQmRIXQESBQ0cE10UQypSeYpFXQZZNi9QymjvCJ3LgpdJUnQaaqic+6UFfLIbu4SaeJbczJ2oR0aQUgUaOFy02W3A3sg0md2IGsoCD7HVxdHJZyOolMwfLEJW1RtlxesoOsrSr6FLWe5tiSzzK5UlNCYw6bKMbKJb/1ycpGhG7migQPhTjbt10gFY0xzMzVdBe9/2/w2MYTzRFv21K1B5B15b2skk0uUh/2bMKIOxXWzRsqOWE8ASv6KVt5FRdm7G9BlEjk1a1NPrkvD+jDqaJJeOC3Y4ONFBDWDT6XN/AwKUiiQbK7a7LhwIYh5Cz6EtTWSLGkn5NpWpuewTn11XJC2Kzwf4NKq6qi1uwFJmogi8Vq4SWg1Fer7RU3tVs3yZbWbe6xDHhuAIDsZu11TZP4pEWtIf/3FEghSHRBGCzCaZCsXE8tsD4N0iMJVSC9DJlJ1qpQb0YSDH9l4GCjxzaZ93DkiCO8dbW4WBREYdFCu0x5rC/lpYwP2+GEtdP8O5BGTwOZDORR8tiwlveG7SsvOVZfe224LHZmQPPQvhzsA7yM3HHNva7oZOEa4tI+sgMNGXxOafHVrVODKBSmNPDV7X9IrxAe2O9P2QAAAABJRU5ErkJggg==" />
                        <div data-v-da446287="">
                          <p data-v-da446287="" class="upi">abdul0291@airtel</p>
                          <div data-v-da446287="" class="number mt4">8932080291</div>
                        </div>
                      </div>
                      <div data-v-da446287="">
                        <div data-v-da446287="" class="operate">Customer Service</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-da446287="" class="item mb16 kyc bgphonepe" id="2910176">
                  <div data-v-da446287=""><span data-v-da446287="" class="tag tag4">KYC Ban</span>
                    <div data-v-da446287="" class="title mt15 pb5 x-row x-row-between x-row-middle">
                      <div data-v-da446287="" class="x-row x-row-middle"><img data-v-da446287=""
                        class="kycIcon mr12"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASoSURBVHgB1Vk7aBRdFD4bfv7ix1+WYCEoYQuLmMYVRJuAwUKsNBErUYxg5TudWOgqCBEExVclGBEsTbQSFTNCGhU0NjGIxRpULEJcVCxs4vlOzh3PbmbduXcmUT84O/u4O/Pdc8/rnlugDJidnS3ypYdlI0uJpcxSVAFqLFW9jrM8ZokKhUKNFhNMtIdllOXTbBiGWXopAAWfwfqQ8zSnTcHk0480NTFDk8/4+mqGvn3+LgL8t/RfWrZiCS1buYQ6Otupc8Ny6ly/3N6yynKKNT5EKZGKMBMt8eU6zS2/ELp/Y0LEkUsLTADEew+WZSIKmEsfE6+2+n9Lwkz2CF8qLEWQG7k0LkTzQPf2VZY47BravkChhJnsSSVL94cmaOTyuLdGWwEa7z1UFvKKCpM+1Wx8U8KW7K0zT3PTajNs7u+incfXu49NSScSdmShzYsHHtHkk4+0GOhY3U7Hbm4RZ6UmpOcRVpsVOzqx7a54/mICDgnSioFGm64jrNHgBUsxrRlAG5v3dMUhCxPEqky/+0qhMOYBR1xro0dbw9hhkB27/Sa1zcJphLDGVyzr4Sub3LIGAQ6uz0fGvG5/iwmzdvv5UoZmELrSAhod3H2vTqMgbRwoCOCgEanHZkWr4ZMykEPX9Hu/5UwiLTH2UJlCITH/cqy482QJ6wxKeCDMIQSYZCNpEM5CGqahWi6hfokJM/bgxcwoCM1Im6TgDeNLYgFtWiKKjeQRb5NIw55h1yEwhMvg+g9pQYOqK63t7jvb3XLM9IevcXGDiHH46qa6+187NpYq9MEkoEgOm1J7/yTsod3uPv8lljJzRVydidYv7n+U6r9TkzMS5xk9sOE18qVHRsuSFBx84jRWX1GChmU74xPKYKNSlDfEW0SYseH6KGPSrDwYpgD4VH3YICjWgHDJlzDGJo3Hd61MK2R1vn2JJ1eESYiG865z84ThVmyjvwwgLFvuLMXKQsNwq/0k/L8/4TyiRRqYzWoVhCUfh2aiuhubOJsnzH1Fw2/xrqFfkAqICtZZUTO4ugHLqME+M9DTULxEWItYjmTJ9bYi2zfYLZInzMQjaDhiqeHLEMcD4YW0ZdivWf2oTRtzYsfY6vgCJoHMl1RH5xHbDdk74CqbUC2OR/GA/etuUSiwQs60JBuy5ode98e/IzUP7rpHPjg3usM5HVpZI5I4+E3El6rbAYfClYKQPMwEDqxkqyCLNzbTDeAFDvQnJBHYrnHmuKESE9YZRCCLBl1e8N3QOkiTcE6747Yd21hL7GWpoZGRxTQsUKQ/fzgl9vv8wVSq/+D5Gs8REPrsb0mtqqOk22p4/2L11RzgtKfvbHUf57Wq5lVrOkBsBh2cPFJ2WjT01RJ7xb9qt1ZIt9a/od0KspWkca0a2hVS0kgM0hXKOauJk3M0MD7TlCyQ5sgANg3SRXg8el6h3aFGQKuIBhpGsx8ZOGgbFp1NiXeOuPQyPDXukhPExPuIZW8uhzIW2uGEtkvuO5BGJEGbwG1O7bGXpGsceXFN0NHVnnTsNeCy2IIBzUM9HAwBDiNHXXPPF14aTiDujm4haMjgc4nqj25dNYiNQkQZj25/ABewxp6f+fdFAAAAAElFTkSuQmCC"/>
                        <div data-v-da446287="">
                          <p data-v-da446287="" class="upi">8932080291@axl</p>
                          <div data-v-da446287="" class="number mt4">8932080291</div>
                        </div>
                      </div>
                      <div data-v-da446287="">
                        <div data-v-da446287="" class="operate">Customer Service</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="van-list__placeholder"></div>
              </div>
              <div data-v-da446287="" class="item add">
                <div data-v-da446287="" class="icon x-row x-row-middle-center"><i data-v-da446287=""
                  class="van-badge__wrapper van-icon van-icon-plus plus"
                  style={{ color: "rgb(255, 255, 255)" }}></i></div>
                <p data-v-da446287="" class="x-tc">Add payment UPI</p>
              </div>
            </div>
            <div data-v-058705f4="" data-v-da446287=""></div>
            <div data-v-167d7264="" data-v-da446287=""></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Collection;
