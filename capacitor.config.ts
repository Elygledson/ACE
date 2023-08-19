import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'Laqua Nutri',
  webDir: 'dist/project-ace',
  server: {
    androidScheme: 'https',
  },
};

export default config;
