import Mail from '@mui/icons-material/MailOutlined';
import ArrowBackIos from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIosOutlined';
import Delete from '@mui/icons-material/DeleteOutlined';
import Label from '@mui/icons-material/LabelOutlined';
import SupervisorAccount from '@mui/icons-material/SupervisorAccountOutlined';
import Info from '@mui/icons-material/InfoOutlined';
import Forum from '@mui/icons-material/ForumOutlined';
import LocalOffer from '@mui/icons-material/LocalOfferOutlined';
import DonutSmall from '@mui/icons-material/DonutSmallOutlined';
import HelpCenter from '@mui/icons-material/HelpCenterOutlined';
import CoPresent from '@mui/icons-material/CoPresentOutlined';
import Badge from '@mui/icons-material/BadgeOutlined';
import Person from '@mui/icons-material/PersonOutlineOutlined';

export const menuIcons: any = {
  Mail,
  ArrowBackIos,
  ArrowForwardIos,
  Delete,
  Label,
  SupervisorAccount,
  Info,
  Forum,
  LocalOffer,
  // --
  DonutSmall,
  HelpCenter,
  CoPresent,
  Badge,
  Person
};

export interface ISidebarMenuItemChild {
  nodeId: string;
  labelText: string;
  labelIconName?: keyof typeof menuIcons;
  labelInfo?: string;
  routePath?: string;
}

export interface ISidebarMenuItem extends ISidebarMenuItemChild {
  children?: ISidebarMenuItemChild[];
}

export interface ISidebarMenuGroup {
  nodeId: string;
  groupTitle: string;
  groupCaption: string;
  children: ISidebarMenuItem[];
}

export interface ISelectedAppMenuItem {
  nodeItem: ISidebarMenuItem;
  childItem?: ISidebarMenuItemChild;
}
