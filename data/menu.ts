import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const menu = [
  {
    name: "หน้าแรก",
    description: "Speak directly to your customers",
    href: "/",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "บทความ",
    description: "Speak directly to your customers",
    href: "/blogs",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "ติดต่อเรา",
    description: "Connect with third-party tools",
    href: "/aboutus/contact",
    icon: SquaresPlusIcon,
  },
  {
    name: "เกี่ยวกับเรา",
    description: "Your customers’ data will be safe and secure",
    href: "/aboutus",
    icon: FingerPrintIcon,
  },
];

const submenu = [
  {
    name: "หญ้าเทียมปูพื้น",
    description: "Get a better understanding of your traffic",
    href: "/products/artificial-grass",
    icon: ChartPieIcon,
  },
  {
    name: "อุปกรณเสริมติดตั้ง",
    description: "Speak directly to your customers",
    href: "/products/Equipment",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "บริการปูหญ้าเทียม",
    description: "Your customers’ data will be safe and secure",
    href: "/products/services-grass",
    icon: FingerPrintIcon,
  },
  {
    name: "บริการแต่งสวน",
    description: "Connect with third-party tools",
    href: "/products/services-garden",
    icon: SquaresPlusIcon,
  },
  {
    name: "กระเบื้องยาง",
    description: "Build strategic funnels that will convert",
    href: "/products/other",
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  {
    name: "ดูผลงานติดตั้ง",
    href: "https://www.youtube.com/@growgrass5499",
    icon: PlayCircleIcon,
  },
  {
    name: "ติดต่อเซล",
    href: "https://www.facebook.com/growgrassth",
    icon: PhoneIcon,
  },
];

// footer data
const grassLengths = [
  { product: "หญ้าเทียม", link: "#", icon: "material-symbols:check-small" },
  { product: "อุปกรณ์เสริม", link: "#", icon: "material-symbols:check-small" },
  { product: "บริการติดตั้ง", link: "#", icon: "material-symbols:check-small" },
  { product: "วัดพื้นที่", link: "#", icon: "material-symbols:check-small" },
];

const contacts = [
  {
    list: "Tel : 095-484-2976",
    link: "/aboutus/contact",
    icon: "material-symbols:call",
  },
  {
    list: "Line id : @growgrass",
    link: "https://lin.ee/NOqTCpE",
    icon: "ic:outline-wechat",
  },
  // { list: 'บริการติดตั้ง', link: '#', icon: "material-symbols:check-small" },
  {
    list: "E-mail : growgrassth@gmail.com",
    link: "https://lin.ee/NOqTCpE",
    icon: "material-symbols:mark-email-unread",
  },
];

export { menu, submenu, callsToAction, grassLengths, contacts };
