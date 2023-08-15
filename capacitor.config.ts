import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'project-ace',
  webDir: 'dist/project-ace',
  server: {
    androidScheme: 'https',
  },
};

export default config;
