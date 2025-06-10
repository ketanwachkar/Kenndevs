"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import GlassCard from "../shared/GlassCard";
import AnimatedButton from "../shared/AnimatedButton";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
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
    // In a real app, you'd send this data to a backend API
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
      variant: "default", 
    });
    form.reset();
  };

  return (
    <GlassCard className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 font-headline text-foreground">Send Us a Message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="bg-background/50 border-white/20 focus:border-primary" />
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
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/50 border-white/20 focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Inquiry about..." {...field} className="bg-background/50 border-white/20 focus:border-primary" />
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message..." rows={5} {...field} className="bg-background/50 border-white/20 focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="text-center">
            <AnimatedButton type="submit" disabled={form.formState.isSubmitting} icon={Send}>
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </AnimatedButton>
          </div>
        </form>
      </Form>
    </GlassCard>
  );
};

export default ContactForm;
