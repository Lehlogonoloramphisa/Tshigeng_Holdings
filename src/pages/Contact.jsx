import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { businessAddresses } from '@/data/businessInfo';

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
    title: businessAddresses.primary.label,
    details: businessAddresses.primary.lines,
    action: businessAddresses.primary.mapsUrl,
  },
  {
    icon: MapPin,
    title: businessAddresses.regional.label,
    details: businessAddresses.regional.lines,
    action: businessAddresses.regional.mapsUrl,
  },
  {
    icon: MapPin,
    title: 'Service Enquiries',
    details: ['Centurion, Pretoria, and Gauteng', 'Ask us about availability elsewhere in South Africa'],
  },
];

const serviceLabels = {
  hygiene: 'Hygiene Services',
  'pest-control': 'Pest Control',
  'commercial-cleaning': 'Commercial Cleaning Services',
  'cleaning-materials': 'Cleaning Materials',
  multiple: 'Multiple Services',
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceName = serviceLabels[formData.service] || 'General service enquiry';
    const subject = `Website enquiry: ${serviceName}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Service: ${serviceName}`,
      '',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:tshigeng.buti@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              Use the details below or prepare an email enquiry to connect with Tshigeng Holdings
              for hygiene, pest control, cleaning, and cleaning material enquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComp = info.icon;
              return (
                <motion.div
                  key={info.title}
                  id={info.title === businessAddresses.regional.label ? 'rustenburg-location' : undefined}
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
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
                  <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                    Prepare an Email Enquiry
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mb-8">
                    Complete the details below. Your email app will open with a draft for you to review and send.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name" className="font-body text-sm font-medium mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          autoComplete="name"
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
                          autoComplete="email"
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
                          type="tel"
                          autoComplete="tel"
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
                          autoComplete="organization"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="font-body"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service" className="font-body text-sm font-medium mb-2 block">
                        Service of Interest
                      </Label>
                      <Select value={formData.service} onValueChange={(v) => handleChange('service', v)}>
                        <SelectTrigger id="service" className="font-body">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hygiene">Hygiene Services</SelectItem>
                          <SelectItem value="pest-control">Pest Control</SelectItem>
                          <SelectItem value="commercial-cleaning">Commercial Cleaning Services</SelectItem>
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
                        maxLength={1500}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold py-6 text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                    >
                      Open Email Draft
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
              </div>
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
                  title="Map showing Tshigeng Holdings at 3 Saltus Street, Irene, Centurion, Gauteng"
                  src="https://www.google.com/maps?q=3%20Saltus%20Street%2C%20Galloway%20Estate%2C%20Irene%2C%20Centurion%2C%20Gauteng%2C%20South%20Africa&output=embed"
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
                    {businessAddresses.primary.full}
                  </p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full font-body font-semibold py-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a
                  href={businessAddresses.primary.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  About Service Enquiries
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Tshigeng Holdings offers commercial and industrial pest control, commercial cleaning, hygiene equipment and refill services, and cleaning materials. Include your location and requirements so the team can confirm availability and discuss the right next step.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
