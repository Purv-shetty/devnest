"use client";
import { DrawingData } from "@/app/types/app";
import {
    MessageEvent,
    SocketContext as SocketContextType,
    SocketId,
} from "@/app/types/socket";
import { RemoteUser, USER_STATUS, User } from "@/app/types/user";
import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from "react";
import { toast } from "react-hot-toast";
import io, { Socket as SocketClass } from "socket.io-client"; // Import `Socket` as SocketClass
import { useAppContext } from "./AppContext";

const SocketContext = createContext<SocketContextType | null>(null);

export const useSocket = (): SocketContextType => {
    const context = useContext(SocketContext);
    if (context === null) {
        throw new Error("useSocket must be used within a SocketProvider");
    }
    return context;
};

// Ensure BACKEND_URL is a string, or use a fallback URL if undefined
const BACKEND_URL = process.env.VITE_BACKEND_URL || "http://localhost:3000"; // fallback URL

const SocketProvider = ({ children }: { children: ReactNode }) => {
    const {
        users,
        setUsers,
        setStatus,
        setCurrentUser,
        drawingData,
        setDrawingData,
    } = useAppContext();

    // Memoizing the socket connection with the `SocketClass` constructor type
    const socket = useMemo(() => {
        console.log("Attempting to connect to:", BACKEND_URL);  // Debug log to check URL
        return io(BACKEND_URL, {
            reconnectionAttempts: 2,
        }) as typeof SocketClass; // This ensures TypeScript understands the type
    }, []); // Only run this once on mount

    const handleError = useCallback(
        (err: any) => {
            console.log("socket error", err);
            setStatus(USER_STATUS.CONNECTION_FAILED);
            toast.dismiss();
            toast.error("Failed to connect to the server");
        },
        [setStatus]
    );

    const handleUsernameExist = useCallback(() => {
        toast.dismiss();
        setStatus(USER_STATUS.INITIAL);
        toast.error(
            "The username you chose already exists in the room. Please choose a different username."
        );
    }, [setStatus]);

    const handleJoiningAccept = useCallback(
        ({ user, users }: { user: User; users: RemoteUser[] }) => {
            setCurrentUser(user);
            setUsers(users);
            toast.dismiss();
            setStatus(USER_STATUS.JOINED);
        },
        [setCurrentUser, setStatus, setUsers]
    );

    const handleUserLeft = useCallback(
        ({ user }: { user: User }) => {
            toast.success(`${user.username} left the room`);
            setUsers(users.filter((u: User) => u.username !== user.username));
        },
        [setUsers]
    );

    const handleRequestDrawing = useCallback(
        ({ socketId }: { socketId: SocketId }) => {
            socket.emit(MessageEvent.SYNC_DRAWING, { socketId, drawingData });
        },
        [drawingData, socket]
    );

    const handleDrawingSync = useCallback(
        ({ drawingData }: { drawingData: DrawingData }) => {
            setDrawingData(drawingData);
        },
        [setDrawingData]
    );

    useEffect(() => {
        // Debug logs for socket connection
        socket.on("connect", () => {
            console.log("Socket connected successfully to:", BACKEND_URL);  // Log on connect
        });

        socket.on("connect_error", (err: any) => {
            console.error("Socket connection error:", err);  // Log on error
            handleError(err);
        });

        socket.on("connect_failed", () => {
            console.error("Socket connection failed");  // Log if connection fails
            handleError(new Error("Socket connection failed"));
        });

        socket.on("disconnect", () => {
            console.log("Socket disconnected from:", BACKEND_URL);  // Log on disconnect
        });

        socket.on(MessageEvent.USERNAME_EXISTS, handleUsernameExist);
        socket.on(MessageEvent.JOIN_ACCEPTED, handleJoiningAccept);
        socket.on(MessageEvent.USER_DISCONNECTED, handleUserLeft);
        socket.on(MessageEvent.REQUEST_DRAWING, handleRequestDrawing);
        socket.on(MessageEvent.SYNC_DRAWING, handleDrawingSync);

        return () => {
            // Clean up event listeners on unmount
            socket.off("connect");
            socket.off("connect_error");
            socket.off("connect_failed");
            socket.off("disconnect");
            socket.off(MessageEvent.USERNAME_EXISTS);
            socket.off(MessageEvent.JOIN_ACCEPTED);
            socket.off(MessageEvent.USER_DISCONNECTED);
            socket.off(MessageEvent.REQUEST_DRAWING);
            socket.off(MessageEvent.SYNC_DRAWING);
        };
    }, [
        handleDrawingSync,
        handleError,
        handleJoiningAccept,
        handleRequestDrawing,
        handleUserLeft,
        handleUsernameExist,
        setUsers,
        socket,
    ]);

    return (
        <SocketContext.Provider
            value={{
                socket,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { SocketProvider };
export default SocketContext;
