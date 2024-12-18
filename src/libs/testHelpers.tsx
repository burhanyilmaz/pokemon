import { QueryClientProvider } from '@tanstack/react-query';
import MainNavigator from 'navigators/MainNavigator';
import { PropsWithChildren } from 'react';
import { queryClient } from 'services/queryClient';

export const TestAppNavigator = () => (
  <QueryClientProvider client={queryClient}>
    <MainNavigator />
  </QueryClientProvider>
);

export const QueryWrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
