import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
