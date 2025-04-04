"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Who is this website for?",
    answer:
      "Whether you're a beginner curious about robotics, a student working on tech projects, or a professional looking for new innovations, our blogs and resources are designed for you.",
  },
  {
    question: "How often are new blogs and projects posted?",
    answer:
      "We regularly update our content with new blog posts, tutorials, and featured projects. Typically, new posts are added every week to keep you informed about the latest trends in robotics and automation.",
  },
  {
    question: "Can I suggest a topic for a blog post?",
    answer:
      "Yes! We love hearing from our community. If you have a topic in mind, you can suggest it through our Contact Us page or email us directly.",
  },
  {
    question: "How can I save or bookmark my favorite blogs?",
    answer:
      "You can use the 'Save for Later' button on each blog post to bookmark it for future reference.",
  },
  {
    question: "What kind of robotics projects do you feature?",
    answer:
      "We cover a wide range of projects, including Line Follower Robots, Obstacle Avoidance Robots, Arduino & Raspberry Pi Projects, IoT and Smart Home Automation, and AI & Machine Learning in Robotics.",
  },
  {
    question:
      "Do you provide component lists and circuit diagrams for projects?",
    answer:
      "Yes! Each project guide includes a detailed list of components, circuit diagrams, and step-by-step instructions to help you build with ease.",
  },
  {
    question: "Where can I buy the components for these projects?",
    answer:
      "We provide recommended component lists with links to trusted online stores where you can purchase the necessary parts.",
  },
  {
    question: "How can I stay updated with the latest content?",
    answer:
      "You can subscribe to our newsletter to get the latest blogs, projects, and tutorials delivered to your inbox.",
  },
  {
    question: "Do you have a community where I can ask questions?",
    answer:
      "Yes! You can join our community forums or Discord server to discuss projects, ask questions, and connect with other robotics enthusiasts.",
  },
  {
    question: "How can I get in touch with you for inquiries?",
    answer:
      "You can contact us through our Contact page or email us at support@[yourwebsite].com.",
  },
];

const FAQs = () => {
  return (
    <div className="bg-gray-900 -my-0.5">
      <div className="mx-auto container px-6 py-14 lg:px-8">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-white text-center">
            Frequently Asked Questions
          </h2>
          {/* FAQ Grid Layout */}
          <dl className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
            {faqs.map((faq, index) => (
              <Disclosure
                key={faq.question}
                as="div"
                className={`py-6 ${
                  index >= 2 ? "border-t border-white/10" : ""
                } ${index == 1 ? "border-t border-white/10 lg:border-none" : ""}`}
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="group flex w-full items-start justify-between text-left text-white">
                        <span className="text-lg">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon
                              aria-hidden="true"
                              className="size-6 text-indigo-500"
                            />
                          ) : (
                            <PlusIcon
                              aria-hidden="true"
                              className="size-6 text-indigo-500"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel
                      as="dd"
                      className="mt-2 text-gray-400 leading-relaxed"
                    >
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
