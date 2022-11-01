import * as React from 'react';
import _ from 'lodash';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { SvgIconProps } from '@mui/material/SvgIcon';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import GroupTitle from '../GroupTitle';
import {
  menuIcons,
  ISidebarMenuGroup,
  ISidebarMenuItem,
  ISelectedAppMenuItem,
  ISidebarMenuItemChild
} from '../menuIcons';
import { Theme } from '@/theme';
import { getInfoCount } from '../utils';

const MenuGroupWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  '.Mui-selected': {
    backgroundColor: `${theme.palette.primary.lighter} !important`
  },
  '.MuiListItemIcon-root': {
    minWidth: '36px !important'
  }
}));
const MenuListItem = styled(ListItemButton)(({ theme }: { theme: Theme }) => ({
  borderRadius: theme.shape.borderRadius
}));

const MenuItemText: any = styled(ListItemText)(
  ({ theme, selected }: { theme: Theme; selected: boolean }) => ({
    '& .MuiTypography-root': {
      fontWeight: selected ? theme.typography.sidebar.fontWeight : 'inherit',
      fontSize: theme.typography.sidebar.fontSize,
      color: selected ? theme.palette.primary.main : theme.palette.grey[600]
    }
  })
);

interface StyledMenuItemProps {
  selected: boolean;
  labelIcon: React.ElementType<SvgIconProps>;
}
function StyledMenuItem(props: StyledMenuItemProps) {
  const { selected, labelIcon: LabelIcon } = props;

  return (
    <Box
      component={LabelIcon}
      sx={[
        (theme: Theme) => ({
          color: selected ? theme.palette.primary.main : theme.palette.grey[600]
        })
      ]}
    />
  );
}

export interface ITreeMenuprops {
  menuData: ISidebarMenuGroup[];
  onSelected: (selectedItem: ISelectedAppMenuItem) => void;
  selectedNodeId: string;
  setSelectedNodeId: (nodeId: string) => void;
  selectedChildNodeId: string;
  setSelectedChildNodeId: (nodeId: string) => void;
}

export default function TreeMenu({
  menuData,
  onSelected,
  selectedNodeId,
  setSelectedNodeId,
  selectedChildNodeId,
  setSelectedChildNodeId
}: ITreeMenuprops) {
  const [itemOpenVal, setItemOpenVal] = React.useState<{ [nodeId: string]: boolean }>(() => {
    if (selectedNodeId && selectedChildNodeId) {
      return {
        [selectedNodeId]: true
      };
    }
    return {};
  });

  const uiSize = 'small';

  const handleFatherClick = React.useCallback(
    (hasChildren: boolean, nodeId: string, nodeItem: ISidebarMenuItem) => {
      if (hasChildren) {
        setItemOpenVal((prev: any) => {
          const newVal: any = {};
          newVal[nodeId] = !_.get(prev, nodeId, false);
          return {
            ...prev,
            ...newVal
          };
        });
      } else {
        setSelectedNodeId(nodeId);
        setSelectedChildNodeId('');
        onSelected({ nodeItem });
      }
    },
    []
  );

  const handleChildClick = React.useCallback(
    (
      fatherNodeId: string,
      nodeId: string,
      nodeItem: ISidebarMenuItem,
      childItem: ISidebarMenuItemChild
    ) => {
      setSelectedNodeId(fatherNodeId);
      setSelectedChildNodeId(nodeId);
      onSelected({ nodeItem, childItem });
    },
    []
  );

  const chipSx = (theme: Theme, selected: boolean) => ({
    fontWeight: selected ? theme.typography.fontWeightBold : theme.typography.fontWeightRegular,
    color: selected ? theme.palette.common.white : theme.palette.primary.bright,
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.primary.lighter
  });

  return (
    <List
      component="nav"
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-labelledby="nested-list-subheader"
    >
      {Array.isArray(menuData) &&
        menuData.map((group: ISidebarMenuGroup, groupIndex: number) => {
          const nodeGroupKey = `menugroup_${group.nodeId}`;
          const renderGroups =
            Array.isArray(group.children) &&
            group.children.length > 0 &&
            group.children.map((item: ISidebarMenuItem) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const nodeKey = `menuitems_${item.nodeId}`;
              const open = _.get(itemOpenVal, item.nodeId, false);
              const itemSelected = selectedNodeId === item.nodeId;
              const infoCount = getInfoCount(item.labelInfo);
              return (
                <MenuGroupWrapper key={nodeKey}>
                  <MenuListItem
                    selected={itemSelected}
                    onClick={() => {
                      handleFatherClick(hasChildren, item.nodeId, item);
                    }}
                  >
                    <ListItemIcon>
                      <StyledMenuItem
                        selected={itemSelected}
                        labelIcon={
                          !item.labelIconName ? undefined : (menuIcons as any)[item.labelIconName]
                        }
                      />
                    </ListItemIcon>
                    <MenuItemText selected={itemSelected} primary={item.labelText} />
                    {!hasChildren && infoCount > 0 && (
                      <Chip
                        size={uiSize}
                        label={infoCount > 999 ? '999+' : infoCount}
                        sx={(theme: Theme) => chipSx(theme, itemSelected)}
                      />
                    )}
                    {hasChildren &&
                      (open ? (
                        <ExpandLess
                          sx={(theme: Theme) => ({
                            color: itemSelected
                              ? theme.palette.primary.main
                              : theme.palette.grey[600]
                          })}
                        />
                      ) : (
                        <ExpandMore
                          sx={(theme: Theme) => ({
                            color: itemSelected
                              ? theme.palette.primary.main
                              : theme.palette.grey[600]
                          })}
                        />
                      ))}
                  </MenuListItem>
                  {hasChildren && (
                    <Collapse
                      in={open}
                      timeout="auto"
                      unmountOnExit
                      sx={(theme: Theme) => ({
                        mt: theme.spacing(1),
                        ml: '10%',
                        width: '90%'
                      })}
                    >
                      {Array.isArray(item.children) &&
                        item.children.map((child: ISidebarMenuItemChild) => {
                          const childSelected = selectedChildNodeId === child.nodeId;
                          const childInfoCount = getInfoCount(child.labelInfo);
                          return (
                            <List
                              key={_.uniqueId(`menuitemchild_${item.nodeId}`)}
                              component="div"
                              disablePadding
                            >
                              <MenuListItem
                                selected={childSelected}
                                sx={{ pl: 4 }}
                                onClick={() => {
                                  handleChildClick(item.nodeId, child.nodeId, item, child);
                                }}
                              >
                                <ListItemIcon>
                                  <StyledMenuItem
                                    selected={childSelected}
                                    labelIcon={
                                      !child.labelIconName
                                        ? undefined
                                        : (menuIcons as any)[child.labelIconName]
                                    }
                                  />
                                </ListItemIcon>
                                <MenuItemText selected={childSelected} primary={child.labelText} />
                                {childInfoCount > 0 && (
                                  <Chip
                                    size={uiSize}
                                    label={childInfoCount > 999 ? '999+' : childInfoCount}
                                    sx={(theme: Theme) => chipSx(theme, childSelected)}
                                  />
                                )}
                              </MenuListItem>
                            </List>
                          );
                        })}
                    </Collapse>
                  )}
                </MenuGroupWrapper>
              );
            });
          return (
            <React.Fragment key={nodeGroupKey}>
              {groupIndex > 0 && <Divider sx={{ mb: 1, mt: 1 }} />}
              <GroupTitle title={group.groupTitle} caption={group.groupCaption} />
              {renderGroups}
            </React.Fragment>
          );
        })}
    </List>
  );
}
