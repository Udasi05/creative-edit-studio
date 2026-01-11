import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
                    Terms & Conditions
                </h1>
                <p className="text-muted-foreground mb-8">
                    Last updated: Jan 2026
                </p>

                <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                    <p>
                        These Terms govern all freelance services provided by EditorSB. By contacting or hiring EditorSB, you agree to the following conditions.
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Freelance Services</h2>
                        <p className="mb-4">EditorSB provides freelance services including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Video Editing</li>
                            <li>Color Grading</li>
                            <li>Motion Graphics</li>
                            <li>Sound Design</li>
                            <li>Post-Production Consultation</li>
                        </ul>
                        <p className="mt-4">Services are project-based and customized per client requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Project Scope & Agreement</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Project scope, timeline, deliverables, and pricing are agreed upon before work begins</li>
                            <li>Any work outside the agreed scope will be treated as additional work and may incur extra charges</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
                        <p className="mb-4">Clients must:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Own or have legal rights to all submitted content</li>
                            <li>Provide clear instructions and feedback</li>
                            <li>Respond within a reasonable timeframe to avoid delays</li>
                        </ul>
                        <p className="mt-4">EditorSB is not responsible for delays caused by late inputs.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payments & Refunds</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Advance payment may be required before starting work</li>
                            <li>Full payment must be completed before final delivery (unless agreed otherwise)</li>
                            <li>No refunds once work has started or files have been delivered</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Revisions Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Revisions are limited to the number discussed during project agreement</li>
                            <li>Revisions outside the agreed scope may be charged additionally</li>
                            <li>Major changes after approval may require a new quote</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ownership & Portfolio Rights</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Final deliverables belong to the client after full payment</li>
                            <li>EditorSB reserves the right to display completed work in portfolios, social media, or case studies unless the client requests confidentiality in writing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">7. File Storage & Backup</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Final project files are stored temporarily after delivery</li>
                            <li>EditorSB is not responsible for long-term storage or data loss</li>
                            <li>Clients are responsible for downloading and backing up their files</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">8. Project Cancellation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>If a client cancels after work has started, payment for completed work is non-refundable</li>
                            <li>EditorSB may decline or terminate projects involving illegal, abusive, or unethical content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                        <p className="mb-4">EditorSB is not liable for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Loss of profits or business due to edited content</li>
                            <li>Third-party platform issues (YouTube, Instagram, etc.)</li>
                            <li>Technical issues beyond reasonable control</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                        <p>These Terms are governed by the laws of India.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact</h2>
                        <p>For any questions regarding these Terms:</p>
                        <a href="mailto:sahilbhanushalioff2011@gmail.com" className="text-primary hover:underline">
                            sahilbhanushalioff2011@gmail.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;