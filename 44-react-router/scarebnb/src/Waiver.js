import React from 'react'

class Waiver extends React.Component {

  redirect = () => {
    window.location.replace("https://clowns4kids.com/rental/petting-zoo/")
  }

  clickAccept = () => {
    this.props.signWaiver()
  }


  render(){
    return (
      <div>
        <div className="waiver-text">
          <p>{text}</p>
        </div>
        <button onClick={this.clickAccept} >I accept</button>
        <button onClick={this.redirect}>I decline</button>
      </div>
    )
  }
}

export default Waiver


const text = `THE AGREEMENT

(RELEASE AND WAIVER OF LIABILITY; ASSUMPTION OF RISK: AND INDEMNITY AGREEMENT)

WARNING! YOU WILL NOT BE ALLOWED INTO ANY HAUNTED HOUSE UNLESS YOU UNDERSTAND AND AGREE TO ALL TERMS OF THIS AGREEMENT (WHICH IS REFERRED TO ON THE BACK OF ALL TICKETS) AND ACKNOWLEDGE YOUR FULL ACCEPTANCE OF THIS AGREEMENT BY ELECTRONICALLY SCANNING YOUR FINGERPRINT BEFORE ENTERING. WHEN YOU SUBMIT TO THE ELECTRONIC SCANNING OF YOUR FINGERPRINT AND ENTER, THE BEAST, THE EDGE OF HELL, THE MACABRE CINEMA AND/OR THE CHAMBERS OF POE (the “HAUNTED HOUSE INTERACTIVE THEATRES”), YOU AGREE THAT YOU WILL HAVE NO RIGHTS TO SUE IF YOU ARE INJURED!

I. Assumption of Risk.You and every person who enters THE BEAST, THE EDGE OF HELL, THE MACABRE CINEMA and/or THE CHAMBERS OF POE (hereinafter “Haunted House Interactive Theatres”) acknowledges that the Haunted House Interactive Theatres are unique and interactive environments, designed to maximize the fright and anxiety experienced by patrons, and that such environments have certain, inherent, known and unknown, obvious or non-obvious risks, including, but not limited to: falling; sliding; tripping; slipping; and being struck or hit by moving objects; props or people; or being tangled in ropes or cords. These risks may cause serious physical injury or even death. You further acknowledge and assume the risks from the presence of, and exposure to, the following risks: 1) fog, dust or smoke; 2) uneven floors; 3) moving, slippery floors; 4) obstacles and obstructions on, in or along paths and walkways; 5) dark, winding and fast slides; 6) dimly lit stairs; 7) swinging bridges; 8) sudden motions or movements; 9) snakes, reptiles, horses and other animals; 10) darkness; 11) loud noises that may cause loss of hearing; 12) loud and violent air blasts; 13) electrical shock; 14) bright lights; 15) strobe lights; 16) equipment failure; 17) cable, harness or mechanical failure at the Bat Pole, Zipline, Hay Ride or Free Fall/Rappelling equipment; 18) objects or other people falling on, jumping, or striking you; 19) any acts by you or others because of fear, anxiety, dizziness, asthma, impaired vision, and any other physical or emotional condition; 20) the failure of any safety device or procedure; 21) frightening statements and conduct; 22) unpredictable and surprising situations; 23) sudden and extreme changes in temperature; 24) becoming wet; 25) friction burns and other abrasions, scratches, burns and other contusions; 26) ANY ACT OF NEGLIGENCE, whatsoever, by any person working at the Haunted House Interactive Theatres, in addition to any and all other activities techniques or procedures designed to frighten patrons.YOU MUST PAY ATTENTION AT ALL TIMES. IF YOU DO NOT ASSUME AND ACCEPT ALL RISKS FOR POTENTIAL INJURY, YOU DO NOT HAVE PERMISSION TO ENTER THE HAUNTED HOUSE INTERACTIVE THEATRES.

II.Release and Waiver of Liability.By entering the Haunted House Interactive Theatres, you agree that you have read this Agreement and all other warnings, and you agree to accept all risks, both specifically identified above and unknown, and to RELEASE and WAIVE Full Moon Productions, Inc. and the Haunted House Interactive Theatres, individually and as a group, and any of their business and/or building owners, employees, agents, affiliates, volunteers, and any  representatives from any and all claims, rights and damages arising from ANY AND ALL NEGLIGENCE WHATSOEVER and any RECKLESS ACTon the part of the aforementioned parties, or their representatives. You further agree to release, waive and discharge the aforementioned Full Moon Productions, Inc., the Haunted House Interactive Theatres, the business and/or building owners, and all their employees, volunteers, and representatives from any and all other claims, whatsoever, that may be waived pursuant to Missouri law. IF YOU DO NOT RELEASE AND WAIVE ALL LIABILITY OF THE PARTIES IDENTIFIED IN THIS SECTION, YOU DO NOT HAVE PERMISSION TO ENTER THE HAUNTED HOUSE INTERACTIVE THEATRES.

III. Indemnity.You also agree to indemnify and hold harmless all parties and persons referred to in Section II., above, from any expenses, including attorney’s fees, relating or resulting in any way from your entry into and involvement within the Haunted House Interactive Theatres. In the event that you buy a ticket, provide another person with money to buy a ticket, or deliver a ticket for use in any Haunted House Interactive Theater to another person, you agree to indemnify and hold harmless the parties referred to in Section II., above, from any claims by those persons and you agree to be responsible to make certain that those persons to whom you buy, give or
deliver tickets are aware of all warnings and agree to all terms of this Agreement.IF YOU DO NOT AGREE TO THIS INDEMNITY PROVISION, YOU DO NOT HAVE PERMISSION TO ENTER THE HAUNTED HOUSE INTERACTIVE THEATRES.

IV. Arbitration.If, for any reason, any user of any ticket to the Haunted House Interactive Theatres does not waive or release any claim as provided in Section II., above, the user must mediate such claim with the parties named in Section II., above, and, if the dispute or claim is not resolved by mediation, the ticket user waives the right to any trial or proceeding in any court and must submit their dispute to binding arbitration under the rules of the American Arbitration Association.

V. Physical and Medical Condition.By entering any of the Haunted House Interactive Theatres, you affirm and represent the following: 1) that you are not pregnant; 2) that you are not under the influence of drugs or alcohol; 3) that you do not suffer from heart conditions, seizure conditions, asthma and/or other respiratory condition or any other type of mental or physical medical problems; 4) that you are not presently in a cast; and 5) that there are no other reasons why you should not enter the Haunted House Interactive Theatres.

VI.Children Under 12 Years of Age.No person under the age of 12 will be allowed into any Haunted House unless they are accompanied by an adult(s), who is/are fully responsible for the conduct and the safety of the child, and who agrees to indemnify and hold harmless the parties identified in Section II., above, from any cost or expense, including attorney’s fees, resulting from any injury to any child they accompany into any Haunted House Interactive Theater.
VII. Video Release.You hereby grant to Full Moon Productions, Inc., its contractors, co-producers, and/or assigns the irrevocable right and permission to videotape you eintering and within the Haunted House Interactive Theatres, which may be used for advertising, including television commercials, website videos, posters, evidence in a court of law, and for any other reason.You hereby release, discharge and agree to hold harmless Full Moon Productions, Inc.,
from any claims whatsoever arising out of the videotape, including claims for libel or invasion of privacy. You hereby warrant that you are of full legal age and have the right to contract in your own name. That you have read the above authorization, release and agreement, prior to its execution, and you are fully familiar with the contents thereof. This release shall be binding upon you and your heirs, legal representatives and assigns.

AGAIN, NO PERSON MAY ENTER ANY HAUNTED HOUSE INTERACTIVE THEATER UNLESS THEY FULLY AGREE TO EVERY PROVISION OF THIS AGREEMENT. NO REFUNDS WILL BE ALLOWED.`