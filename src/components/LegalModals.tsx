import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

interface LegalModalProps {
  type: 'disclaimer' | 'privacy' | 'commission' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto border border-slate-200">
        
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-amber-800">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Statutory Regulatory Disclaimer</h3>
                <p className="text-xs text-slate-500">SEBI / AMFI Mutual Fund Distributor Disclosures</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              <p className="font-semibold text-slate-900 bg-amber-50 p-3 rounded border border-amber-200">
                Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.
              </p>

              <p>
                <strong>Role of One Solution:</strong> One Solution operates as an AMFI-registered Mutual Fund Distributor (MFD). We facilitate the distribution of mutual fund schemes to investors and receive commission from Asset Management Companies (AMCs) as per SEBI regulations.
              </p>

              <p>
                <strong>No Guaranteed or Assured Returns:</strong> Neither One Solution nor any of its partners, associates, or representatives guarantee or assure any returns or capital protection on any mutual fund investment. Investments are market-linked and are subject to market fluctuations, NAV fluctuations, and volatility.
              </p>

              <p>
                <strong>Past Performance:</strong> Past performance is strictly for illustrative and educational reference and is not an indicator of future results. NAV may go up or down depending on the factors and forces affecting the securities markets.
              </p>

              <p>
                <strong>Illustrations &amp; Calculators:</strong> The SIP and lump sum calculations shown on this website (onesolutioninvestments.in) are hypothetical illustrations for mathematical estimation only and must not be construed as investment promises or forecasts.
              </p>

              <p>
                <strong>Suitability:</strong> Investors are advised to make investments based on their individual financial situation, risk-reward profile, and investment horizon. Please read the Scheme Information Document (SID) and Key Information Memorandum (KIM) issued by the respective AMC before investing.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md"
              >
                I Understand
              </button>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Privacy Policy</h3>
                <p className="text-xs text-slate-500">How One Solution protects your personal information</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              <p>
                At <strong>One Solution</strong> (onesolutioninvestments.in), we respect your privacy and are committed to safeguarding the personal and financial contact details you share with us.
              </p>

              <p>
                <strong>Information We Collect:</strong> When you submit an enquiry or contact us via our website or WhatsApp, we collect basic details such as your Name, Mobile/WhatsApp number, Age, Monthly SIP Budget, and preferred Investment Goal.
              </p>

              <p>
                <strong>How We Use Your Information:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To contact you regarding your requested financial and SIP planning discussion.</li>
                <li>To assist you with mutual fund onboarding and KYC compliance as mandated by SEBI/AMFI.</li>
                <li>To provide portfolio review updates and customer support as requested by you.</li>
              </ul>

              <p>
                <strong>No Sharing or Sale of Data:</strong> We never sell, rent, or trade your contact information to third-party marketing firms, lenders, or insurance telemarketers. Your information is shared only with registered AMCs and Registrar and Transfer Agents (RTAs like CAMS / KFintech) strictly for processing mutual fund transactions authorized by you.
              </p>

              <p>
                <strong>Data Security:</strong> We implement appropriate administrative and technological safeguards to prevent unauthorized access or disclosure of your information.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {type === 'commission' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-800">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Commission &amp; Distribution Disclosure</h3>
                <p className="text-xs text-slate-500">Statutory transparency under SEBI guidelines</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              <p>
                In compliance with SEBI circulars, <strong>One Solution</strong> discloses that it acts as a distributor of regular mutual fund schemes.
              </p>
              <p>
                We receive trail commission directly from Asset Management Companies (AMCs) for mutual fund transactions executed through our ARN code. This trail commission is paid out of the total expense ratio (TER) of the respective mutual fund schemes and involves no direct fee charged to the client.
              </p>
              <p>
                Clients also have the option to invest directly in mutual fund schemes without routing through a distributor under the &ldquo;Direct Plan&rdquo; of the mutual funds.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
