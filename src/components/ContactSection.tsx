import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, Building2, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#00843D] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            <Building2 className="w-3.5 h-3.5" />
            <span>Chennai Office &amp; Inquiries</span>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1D37] tracking-tight">
              ONE SOLUTION
            </h2>
            <p className="text-lg font-bold text-[#00843D]">
              Plan Today &amp; Build Tomorrow
            </p>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reach out to our office in Chennai or connect digitally. We are always ready to answer your investment questions and review your family plans.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Phone / WhatsApp Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00843D] flex items-center justify-center mb-4 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Phone / WhatsApp
                </h4>
                <div className="space-y-1.5">
                  <a
                    href="tel:+919962205989"
                    className="text-lg font-black text-[#0A1D37] hover:text-[#00843D] transition-colors block"
                  >
                    +91 9962205989
                  </a>
                  <a
                    href="https://wa.me/919962205989?text=Hello%20One%20Solution,%20I%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#00843D] hover:underline inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open in WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00843D] flex items-center justify-center mb-4 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Email Address
                </h4>
                <div className="space-y-1.5">
                  <a
                    href="mailto:mailtoonesolution@gmail.com"
                    className="text-sm sm:text-base font-black text-[#0A1D37] hover:text-[#00843D] transition-colors block break-all"
                  >
                    mailtoonesolution@gmail.com
                  </a>
                  <span className="text-xs text-slate-500 block">
                    Fast response within 24 hours
                  </span>
                </div>
              </div>

            </div>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00843D] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Office Address
                  </h4>
                  <p className="text-base font-black text-[#0A1D37]">
                    ONE SOLUTION
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    No. 36/13, Chitlapakkam 2nd Main Road,<br />
                    Tambaram Sanatorium,<br />
                    Chennai – 600047, Tamil Nadu, India.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=No.+36/13,+Chitlapakkam+2nd+Main+Road,+Tambaram+Sanatorium,+Chennai+600047"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00843D] hover:underline transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-center gap-3.5 text-xs text-slate-600 shadow-xs">
              <Clock className="w-5 h-5 text-[#00843D] shrink-0" />
              <div>
                <strong className="text-[#0A1D37]">Consultation Hours:</strong> Monday – Saturday: 9:30 AM – 7:30 PM IST · Sunday by appointment.
              </div>
            </div>

          </div>

          {/* Location Map Preview / Local Presence (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0A1D37] via-[#0d2647] to-[#0A1D37] text-white rounded-3xl p-7 sm:p-8 border border-slate-800 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Chennai Location
            </span>
            <h3 className="text-xl font-black text-white mb-2">
              Serving Investors Across Chennai &amp; Pan-India
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Located conveniently in Tambaram Sanatorium with easy connectivity. We provide both in-person consultations in Chennai and fully digital advisory consultations across India.
            </p>

            {/* Stylized Location Card */}
            <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Tambaram Sanatorium</span>
                <span className="font-mono text-slate-400">PIN: 600047</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Landmark: Near Chitlapakkam 2nd Main Road, easy access from GST Road &amp; Tambaram Sanatorium Railway Station.
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>In-Person &amp; Secure Video Consultations</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=No.+36/13,+Chitlapakkam+2nd+Main+Road,+Tambaram+Sanatorium,+Chennai+600047"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              >
                <span>Get Directions to Tambaram Sanatorium</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:mailtoonesolution@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#00843D] hover:bg-[#007033] rounded-xl transition-colors shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
