import {
  ControlsContainer,
  ZoomControl,
  SearchControl,
  FullScreenControl,
} from '@react-sigma/core';

interface Props {
  addButton: React.ReactNode;
}

export default function Controls({ addButton }: Props) {
  return (
    <>
      <ControlsContainer position="bottom-right">
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
      <ControlsContainer position="top-left">
        <SearchControl style={{ width: '200px' }} />
      </ControlsContainer>
      <ControlsContainer position="top-right">{addButton}</ControlsContainer>
    </>
  );
}
