import * as React from 'react';
import _ from 'lodash';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Divider from '@mui/material/Divider';
import {
  menuIcons,
  ISidebarMenuGroup,
  ISidebarMenuItem,
  ISelectedAppMenuItem,
  ISidebarMenuItemChild
} from '../menuIcons';
import { Theme } from '@/theme';
import { getInfoCount } from '../utils';

const GroupWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  '.Mui-selected': {
    backgroundColor: `${theme.palette.primary.lighter} !important`
  }
}));

const PopMenu = styled(Menu)(({ theme }: { theme: Theme }) => ({
  '.Mui-selected': {
    backgroundColor: `${theme.palette.primary.lighter} !important`
  }
}));

const PopMenuBorder = styled('div')(({ theme }: { theme: Theme }) => ({
  marginRight: theme.spacing(1),
  marginLeft: theme.spacing(1)
}));

const PopMenuItem = styled(MenuItem)(({ theme }: { theme: Theme }) => ({
  borderRadius: theme.shape.borderRadius
}));

const PopMenuItemInner: any = styled('div')(
  ({ theme, selected }: { theme: Theme; selected: boolean }) => ({
    color: selected ? theme.palette.primary.main : theme.palette.grey[600],
    fontSize: theme.typography.sidebar.fontSize,
    fontWeight: selected ? theme.typography.sidebar.fontWeight : theme.typography.fontWeightRegular,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  })
);

const MenuListItem = styled(ListItemButton)(({ theme }: { theme: Theme }) => ({
  borderRadius: theme.shape.borderRadius
}));

interface MenuPopProps {
  selectedMenuNodeId: string;
  curClickItem: ISidebarMenuItem | null;
  menuItemEl: Element | null;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  handleItemClick: (
    fatherItem: ISidebarMenuItem,
    nodeId: string,
    childItem: ISidebarMenuItemChild
  ) => void;
}
function MenuPop(props: MenuPopProps) {
  const {
    selectedMenuNodeId,
    curClickItem,
    menuItemEl,
    isMenuOpen,
    handleMenuClose,
    handleItemClick
  } = props;

  const uiSize = 'small';

  return (
    <PopMenu
      anchorEl={menuItemEl}
      id="app-list-menu-pop"
      open={isMenuOpen}
      onClose={handleMenuClose}
      transformOrigin={{ horizontal: 24, vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 10 }}
    >
      <PopMenuBorder>
        {curClickItem &&
          Array.isArray(curClickItem.children) &&
          curClickItem.children.map((child: ISidebarMenuItemChild) => {
            const childSelected = child.nodeId === selectedMenuNodeId;
            const childInfoCount = getInfoCount(child.labelInfo);
            return (
              <PopMenuItem
                key={_.uniqueId(`apppopmenuitem_${child.nodeId}`)}
                selected={childSelected}
                onClick={() => {
                  handleItemClick(curClickItem, child.nodeId, child);
                }}
              >
                <PopMenuItemInner selected={childSelected}>
                  {child.labelText}
                  {childInfoCount > 0 && (
                    <Chip
                      size={uiSize}
                      label={childInfoCount > 999 ? '999+' : childInfoCount}
                      sx={(theme: Theme) => ({
                        ml: theme.spacing(1),
                        fontWeight: childSelected
                          ? theme.typography.fontWeightBold
                          : theme.typography.fontWeightRegular,
                        color: childSelected
                          ? theme.palette.common.white
                          : theme.palette.primary.bright,
                        backgroundColor: childSelected
                          ? theme.palette.primary.main
                          : theme.palette.primary.lighter
                      })}
                    />
                  )}
                </PopMenuItemInner>
              </PopMenuItem>
            );
          })}
      </PopMenuBorder>
    </PopMenu>
  );
}

interface StyledMenuItemProps {
  selected: boolean;
  labelIcon: React.ElementType<SvgIconProps>;
}
function StyledMenuItem(props: StyledMenuItemProps) {
  const { selected, labelIcon: LabelIcon } = props;

  return (
    <Box
      component={LabelIcon}
      color="inherit"
      sx={[
        { mr: 1 },
        (theme: Theme) => ({
          fontWeight: selected ? theme.typography.sidebar.fontWeight : 'inherit',
          color: selected ? theme.palette.primary.main : theme.palette.grey[600]
        })
      ]}
    />
  );
}

