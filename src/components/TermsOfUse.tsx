'use client'

import React from 'react'
import Link from 'next/link'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Iagentsflow.com
            </Link>
            <span>/</span>
            <span className="text-[#F47F21]">Terms of Use</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
            Terms of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
              Use
            </span>
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-lg border border-white/10 p-6 sm:p-8 space-y-6 text-gray-300">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-base sm:text-lg leading-relaxed">
                  By using the Services, you agree to these terms, the policies in our Privacy Policy and any community guidelines and supplemental terms provided to you for the Services that you use (collectively, &quot;Terms&quot;). Please read the Terms carefully, as they form your entire agreement with us.
                </p>
              </section>

              {/* Using the Services */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Using the Services</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Authority</h4>
                    <p className="text-base leading-relaxed">
                      You agree that you are permitted to use the Services under applicable law. If you are using the Services on behalf of a company, business or other entity, you represent that you have the legal authority to accept these Terms on behalf of that entity, in which case that entity accepts these Terms, and &quot;you&quot; means that entity. If you are accessing an account(s) on behalf of the account owner (e.g., as an administrator, consultant, analyst, etc.), the Terms apply to your activities on behalf of the account owner.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Indemnity</h4>
                    <p className="text-base leading-relaxed">
                      If you are using the Services on behalf of a company, business or other entity, or if you are using the Services for commercial purposes, you and the entity will hold harmless and indemnify the Infocomply Corp from any suit, claim or action arising from or related to the use of the Services or violation of these Terms, including any liability or expense arising from claims (including claims for negligence), losses, damages, suits, judgments, litigation costs and attorneys&apos; fees.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Member Conduct</h4>
                    <p className="text-base leading-relaxed mb-3">You agree not to use the Services to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-base">
                      <li>obtain or attempt to obtain unauthorized access to the Services or to our servers, systems, network, or data</li>
                      <li>make available any content that is harmful to children, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, hateful, or racially, ethnically, or otherwise objectionable</li>
                      <li>violate any applicable laws or regulations</li>
                      <li>impersonate any person or entity; or forge or manipulate headers or identifiers to disguise the origin of any content transmitted through the Service</li>
                      <li>make available any content that you do not have the right to make available or that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any person or entity</li>
                      <li>post content containing advertisements or other commercial solicitations without our prior written permission</li>
                      <li>make available viruses or any other computer code, files, programs or content designed to interrupt, destroy or limit the functionality of the Services or affect other users or</li>
                      <li>interfere with or disrupt the Services or servers, systems or networks connected to the Services in any way.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Use of Services</h4>
                    <p className="text-base leading-relaxed mb-3">
                      You must follow any guidelines or policies associated with the Services. You must not misuse or interfere with the Services or try to access them using a method other than the interface and the instructions that we provide. You may use the Services only as permitted by law. Unless otherwise expressly stated, you may not access or reuse the Services, or any portion thereof, for any commercial purpose.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Export Control</h5>
                      <p className="text-base leading-relaxed">
                        You agree to comply with the export control laws and regulations of the United States and trade controls of other applicable countries, including without limitation the Export Administration Regulations of the U.S Department of Commerce, Bureau of Industry and Security and the embargo and trade sanctions programs administered by the U.S. Department of Treasury, Office of Foreign Assets Control.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Anti-Corruption Laws</h5>
                      <p className="text-base leading-relaxed">
                        You agree to comply with all applicable anti-corruption laws including laws that prohibit unlawful payments to anyone for a corrupt purpose in relation to these Terms.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Ownership and Reuse</h5>
                      <p className="text-base leading-relaxed">
                        Using the Services does not give you ownership of any intellectual or other property rights or interests in the Services or the content you access. You must not use any branding or logos used in the Services unless we have given you separate explicit written permission. You may not remove, obscure, or alter any legal notices displayed in or along with the Services. Unless you have explicit written permission, you must not reproduce, modify, rent, lease, sell, trade, distribute, transmit, broadcast, publicly perform, create derivative works based on, or exploit for any commercial purposes, any portion or use of, or access to, the Services (including content, advertisements, APIs, and software).
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Software License</h5>
                      <p className="text-base leading-relaxed">
                        Subject to your continuing compliance with these Terms, we grant you a personal, royalty-free, non-transferable, non-assignable, revocable, and non-exclusive license to use the software and APIs we may provide to you as part of the Services. This license is for the sole purpose of enabling you to use and enjoy the benefit of the Services we provide, in the manner permitted by these Terms and any additional terms or guidelines. You may not reverse engineer or attempt to extract the source code of our software, unless applicable laws prohibit those restrictions or you have our explicit written permission. Our software may automatically download and install security or other updates without prior notification to you.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Support</h5>
                      <p className="text-base leading-relaxed">
                        Unless otherwise expressly stated, we do not promise to provide you with any support for the Services. If we provide you with support, it is at our sole discretion and does not mean that we will continue to provide you with support in the future.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Fees</h5>
                      <p className="text-base leading-relaxed">
                        We reserve the right to charge fees for use of or access to the Services (and any associated support), whether currently in existence or not, in our sole discretion. If we decide to charge fees, our payment terms will apply and we will provide you with prior notice.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Different Versions of the Services</h5>
                      <p className="text-base leading-relaxed">
                        Different features may be available in different versions of the Services and not all features may be available in your country or region. Also, not all features may be available if the user that you are communicating with is using a different version of the Services, or is using third party software.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-base sm:text-lg font-semibold mb-2">Anti-Abuse Policy</h5>
                      <p className="text-base leading-relaxed">
                        We prohibit sending unsolicited emails or messages using our Services. You may not in connection with the Services engage in commercial activity on non-commercial properties or apps or high volume activity without our prior written consent. You may not engage in conduct or activity that is disruptive to the Services or the experience of other users.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Account; Notices */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Your Account; Notices</h3>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Account Information</h5>
                    <p className="text-base leading-relaxed">
                      You may need an account to use some Services. You must ensure that your account information (that is, the information you provided when you registered for or subscribed to a Service) remains current, complete, accurate and truthful.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Access to Your Account</h5>
                    <p className="text-base leading-relaxed">
                      You are responsible for all activity that happens on or through your account. To protect your account, keep your password confidential. Do not reuse your account password with other services. Without prejudice to your statutory rights, if you forget your password and otherwise cannot validate your account to social login, you acknowledge and agree that your account may be inaccessible to you and that all data associated with the account may not be retrievable.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Notices</h5>
                    <p className="text-base leading-relaxed">
                      InfoComply Corp may provide you with notices, including service announcements and notices regarding changes to these Terms, by, but not limited to, email, regular mail, text message or SMS, MMS, push notification or in-app message, postings on the Services, telephone, or other reasonable means now known or hereafter developed. You consent to receive these notices by any and all of the foregoing means. You may not receive notices if you violate the Terms by accessing the Services in an unauthorized manner, and you will be deemed to have received any and all notices that would have been delivered had you accessed the Services in an authorized manner.
                    </p>
                  </div>
                </div>
              </section>

              {/* Copyright */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Procedure for Copyright or Other Intellectual Property Infringement Claims
                </h3>
                <p className="text-base leading-relaxed">
                  We respect the intellectual property of others, and we expect our users to do the same. We may, in appropriate circumstances and at our discretion, disable, terminate, and/or take other appropriate steps relating to the accounts of users who may be infringers.
                </p>
              </section>

              {/* Warranties and Disclaimers */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Warranties and Disclaimers</h3>
                <p className="text-base leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, we, along with our parent companies, subsidiaries, affiliates, officers, directors, employees, contractors, agents, partners, licensors and distributors (collectively infocomply entities) do not make any representations, promises, or warranties, express or implied, about the services. We provide our services &quot;as-is,&quot; &quot;with all faults,&quot; and &quot;as available.&quot; Your use of the services, including content within the services, is at your own risk and we do not represent, promise, or warrant that the services will be uninterrupted, timely, secure, or error-free. You understand and agree that no data transmission over the internet or information storage technology can be guaranteed to be secure, and we expressly disclaim any warranties, express or implied, to that effect. We make no commitments, promises or warranties about the content within the services or content linked from the services, the support we provide for the services, the specific functions of the services, the security of the services, or the services&apos; reliability, quality, accuracy, availability, or ability to meet your needs, provide certain outputs or achieve certain results.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Some jurisdictions provide for certain implied warranties, such as the implied warranty of merchantability, fitness for a particular purpose and non-infringement. To the fullest extent permitted by applicable law, we disclaim any and all implied or express promises or warranties about the services.
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Comply with our legal obligations or the legal obligations of our customers</h5>
                    <p className="text-base leading-relaxed">
                      This includes responding to a legally binding demand for information, such as a warrant issued by a law enforcement entity of competent jurisdiction, or as reasonably necessary to preserve InfoComply&apos;s legal rights.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">A word about location data</h5>
                    <p className="text-base leading-relaxed">
                      As discussed above, we may collect information about your broad geographic location (city-level location) when you are using our Products or have them installed on your device. We use this information for service-related purposes (for providing right data entry forms related to privacy regulations), supporting compliance (such as by telling us where you&apos;re located, which can determine what laws or regulations apply to you), and suggesting customizations to your experience with our Products (e.g. your language preference). We do not &quot;track&quot; you using location data and we only use this information in connection with providing the best experience with the Products to you.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">What role do service providers play?</h5>
                    <p className="text-base leading-relaxed">
                      Note that we may use third-party service providers and our affiliated entities to help us do any of the things discussed here, and they may have access to Personal Data related to the specific activity they are doing for us in the process. We forbid our service providers from selling Personal Data they receive from us or on our behalf, and require them to only use Personal Data in order to perform the services we have asked of them, unless otherwise required by law.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Does InfoComply sell Personal Data?</h5>
                    <p className="text-base leading-relaxed">
                      Depends what you mean by &quot;sell.&quot; We do not allow marketing companies, advertisers, or anyone else to access Personal Data in exchange for payment. Except as described above, we do not allow any third parties access to any Personal Data we collect in the course of providing services to users. We do not allow third parties to use any Personal Data obtained from us for their own purposes, unless it is with your consent. So in our humble opinion, we don&apos;t think most of our users would see us as selling their information, as that practice is commonly understood.
                    </p>
                    <p className="text-base leading-relaxed mt-3">
                      That said, InfoComply does use certain standard advertising tools which require Personal Data (think, for example, Google Ads and Google Analytics). We use these tools to help us improve your advertising experience (such as serving advertisements on our behalf across the Internet, serving personalized ads on our website, and providing analytics services). Sharing Personal Data with the third-party provider while using these tools may fall within the extremely broad definition of the &quot;sale&quot; of Personal Data under certain state laws because those companies might use Personal Data for their own business purposes, as well as InfoComply&apos;s purposes. For example, Google may use this data to improve its advertising services for all companies who use their services. (It is important to note advertising programs have historically operated in this manner. It is only with the recent developments in data privacy laws that such activities fall within the definition of a &quot;sale&quot;). If you opt out of &quot;sale&quot; of your info, your Personal Data that may have been used for these activities will no longer be shared with third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Limitation of Liability</h3>
                <p className="text-base leading-relaxed mb-4">
                  To the fullest extent permitted by applicable law, you agree and understand that infocomply corp entities will not be liable for: any indirect, special, incidental, consequential, treble or other multiples of damages, exemplary or punitive damages arising from or in connection with these terms or your use of the services. Infocomply entities are not responsible for any lost profits, lost revenues, lost business opportunities, diminution in value, including any alleged loss or diminution in value of personal information, or any other losses (collectively, &quot;losses&quot;) arising from or in connection with these terms or your use of or access to the services, including, but not limited to, losses resulting from or in connection with: the deletion of, alteration of, mis-delivery of, or failure to store data maintained or transmitted by the services; the limiting, suspension or termination of your account; your downloading or sharing of information, including personal information, via the services; the unauthorized access to your account or any data maintained or transmitted by the services; links provided by the services or third parties to external sites or resources; your dealings with or participation in promotions of advertisers found on or through the services; or any good or services sold by such advertisers. Infocomply entities will not be liable for problems caused by others, the wrongful or unlawful actions of third parties, or an act of god. The limitations and exclusions in these terms will apply whether or not we have been advised of or should have been aware of the possibility of any losses arising.
                </p>
                <p className="text-base leading-relaxed">
                  To the fullest extent permitted by law and except as otherwise stated, infocomply corp entities are not liable in connection with any disputes that arise out of or relate to these terms or services for any amount greater than the amount you paid to us for the services.
                </p>
              </section>

              {/* Feedback */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Feedback</h3>
                <p className="text-base leading-relaxed">
                  You agree that any recommendation, idea, proposal, suggestion, feedback or other input (&quot;Feedback&quot;) you submit to us related to our products, services, websites, apps, or technology may be used by us without any notice, obligation, restriction, reimbursement or compensation to you and you waive (or agree not to enforce) any and all rights that may now or in future exist (including moral and equivalent rights) in any Feedback.
                </p>
              </section>

              {/* About these Terms */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">About these Terms</h3>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Third Party Beneficiaries and Conflicts</h5>
                    <p className="text-base leading-relaxed">
                      These Terms control the relationship between you and us. They do not create any third party beneficiary rights. If there is a conflict or inconsistency between the terms in this document and the additional terms associated with a particular Service, the additional terms will control solely for that conflict or inconsistency.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Modification of the Terms</h5>
                    <p className="text-base leading-relaxed">
                      Unless stated differently for your country, we may modify the Terms from time to time. Unless we indicate otherwise, modifications will be effective as of the date they are posted on this page or any successor page. You should look at the Terms regularly. We will provide notice of material modifications.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Continued Use of the Services</h5>
                    <p className="text-base leading-relaxed">
                      You may stop using the Services at any time, but your continued use of or subscription to a Service after the effective date of any modifications to the Terms or the means that you agree to the Terms as modified.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Waiver and Severability of Terms</h5>
                    <p className="text-base leading-relaxed">
                      Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision. If any provision (or part of a provision) of these Terms is found to be invalid, you and we nevertheless agree to give effect to the intentions as reflected in the provision, and the other provisions of these Terms remain in full force and effect.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Assignment by Us</h5>
                    <p className="text-base leading-relaxed">
                      We may freely assign these Terms and all of the policies and other documents incorporated or referenced in it (including all rights, licenses, and obligations under it or them), in whole or in part and without notice, for any reason, including for the purpose of internal restructuring (for example, mergers or liquidations).
                    </p>
                  </div>
                </div>
              </section>

              {/* Fee-Based Services and Billing */}
              <section className="border-t border-gray-700 pt-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Fee-Based Services and Billing</h3>
                <p className="text-base leading-relaxed mb-4">
                  Unless otherwise specified in the additional terms that apply to the Services you are using, the terms in this Section apply to you.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  We offer products and subscriptions for a fee (&quot;fee-based Services&quot;). These fee-based Services are governed by the additional terms you agree to when you register for the fee-based Service and these Terms. If you register for a fee-based Service, you must designate a payment method and provide us with accurate billing and payment information and you have the continuing obligation to keep it up to date.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  The following important provisions apply to all of our fee-based services:
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Third-Party products</h5>
                    <p className="text-base leading-relaxed">
                      If the fee-based Service includes a third-party product, you understand and agree that your purchase and use of the Service is also subject to the third party&apos;s terms of service and privacy policy, which you should read thoroughly before agreeing to them.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Payments</h5>
                    <p className="text-base leading-relaxed">
                      You represent that you are at least the minimum age required to enter into a legal agreement. You agree to pay us for any fee-based Services you purchase from us, as well as all other charges incurred under your account, including applicable taxes and fees. You are responsible for all charges incurred under your account, including purchases made by you or anyone you allow to use your account or any sub-or linked accounts (including any person with implied, actual, or apparent authority) or anyone who gains access to your account as a result of your failure to safeguard your authentication credentials.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Payment Methods</h5>
                    <p className="text-base leading-relaxed">
                      You authorize and direct us to charge your designated payment method for these charges or, if it fails, to charge any other payment method you have on file with us, even if we received it in association with other fee-based services. You are responsible for all charges even if your payment method fails or is denied. You authorize and direct us to retain all information about any payment method(s) associated with your account. We may import payment information you entered during a prior purchase and provide you the option to use that payment information during purchase of a new product. You permit us to obtain and use updated information from the issuer of your payment method in accordance with the policies and procedures of any applicable card brands. We may in some instances continue charging a payment method past its expiration date at our discretion and subject to the payment processors&apos; or issuing bank&apos;s approval. Surcharges may apply if you use certain payment methods, such as payment from your checking or savings account.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Payment Terms</h5>
                    <p className="text-base leading-relaxed">
                      We may charge for fee-based Services in advance and on a daily, monthly, yearly, lump sum, or other basis in accordance with the stated terms, as long as your subscription remains active, even if you have not downloaded or used the Service or accessed your online account.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Auto-Renewal</h5>
                    <p className="text-base leading-relaxed">
                      We use auto-renewal for many of our fee-based Services. At the expiration of each subscription term for such fee-based Services, we will automatically renew your subscription and charge the credit card or other payment method you have provided to us, unless you cancel your subscription at least 48 hours before the end of the current period. Unless otherwise stated, your subscription will be automatically renewed at the then-current price, excluding promotional and discount pricing. We may, in our sole discretion, post charges to your payment method individually or aggregate charges for some or all of your fee-based Services with us.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Fraud Protection</h5>
                    <p className="text-base leading-relaxed">
                      We may take steps to verify the validity of the credit card information you provide to us, including debiting amounts less than $1.00 from your credit card and then immediately crediting it back. You authorize us to do so for verification and anti-fraud purposes.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Free Trials</h5>
                    <p className="text-base leading-relaxed">
                      We may offer you free trials, so that you may try a fee-based Service subscription without charge or obligation (&quot;Free Trial&quot;). Unless otherwise stated and unless you cancel your subscription prior to the expiration of the Free Trial, periodic subscription fees will be charged at the then-applicable rate upon expiration of the Free Trial period and will continue to be charged until the subscription is canceled. If you are not satisfied with a particular fee-based Service, you must cancel the subscription before the Free Trial ends to avoid charges. We reserve the right to limit you to one free trial or promotion of a fee-based Service and to prohibit the combining of free trials or other promotional offers.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">No Refunds</h5>
                    <p className="text-base leading-relaxed">
                      All charges are nonrefundable unless provided otherwise in the terms you agree to when you register for a fee-based Service, unless stated differently for your country or as otherwise specified below.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Termination</h5>
                    <p className="text-base leading-relaxed">
                      We, in our sole discretion, may change, discontinue or terminate any or all aspects of a fee-based Service without notice, including access to support services, content and other products or services ancillary to the fee-based Service, subject to providing an appropriate refund for any portions of a specified but no longer available term. You may cancel a fee-based Service at any time by logging into your online account and terminating the subscription.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Change in Fees and Billing Method</h5>
                    <p className="text-base leading-relaxed">
                      We may change our fees and billing methods at any time. We will provide you with notice of any price increase at least thirty (30) days in advance. Subject to applicable law, (i) if you disagree with any proposed change, your sole remedy is to cancel your fee-based Service before the price change takes effect and (ii) your continued use of or subscription to the Service after the price change takes effect constitutes your agreement to pay the new price for the Service.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">Delinquency</h5>
                    <p className="text-base leading-relaxed">
                      After 30 days from the date of any unpaid charges, your fee-based Service will be deemed delinquent and we may terminate or suspend your account and fee-based Service for nonpayment. You are liable for any fees, including attorney and collection fees, incurred by us in our efforts to collect any remaining balances from you.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-base sm:text-lg font-semibold mb-2">90-Day Notice Period</h5>
                    <p className="text-base leading-relaxed">
                      You must notify us about any billing problems or discrepancies within 90 days after they first appear on your billing method statement. If you do not bring them to our attention within 90 days, you agree that you waive your right to dispute such problems or discrepancies.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

