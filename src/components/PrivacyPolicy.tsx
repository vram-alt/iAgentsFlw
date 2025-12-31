'use client'

import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const CookieTable=()=> {
    const cookieData = [
      {
        type: "Essential Cookies",
        description: "These are cookies that our Site needs in order to function and that enable you to move around and use the Site and features. Without these essential cookies, the Site will not perform as smoothly, and we may not be able to provide the Site or certain services or features you request. Examples of where these cookies are used include: to determine when your session has been inactive, and for other troubleshooting and security purposes."
      },
      {
        type: "Analytics and Performance Cookies",
        description: (
          <>
            Analytics and performance cookies, including Google Analytics, provide us with information regarding how visitors navigate and interact with our Site. Such cookies allow us to understand, for example, more about how many visitors we have to our Site, how many times they visit us and how many times a user viewed specific pages within our Site. For more information about Google Analytics, please refer to &quot;How Google Uses Information From Sites or Apps that Use Our Services,&quot; which can be found at{' '}
            <a 
              href="https://www.google.com/policies/privacy/partners/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline break-all"
            >
              www.google.com/policies/privacy/partners/
            </a>
            , or any other URL Google may provide from time to time.
          </>
        )
      },
      {
        type: "Advertising Cookies",
        description: "Advertising cookies may be placed on the Site by us or third parties to enable third party ad networks to recognize a unique cookie on your computer. The information that is collected and shared by these types of cookies may also be linked to the device identifier of the device you are using to allow us to keep track of all the websites you have visited that are associated with the ad network. This information may be used for the purpose of targeting advertisements on our Site and third-party websites based on those interests."
      }
    ];
  
    return (
      <div className="w-full bg-gray-900 min-h-screen p-2 sm:p-2 lg:p-3 my-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Table View (hidden on mobile) */}
          <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-700 shadow-lg">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th 
                    scope="col" 
                    className="px-2 py-3 text-left text-lg font-bold text-white uppercase tracking-wider w-1/4"
                  >
                    Cookie Type
                  </th>
                  <th 
                    scope="col" 
                    className="px-2 py-3 text-left text-lg font-bold text-white uppercase tracking-wider w-3/4"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700">
                {cookieData.map((cookie, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-gray-800 transition-colors duration-200"
                  >
                    <td className="px-2 py-3 align-top">
                      <div className="text-base font-semibold text-white">
                        {cookie.type}
                      </div>
                    </td>
                    <td className="px-2 py-3">
                      <div className="text-base text-white leading-relaxed">
                        {cookie.description}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Mobile Card View (visible only on mobile) */}
          <div className="md:hidden space-y-4">
            {cookieData.map((cookie, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-4 hover:bg-gray-750 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-white mb-3 pb-2 border-b border-gray-700">
                  {cookie.type}
                </h3>
                <div className="text-sm text-white leading-relaxed">
                  {cookie.description}
                </div>
              </div>
            ))}
          </div>
  
          
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Breadcrumb */}
      <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
        <div className="container mx-auto px-4 sm:px-2 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Iagentsflow.ai
            </Link>
            <span>/</span>
            <span className="text-[#F47F21]">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
            Privacy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-[#0F172A]/50 backdrop-blur-md rounded-lg border border-white/10 p-6 sm:p-8 space-y-6 text-gray-300">
          <section className="max-w-5xl mx-auto px-4 py-12 text-white">
          <div className="prose prose-invert max-w-none">
        <ol className="space-y-8 list-decimal list-inside text-white">
          <li className="text-lg">
            <strong className="text-xl text-white">Introduction</strong>
            <p className="mt-3 text-white leading-relaxed">
              This Privacy Policy (&quot;Privacy Policy&quot;) explains how AgentsFlow (may also be referred to, in this policy, as &quot;we&quot;, &quot;us&quot;) will access, use, disclose, collect, capture and how AgentsFlow intends to safeguard any personal information that may be captured, accessed, used, directly or indirectly, to identify any third party (may also be referred to as &quot;you&quot;), when you visit{' '}
              <a href="https://www.iagentsflow.com/" className="text-blue-400 hover:text-blue-300 underline">
                https://www.iagentsflow.com/
              </a>{' '}
              (&quot;Site&quot;) or interact with us offline or provide access to such information. Please read this Privacy Policy carefully. By accessing the Site and/or by providing access to us, you consent to the collection, use and disclosure of your/your patient personal information (&quot;Personal Information&quot;) as described in this Privacy Policy. If you do not agree with any portion of this Privacy Policy, you should not use this Site.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Scope</strong>
            <p className="mt-3 text-white leading-relaxed">
              This Privacy Policy applies to the Personal Information that we access, capture, collect or receive about you or your patients when we act as the processor/controller for such information. Generally, we collect or receive Personal Information about individual contacts of our customers or other third parties with whom we do business or individuals who apply for a job with AgentsFlow.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              This Privacy Policy also provides additional information required under California law about our collection, use and disclosure of the information of California residents, along with other required information such as rights that may be available to California residents.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Information Collection</strong>
            <p className="mt-3 text-white leading-relaxed">
              The types of Personal Information we collect about you depends on how you interact with us. Depending on the services you use, the following are the categories and specific types of Personal Information that we may collect, or have collected in the preceding twelve months, from or about you:
            </p>
            <ul className="mt-4 space-y-3 list-none ml-0 pl-0">
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Contact Information/Identifiers,</strong>
                  <span className="text-white"> including name, email address, postal address, phone number, username, business contact information, or other similar identifiers and account information.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Information Specific to the Services,</strong>
                  <span className="text-white"> in certain instances, such as invoices, business and commercial communications, order status, and order history.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Browser and device data,</strong>
                  <span className="text-white"> including your device type, operating system and version, IP address, and general geographic location as indicated by your IP address.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Usage data,</strong>
                  <span className="text-white"> such as the time you spend on the Site, the content you view and features you access, the pages that referred you to our Site, how you interact with content, and entered search terms, as well as Personal Information that you make available to us via social media.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Payment Information,</strong>
                  <span className="text-white"> including credit or debit card number, or other financial information that you provided in connection with a transaction.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Professional or Employment-Related Information,</strong>
                  <span className="text-white"> such as your job title, company you work for, your prior work history, work referral information, and other such professional or employment-related information.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Education Information,</strong>
                  <span className="text-white"> such as your education history, credentials and other qualifications.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Pre-employment Screening,</strong>
                  <span className="text-white"> if we offer you a job, we may collect additional background information such as credit history and eligibility information (as permitted by law).</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Sensitive Personal Information,</strong>
                  <span className="text-white"> in limited circumstances, such as data revealing racial or ethnic origin, health or medical data, sexual orientation, citizenship or immigration status, and military or veteran status.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Inferences,</strong>
                  <span className="text-white"> inferences drawn from or created based on any of the information you provide us.</span>
                </div>
              </li>
            </ul>
          </li>

          <li className="text-lg">
            <p className="text-white leading-relaxed">
              Providing your Personal Information is voluntary. However, in some instances, we may be unable to process your request for our services without the requested Personal Information.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              Where we aggregate or deidentify your Personal Information, such data is generally not considered Personal Information under applicable law and therefore we may use or disclose it for any lawful purpose. We will not attempt to reidentify aggregated or deidentified information about you, except that we may do so to test whether our deidentification procedures comply with applicable law.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Sources of Your Personal Information</strong>
            <p className="mt-3 text-white leading-relaxed">
              We collect your Personal Information in the following ways, pursuant to applicable law:
            </p>
            <ul className="mt-4 space-y-3 list-none ml-0 pl-0">
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Directly From You,</strong>
                  <span className="text-white"> such as when you use our services, provide information to us through the &quot;Contact Us&quot; webform, or otherwise reach out to us.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Other Sources,</strong>
                  <span className="text-white"> including vendors, background check providers, references, affiliates, and through tracking technologies. To learn more about our use of cookies and similar tracking technologies, please review the </span>
                  <strong className="text-white">&quot;Cookies and Other Tracking Technologies&quot;</strong>
                  <span className="text-white"> section below.</span>
                </div>
              </li>
            </ul>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Uses of Your Personal Information</strong>
            <p className="mt-3 text-white leading-relaxed">
              We use your Personal Information to communicate with you relative to the services requested from us or to conduct other general business and commercial purposes (&quot;Business Purposes&quot;). We may collect your Personal Information for the following Business Purposes:
            </p>
            <ul className="mt-4 space-y-2 list-none ml-0 pl-0">
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To provide you the services or communicate with you about our revenue cycle management solutions.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To enable you to access and use our Site.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To consider and administer your candidacy for employment.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To communicate with you and to respond to your requests, questions, comments, and other inquiries.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To understand what partner resources you use, if any, and to connect you to additional resources at your request.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <span className="text-white">To offer you personalized advertisements, which you may be able to opt-out of as explained in the </span>
                  <a href="#your-rights" className="text-blue-400 hover:text-blue-300 underline">&quot;Your Rights&quot;</a>
                  <span className="text-white"> section.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <span className="text-white">To offer you personalized advertisements and marketing and promotional materials, including information relating to our products, services, sales, or promotions, or those of a third party. You may be able to opt-out of these offers as explained in the </span>
                  <a href="#your-rights" className="text-blue-400 hover:text-blue-300 underline">&quot;Your Rights&quot;</a>
                  <span className="text-white"> section.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To administer, maintain, evaluate, and improve our Site and services, and to develop new products and services.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To conduct research and analytics related to our Site and services.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To manage our business operations, perform our obligations and exercise our rights under any agreement that you or your organization has with us.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To comply with our legal or regulatory obligations, to establish or exercise our rights, and to defend against a legal claim.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">To detect, investigate, prevent, or take action regarding possible malicious, deceptive, fraudulent, or illegal activity, including fraudulent transactions, attempts to manipulate or violate our policies, procedures, and terms and conditions, security incidents, and harm to the rights, property, or safety of AgentsFlow and our users, customers, employees, or others.</span>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <span className="text-white">For other purposes with your consent, or as otherwise permitted or required by applicable law.</span>
              </li>
            </ul>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Disclosure of Your Personal Information</strong>
            <p className="mt-3 text-white leading-relaxed">
              Other than as provided in this Privacy Policy, we do not share your Personal Information with unaffiliated third parties for their own marketing purposes, unless we have your consent or are required by law. We do not sell, rent or lease customer information to third parties.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              Generally, we may disclose your Personal Information to communicate with customers, operate our business, advertise or promote our services, or with your consent. In the past twelve months, we may have disclosed your Personal Information in the following ways:
            </p>
            <ul className="mt-4 space-y-3 list-none ml-0 pl-0">
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Service Providers.</strong>
                  <span className="text-white"> We may disclose Personal Information to authorized third parties who perform services for us (including cloud services, data storage, sales, human resources, and marketing), such as Google Analytics. These third-party service providers are prohibited from using your Personal Information except to provide such services to AgentsFlow, and they are required to maintain the confidentiality of your Personal Information.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Affiliated Companies.</strong>
                  <span className="text-white"> We may disclose such Personal Information with subsidiaries, affiliates, or strategic partners as needed to provide our products and services and generally as necessary in the administration of a global organization.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Corporate Transaction.</strong>
                  <span className="text-white"> We may disclose your Personal Information in connection with, or during negotiations of a proposed or actual corporate merger, acquisition, consolidation, sale of assets, bankruptcy, insolvency or other corporate change. Such recipient will be bound by terms and conditions reasonably similar to those set out in this Privacy Policy.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Other Parties.</strong>
                  <span className="text-white"> We may disclose your Personal Information to legal, governmental, or judicial authorities, as instructed or required by those authorities or applicable laws, or in relation to a legal activity, such as in response to a subpoena or an investigation of suspected illicit activity. We may also disclose such Personal Information if we believe disclosure is necessary to prevent physical, financial, or other harm, injury, or loss.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Deidentified Personal Information.</strong>
                  <span className="text-white"> We may disclose or use aggregated or de-identified data for any lawful purpose. Deidentified information is generally not considered to be Personal Information under applicable laws.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Additional Disclosures.</strong>
                  <span className="text-white"> From time to time, we disclose your Personal Information to our attorneys, banks, auditors, securities brokers and other professional service providers and advisors in connection with the purposes described above.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Other Disclosures With Your Consent.</strong>
                  <span className="text-white"> We may disclose your Personal Information with your consent to other unaffiliated third parties who are not described elsewhere in this Privacy Policy.</span>
                </div>
              </li>
            </ul>
          </li>

          <li className="text-lg">
            <p className="text-white leading-relaxed">
              We may disclose your Personal Information, without notice, if required to do so by law or in the good faith belief that such action is necessary.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Cookies and Other Tracking Technologies</strong>
            <p className="mt-3 text-white leading-relaxed">
              Every time you come to our Site, our Site&apos;s web server automatically collects information, including, in some instances, Personal Information, through cookies, web beacons, and other similar tracking technologies (collectively &quot;cookies&quot;). Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies help a website remember information about your visit, which can make it easier to visit that website again and make that website more useful to you. Some cookies are deleted once you close your browser (session cookies), while other cookies are retained even after you close your browser so that you can be recognized when you return to a website (persistent cookies). More information about cookies and how they work is available at{' '}

              <a href="https://allaboutcookies.org/" className="text-blue-400 hover:text-blue-300 underline">
                www.allaboutcookies.org
              </a>.
            </p>
            <p className="mt-3 text-white leading-relaxed">Cookies on our Site are generally divided into the following categories:
            </p>
            {CookieTable()}
          </li>

          <li className="text-lg">
            <p className="text-white leading-relaxed">
              Most browsers are set to accept cookies by default. You can remove or reject cookies but be aware that such action could affect the availability and functionality of the Sites. You should be aware that getting a new computer, installing a new browser, upgrading an existing browser, or erasing or otherwise altering your browser&apos;s cookies files may also clear certain opt-out cookies, plug-ins, or settings.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Opt-out Preference Signal (Do Not Track)</strong>
            <p className="mt-3 text-white leading-relaxed">
              AgentsFlow does not currently recognize Do Not Track signals.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Third-Party Website</strong>
            <p className="mt-3 text-white leading-relaxed">
              The Site may contain links to third-party websites and applications—such as advertisements and external services—that are not affiliated with us. Once you leave our Site through one of these links, any Personal Information you provide to those third parties will not be covered by this Privacy Policy, and we cannot guarantee its security or privacy. We encourage you to review the privacy policies and practices of any third party before sharing your Personal Information. We are not responsible for the content or the privacy and security practices of any third parties, including websites, services, or applications linked to or from our Site.
            </p>
          </li>

          <li className="text-lg" id="your-rights">
            <strong className="text-xl text-white">Your Rights</strong>
            <p className="mt-3 text-white leading-relaxed">
              In some jurisdictions, applicable law may entitle you to certain rights regarding your Personal Information. The rights available to you depend on our reason for processing your Personal Information and the requirements of applicable law (i.e., your rights will vary depending on whether you are located in; for example, if you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act provides you with specific rights regarding your Personal Information). Specifically, you may have the following rights:
            </p>
            <ul className="mt-4 space-y-3 list-none ml-0 pl-0">
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to access:</strong>
                  <span className="text-white"> You may have the right to obtain from us confirmation as to whether Personal Information concerning you is being processed, and, where that is the case, to request access to the Personal Information.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to data portability:</strong>
                  <span className="text-white"> You may have the right to request that we transfer the Personal Information we have collected about you to another organization, or directly to you, in a structured, commonly used, and machine-readable format, under certain conditions.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to correct inaccurate information:</strong>
                  <span className="text-white"> You may have the right to request that we correct any Personal Information about you that is inaccurate.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to deletion:</strong>
                  <span className="text-white"> You may have the right to request that we delete your Personal Information, under certain conditions.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to know what Personal Information is sold or shared and to whom, and right to prohibit the sale or sharing of Personal Information:</strong>
                  <span className="text-white"> We do not and have not in the preceding twelve months, sold your Personal Information. However, we have shared (in this context, share means use of your Personal Information for cross-contextual behavioral advertising) your Personal Information. You may opt-out of the sharing of your Personal Information by updating your cookie preferences through the Site.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to limit the processing of your Sensitive Personal Information:</strong>
                  <span className="text-white"> We do not disclose Sensitive Personal Information for purposes other than those which cannot be limited under applicable laws including California laws.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right to withdraw consent:</strong>
                  <span className="text-white"> Where we rely on your consent to process your Personal Information, you have the right to withdraw that consent at any time with future effect. Such a withdrawal will not affect the lawfulness of the processing prior to the consent withdrawal.</span>
                </div>
              </li>
              <li className="flex">
                <span className="text-white mr-2">•</span>
                <div>
                  <strong className="text-white">Right of non-discrimination/retaliation:</strong>
                  <span className="text-white"> We do not discriminate against individuals who exercise any of their rights described in this Privacy Policy, nor do we retaliate against individuals who exercise these rights.</span>
                </div>
              </li>
            </ul>
          </li>

          <li className="text-lg">
            <p className="text-white leading-relaxed">
              Please note that many of the above rights are subject to exceptions and limitations. Your rights and our responses will vary based on the circumstances of the request. If you choose to assert any of these rights under applicable law, we will respond within the time period prescribed by such law.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              To exercise your rights, please contact us as stated in the Contact Information section of this Privacy Policy.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              If you are located in the State of California in the United States, a person authorized to act on your behalf may make a verifiable request related to your Personal Information. If you designate an authorized person to submit requests to exercise certain privacy rights on your behalf, we will require verification that you provided the authorized agent permission to make a request on your behalf.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              In any circumstances, your request must: (i) provide sufficient information that allows us to reasonably verify that you are the person about whom we collected Personal Information or an authorized representative of that person; and (ii) describe the request with sufficient detail that allows us to properly understand, evaluate, and respond to it. We will only use Personal Information provided in a verifiable consumer request to verify the requestor&apos;s identity or authority to make the request.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Retention of Your Personal Information</strong>
            <p className="mt-3 text-white leading-relaxed">
              We keep your Personal Information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless otherwise required or permitted by applicable law.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Information Safety</strong>
            <p className="mt-3 text-white leading-relaxed">
              We are committed to protecting your privacy and security. We have implemented a range of technical and organizational measures designed to protect your Personal Information from unauthorized access. However, please be aware that no security measures are entirely infallible, and we cannot guarantee the absolute security of your Personal Information.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Children&apos;s Privacy</strong>
            <p className="mt-3 text-white leading-relaxed">
              AgentsFlow does not knowingly collect any Personal Information from children under the age of 13. Users under the age of 13 should not submit any Personal Information to us. If you believe we have collected Personal Information from your child in error or have questions or concerns about our practices relating to children, please notify us using the details in the Contact Information section below. We will take prompt steps to remove the Personal Information from our systems.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Privacy Policy Changes</strong>
            <p className="mt-3 text-white leading-relaxed">
              AgentsFlow reserves the right to change this Privacy Policy at any time. Whenever we update this Privacy Policy, we will post the latest version on this Site and update the version date at the bottom of the page. To the extent required by applicable law, we will notify you of any material changes to this Privacy Policy. We encourage you to periodically review this Privacy Policy so that you will be aware of our updated privacy practices.
            </p>
            <p className="mt-3 text-white leading-relaxed">
              Your continued use of the Site after these modifications will constitute your: (a) acknowledgement of the modified Privacy Policy; and (b) agreement to abide and be bound by that Privacy Policy.
            </p>
          </li>

          <li className="text-lg">
            <strong className="text-xl text-white">Contact Information</strong>
            <p className="mt-3 text-white leading-relaxed">
              AgentsFlow welcomes your questions or comments regarding this Privacy Policy and our privacy practices. Please contact us using one of the methods below to submit any such inquiries, or to request to exercise any of your rights:
            </p>
            <p className="mt-3 text-white leading-relaxed">
              E-mail:{' '}
              <a href="mailto:hello@iagentsflow.com" className="text-blue-400 hover:text-blue-300 underline">
                hello@iagentsflow.com
              </a>
            </p>
            <p className="mt-3 text-white font-semibold">
              Last update: Jan 1, 2026
            </p>
          </li>
        </ol>
      </div>
</section>

          </div>
        </div>
      </div>
    </div>
  )
}

