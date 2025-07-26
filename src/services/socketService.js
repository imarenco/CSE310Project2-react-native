import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.isConnected = false;
    this.SERVER_URL = 'http://192.168.1.239:3000'; // Your computer's IP address
  }

  connect() {
    if (this.socket) {
      return this.socket;
    }

    this.socket = io(this.SERVER_URL, {
      transports: ['websocket', 'polling'],
      timeout: 20000,
    });

    this.socket.on('connect', () => {
      console.log('Connected to server');
      this.isConnected = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
      this.isConnected = false;
    });

    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
    }
  }

  getSocket() {
    return this.socket;
  }

  isSocketConnected() {
    return this.isConnected;
  }

  // Helper methods for common socket operations
  joinChat(fullName) {
    if (this.socket) {
      this.socket.emit('join', { fullName });
    }
  }

  sendMessage(content) {
    if (this.socket && this.isConnected) {
      this.socket.emit('message', { content });
    }
  }

  sendTypingIndicator(isTyping) {
    if (this.socket && this.isConnected) {
      this.socket.emit('typing', isTyping);
    }
  }
}

// Export a singleton instance
export default new SocketService(); 