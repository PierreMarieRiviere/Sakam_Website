import React from "react"
import { useEffect } from "react"
import classNames from "classnames"
import Faq from "react-faq-component"

const Questions = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  )

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  )

  const data = {
    title: "Knowledge Base",
    rows: [
      {
        title: "Do consumers need to pay to use the service?",
        content: `No. Sakam does not charge consumers to apply for a loan. The service is 100% to use for consumers.`,
      },
      {
        title: "Do banks / MFIs pay to use the marketplace?",
        content:
          "Sakam does not charge any setup fee or recurring fee to use the marketplace. Banks / MFIs are required to pay a commission only if they effectively disburse a loan to an applicant fetched from the marketplace. The fee is 1% of the loan principal requested by the applicant.",
      },
      {
        title: "Can banks customize the chatbot / consumer app?",
        content: `No. The chatbot is fully controlled by Sakam. However, when we integrate a new lender to Sakam, we analyse its lending policies and service terms to reflect them in the chatbot.`,
      },
      {
        title: "How does Sakam find loan applicants?",
        content:
          "We advertise on social media and through other channels. All advertising costs are paid by Sakam!",
      },
      {
        title: "What are the steps for a bank / MFI to join the marketplace?",
        content:
          "Simply contact us to get your login credentials. Before you can start accepting applicants, you will be required to (1) sign a service agreement, (2) disclose your lending policies and service offer so we can reflect them in our chatbot and (3) Train at least one head office staff to use the platform.",
      },
      {
        title: "Do you work with banks and microfinance only?",
        content:
          "Yes. Your company must be licensed by the National Bank of Cambodia to use Sakam.",
      },
    ],
  }

  const styles = {
    bgColor: "#151719",
    titleTextColor: "#0476fc",
    rowTitleColor: "#0476fc",
    rowContentColor: "#9ca9b3",
    arrowColor: "#1cb68b",
  }

  const config = {
    animate: true,
    arrowIcon: "V",
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </section>
  )
}

export default Questions
