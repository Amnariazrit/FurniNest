"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";

const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  email: z.string().email(),
  subject: z.string().max(100).optional(),
  message: z.string().min(1).max(500),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormType) {
    await client.create({
      _type: "contactForm",
      name: values.firstName,
      email: values.email,
      subject: values.subject,
      message: values.message,
    });

    form.reset(); // Clear form fields after submission
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We’re here to assist you! Please reach out if you have any questions or need support.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name Field */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      {...field}
                      className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Subject Field */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Subject (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject"
                      {...field}
                      className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Share your message here"
                      {...field}
                      rows={6}
                      className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <div className="text-center">
              <Button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;




























// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";

// const formSchema = z.object({
//   firstName: z.string().min(1).max(50),
//   email: z.string().email(),
//   subject: z.string().max(100).optional(),
//   message: z.string().min(1).max(500),
// });

// type FormType = z.infer<typeof formSchema>;

// const ContactForm = () => {
//   const form = useForm<FormType>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: FormType) {
//     await client.create({
//       _type: "contactForm",
//       name: values.firstName,
//       email: values.email,
//       subject: values.subject,
//       message: values.message,
//     });
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-16 px-8">
//       <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 space-y-6">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Contact Us
//         </h2>
//         <p className="text-center text-gray-600 mb-8">
//           We’re here to assist you! Please reach out if you have any questions or need support.
//         </p>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             {/* First Name Field */}
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">First Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter your first name"
//                       {...field}
//                       className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Email Field */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter your email"
//                       {...field}
//                       className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Subject Field */}
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Subject (Optional)</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter subject"
//                       {...field}
//                       className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Message Field */}
//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
//                   <FormControl>
//                     <textarea
//                       placeholder="Share your message here"
//                       {...field}
//                       rows={6}
//                       className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             <div className="text-center">
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               >
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;











































//////Old Code///////

// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
  
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";

// const formSchema = z.object({
//   firstName: z.string().min(1).max(50),
//   email: z.string().email(),
//   subject: z.string().max(100).optional(),
//   message: z.string().min(1).max(500), // To handle message field
// });

// //////data type for formschema//////
// type FormType = z.infer<typeof formSchema>;

// const ContactForm = () => {
//   const form = useForm<FormType>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: FormType) {
//     await client.create({
//       _type: "contactForm",
//       name: values.firstName,
//       email: values.email,
//       subject: values.subject, // added subject field
//       message: values.message, // added message field
//     });
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10 px-6">
//       <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 space-y-6">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
//           Contact Us
//         </h2>
//         <p className="text-center text-gray-600 mb-6">
//           We're here to assist you! Fill out the form below, and we'll get back
//           to you as soon as possible.
//         </p>
        
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             {/* First Name Field */}
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">First Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter your first name"
//                       {...field}
//                       className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Email Field */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter your email"
//                       {...field}
//                       className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Subject Field */}
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Subject (Optional)</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Enter subject"
//                       {...field}
//                       className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             {/* Message Field */}
//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
//                   <FormControl>
//                     <textarea
//                       placeholder="Write your message here"
//                       {...field}
//                       rows={4}
//                       className="mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
//                     />
//                   </FormControl>
//                   <FormMessage className="text-sm text-red-500" />
//                 </FormItem>
//               )}
//             />

//             <div className="text-center">
//               <Button
//                 type="submit"
//                 className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;































// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";

// const formSchema = z.object({
//   firstName: z.string().min(1).max(50),
//   email: z.string().email(),
//   subject: z.string().max(100).optional(),
//   message: z.string().min(1).max(500), // To handle message field
// });

// //////data type for formschema//////
// type FormType = z.infer<typeof formSchema>;

// const ContactForm = () => {
//   const form = useForm<FormType>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: FormType) {
//     await client.create({
//       _type: "contactForm",
//       name: values.firstName,
//       email: values.email,
//       subject: values.subject, // added subject field
//       message: values.message, // added message field
//     });
//   }

//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           {/* First Name Field */}
//           <FormField
//             control={form.control}
//             name="firstName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>First Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="First Name" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Email Field */}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Email" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Subject Field */}
//           <FormField
//             control={form.control}
//             name="subject"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Subject</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Subject (optional)" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Message Field */}
//           <FormField
//             control={form.control}
//             name="message"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Message</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Your message" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default ContactForm;


























// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { client } from "@/sanity/lib/client";

// const formSchema = z.object({
//   firstName: z.string().min(1).max(50),
//   email:z.string().email()
// });

// //////data type for formschema//////
// type FormType = z.infer<typeof formSchema>;



// const ContactForm = () => {
//   const form = useForm<FormType>({
//     resolver: zodResolver(formSchema),
//   });

//   async function onSubmit(values: FormType) {
//     await client.create({
//       _type:"contactForm",
//       name:values.firstName,
//       email:values.email,
//       message:"message"
//     })

    
//   }

//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="firstName"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>First Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="First Name" {...field} />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//                <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Email" {...field} />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default ContactForm;



























////// old code /////

// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="bg-white text-gray-800 min-h-screen flex items-center justify-center p-6">
//       <div className="max-w-5xl w-full bg-white rounded-lg shadow-md p-8">
//         <h2 className="text-2xl font-bold text-center mb-4">
//           Get In Touch With Us
//         </h2>
//         <p className="text-center text-gray-500 mb-8">
//           For more information about our products & services, please feel free
//           to drop us an email. Our staff is always here to help you out. Do not
//           hesitate!
//         </p>
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Information */}
//           <div>
//             <div className="flex items-start mb-6">
//               <div className="text-yellow-500 mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 3 7l-2 4h5l2-4a10 10 0 0 0 5 0l2 4h5l-2-4a10 10 0 0 0 3-7 10 10 0 0 0-10-10z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-semibold">Address</p>
//                 <p className="text-gray-500">
//                   236 5th SE Avenue, New York NY10000, United States
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start mb-6">
//               <div className="text-yellow-500 mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm1 17h-2v-2h2v2zm0-4h-2v-6h2v6z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-semibold">Phone</p>
//                 <p className="text-gray-500">Mobile: (+84) 546-6789</p>
//                 <p className="text-gray-500">Hotline: (+84) 456-6789</p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="text-yellow-500 mr-4">
//                 <svg
//                   className="w-6 h-6"
//                   fill="currentColor"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zm5 15h-10v-2h10v2zm-3-5h-4v-5h4v5z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-semibold">Working Time</p>
//                 <p className="text-gray-500">Monday-Friday: 9:00 - 22:00</p>
//                 <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
//               </div>
//             </div>
//           </div>
//           {/* Contact Form */}
//           <div>
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Your name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="This is optional"
//                   className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
