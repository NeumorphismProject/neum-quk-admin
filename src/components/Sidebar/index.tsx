import * as React from 'react';
import { styled } from '@mui/material/styles';
import { StyledComponent } from '@mui/styled-engine';
import { MUIStyledCommonProps } from '@mui/system';
import { ISidebarMenuGroup, ISelectedAppMenuItem } from './menuIcons';
import TreeMenu from './TreeMenu';
import ListPopMenu from './ListPopMenu';
import { Theme } from '@/theme';

export * from './menuIcons';

const Wrapper = styled('div')(({ theme, shrink }: { theme?: Theme; shrink: boolean }) => ({
  backgroundColor: (theme as Theme).palette.common.white,
  height: '100%',
  maxWidth: shrink ? '80px' : '270px',
  minWidth: shrink ? '80px' : '270px',
  overflowY: 'auto',
  paddingLeft: (theme as Theme).spacing(2),
  paddingRight: (theme as Theme).spacing(2),
  transition: '0.1s linear'
}));

export interface IAppMenuProps {
  menuData: ISidebarMenuGroup[];
  shrink?: boolean;
  onSelected: (selectedItem: ISelectedAppMenuItem) => void;
  selectedNodeId: string;
  setSelectedNodeId: (nodeId: string) => void;
  selectedChildNodeId: string;
  setSelectedChildNodeId: (nodeId: string) => void;
}

export default function AppMenu({
  menuData,
  shrink = false,
  onSelected,
  selectedNodeId,
  setSelectedNodeId,
  selectedChildNodeId,
  setSelectedChildNodeId
}: IAppMenuProps) {
  return (
    <Wrapper shrink={shrink}>
      {!shrink ? (
        <TreeMenu
          menuData={menuData}
          onSelected={onSelected}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
          selectedChildNodeId={selectedChildNodeId}
          setSelectedChildNodeId={setSelectedChildNodeId}
        />
      ) : (
        <ListPopMenu
          menuData={menuData}
          onSelected={onSelected}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
          selectedMenuNodeId={selectedChildNodeId}
          setSelectedMenuNodeId={setSelectedChildNodeId}
        />
      )}
    </Wrapper>
  );
}
