import "./style.scss"
import iconChat from "../../img/icon-chat.png"
import iconMoney from "../../img/icon-money.png"
import iconSecurity from "../../img/icon-security.png"

import FeatureItem from "../FeatureItem"

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        img={iconChat}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        img={iconMoney}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        img={iconSecurity}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money
        is always safe."
      />
    </section>
  )
}

export default Features
