import React from "react";
import { useNavigate } from "react-router-dom";

const AddPaymentMethod = () => {
    const navigate = useNavigate()
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
                <div data-v-5feb3225="" className="x-register" >
                    <div data-v-5feb3225="" className="x-register-content">
                        <h1 data-v-5feb3225="" className="title">Select the receiving bank</h1>
                        <div data-v-729787a8="" data-v-5feb3225="" className="bank-list" >
                            <div data-v-729787a8="" style={{display:"none"}} >
                                <h3 data-v-729787a8="">Please select payment account:</h3>
                                <p data-v-729787a8="" className="txt">Please be sure to use the selected platform for
                                    payment, otherwise the payment will fail 100% and you will bear the loss yourself.
                                </p>
                            </div>
                            <div data-v-729787a8="" className="item select mt8"></div>
                            <div data-v-729787a8="" className="item select mt8">
                                <div style={{cursor:"pointer"}} onClick={()=>navigate("/authorizekyc")} data-v-729787a8="" className="x-row x-row-between bgphonepe"><span
                                        data-v-729787a8="">Phonepe</span><img data-v-729787a8="" className="banklogo"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATQSURBVHgB7Zvhldo4EICHe/f/nAriqyCbCo5UEK6CkApgKwAqgK2AvQoWKjBXAbsVmFQAqWAysxqFiSNbI2KyTp6/9/S8yCNppJFGI8EC9PzWDKBFEHFIj/eU+JlTyuTVidIjpQOl7WAw2EDPrwEZNaM0o3REOyWlNaUceroLGWiUaNiQoafQ0z3IMEtsjzWlDHq6gRgkBK/mOaWhpBLt7HsjdwB0+63JSPT3Daa58AfoeTnIAGODkdjIeWIZTb8nvwRsNLS73LJi5CnaOWIfXf98sNk1W4w8Tyi7hp5WMF90sMHAXV6kcKD0ji42DlLHPT0+GMu+onKnmJBMotx/pjK7gMwI3KXLzuvSddDFMjmcL4seLeNxaWPDhtW2Qee+61JWU2fMbU8jOk0wHMCVlGYV2VLeHbHjkTq6u4WiZkzWeI3tiypdYT0XuVMxfhObSPkYSyVbqvwcOgzpdx/pF/fFPEn/NMq9aXjHUTI/n8iFrERJVkCvwJ13nejcJd9Xx5T8B+xwW0+UuO6Jz6O2tiGX/QvBk/wOnKueyZMT93duqcBq4JvI+zG4/XYlnzNRSLNTdY0hDt9xZ8Z9Zyt7604m20S1tavIsufw/TlQucdQhTJJWS4H17faPVC8AstmBtkbOI/nITIBn9TCONCjkHyOY+YVXUfy8STtH8AK2iiVfNX9ztW7lGg6N+qUq/xxtV1sPt6tseLysH5/XxrlmGocwGNSBORKPE+4qoueq/xMl1H5s6b2rSv4d2YMbtbf8gcZmHmNLLt9jtRv5fOqoV6eyJ/9tgVu9eUBOc4rSPbvJm/F79B5p6/Q53GDrs/t/wE2rhOev0y7C0rvQAwqTNUqHqv8u4is5l9Kb6V+z/MqkhWaS94B3NFxIPUzGdi2rSoT9Te3+0r08LwHC+iuH2MclTy7k2ONq7G66GNEJ02u8h9U/lTyyhpZ3S++N/9ma6m0V6hXw6oOFdlSt4fu6OPZKDndng9Q61z0ROXvA2OQBfp1tLro/yEeaLFRc97cxZ18BBcM8CrcQTqPCbJrdEGIv9DwbCLltIfIoNljfILL0Tq9VobT+X8Fyn0g2TciN1T5dwHZqZpnvt7MamDrYLPLeHZn8rOc2AA3sU2QHQbyFh29tdJRdIwcvt+3OUK+D8jOQhVYDcyG4ggydnblWXQiBRbw46RMDp6APGj+t1+LDp9/Wb/bmvxQXg7n49d/1K85hPkoMpqTycDictktzAzivMdORbmTKLhtUCzEfcrqI9m3cAXw23P4a2iHU8Lku6tZrV/rgvOi24SicGsUzazAHtX6PYP3RKs70rThAZKRSaX7WKC7M+fr2KHKT4kPGO2NhlKnf3IbBVyG1mMtdXJAt5RALzefg2UV88Av4br8zL0zNGF1H0P75SL1Wx01dt4DtjWG7Op5cvibrFHlffriwvhleAgO2/0xpOnHevsEPfYyS6NlZJWUWLmol9nu8/Vt0hi/v/3iY9/UogO6lRlqL1RvgXLsCpQdGfoWuiHjsnO4BHRnXMu5OJUSO/ZNj/T1pm29pN4cWgYbvp5NrYgVfMD22HfNuD2Q/MVBHSvo6S7o3MIl+3KBat/r6Thi6LEYLvQV2lHe1V3W91yBVv+7UCNG9IY8Xe0HYz2NfAFEEAayRc0j/wAAAABJRU5ErkJggg=="/>
                                </div>
                                <div  style={{cursor:"pointer"}} onClick={()=>navigate("/authorizekyc")} data-v-729787a8="" className="x-row x-row-between bgpaytm"><span
                                        data-v-729787a8="">Paytm</span><img data-v-729787a8="" className="banklogo"
                                        src="data:image/png;base64,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"/>
                                </div>
                                <div style={{cursor:"pointer"}} onClick={()=>navigate("/authorizekyc")} data-v-729787a8="" className="x-row x-row-between bgfreeCharge"><span
                                        data-v-729787a8="">FreeCharge</span><img data-v-729787a8="" className="banklogo"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPWSURBVHgB7ZvhdeIwDIDFvft/uQ3SCQoTNBu0TFA6QXMTQCdob4KmE7SdIHQCYAK4CWADnURkIoxSAhQKPH/v+VFHtizHtiwbChAIHApETCg9Q+DL+AFHgAxsTn9y+g2B84AGtUNpjMukEDhdaAAjSl1KU7RJIHB61BhYRwSB02GDgWUGEPhSfsKekJV4T4n31Lqr8gMCxw0NbMxHHazPVMo3IXC8oBx1NhzYHoY997gJA3umbDGwXLZToYsDsXsIfD9bDKxbtbGhS0fYOQS+D7RvnTZhgOKW0T469Yw2b6RNnWIlz9Vz1t+tUb+zRp56Om6x7PczelsL5V+17WJHx+jLo2+/p0Pb8GiUSUS3e5dNQ+73pVfrmCQG31KKYXvYoC7pmoF9dOobdRL5fHEPGo3GxJNnlP6Jbby3v6gyTb++186ncnmJmaQR2y9t9TwbPqR8JDonSg4yqB0o+rwiFx19aYPLptKPoarPHu4vpQcoxuKV0oXXl0jKrPSlFlgcgXglZ7jbaraIjPZySm8VtjSlXtPKy7PXqvo15dx+rvLc91TlI2kzkXxi9YXrYOllOp7M1xHrvDx7RvUtm9R50u1IfmWba8AOiBE3lK6gXA3bMKTZ2jL0u5utoXy+U7k3kXG7PIsfRHZNKSL5hVefX8JEHk1IfreBHOnjjp5lYCD9z1X9SHS0vHJjsZPLz0ieGjp45c1cPyi1qNxMykzFjjc98JTvKz2sI1a2cDvtnW6ypIG+NBBLB67lc5Nj0MoNFpburmqFsYxfwJW0x+X+GGUyKNwqM6krx3Kv9Ov49VnuXPyt2ARKT4c/eZKId/ll6GAuoXTVbTW4McjEkXfiVilP+panh+uOati9O7gcFFSRY8W3R1XuTskX7hWLLSP35Csue0O5c503ko/FXn8L0C6c5U+enrHX54EnX7hWLO4H8go7EmVHhmpr8cto9nYXzaubGmzTn84N+mTaHRrMV6ibyQYxpXeni9L85bvABMqAsKkGZaLc2qdybpees64uFoGhCzK1PdyvkWfzIsjBcr9tS715oAnLXCodmbSXVNjh7Gav9eK1O9eFyvNoF743ZFZamGdjVc8MGpR8sbokP78hW9PuOrm/+ppqBU5x9WgyxXKFW0Ee19XBkQugIk9HqvKDNXYwOS4fF9N1fdkrWB1xn8TlBn4yEQ+JTJBNYpvDgOV+apFA4PTBwuVahF9RngNYRHrWrzpSCOyNg/1sVqLhB0M0hMD5gN43URA4L7A8TpxMFH3KHPw/G+Qiwl0GjCBwfkjANUZ1URE4M+RsHEMgENie/www7zmr+GzzAAAAAElFTkSuQmCC"/>
                                </div>
                                <div  style={{cursor:"pointer"}} onClick={()=>navigate("/authorizekyc")} data-v-729787a8="" className="x-row x-row-between bgmobikwik"><span
                                        data-v-729787a8="">Mobikwik</span><img data-v-729787a8="" className="banklogo"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVoSURBVHgB7VnrceM4DEZu7v/5KjheBesStBWct4LlVhClgjgVxKlATgVOKpA7SDqQrwKnAxyxAmMIIiXKVm53dvjNcMQHQIL4+IAkgIyMjIyMjIxfCoh479IKMn4oruAD4Igt3ONwdXV1iLQv3MO4tHTpk8jT88bpbSBjFvwOHwPjSNr7giPUQkvkktNiQHfFC4AWyBYyLsIsBDtCDJx24F8u3SmRW25LwZ6flev31ZH8ChlnYxLBvLMKaMnyO5Lyckd+c6S8jXRFpH1hvVrpS90FZPx/cAQ3OIwmUc+Itq1qoyN6zfklZFyE32AazEj7HYxjGwu+GG9inLGTIApaRC7VLu345EnVu2ada1W/lAtzQH/WRcnjkj2VnwfXNfSmAnMCz9i9rNeEdi+36R3siUFuL3hHW5gAkhd9FhP0eraKvprYYqF6l15Y7glmApPrseK6d5+N6U/dwUO4E0YVGF7tY7sXuN2vVJrAisvVFKIuwCO0J8ejsNWIZ49gJp1iCb97jzAfnl06QBt8Tg445yJ4r15pYkfH2BHuj2TDz4Mo0+Q+POhy81i79KdLNkU+QC7ZeQMzgfzq0t8ufR7bHCHMRfA3n+GjNHQPbRMM9CvUE2n4+cR1r3w6lNjeSRXnDSQA2wBuUI+viDWm3beaXNr9RMSbuFpCO34ZG4OP+tJfSbo8YZ7J8lIxhErJNPL+EnWyvBB5eQfX7GCNmh22wzjuVb/yDrbcRwi3yn4v14i6tZA3fg54unMJW9XPkes3AT823HZEtQCU3QtVNtpngb5vhfy0T8UYhokYJ+s3Ik8EWlGWBFfYEkkgMksxKenMI8vu8ORIQh2xxcvUrFdjF6XQ821RgrFPbohE389R1Rdq7EK1v8jxMby4ggRjl9wGE0822YFGbPdKYzoBF7YOtqIsCabJrDi/ihi+UWMa7BJWcr1VtlroO9oT/76TcJxgOl4luXXEV6WQKdT8MeRD7J5em8DYRvss4qMGp5LLnWgY0XYdalMyfgJW1EmCrXBMIWQab3jELtpRRymDXYKriJ50nuW6Wo+l5Brs42vEJo9NaC78lIurDPhvlGDskvuC4ti/JMi680ETD1yGhFRgdQvDINmFyH8PSOAUbD1GxqDo+5mLBvuBTVAP2uDNI/UDheHnFk5R/wbVBw62ac/F7wtAzeULPxdi7H/4+ZoaMWMbQ6y5SDqf5aficwk+QDtBD5qAgWFDqN3COOgbt1wYse/UIZsgoDME2d8fkA763k5vDndivB32j0W/sGg3F3Ca/55/ouy5/JV1Cy4/QDrWIm9A+fhcgh/U7l0n6IztXsIBWme9qToPM6D7yWcCq99EdGT9v5CGG//Oz/+tH0Rf+rMonRB+LhRT+B3qiX8WbTLi3cM0kA0Hzt/juR+E9N3EdRWGYYRModqsaHt/9eFyQ/eIGqMW95UJ2CWDk4rrbOxeCo3tnYKJr0kR+wj3qm2LEd9g9572McST0h+8g/EUVC5FHw1eEGRZCDtWYynkGtX2wgbJSLYRY9RqXLlAqC/LzqHxS+y+KhnWsYExC9GfJLcJkDWFYIPdOZYR20Nzq1W7Ve1JUTTXl7FxkoD9d7oK42iwdfI9poEI8K9IoffKdUIfVshLgncjdpqAw5MJZhm5gwjyo8sxZCP0STmOzNtwXZBg3YZioSUBuyH90O69FDYyPpFWB+Spbglhhzdsq8X+SUJ6BsIOl682fhc2I/4pQ3KyPjDeQti1DvTZGxvF362AvOzPwhQIIyvsrso5sGPDRz+v8SRo4kTiYkguULc8Uy8pMsf470SDw78aDcxoT6q9Wmn7AcQSGjwnKMjIyMjIyMjI+EnxH/RjJ/eVVpcMAAAAAElFTkSuQmCC"/>
                                </div>
                                <div  style={{cursor:"pointer"}} onClick={()=>navigate("/authorizekyc")} data-v-729787a8="" className="x-row x-row-between bgairtel"><span
                                        data-v-729787a8="">Airtel</span><img data-v-729787a8="" className="banklogo"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATYSURBVHgB7VvhdRshDJb7+r/uBnSCeoPSDdwJmkwQdwJfJkgygd0Jkk5gb5BkgrsN4k6gSoGriY7jDg5fnDx/7/EckAAdAiEEATjhXWMCBwYiTulnTukrJU2J88qSd5QebLqZTCYVnPA2QIrVlDYYh1tKCk44XiQq1kVJaQavBLY41uqc4IJX3kDFunh6DSVTnxdioik44f/APGFelDAiqL+5R4Y7eOP4CANgZ/gKjPOUG2wRFuR4XcM48JnlrzAAJP+ZbUNRYov0PbcjiS+dWEWJupjMYSjQmOQSD4sNjISWFZzcvx0fCQWZgcbncfHC8n2ABFhB+eMVHBYs/CgOD816Nsc3TlFF6RzeOKJNtB3wMZRbg/vbwQggJS/o+9Y2W1F+lH4PiZQ9+AryKHdL6RGM8n5C5gljJ+IMRFClaw8k+gPE9aNsP/VErAJtsNnedU0c26ay2V2sTMlo2VdiwJ524TO7vHJa6iiIAPGfYfi4tmlr09ZdUbrHwFENzVl5ie0nB95ausZq2tL/vYe3ROOw+WQJ7sFRsB+fCq9ixaA1ABFoGRwfvMrDptOoPTxzDB8JN5avS8FKtLvEbqw88gQVHGuiU9zvLaXzHqZxh019biEOf8CYSwabwfocK801528pfYEIsBLopxDFdTy9cmQIoXLqhdqt+ZRTxiv88WBHR4wDz/LFwPajPgSNFeB4tvbQFDZXnhY8ZQddgreVaYssvhU8a+ErBV/h0AtBexL1s5rovtGqDcbvnT4THdVGjz6kCV8IeinoWtAxRBe8vc7BaPbdF2Mn6DwuctxnDj3rOfiyg15R+kEmJCViI83/9gDXh9J7PYZLhZ8i/8LEW4+7EjwaeiJqD2bbj8YkXcB+cOo96JLoW0jHUuS7JpMXjnw8YRQchxJD0CL/DZtmX+YV9ET0OZiUWNBPUZubHKsMzRFAOUXrlMlC7fBq4H372JX6DPRvQXPodmY/QU8kXzaEFGtn4LSP8u1HuquX60SvXrsfrj2k2sIwNLwPfO7LmBSLboN1LPisxp5eif0u71m5ysn/SrQKV54ybuuz9Qm+Q/yx6zXwgxLLHELv42o2BeP+AuLMKeayq0CdpeC/tEH/2L7rc66L9YhXjanwhSyzxsCzKBgTbpeoDjtChVN0aff3FPisxG84clhFSmV2Wbwo5FrB0szWqMBz5eY4QzWGKLfuR0LB24CMfGVV8GBge8y1Ld57Ifiiol0BOZ5CAQPLsxE8haCXgq4FHUN0T3+d/NgMVCCGLzlkcGbmqZ/vFEGNXXs6aFPulcNTYsaHdfzhHjlWaCJFnJYeeiHaKDGgEE993SHTRvCXVk7Z7i02x2/hyL4QbWmnri/SVdp6w8fX8xEN5WLzxSX/rSAzMO5V5z02b3RKwaMFHUN0jzw60L9y+KYY9/xpJfpZtPANf/LkEexMCL7E/QyLvoBIkOe6Y3Ce76Sh37doQccQvaXNOfqVNxV8vAjW2C37Av13yYWHfzP4X1fQzBLtFLFTtQUTY2Vl1sLw8ed8MsIzGDSrQ4NxWDjq8xeMI/YQipBZhSmn6M6Vl5UF+5cb9QuRXt8j26Z6a2iXnfv5ZvuqwLx8Ccru1J3B3lF7gKHA5m1IYxb1meknHDGseSgdpd7bsuNy+U844b3hHzaEmxog/fupAAAAAElFTkSuQmCC"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AddPaymentMethod;
