import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground py-16 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                    Privacy Policy
                </h1>
                <p className="text-muted-foreground mb-8">
                    Last updated: Jan 2026
                </p>

                <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                    <p>
                        EditorSB is operated as a freelance video editing and creative service. Your privacy is important, and this policy explains how your information is handled when you interact with this website or hire services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We may collect personal and project-related information such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name, email address, phone number</li>
                            <li>Project briefs, reference files, and communication shared via email or forms</li>
                            <li>Scheduling details through Calendly</li>
                            <li>Basic website analytics (non-identifying data)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Purpose of Data Collection</h2>
                        <p className="mb-4">Your information is used strictly to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Communicate about projects and inquiries</li>
                            <li>Provide video editing and post-production services</li>
                            <li>Schedule meetings and consultations</li>
                            <li>Maintain records for business and invoicing purposes</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Project Confidentiality</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All client files, footage, and project details are treated as confidential.</li>
                            <li>Your raw footage and data are never shared with third parties</li>
                            <li>Files are stored only for the duration required to complete the project</li>
                            <li>Clients are advised to keep backups of all original files</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Tools</h2>
                        <p className="mb-4">EditorSB uses trusted tools such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Calendly (call scheduling)</li>
                            <li>Email services (client communication)</li>
                        </ul>
                        <p className="mt-4">These services operate under their own privacy policies.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                        <p>
                            Reasonable steps are taken to protect your information, but no digital storage or transmission is completely secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                        <p className="mb-4">You may request:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access to your personal data</li>
                            <li>Correction or deletion of stored information</li>
                            <li>Removal of your data after project completion</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. Policy Updates</h2>
                        <p>
                            This Privacy Policy may be updated as the business evolves. Any changes will be reflected on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
                        <p>For privacy-related concerns, contact:</p>
                        <a href="mailto:sahilbhanushalioff2011@gmail.com" className="text-primary hover:underline">
                            sahilbhanushalioff2011@gmail.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;