"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  HeartIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "Contact us", href: "#" },
  { name: "Service", href: "#" },
  { name: "Spares", href: "#" },
  { name: "Rental", href: "#" },
  { name: "Warranty", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="container mx-auto flex items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="flex items-center space-x-2 -m-1.5 p-1.5">
            <span className="logo5 text-2xl font-semibold text-white -tracking-tighter">
              @bitsnbots
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="relative text-sm/6 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 text-white focus:outline-none">
              <p className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
                Product
              </p>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white/20 shadow-xl ring-1 ring-white/30 backdrop-blur-md backdrop-saturate-150 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 divide-y divide-white/20">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/30 transition duration-200"
                  >
                    <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-white/20 group-hover:bg-white/30 backdrop-blur-sm">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-700 group-hover:text-indigo-600 transition"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="block text-white hover:underline decoration-indigo-500"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-150">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 text-white hover:bg-white/20 hover:backdrop-blur-sm transition"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-white group-hover:text-indigo-600"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="#"
            className="relative text-sm/6 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Deals
          </Link>

          <Link
            href="#"
            className="relative text-sm/6 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            About us
          </Link>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 text-white focus:outline-none">
              <p className="relative text-sm/6 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
                Support
              </p>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-white"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-50 mt-3 w-56 rounded-xl bg-white/20 p-2 shadow-xl ring-1 ring-white/30 backdrop-blur-md backdrop-saturate-150 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="divide-y divide-white/30">
                {company.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-white hover:bg-white/30 hover:text-white rounded-md transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="#"
            className="relative text-sm/6 text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Bulk Orders
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <Link href="/fav">
            <HeartIcon className="size-5 flex-none text-white" />
          </Link>
          <Link href="/cart">
            <ShoppingBagIcon className="size-5 flex-none text-white" />
          </Link>

          <Link href="/login" className="text-sm/6 text-white">
            Log in
          </Link>
        </div>
      </nav>

      {/* Mobile Responsive */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 overflow-y-auto pb-32 flow-root overflow-x-hidden">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 text-white hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180 text-white"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 text-white">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-white hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white hover:bg-gray-50"
                >
                  Deals
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white hover:bg-gray-50"
                >
                  About us
                </Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 text-white hover:bg-gray-50">
                    Support
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {company.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-white hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-white hover:bg-gray-50"
                >
                  Bulk Orders
                </Link>
              </div>
              <div className="py-6 fixed bottom-0 flex justify-center items-center space-x-2 bg-white">
                <Link href="/fav">
                  <HeartIcon className="size-5 flex-none text-white" />
                </Link>
                <Link href="/cart">
                  <ShoppingBagIcon className="size-5 flex-none text-white" />
                </Link>
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-white hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
