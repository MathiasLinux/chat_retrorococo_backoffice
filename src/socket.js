import { io } from 'socket.io-client';

const URL = "https://serverchat.iutmulhouse.fr";

export const socket = io(URL);