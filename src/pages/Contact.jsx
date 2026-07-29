import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+27 72 700 6135'],
    action: 'tel:+27727006135',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['tshigeng.buti@gmail.com'],
    action: 'mailto:tshigeng.buti@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['3 Saltus Street, Galloway Estate', 'Irene, Centurion, Pretoria'],
    action: 'https://www.google.com/maps?q=3+Saltus+Street+Galloway+Estate+Irene+Centurion',
  },
  {
    icon: Clock,
    title: 'Social Media',
    details: ['@TshigengHoldings'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
    toast.success('Message sent successfully!');
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-support-green rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's Discuss Your Facility{' '}
              <span className="text-accent">Service</span> Requirements
            </h1>
            <p className="mt-6 text-lg font-body text-white/70 leading-relaxed max-w-2xl">
              Use the details below or send us a message to connect with Tshigeng Holdings
              for hygiene, pest control, cleaning, and cleaning material enquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComp = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {info.action ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="bg-card rounded-2xl border border-border p-6 h-full hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:[background-color:hsl(var(--support-green)/0.12)] flex items-center justify-center mb-4 transition-colors">
                          <IconComp className="w-6 h-6 text-primary group-hover:text-support-green transition-colors" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{info.title}</h3>
                        {info.details.map((d) => (
                          <p key={d} className="font-body text-sm text-muted-foreground">{d}</p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="bg-card rounded-2xl border border-border p-6 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                        <IconComp className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{info.title}</h3>
                      {info.details.map((d) => (
                        <p key={d} className="font-body text-sm text-muted-foreground">{d}</p>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Form + Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <div className="w-20 h-20 rounded-full [background-color:hsl(var(--support-green)/0.12)] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-support-green" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-card-foreground mb-3">
                    Message Received
                  </h3>
                  <p className="font-body text-muted-foreground mb-8">
                    Thank you for reaching out. Our team will review your enquiry and respond
                    within one business day.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
                    }}
                    variant="outline"
                    className="font-body font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                  <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mb-8">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="font-body text-sm font-medium mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="font-body"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-body text-sm font-medium mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.co.za"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="font-body"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="phone" className="font-body text-sm font-medium mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+27 (0XX) XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="font-body"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="font-body text-sm font-medium mb-2 block">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="font-body text-sm font-medium mb-2 block">
                        Service of Interest
                      </Label>
                      <Select value={formData.service} onValueChange={(v) => handleChange('service', v)}>
                        <SelectTrigger className="font-body">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hygiene">Hygiene Services</SelectItem>
                          <SelectItem value="pest-control">Pest Control</SelectItem>
                          <SelectItem value="commercial-industrial-cleaning">Commercial & Industrial Cleaning</SelectItem>
                          <SelectItem value="cleaning-materials">Cleaning Materials</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-body text-sm font-medium mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your facility needs, project scope, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="font-body h-32 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold py-6 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Map area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <iframe
                  title="Map showing Tshigeng Holdings location in Irene, Centurion, South Africa"
                  src="https://www.google.com/maps?q=3%20Saltus%20Street%2C%20Galloway%20Estate%2C%20Irene%2C%20Centurion%2C%20Pretoria%2C%20South%20Africa&output=embed"
                  className="w-full h-72 md:h-96 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="pointer-events-none absolute bottom-6 left-6 right-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    Our Location
                  </h3>
                  <p className="font-body text-sm text-white/80">
                    3 Saltus Street, Galloway Estate, Irene, Centurion
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps?q=3+Saltus+Street+Galloway+Estate+Irene+Centurion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full font-body font-semibold py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Open in Google Maps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  Serving the People
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Tshigeng Holdings serves clients across South Africa with facilities management, 
                  pest control, hygiene, cleaning, and cleaning material supply. 
                  We are committed to delivering reliable, high quality solutions that meet the needs of businesses, 
                  organizations, and households.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
