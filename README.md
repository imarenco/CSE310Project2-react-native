# Mobile App - Real-Time Group Chat

A React Native mobile application for real-time group chat using Expo and Socket.IO.

# Overview

As a software engineer focused on mobile development and user experience, I created this React Native application to explore cross-platform mobile development and real-time communication patterns. This project represents my journey into understanding how modern mobile apps handle real-time data synchronization and provide seamless user experiences across different platforms.

The software I wrote is a feature-rich mobile chat application that demonstrates advanced React Native concepts including state management, real-time data binding, and native mobile UI/UX patterns. It showcases my ability to create responsive, performant mobile applications that can handle real-time communication with beautiful, intuitive interfaces.

My purpose for writing this software was to master React Native development while building a practical, real-world application that users could actually benefit from. This project helped me understand the complexities of mobile app development, from handling network connectivity issues to implementing smooth animations and responsive design patterns that work across different screen sizes and device capabilities.

[Software Demo Video](https://youtu.be/hpb-5JjPs3g)

## 🚀 Features

- **Beautiful UI** with modern design and smooth animations
- **Real-time messaging** with instant message delivery
- **User name input screen** with comprehensive validation
- **Group chat interface** with message bubbles
- **Typing indicators** to show when others are typing
- **Connection status** indicator
- **Auto-scroll** to latest messages
- **Message timestamps** and sender identification
- **System messages** for join/leave events
- **Error handling** with user-friendly alerts

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### For iOS Development
- Xcode (for iOS simulator)
- macOS (required for iOS development)

### For Android Development
- Android Studio (for Android emulator)
- Android SDK

## 🛠️ Installation

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Fix Expo compatibility issues:
   ```bash
   npx expo install --fix
   ```

## 🏃‍♂️ Running the App

### Start Expo Development Server
```bash
npm start
# or
npx expo start
```

### Run on Different Platforms

#### iOS Simulator
```bash
npm run ios
# or press 'i' in the terminal after starting expo
```

#### Android Emulator
```bash
npm run android
# or press 'a' in the terminal after starting expo
```

#### Physical Device
1. Install **Expo Go** app on your device
2. Scan the QR code displayed in the terminal
3. The app will load on your device

#### Web Browser
```bash
npm run web
# or press 'w' in the terminal after starting expo
```

## 🔧 Configuration

### Server Connection

The app connects to the backend server. You need to update the server URL in two files:

1. **`src/screens/ChatScreen.js`**:
   ```javascript
   const SERVER_URL = 'http://YOUR_IP_ADDRESS:3000';
   ```

2. **`src/services/socketService.js`**:
   ```javascript
   this.SERVER_URL = 'http://YOUR_IP_ADDRESS:3000';
   ```

### Finding Your Computer's IP Address

#### macOS/Linux
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

#### Windows
```bash
ipconfig
```

### Important Notes
- Use your computer's IP address, not `localhost`
- Ensure your mobile device and computer are on the same network
- The backend server must be running before connecting

## 📱 App Screens

### 1. Name Input Screen
- **Purpose**: Welcome screen to enter user's full name
- **Features**:
  - Beautiful gradient background
  - Input validation (length, format, required)
  - Loading state with smooth transitions
  - Error handling with user-friendly alerts

### 2. Chat Screen
- **Purpose**: Main group chat interface
- **Features**:
  - Real-time message updates
  - Message bubbles with sender names
  - System messages for join/leave events
  - Typing indicators
  - Connection status indicator
  - Auto-scroll to latest messages
  - Message timestamps

## 🎨 UI Components

### Message Bubbles
- **Own messages**: Blue background, right-aligned
- **Others' messages**: White background, left-aligned
- **System messages**: Centered, gray background

### Input Validation
- **Name requirements**:
  - 2-50 characters
  - Letters, spaces, hyphens, apostrophes only
  - Cannot be empty

- **Message requirements**:
  - Cannot be empty
  - Maximum 500 characters

### Connection Status
- **Green dot**: Connected to server
- **Red dot**: Disconnected from server
- **Status text**: Shows current connection state

## 🔌 Socket.IO Integration

The app uses Socket.IO for real-time communication:

### Connection Events
```javascript
// Connect to server
socket.on('connect', () => {
  // Join chat with user name
  socket.emit('join', { fullName: 'John Doe' });
});

// Handle disconnection
socket.on('disconnect', () => {
  // Update UI to show disconnected state
});
```

### Message Events
```javascript
// Send message
socket.emit('message', { content: 'Hello world!' });

// Receive messages
socket.on('message', (message) => {
  // Add message to chat
});

// Receive existing messages when joining
socket.on('messages', (messages) => {
  // Load all previous messages
});
```

### Typing Indicators
```javascript
// Send typing status
socket.emit('typing', true);  // Start typing
socket.emit('typing', false); // Stop typing

// Receive typing indicators
socket.on('userTyping', (data) => {
  // Show typing indicator for other users
});
```

## 🐛 Troubleshooting

### Common Issues

#### Expo Go Connection Issues
- Ensure your device and computer are on the same network
- Try using a different network (mobile hotspot)
- Restart Expo development server

#### Server Connection Issues
- Verify the backend server is running
- Check the server URL in the app
- Ensure firewall allows connections on port 3000
- Test server connection: `curl http://YOUR_IP:3000/health`

#### App Crashes
- Clear Expo cache: `npx expo start --clear`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for compatibility issues: `npx expo install --fix`

#### Performance Issues
- Close other apps on your device
- Use a physical device instead of simulator
- Check network connection quality

### Debugging

#### Enable Debug Logs
```javascript
// Add to ChatScreen.js
console.log('Socket connected:', socket.connected);
console.log('Messages:', messages);
```

#### React Native Debugger
1. Install React Native Debugger
2. Enable debugging in Expo Go
3. Use Chrome DevTools for debugging

#### Expo DevTools
- Press `d` in terminal to open DevTools
- Use the console for logging
- Monitor network requests

## 📁 Project Structure

```
mobile/
├── App.js                    # Main app component with navigation
├── app.json                  # Expo configuration
├── babel.config.js           # Babel configuration
├── package.json              # Dependencies and scripts
└── src/
    ├── screens/
    │   ├── NameInputScreen.js    # Welcome screen
    │   └── ChatScreen.js         # Chat interface
    ├── components/               # Reusable components
    └── services/
        └── socketService.js      # Socket.IO service
```

## 📦 Dependencies

### Core Dependencies
- `expo` - React Native development platform
- `react-native` - React Native framework
- `@react-navigation/native` - Navigation library
- `@react-navigation/stack` - Stack navigation
- `socket.io-client` - Socket.IO client

### UI Dependencies
- `expo-linear-gradient` - Gradient backgrounds
- `@expo/vector-icons` - Icon library
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling

### Development Dependencies
- `@babel/core` - Babel compiler
- `nodemon` - Development auto-restart

## 🔄 Development Workflow

1. **Start the backend server** (see backend README)
2. **Update server URL** in mobile app
3. **Start Expo development server**
4. **Test on device/simulator**
5. **Make changes** - app will reload automatically
6. **Debug** using React Native Debugger or console logs

## 📱 Building for Production

### Expo Build
```bash
# Build for iOS
expo build:ios

# Build for Android
expo build:android
```

### EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for platforms
eas build --platform ios
eas build --platform android
```

## 🔒 Security Considerations

- **Network Security**: Use HTTPS in production
- **Input Validation**: All inputs are validated
- **Error Handling**: Graceful error handling implemented
- **Authentication**: Not implemented - add for production

## 📈 Performance Optimization

### Current Optimizations
- FlatList for efficient message rendering
- Auto-scroll to latest messages
- Typing indicator debouncing
- Connection status monitoring

### Future Improvements
- Message pagination for large chat histories
- Image and file sharing
- Push notifications
- Offline message queuing
- Message encryption

# Development Environment

I developed this mobile application using React Native with Expo, which provides a powerful development environment for cross-platform mobile development. The development setup included VS Code as the primary IDE with React Native extensions, Expo CLI for project management, and various mobile simulators for testing across different platforms.

The programming language used is JavaScript (ES6+) with React Native framework, leveraging modern React patterns including hooks, functional components, and context API. Key libraries include Expo for development tools and services, React Navigation for screen management, Socket.IO client for real-time communication, and various UI libraries for creating beautiful, native-like interfaces. The development workflow was streamlined with Expo's hot reloading and over-the-air updates.

# Useful Websites

- [React Native Official Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Getting Started](https://reactnavigation.org/docs/getting-started)
- [Socket.IO Client Documentation](https://socket.io/docs/v4/client-api/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Expo Linear Gradient Documentation](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

## 📄 License

MIT License - feel free to use and modify for your projects. 