import { RxDashboard } from "react-icons/rx";
import { MdLocalHospital } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiFillMedicineBox } from "react-icons/ai";
import { GrDocumentTime } from "react-icons/gr";
import { AiFillSchedule } from "react-icons/ai";
import { MdDepartureBoard } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

export const SideNavBarMock = [
  {
    url: "/",
    tabname: "Dashboard",
    icon: RxDashboard,
  },
  {
    url: "/patients",
    tabname: "Patients",
    icon: MdLocalHospital,
  },
  {
    url: "/staffs",
    tabname: "Staffs",
    icon: BsFillPersonCheckFill,
  },
  {
    url: "/doctors",
    tabname: "Doctors",
    icon: AiFillMedicineBox,
  },
  {
    url: "/appointments",
    tabname: "Appointments",
    icon: GrDocumentTime,
  },
  {
    url: "/doctor-schedule",
    tabname: "Doctors schedule",
    icon: AiFillSchedule,
  },

  {
    url: "/departments",
    tabname: "Departments",
    icon: MdDepartureBoard,
  },
  {
    url: "/chat",
    tabname: "Chat",
    icon: BsFillChatDotsFill,
  },

  {
    url: "/email",
    tabname: "Email",
    icon: AiTwotoneMail,
  },
];
