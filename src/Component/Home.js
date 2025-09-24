// Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () => {
  const navigate = useNavigate()
  const banners = [
    "https://oss.arbpay.me/vc-upload-1756352289001-14.jpg",
    "https://oss.arbpay.me/vc-upload-1755574558423-13.jpg",
    "https://arb-new-pay.oss-ap-southeast-1.aliyuncs.com/vc-upload-1714420019523-2.png",
    "https://arb-new-pay.oss-ap-southeast-1.aliyuncs.com/vc-upload-1714420019523-5.png",
    "https://oss.arbpay.me/vc-upload-1756309821773-29.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Begineer's questions");
    const [expanded, setExpanded] = useState(false);

  const tabs = ["Begineer's questions", "Trading problems"];

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);
  const faqs = [
    {
      question: "How to sell ARB?",
      content: `For a guide on selling ARB, navigate to the 'My' section and select 'Selling Tutorial.' This tutorial provides step-by-step instructions to optimize your ARB selling experience.  While selling ARB in AR wallet, Always check your UPI for received money before clicking confirm receipt.`
    },
    {
      question: "How to withdraw to bank account?",
      content: "If you're using our AR Wallet C2C payment system, you'll need to sell ARB to a buyer. Through this process, the buyer can transfer funds to your UPI account. It's important to note that we do not currently support direct withdrawals to your bank account. Always remember to check your UPI account for make sure that you received the funds before confirming any transaction to avoid any potential losses!"
    },
    {
      question: "How to withdraw ARB to game account?",
      content: `To make a recharge from AR wallet to Game platform, please follow these steps :
If you don't have enough ARB :
1. Go to deposit page at the game platform
2. Choose 'ARPay' option to deposit
3. Select or Enter the amount that you want to recharge
4. Click 'Deposit'
5. Transfer according to the UPI ID account information and amount prompted on the page
6. Fill the right UTR number and upload the successful receipt payment details
7. Click 'Payment Completed'
If you have enough ARB :
1. Please go to deposit page at the game platform
2. Choose 'ARPay' option to deposit
3. Select or Enter the amount that you want to recharge
4. Click 'Deposit'
5. Enter your payment password
6. Click 'Confirm Payment'
If you have any questions or need further assistance, please feel free to contact our customer service team.`
    },
    {
      question: "Sell order has been completed, but have not received funds to UPI account",
      content: `AR Wallet operates as a customer-to-customer platform. The buyer is also another customer who buy the ARB. We don't have access to the buyer or seller receiving account. The system is introduced to give you more financial independence and provide you with privacy. 
It is very important to check your bank account to make sure you actually received the funds or not. If you receive the funds, you can click 'Confirm Receip', But if you do not receive the funds, please DO NOT CLICK 'Confirm Receipt'. If you haven't received the funds or you are experiencing any issues, click 'Appeal' for assistance. 
Our dedicated customer service team will promptly review your appeal. If you click 'Confirm Receipt' but you don't receive the money, then we are sorry for your loss. We cannot help you as this can happen by your own fault.
We have given warning before and please understand the warning that have been given. Thank you!`
    },
    {
      question: "How to Real-name verification?",
      content: `To make a real name verification, please follow these steps :
1. Go to 'My' menu 
2. Click 'Real name' Button
3. Click 'Upload Image' Button
4. Upload the clear and correct 'ID Card'
5. Fill your 'Real Name'
6. Fill in your 'ID number'
7. Click 'Next (1/2)' Button
8. Click 'Upload Image' Button
9. Upload the clear and correct 'Selfie'
10. Click 'Submit (2/2)' Button
Please keep in mind the following remarks while submitting your documents:
1. Please use original government-issued documents for the photographs;
2. Please place the documents on a monochrome background;
3. When taking photos of documents, please make sure that they are clear and free of obscuration or reflection;
4. Avoid using black and white photos
If you have any questions or need further assistance, please feel free to contact our customer service team.`
    },
    {
      question: "When will the withdrawal be successful?",
      content: `AR wallet is C2C payment system. For the C2C method, 
we facilitate transactions between sellers and buyers through our matching process in AR Wallet. There is no guaranteed time frame for ARB sales. Keep selling until a potential buyer buys your ARB.
Please rest assured that our C2C AR Wallet platform is highly efficient, and transactions rarely fail due to the extensive user base. Matching between users is seamless and straightforward, ensuring smooth transactions.`
    },
    {
      question: "How to deactivate AR wallet?",
      content: `We want to clarify that there's no option to deactivate your AR Wallet account. However, you can choose not to use it if you prefer. Simply refrain from initiating transactions or accessing the wallet features. Your account will remain dormant until you decide to use it again. If you have any further questions or need assistance, please feel free to reach out. Thank you for your understanding.`
    },
    {
      question: "How to change phone number?",
      content: `To change your phone number, please follow these steps: 
Step 1: Click on 'Bind phone.' 
Step 2: Click send to send the verification code. 
Step 3: Enter the verification code.
Step 4: Click 'Next.'
Step 5: Enter your new phone number. 
Step 6: Click send to the verification code and put your verification code. 
Step 7: Click 'Confirm.`
    },
    {
      question: "I forgot my payment password",
      content: `To change your payment password, please follow these steps:
Step 1: Click on 'Payment Password.'
Step 2: Select 'Change Password.'
Step 3: Click send to send the verification code.
Step 4: Enter the verification code.
Step 5: Click 'Next.'
Step 6: Enter your new password.
Step 7: Confirm your new password.
Step 8: Provide a password hint.
Step 9: Click 'Confirm`
    },
    {
      question: "How to add UPI ID?",
      content: `To add payment UPI ID , please follow these steps:
STEP 1: Go to 'My' menu
STEP 2: Click 'Collection' Option
STEP 3: Click 'Add payment UPI' Button
STEP 4: Choose 'Receiving Bank'
STEP 5: Fill Correct Phone Number and 'OTP'
STEP 6: Click 'Add UPI' Button
Payment Collection Successfully added and you can start to sell your ARB.`
    }
  ];

  const faqsTrading = [
    {
      question: "No one buy my ARB",
      content: `AR wallet is C2C payment system. For the C2C method, we facilitate transactions between sellers and buyers through our matching process in AR Wallet.
Please rest assured that our C2C AR Wallet platform is highly efficient, and transactions rarely fail due to the extensive user base. Matching between users is seamless and straightforward, ensuring smooth transactions.`
    },
    {
      question: "Why does the matching process take so long?",
      content: `If you're using our AR Wallet C2C payment system, you'll need to sell ARB and wait a potential buyer buy your ARB. There is no guaranteed time frame for ARB sales. :
If the matching is 'Timeout', you can either click 'Cancel' to cancel the sell order or click 'Continue' to continue matchin and wait for a potential buyer to purchase your ARB coins.`
    },
    {
      question: "I want to cancel the order.",
      content: `You can't cancel the order if your order is 'Matching' state. You can
 wait till buyer buy your ARB or until the order entered 'Matching Timeout' to cancel by yourself.`
    },
    {
      question: " Buyer keep send fake receipts",
      content: `We deeply regret, but we are unable to control all the actions of buyers. However, we would like to inform you to always double check whether you have received the funds or not before click 'Confirm Receipt'. AR wallet system runs on customer-to-customer payments, so it's super important to verify whether you receive the funds or not for the smooth transactions.`
    },
    {
      question: "Why my account disabled?",
      content: `If we have identified multiple instances of fraudulent activity, including placing buy orders using fake receipt payment. As a result, your account may be automatically disabled. 
If you have any questions or need further assistance, please feel free to contact our customer service team.`
    },
    {
      question: "I have paid the funds but have not received the ARB",
      content: `Before proceeding with any transaction on C2C AR Wallet, we kindly ask you to review our buying and selling policies. Once you have paid funds to the seller, please don't cancel the order and you must confirm payment before the order become 'Timeout'. If the order timed out or cancelled by yourself, ARB will automatically returned to the seller and the other buyers will buy the ARB. Therefore, subsequent problems are not the responsibility of the platform. 
If you have any questions or need further assistance, please feel free to contact our customer service team.`
    },
    {
      question: "I accidentally clicked Confirm Receipt but didn't receive funds",
      content: `To Before proceeding with any transaction on C2C AR Wallet, we kindly ask you to review our buying and selling policies. You should understand this is a customer to customer payment system. The buyer is also another customer like you and we don't have access to the buyers or seller receiving account. The system is introduced to give you more financial independence and provide you with privacy. 
If you already confirm receipt we are unable to provide further assistance because it is beyond our responsibility. But we will banned the buyer for using fake payment receipts.
If you have any questions or need further assistance, please feel free to contact our customer service team.
 your AR wallet, go to 'Settings' > 'Wallet' > 'Deactivate' and confirm the process. Note: 
 Make sure all funds are withdrawn before deactivating.`
    },
    {
      question: "Are you a scam company?",
      content: `AR wallet is C2C payment system. For the C2C method, 
we facilitate transactions between sellers and buyers through our matching process in AR Wallet.
Before proceeding with any transaction on C2C AR Wallet, we kindly ask you to read our 'Risk Warning' in detail to avoid any potential losses.
WARNING :
Please never share your One Time Password (OTP) with anyone, even if they claim to be from AR Wallet team. And we would like remind all our members that AR Wallet only have one online customer support and will never send a private chat to any users for asking OTP for any reason, and if you receive a suspicious message or call
, feel free to contact our 24/7 customer service immediately. change your registered phone number, naviga
te to 'My Profile' > 'Edit Phone' and follow the verification steps.`
    },
    {
      question: "Does AR Wallet have a phone call customer service? forgot my payment password",
      content: `AR Wallet doesn't have any call service. 
AR Wallet customer service only provides support via online Live chat and never sends any private chats to any users! 
Please rest assured that our Official AR wallet customer service will never ask for your sensitive information, such as OTP, account number or payment password. Please carefully identify fraudulent behavior to avoid financial losses!
If you receive any suspicious messages or calls claiming to be the AR Wallet team, you can report it directly via our AR Wallet customer 
service Live Chat. can reset your payment password by going to 'Settings' > 'Reset Payment Password'. Follow the
 OTP verification process.`
    },
  
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="app" data-v-app="">
      <div>
        <div data-v-2d042b53="" className="container">
          <div data-v-b0a7af40="" data-v-2d042b53="" className="navbar x-row x-row-middle x-row-between">
            <div style={{ marginLeft: '3%' }} data-v-b0a7af40="" className="x-row x-row-middle"><svg data-v-b0a7af40="" width="91" height="30"
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
          <div data-v-b8331378="" data-v-2d042b53="" className="x-home main">
            <div data-v-b8331378="" className="x-home-balance mt8">My total assets <p data-v-b8331378="">296.70<span
              data-v-b8331378="">ARB</span></p>
            </div>
            <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "0 auto", marginTop: '3%' }}>
              <img

              onClick={()=>navigate("/event-detail")}
                src={banners[currentIndex]}
                alt={`banner-${currentIndex}`}
                style={{
                  cursor:"pointer",
                  width: "100%", borderRadius: "10px", transition: "0.5s", border: "1px solid gray" // <-- colored border
                }}
              />

              {/* Pagination dots on top of the image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",      // distance from bottom of image
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "5px 10px",
                  borderRadius: "20px"
                }}
              >
                {banners.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: currentIndex === index ? "#f5ba00" : "#adadadff",
                      cursor: "pointer"
                    }}
                  ></span>
                ))}
              </div>
            </div>

            <div data-v-b8331378="" className="x-home-nav x-row x-row-between">
              <div style={{ cursor: "pointer" }} onClick={() => navigate("/arbbuy")} data-v-b8331378="" className="item mr5">
                <div data-v-b8331378="" className="pr8 pl8">
                  <h5 data-v-b8331378="" className="title">Buy ARB</h5>
                  <p data-v-b8331378="" className="tip">Flexible purchasing</p>
                </div>
              </div>
              <div style={{ cursor: "pointer" }} onClick={() => navigate("/sell")} data-v-b8331378="" className="item item—server ml5">
                <div data-v-b8331378="" className="pr8 pl8">
                  <h5 data-v-b8331378="" className="title">Sell ARB</h5>
                  <p data-v-b8331378="" className="tip">Efficient and fast</p>
                </div>
              </div>
            </div>
            <div data-v-5818d1f5="" data-v-b8331378="" className="x-home-order">
              <div data-v-5818d1f5="" className="title mb10 x-row x-row-middle"><svg data-v-5818d1f5=""
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr5">
                <path data-v-5818d1f5="" fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.54386 2C4.48675 2 2 4.48675 2 7.54386C2 10.601 4.48675 13.0877 7.54386 13.0877C10.601 13.0877 13.0877 10.601 13.0877 7.54386C13.0877 4.48675 10.601 2 7.54386 2ZM9.98498 5.10274H8.15984C8.2511 5.21681 8.34236 5.35369 8.38799 5.51339C8.45643 5.65028 8.47924 5.83279 8.50206 6.0153V6.01531H9.98498V6.74536H8.47924C8.4108 7.15602 8.2511 7.47542 8.00014 7.72637C7.74919 7.97733 7.40697 8.15984 7.01913 8.27392C7.01913 8.27392 7.24727 8.4108 7.33853 8.47924C7.42979 8.54769 7.52105 8.63894 7.6123 8.7302C7.67009 8.78798 7.71872 8.85492 7.7698 8.9252L7.76981 8.92522C7.79939 8.96593 7.82979 9.00776 7.86326 9.0496C7.95452 9.16367 8.04577 9.30056 8.13703 9.46026L9.41463 11.4451H8.36517L7.22446 9.59714C7.11039 9.41463 6.99632 9.25493 6.88225 9.11804C6.76818 8.98116 6.6541 8.8899 6.51722 8.79864C6.38034 8.70739 6.24345 8.66176 6.10657 8.61613L6.10656 8.61613C5.94686 8.5705 5.78716 8.54769 5.60465 8.54769H5.14836V7.79482H6.31189C6.47159 7.79482 6.6541 7.772 6.79099 7.72637C6.95069 7.68075 7.08757 7.6123 7.20165 7.52105C7.31572 7.42979 7.42979 7.31572 7.52105 7.20165C7.6123 7.06476 7.65793 6.92788 7.70356 6.76818H5.14836V6.03812H7.72637C7.70356 5.90123 7.65793 5.76435 7.58949 5.65028C7.52105 5.53621 7.4526 5.44495 7.33853 5.35369C7.22446 5.26244 7.11039 5.21681 6.95069 5.17118C6.79099 5.12555 6.63129 5.10274 6.42596 5.10274H5.14836V4.32705H10.0078V5.10274H9.98498ZM15.7872 2.09905L16.5938 2.90566L15.7425 3.75689H17.4909C19.517 3.75689 21.164 5.40392 21.164 7.42999V9.93955H20.0233V7.42999C20.0233 6.03392 18.887 4.8976 17.4909 4.8976H15.742L16.5938 5.74933L15.7872 6.55593L13.5587 4.32749L15.7872 2.09905ZM7.83326 17.5432L10.0617 19.7717L7.83326 22.0001L7.02665 21.1935L7.87738 20.3428H6.12929C4.10322 20.3428 2.4562 18.6958 2.4562 16.6697V14.1601H3.59691V16.6697C3.59691 18.0658 4.73322 19.2021 6.12929 19.2021H7.87888L7.02665 18.3498L7.83326 17.5432Z"
                  fill="#5D6575"></path>
                <path data-v-5818d1f5=""
                  d="M16.0536 10.5096C12.9965 10.5096 10.5098 12.9964 10.5098 16.0535C10.5098 19.1106 12.9965 21.5974 16.0536 21.5974C19.1107 21.5974 21.5975 19.1106 21.5975 16.0535C21.5975 12.9964 19.1107 10.5096 16.0536 10.5096ZM17.6963 18.6543L17.24 17.3311H14.7988L14.3426 18.6543H13.43L15.6658 12.5857H16.3958L18.6316 18.6543H17.6963Z"
                  fill="#5D6575"></path>
                <path data-v-5818d1f5="" d="M15.0726 16.5098H16.9662L16.008 13.7493L15.0726 16.5098Z" fill="#5D6575">
                </path>
              </svg>
                <p data-v-5818d1f5="">You have <span>0</span> orders in progress</p>
              </div>
              <div data-v-5818d1f5="" className="van-empty">
                <div className="van-empty__image"><img src="https://arbpay.me/assets/empty-f868ca75.svg" /></div>
                <p className="van-empty__description">You have no active orders yet</p>
              </div>
            </div>
            <div data-v-00800ffb="" data-v-b8331378="" className="x-qestion">
              <div data-v-00800ffb="" className="title x-row x-row-middle mb15"><svg xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr5" data-v-00800ffb="">
                <rect width="24" height="24" fill="#D9D9D9" fill-opacity="0.1" data-v-00800ffb=""></rect>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.05762 18.7666C8.40911 20.6081 10.0279 22 11.9718 22C13.9157 22 15.5346 20.6081 15.8861 18.7666H8.05762Z"
                  fill="#5D6575" data-v-00800ffb=""></path>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M16.6563 15.5215C18.415 14.1349 19.5439 11.9853 19.5439 9.57202C19.5439 5.39011 16.1538 2 11.9719 2C7.79001 2 4.3999 5.39011 4.3999 9.57202C4.3999 11.9853 5.52888 14.1349 7.2875 15.5215H16.6563Z"
                  fill="#5D6575" data-v-00800ffb=""></path>
                <rect x="6.56348" y="16.0624" width="10.8172" height="2.16343" rx="1" fill="#5D6575" data-v-00800ffb="">
                </rect>
                <path
                  d="M9.34105 9.77208L11.3858 6.22191C11.5391 5.9558 11.9458 6.06455 11.9458 6.37164V8.3289C11.9458 8.49459 12.0801 8.6289 12.2458 8.6289H13.9072C14.1424 8.6289 14.2862 8.88726 14.1621 9.08711L12.0684 12.4605C11.9092 12.717 11.5135 12.6042 11.5135 12.3023L11.5135 10.5218C11.5135 10.3561 11.3792 10.2218 11.2135 10.2218H9.60102C9.37022 10.2218 9.22586 9.97208 9.34105 9.77208Z"
                  fill="white" data-v-00800ffb=""></path>
              </svg> Q&amp;A FAQ</div>
              <div className="x-row x-qestion-tab" data-v-00800ffb="">
                <div
                  data-v-00800ffb=""
                  className={activeTab === "Begineer's questions" ? "active" : ""}
                  onClick={() => setActiveTab("Begineer's questions")}
                >
                  Begineer's questions
                </div>

                <div
                  data-v-00800ffb=""
                  className={activeTab === "Trading problems" ? "active" : ""}
                  onClick={() => setActiveTab("Trading problems")}
                >
                  Trading problems
                </div>
              </div>
              {activeTab === "Begineer's questions" && (
                <div className="van-collapse van-hairline--top-bottom">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`van-collapse-item van-collapse-item--border ${activeIndex === index ? "active" : ""
                        }`}
                    >
                      <div
                        className="van-cell van-cell--clickable van-collapse-item__title"
                        role="button"
                        tabIndex="0"
                        onClick={() => toggle(index)}
                      >
                        <div className="van-cell__title">
                          <div className="tit">{`${index + 1}. ${faq.question}`}</div>
                        </div>
                        <div className="icon x-row x-row-middle-center">
                          <i
                            className={`van-badge__wrapper van-icon ${activeIndex === index ? "van-icon-minus" : "van-icon-plus"
                              }`}
                          ></i>
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div className="van-collapse-item__content">
                           <div className="van-text-ellipsis">
      <div className={`faq-text ${expanded ? "expanded" : ""}`}>
        {faq.content}
      </div>
      <span className="van-text-ellipsis__action" onClick={() => setExpanded(!expanded)}>
        <div className="look">{expanded ? "Hide" : "Show More"}</div>
      </span>
    </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Trading problems" && (
                <div className="van-collapse van-hairline--top-bottom">
                  {faqsTrading.map((faq, index) => (
                    <div
                      key={index}
                      className={`van-collapse-item van-collapse-item--border ${activeIndex === index ? "active" : ""
                        }`}
                    >
                      <div
                        className="van-cell van-cell--clickable van-collapse-item__title"
                        role="button"
                        tabIndex="0"
                        onClick={() => toggle(index)}
                      >
                        <div className="van-cell__title">
                          <div className="tit">{`${index + 1}. ${faq.question}`}</div>
                        </div>
                        <div className="icon x-row x-row-middle-center">
                          <i
                            className={`van-badge__wrapper van-icon ${activeIndex === index ? "van-icon-minus" : "van-icon-plus"
                              }`}
                          ></i>
                        </div>
                      </div>
                      {activeIndex === index && (
                        <div className="van-collapse-item__content">
                                               <div className="van-text-ellipsis">
      <div className={`faq-text ${expanded ? "expanded" : ""}`}>
        {faq.content}
      </div>
      <span className="van-text-ellipsis__action" onClick={() => setExpanded(!expanded)}>
        <div className="look">{expanded ? "Hide" : "Show More"}</div>
      </span>
    </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div data-v-9b42e670="" data-v-b8331378="">
              <div data-v-167d7264="" data-v-9b42e670="" z-index="10000"></div>
            </div>
            <div data-v-167d7264="" data-v-b8331378="" className="matchFail"></div>
            <div data-v-2a5a3605="" data-v-b8331378=""></div>
          </div>
          <div data-v-118c888b="" role="tablist"
            className="van-tabbar van-tabbar--fixed van-hairline--top-bottom van-safe-area-bottom tabbar">
            <div data-v-118c888b="" role="tab" className="van-tabbar-item van-tabbar-item--active" tabindex="0"
              aria-selected="true">
              <div className="van-badge__wrapper van-tabbar-item__icon"></div>
              <div className="van-tabbar-item__text">
                <div onClick={() => navigate("/")} data-v-118c888b="" className="icon x-row x-row-middle-center active"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/home-active-be96450d.svg" className="img active" /></div>
                <p data-v-118c888b="">Home</p>
              </div>
            </div>
            <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
              <div className="van-badge__wrapper van-tabbar-item__icon"></div>
              <div className="van-tabbar-item__text">
                <div onClick={() => navigate("/order")} data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/order-f99e3cb7.svg" className="img" /></div>
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
                <div onClick={() => navigate("/task")} data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
                  src="https://arbpay.me/assets/task-a7f58389.svg" className="img" /></div>
                <p data-v-118c888b="">Rewards</p>
              </div>
            </div>
            <div data-v-118c888b="" role="tab" className="van-tabbar-item" tabindex="0" aria-selected="false">
              <div className="van-badge__wrapper van-tabbar-item__icon"></div>
              <div className="van-tabbar-item__text">
                <div onClick={() => navigate("/main")} data-v-118c888b="" className="icon x-row x-row-middle-center"><img data-v-118c888b=""
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

export default Home;
