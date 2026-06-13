interface Window {
  fbq?: (action: string, event: string) => void;
  ttq?: {
    track: (event: string, properties?: Record<string, unknown>) => void;
    page: () => void;
  };
}