export interface IListPopMenuProps {
  menuData: ISidebarMenuGroup[];
  onSelected: (selectedItem: ISelectedAppMenuItem) => void;
  selectedNodeId: string;
  setSelectedNodeId: (nodeId: string) => void;
  selectedMenuNodeId: string;
  setSelectedMenuNodeId: (nodeId: string) => void;
}

export default function ListPopMenu({
  menuData,
  onSelected,
  selectedNodeId,
  setSelectedNodeId,
  selectedMenuNodeId,
  setSelectedMenuNodeId
}: IListPopMenuProps) {
  const [curClickItem, setCurClickItem] = React.useState<ISidebarMenuItem | null>(null);
  const [menuItemEl, setMenuItemEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuItemEl);

  const handleFatherClick = (
    hasChildren: boolean,
    nodeItem: ISidebarMenuItem,
    currentTarget: any
  ) => {
    if (hasChildren) {
      setCurClickItem(nodeItem);
      setMenuItemEl(currentTarget);
    } else {
      setMenuItemEl(null);
      setSelectedNodeId(nodeItem.nodeId);
      setSelectedMenuNodeId('');
      onSelected({ nodeItem });
    }
  };

  const handleMenuClose = React.useCallback(() => {
    setMenuItemEl(null);
  }, []);

  const handleMenuItemClick = React.useCallback(
    (fatherItem: ISidebarMenuItem, nodeId: string, childItem: ISidebarMenuItemChild) => {
      setMenuItemEl(null);
      setSelectedNodeId(fatherItem.nodeId);
      setSelectedMenuNodeId(nodeId);
      onSelected({ nodeItem: fatherItem, childItem });
    },
    []
  );

  return (
    <GroupWrapper>
      <List component="nav" aria-label="Device settings">
        {Array.isArray(menuData) &&
          menuData.map((group: ISidebarMenuGroup, groupIndex: number) => {
            const nodeGroupKey = `menuicongroup_${group.nodeId}`;

            const renderItems =
              group.children.length > 0 &&
              group.children.map((item: ISidebarMenuItem) => {
                const hasChildren = Array.isArray(item.children) && item.children.length > 0;
                const itemSelected = selectedNodeId === item.nodeId;
                const nodeKey = `menuiconitems_${item.nodeId}`;
                const infoCount = getInfoCount(item.labelInfo);
                return (
                  <React.Fragment key={nodeKey}>
                    <ListItem
                      onClick={(event: React.MouseEvent<HTMLElement>) => {
                        handleFatherClick(hasChildren, item, event.currentTarget);
                      }}
                      id={_.uniqueId(`menuitemiconid_${item.nodeId}`)}
                      key={item.nodeId}
                      disablePadding
                      sx={{ display: 'block' }}
                      aria-haspopup="listbox"
                      aria-controls="lock-menu"
                      aria-label="when device is locked"
                      aria-expanded={isMenuOpen ? 'true' : undefined}
                    >
                      <MenuListItem
                        selected={itemSelected}
                        sx={{
                          minHeight: 48,
                          justifyContent: 'center',
                          px: 2.5
                        }}
                      >
                        <Tooltip title={item.labelText}>
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: 'auto',
                              justifyContent: 'center'
                            }}
                          >
                            {!hasChildren && infoCount > 0 ? (
                              <Badge color="secondary" badgeContent={infoCount} max={999}>
                                <StyledMenuItem
                                  selected={itemSelected}
                                  labelIcon={
                                    !item.labelIconName
                                      ? undefined
                                      : (menuIcons as any)[item.labelIconName]
                                  }
                                />
                              </Badge>
                            ) : (
                              <StyledMenuItem
                                selected={itemSelected}
                                labelIcon={
                                  !item.labelIconName
                                    ? undefined
                                    : (menuIcons as any)[item.labelIconName]
                                }
                              />
                            )}
                          </ListItemIcon>
                        </Tooltip>
                      </MenuListItem>
                    </ListItem>
                  </React.Fragment>
                );
              });

            return (
              <React.Fragment key={nodeGroupKey}>
                {groupIndex > 0 && (
                  <Divider
                    sx={(theme: Theme) => ({ mt: theme.spacing(1), mb: theme.spacing(1) })}
                  />
                )}
                {renderItems}
              </React.Fragment>
            );
          })}
      </List>
      <MenuPop
        selectedMenuNodeId={selectedMenuNodeId}
        curClickItem={curClickItem}
        isMenuOpen={isMenuOpen}
        menuItemEl={menuItemEl}
        handleMenuClose={handleMenuClose}
        handleItemClick={handleMenuItemClick}
      />
    </GroupWrapper>
  );
}
