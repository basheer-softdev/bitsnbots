"use client";
import React, { useState } from "react";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter an email address");
      setEmail("");
    }
    try {
      const response = await axios.post("/api/news-letter", {
        email: email,
      });

      console.log("subscribed:", response.data);
      alert("Subscribe successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error Subscribe:", error);
      alert("Failed to Subscribe. Please try again.");
    }
  };
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pb-8 pt-16">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Get exclusive insights, hands-on tutorials, and the latest
              robotics news straight to your inbox.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-sm bg-white/5 px-3.5 py-2 text-base text-white placeholder:text-gray-500 sm:text-sm/6 focus:outline-none focus:border"
              />
              <button
                onClick={handleSubscribe}
                className="flex-none rounded-sm bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all duration-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-sm bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Weekly articles
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Learn about cutting-edge robotics trends, DIY projects, and
                coding tutorials.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-sm bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-white"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                No spam
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                We respect your inbox and send only valuable content.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
