interface CalendlyInterface {
  initPopupWidget: (options: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly: CalendlyInterface;
  }
}

export {};
