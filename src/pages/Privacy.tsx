
import Layout from "@/components/Layout";
import { useIsMobile } from "@/hooks/use-mobile";

const Privacy = () => {
  const isMobile = useIsMobile();
  const lastUpdated = "May 1, 2025";
  
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              At ChatAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI chatbot services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Account information: When you register for an account, we collect your name, email address, and password.</li>
              <li>Profile information: Information you choose to add to your profile such as job title, company name, and profile picture.</li>
              <li>Communication data: Records of your interactions with our chatbots, including messages, queries, and responses.</li>
              <li>Payment information: If you subscribe to our paid services, we collect billing details and payment information.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices, updates, security alerts, and administrative messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Develop new products and services</li>
              <li>Train our AI models to improve responses and functionality</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors such as lawyers and accountants as necessary</li>
              <li>Regulatory authorities, law enforcement agencies, and others as required by law</li>
            </ul>
            <p>We will never sell your personal data to third parties.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, no electronic transmission or storage system is guaranteed to be 100% secure, and we cannot ensure or warrant the security of any information you transmit to us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Data Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access: You can request copies of your personal data.</li>
              <li>Rectification: You can ask us to correct inaccurate information.</li>
              <li>Erasure: You can ask us to delete your data under certain circumstances.</li>
              <li>Restriction: You can ask us to restrict the processing of your information.</li>
              <li>Data portability: You can request the transfer of your data to another service.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and to understand how you use our services. You can set your browser to refuse all or some browser cookies, but this may limit your ability to use some features of our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete that information.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@chatai.com<br />
              Address: 123 AI Boulevard, San Francisco, CA 94103, United States<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
