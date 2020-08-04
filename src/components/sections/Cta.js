import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import Input from "../elements/Input"
import emailjs from "emailjs-com"
import { useAlert } from "react-alert"

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [email, setEmail] = useState()

  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  )

  const alert = useAlert()

  function sendEmail(e) {
    console.log("Email: " + email)

    const eligibleLenders = [
      "apmfi.com.kh",
      "amatakcapital.com.kh",
      "amkcambodia.com",
      "apf.com",
      "apf-mfi.com",
      "atom-cambodia.com",
      "baitangplcrice.com",
      "bamboomfi.com",
      "bayoncredit.com.kh",
      "bnkcmfi.com",
      "borribo.com.kh",
      "camma.com.kh",
      "chailease.com.kh",
      "chamroeun.com",
      "citymfi.com",
      "cmk.com.kh",
      "delta-plc.com",
      "eapcredit.com",
      "farmerfinancemfi.com",
      "firstfinance.biz",
      "funan.com.kh",
      "futaba.microfinance.com.kh",
      "gcmfi.com.kh",
      "iprmfi.com",
      "jcfinance.com.kh",
      "khemarak-mfi.com",
      "khmercapital.com.kh",
      "ibpmicrofinance.com",
      "ledmfi.com",
      "lyhourmfi.com.kh",
      "maxima.com.kh",
      "mohanokor.com",
      "mfjapan.com",
      "niron.com.kh",
      "nhfinance.com.kh",
      "orofinancecorp.com",
      "pgdevelopmentbank.com",
      "prasethpheapfinance.com",
      "www.primemf.com",
      "key-mfi.com",
      "royalmicrofinance.com",
      "sabaycredit.com.kh",
      "sahakamfi.com",
      "sahakrinpheap.com.kh",
      "sambatfinance.com",
      "fasmecmicrofinance.com.kh",
      "samrithisak.com",
      "seilanithih.com.kh",
      "sereyoudom.com.kh",
      "sonatrafinance.com.kh",
      "tacamfi.com.kh",
      "vithey.com.kh",
      "welcomefinance.com.kh",
      "ycp.com.kh",
      "wbfinance.com.kh",
      "chokchey.com.kh",
      "ibk.co.kr",
      "acledabank.com.kh",
      "ababank.com",
      "agribank.com.kh",
      "bicbank.com.kh",
      "bangkokbank.com",
      "bidc.com.kh",
      "bankofchina.com",
      "bankofindia.co.in",
      "bkb.com.kh",
      "bredcambodia.com",
      "cab.com.kh",
      "mekongbank.com",
      "cambodiapostbank.com",
      "online.com.kh",
      "campubank.com.kh",
      "canadiabank.com.kh",
      "cathaybk.com.kh",
      "chiefbank.com.kh",
      "chipmongbank.com",
      "cimb.com.kh",
      "online.com.kh",
      "ftbbank.com",
      "hlb.com.kh",
      "hlbkh.hongleong.com",
      ".icbc.com.kh",
      "kasikornbank.com",
      "ktb.co.th",
      "maybank.com.kh",
      "mbbank.com.vn",
      "megabank.com.tw",
      "phillipbank.com.kh",
      "ppcb.com.kh",
      "princeplc.com.kh",
      "rhbgroup.com",
      "sacombank.com.kh",
      "sathapana.com.kh",
      "tcb-bank.com.kh",
      "ucb.com.kh",
      "vattanacbank.com",
      "aeon.com.kh",
      "ancogroups.com",
      "angkorcapitalbank.com.kh",
      "asiapacificbk.com",
      "camkobank.com",
      "camcapital.biz",
      "fibank.com.kh",
      "khmerbank.com.kh",
      "owbank.com.kh",
      "phsmebank.com",
      "online.com.kh",
      "scb-bank.com",
      "wingmoney.com",
      "amkcambodia.com",
      "amret.com.kh",
      "hkl.com.kh",
      "kredit.com.kh",
      "lolc.com.kh",
      "prasac.com.kh",
      "wvi.org",
      "elinleasing.com",
      "rmagroup.net",
      "gl-f.com",
      "ifinanceplc.com",
      "lyhourleasing.com",
      "megaleasing.com.kh",
      "rmagroup.net",
      "ttfc-kh.com",
    ]
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "template_7s6SRr4y",
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          const domain = email.split("@")[1]
          console.log("domain " + domain)
          if (eligibleLenders.indexOf(domain) > -1) {
            alert.show("YOUR COMPANY IS ELIGIBLE!")
          } else {
            alert.show("SORRY, YOUR COMPANY IS NOT ELIGIBLE")
          }
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Check now if you're is eligible to a Sakam account!
            </h3>
          </div>
          <div className="cta-action">
            <form
              className="contact-form"
              onSubmit={sendEmail}
              onChange={e => setEmail(e.target.value)}
            >
              <Input
                id="newsletter"
                type="email"
                label="Subscribe"
                labelHidden
                hasIcon="right"
                placeholder="Your professional email"
                name="email"
              ></Input>
              <span>
                <input className="submitEmailButton" type="submit" value=">" />
              </span>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
