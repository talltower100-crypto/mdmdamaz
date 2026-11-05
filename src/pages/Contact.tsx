import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    challenge: ""
  });

  const isStep1Valid = formData.service.length > 0;
  const isStep2Valid = formData.challenge.length > 0;
  const isStep3Valid = formData.budget.length > 0;
  const isStep4Valid = formData.timeline.length > 0;
  const isStep5Valid = formData.firstName.length > 0 && formData.lastName.length > 0 && formData.email.length > 0;

  const handleNext = () => {
    if (step === 1 && isStep1Valid) setStep(2);
    if (step === 2 && isStep2Valid) setStep(3);
    if (step === 3 && isStep3Valid) setStep(4);
    if (step === 4 && isStep4Valid) setStep(5);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isStep5Valid) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Survey Completed!",
        description: "Thank you for qualifying your project. Our team will review your details and contact you shortly.",
      });
      setStep(1);
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", companyName: "", website: "", service: "", budget: "", timeline: "", challenge: ""
      });
    }, 1500);
  };

  const services = ["Website Design", "Search Engine Optimization", "Voice AI Agents", "Chat AI Agents", "Review Management", "CRM and Hosting", "Other"];
  const budgets = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "$10,000+"];
  const timelines = ["Immediately (ASAP)", "Within 1-3 Months", "Within 3-6 Months", "Just Researching"];

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <SEOHead
        title="Contact Sowa Marketing Agency | Free Digital Marketing Consultation"
        description="Ready to grow your business? Contact Sowa Marketing Agency in North Kingstown, RI for expert website design, SEO, and AI agent solutions. Get started today."
        canonical="https://sowaagency.com/contact"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Sowa Marketing Agency",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "401-219-4207",
              "contactType": "customer service",
              "email": "hello@sowaagency.com"
            }
          }
        })}
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's Build Something Great</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to grow your brand with strong web design, search boosts, and smart AI tools? Fill out our short form below to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Information (Sidebar) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Our Office</h3>
                      <p className="text-muted-foreground">
                        131 Chimney Rock Dr<br />
                        North Kingstown, RI 02852
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:4012194207" className="hover:text-primary transition-colors">401-219-4207</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:hello@sowaagency.com" className="hover:text-primary transition-colors">hello@sowaagency.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Open 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl border border-border/50">
                <img 
                  src="https://vibe.filesafe.space/1778622835347500334/assets/180ffeba-ec24-4015-b68b-31c5145c71b4.png" 
                  alt="Sowa Marketing Agency Office" 
                  className="w-full aspect-video object-cover"
                />
              </div>

              <div className="p-8 bg-card border border-border/50 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Why Fill This Out?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Makes sure we are the right fit for your goals.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Helps us plan a custom map before we talk.
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    Saves you time on the discovery call.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Lead Qualification Survey */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-0 pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Survey Header & Progress */}
                  <div className="mb-10">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Project Details</h2>
                        <p className="text-muted-foreground">Step {step} of {totalSteps}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{Math.round((step / totalSteps) * 100)}%</div>
                    </div>
                    <Progress value={(step / totalSteps) * 100} className="h-2" />
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Hidden inputs for tracking/CRM integration */}
                    <input type="hidden" name="service" value={formData.service} data-custom-field="service-interest" />
                    <input type="hidden" name="budget" value={formData.budget} data-custom-field="monthly-budget" />
                    <input type="hidden" name="timeline" value={formData.timeline} data-custom-field="timeline" />
                    <input type="hidden" name="challenge" value={formData.challenge} data-custom-field="biggest-challenge" />

                    <AnimatePresence mode="wait">
                      {/* STEP 1: Service */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-10"
                        >
                          <div className="space-y-4">
                            <label className="text-xl font-semibold block">What main service do you want?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {services.map(s => (
                                <div 
                                  key={s}
                                  onClick={() => setFormData({...formData, service: s})}
                                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.service === s ? 'border-primary bg-primary/10' : 'border-border/50 bg-background/50 hover:border-primary/50'}`}
                                >
                                  <span className="font-medium">{s}</span>
                                  {formData.service === s && <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-end pt-4">
                            <Button 
                              type="button" 
                              size="lg" 
                              onClick={handleNext} 
                              disabled={!isStep1Valid}
                              className="gap-2"
                            >
                              Next Step <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2: Challenge */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-10"
                        >
                          <div className="space-y-4">
                            <label className="text-xl font-semibold block">What is your biggest current hurdle?</label>
                            <Textarea 
                              value={formData.challenge}
                              onChange={e => setFormData({...formData, challenge: e.target.value})}
                              className="min-h-[140px] bg-background/50 text-base resize-none"
                              placeholder="E.g., Not getting enough inbound leads, website is old and slow, need to automate client help..."
                            />
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" size="lg" onClick={handlePrev} className="gap-2">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </Button>
                            <Button 
                              type="button" 
                              size="lg" 
                              onClick={handleNext} 
                              disabled={!isStep2Valid}
                              className="gap-2"
                            >
                              Next Step <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3: Budget */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-10"
                        >
                          <div className="space-y-4">
                            <label className="text-xl font-semibold block">What is your monthly ad budget?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {budgets.map(b => (
                                <div 
                                  key={b}
                                  onClick={() => setFormData({...formData, budget: b})}
                                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.budget === b ? 'border-primary bg-primary/10' : 'border-border/50 bg-background/50 hover:border-primary/50'}`}
                                >
                                  <span className="font-medium">{b}</span>
                                  {formData.budget === b && <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" size="lg" onClick={handlePrev} className="gap-2">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </Button>
                            <Button 
                              type="button" 
                              size="lg" 
                              onClick={handleNext} 
                              disabled={!isStep3Valid}
                              className="gap-2"
                            >
                              Next Step <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 4: Timeline */}
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-10"
                        >
                          <div className="space-y-4">
                            <label className="text-xl font-semibold block">When are you looking to start?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {timelines.map(t => (
                                <div 
                                  key={t}
                                  onClick={() => setFormData({...formData, timeline: t})}
                                  className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.timeline === t ? 'border-primary bg-primary/10' : 'border-border/50 bg-background/50 hover:border-primary/50'}`}
                                >
                                  <span className="font-medium">{t}</span>
                                  {formData.timeline === t && <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-between pt-4">
                            <Button type="button" variant="outline" size="lg" onClick={handlePrev} className="gap-2">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </Button>
                            <Button 
                              type="button" 
                              size="lg" 
                              onClick={handleNext} 
                              disabled={!isStep4Valid}
                              className="gap-2"
                            >
                              Next Step <ArrowRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 5: Contact Details */}
                      {step === 5 && (
                        <motion.div
                          key="step5"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Almost done. Where should we send the plan?</h3>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                                <Input 
                                  id="firstName" 
                                  name="firstName" 
                                  required 
                                  value={formData.firstName}
                                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                                  className="bg-background/50 border-border/50 h-12" 
                                  placeholder="John" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                                <Input 
                                  id="lastName" 
                                  name="lastName" 
                                  required 
                                  value={formData.lastName}
                                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                                  className="bg-background/50 border-border/50 h-12" 
                                  placeholder="Doe" 
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">Work Email *</label>
                              <Input 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                className="bg-background/50 border-border/50 h-12" 
                                placeholder="john@company.com" 
                              />
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                              <Input 
                                id="phone" 
                                name="phone" 
                                type="tel" 
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                className="bg-background/50 border-border/50 h-12" 
                                placeholder="(401) 555-0123" 
                              />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <label htmlFor="companyName" className="text-sm font-medium">Company Name</label>
                                <Input 
                                  id="companyName" 
                                  name="companyName" 
                                  value={formData.companyName}
                                  onChange={e => setFormData({...formData, companyName: e.target.value})}
                                  className="bg-background/50 border-border/50 h-12" 
                                  placeholder="Acme Corp" 
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="website" className="text-sm font-medium">Current Website</label>
                                <Input 
                                  id="website" 
                                  name="website" 
                                  type="url" 
                                  value={formData.website}
                                  onChange={e => setFormData({...formData, website: e.target.value})}
                                  className="bg-background/50 border-border/50 h-12" 
                                  placeholder="https://example.com" 
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between pt-6">
                            <Button type="button" variant="outline" size="lg" onClick={handlePrev} className="gap-2">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </Button>
                            <Button 
                              type="submit" 
                              size="lg" 
                              disabled={!isStep5Valid || isSubmitting}
                              className="w-full sm:w-auto"
                            >
                              {isSubmitting ? "Sending..." : "Submit Form"}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}