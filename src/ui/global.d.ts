export {};

declare global {
  interface Window {
    electronAPI: {
      openImageDialog: () => Promise<string | null>;
      loadImage: (filePath: string) => string;
    };
  }
}