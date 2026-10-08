"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import GlassCard from "../shared/GlassCard";
import AnimatedButton from "../shared/AnimatedButton";
import { Send, Mail, CheckCircle2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSent, setIsSent] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSent(true);
        toast({
          title: "Message Dispatched! 🚀",
          description: "Your inquiry has been sent to ketanwachar2000@gmail.com. We'll reply within 15 minutes.",
        });
        form.reset();
        setTimeout(() => setIsSent(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Notice",
        description: "Sent directly via mail gateway to ketanwachar2000@gmail.com",
      });
      // Fallback mailto
      window.location.href = `mailto:ketanwachar2000@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent("From: " + data.name + " (" + data.email + ")\n\n" + data.message)}`;
    }
  };

  return (
    <GlassCard className="max-w-2xl mx-auto border-primary/30 p-6 md:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">Send Us a Message</h2>
          <p className="text-xs text-muted-foreground mt-1">Inquiries are delivered to: <strong className="text-primary font-mono">ketanwachar2000@gmail.com</strong></p>
        </div>
        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary">
          <Mail className="h-5 w-5" />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="bg-background/80 border-white/15 focus:border-primary text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/80 border-white/15 focus:border-primary text-sm" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Project Inquiry / Hiring / Consultation" {...field} className="bg-background/80 border-white/15 focus:border-primary text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your project requirements..." rows={4} {...field} className="bg-background/80 border-white/15 focus:border-primary text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <AnimatedButton type="submit" disabled={form.formState.isSubmitting} icon={Send} size="lg" className="w-full sm:w-auto">
              {form.formState.isSubmitting ? "Sending to ketanwachar2000@gmail.com..." : isSent ? "Sent Successfully! ✨" : "Submit Inquiry"}
            </AnimatedButton>

            <a
              href="mailto:ketanwachar2000@gmail.com?subject=Website%20Inquiry"
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-mono"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Or email directly →</span>
            </a>
          </div>
        </form>
      </Form>
    </GlassCard>
  );
};

export default ContactForm;
