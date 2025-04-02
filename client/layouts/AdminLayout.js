"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowTurnDownRightIcon,
  Bars3Icon,
  CalendarIcon,
  ChatBubbleBottomCenterTextIcon,
  CircleStackIcon,
  CodeBracketIcon,
  Cog8ToothIcon,
  CpuChipIcon,
  CreditCardIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  FolderIcon,
  HomeIcon,
  IdentificationIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PresentationChartLineIcon,
  ReceiptRefundIcon,
  RectangleGroupIcon,
  ScaleIcon,
  Squares2X2Icon,
  StarIcon,
  TicketIcon,
  TruckIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  VideoCameraIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigation = [
  // 🔹 Dashboard
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  { name: "Profile", href: "/admin/profile", icon: UserGroupIcon },

  // 🔹 User Management
  { name: "User Management", href: "", icon: UsersIcon },
  { name: "Manage Users", href: "/admin/users", icon: UserGroupIcon },
  { name: "Request Project", href: "/admin/request-project", icon: FolderIcon },
  {
    name: "Enquiry Management",
    href: "/admin/enquiries",
    icon: ChatBubbleLeftIcon,
  },

  // 🔹 Blog Management
  { name: "Blog Management", href: "", icon: MegaphoneIcon },
  { name: "Blog Categories", href: "/admin/blog-categories", icon: FolderIcon },
  { name: "Blog CRUD", href: "/admin/blog", icon: DocumentDuplicateIcon },
  {
    name: "Software Management",
    href: "/admin/software",
    icon: CodeBracketIcon,
  },

  // 🔹 YouTube Management
  { name: "YouTube Management", href: "", icon: MegaphoneIcon },
  {
    name: "YouTube Videos Category",
    href: "/admin/video-categories",
    icon: RectangleGroupIcon,
  },
  { name: "YouTube Videos CRUD", href: "/admin/videos", icon: VideoCameraIcon },

  // 🔹 Components Management
  { name: "Component Management", href: "", icon: CpuChipIcon },
  {
    name: "Component Categories",
    href: "/admin/manage-categories",
    icon: Squares2X2Icon,
  },
  {
    name: "Components CRUD",
    href: "/admin/components",
    icon: DocumentDuplicateIcon,
  },

  // 🔹 E-commerce Management
  { name: "E-commerce Management", href: "", icon: ShoppingCartIcon },
  {
    name: "Products Category",
    href: "/admin/product-categories",
    icon: RectangleGroupIcon,
  },
  { name: "Products CRUD", href: "/admin/products", icon: CubeIcon },
  {
    name: "Inventory Management",
    href: "/admin/inventory",
    icon: CircleStackIcon,
  },
  { name: "Customers Management", href: "/admin/customer", icon: ScaleIcon },
  { name: "Orders", href: "/admin/orders", icon: TruckIcon },
  {
    name: "Sales Management",
    href: "/admin/sales",
    icon: PresentationChartLineIcon,
  },
  { name: "Sales Reports", href: "/admin/sales-reports", icon: ChartBarIcon },
  {
    name: "Returns & Refunds",
    href: "/admin/returns-refunds",
    icon: ReceiptRefundIcon,
  },
  {
    name: "Coupons & Discounts",
    href: "/admin/coupons-discounts",
    icon: TicketIcon,
  },
  {
    name: "Payments & Transactions",
    href: "/admin/payments-transactions",
    icon: CreditCardIcon,
  },

  // 🔹 Event Management
  { name: "Event Management", href: "", icon: CalendarIcon },
  { name: "Events", href: "/admin/events", icon: CalendarIcon },
  { name: "Event Applicants", href: "/admin/applicants", icon: UsersIcon },

  // 🔹 Newsletter Management
  { name: "Newsletter Management", href: "", icon: MegaphoneIcon },
  {
    name: "Newsletter CRUD",
    href: "/admin/news-letter",
    icon: NewspaperIcon,
  },

  // 🔹 SEO & Settings
  { name: "SEO & Settings", href: "", icon: MegaphoneIcon },
  {
    name: "SEO Optimization",
    href: "/admin/seo-optimization",
    icon: CpuChipIcon,
  },
  { name: "Reviews & Ratings", href: "/admin/reviews-ratings", icon: StarIcon },
  {
    name: "Bug Reports",
    href: "/admin/bug-reports",
    icon: ExclamationTriangleIcon,
  },
  { name: "Settings", href: "/admin/settings", icon: Cog8ToothIcon },

  // 🔹 Logout
  { name: "Logout", href: "", icon: ArrowTurnDownRightIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session?.user?.image);

  const handleLogout = () => {
    localStorage.removeItem("persist:root");
    signOut();
    // router.push("/");
  };

  return (
    <div>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        {/* Backdrop Transition (Fades In and Out) */}
        <TransitionChild
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div className="fixed inset-0 flex">
          {/* Sidebar Slide Transition */}
          <TransitionChild
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 bg-gray-900">
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto scrollbar-hide bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <Link href="/">
                    <img
                      alt="Your Company"
                      src="/logo.png"
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            {item.name === "Logout" ? (
                              // ✅ Logout Button
                              <button
                                onClick={handleLogout}
                                className="w-full text-left text-gray-400 hover:bg-gray-800 hover:text-white group flex gap-x-3 rounded-sm p-2 text-sm font-semibold"
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 shrink-0"
                                />
                                {item.name}
                              </button>
                            ) : item.href === "" ? (
                              <div className="text-gray-500 cursor-default font-semibold p-2 text-sm">
                                {item.name}
                              </div>
                            ) : (
                              // ✅ Normal Clickable Menu Items
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.href === pathname
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white",
                                  "group flex gap-x-3 rounded-sm p-2 text-sm font-semibold"
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 shrink-0"
                                />
                                {item.name}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto scrollbar-hide bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="/">
              <img alt="Your Company" src="/logo.png" className="h-8 w-auto" />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {item.name === "Logout" ? (
                        // ✅ Logout Button
                        <button
                          onClick={handleLogout}
                          className="w-full text-left text-gray-400 hover:bg-gray-800 hover:text-white group flex gap-x-3 rounded-sm p-2 text-sm font-semibold"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </button>
                      ) : item.href === "" ? (
                        <div className="text-gray-500 cursor-default font-semibold p-2 text-sm">
                          {item.name}
                        </div>
                      ) : (
                        // ✅ Normal Clickable Menu Items
                        <Link
                          href={item.href}
                          className={classNames(
                            item.href === pathname
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:bg-gray-800 hover:text-white",
                            "group flex gap-x-3 rounded-sm p-2 text-sm font-semibold"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
              {session?.user && (
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold text-white"
                  >
                    <Image
                      alt="User profile"
                      src={
                        session?.user?.profile ||
                        "https://placehold.co/32x32/png"
                      } // use fallback image
                      width={32}
                      height={32}
                      className="size-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">{session?.user?.name}</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-white">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <Image
            alt="User profile"
            src={session?.user?.profile || "https://placehold.co/32x32/png"} // use fallback image
            width={32}
            height={32}
            className="size-8 rounded-full bg-gray-800"
          />
        </a>
      </div>

      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
