import { ReactNode } from "react"
import { AppContextProvider } from "./AppContext.tsx"
import { SocketProvider } from "./SocketContext.tsx"
import { SettingContextProvider } from "./SettingContext.tsx"
import { TabContextProvider } from "./TabContext.tsx"
import { FileContextProvider } from "./FileContext.tsx"
import { RunCodeContextProvider } from "./RunCodeContext.tsx"
import { ChatContextProvider } from "./ChatContext.tsx"


function AppProvider({ children }: { children: ReactNode }) {
    return (
        <AppContextProvider>
            <SocketProvider>
                <SettingContextProvider>
                    <TabContextProvider>
                        <FileContextProvider>
                            <RunCodeContextProvider>
                                <ChatContextProvider>
                                    {children}
                                </ChatContextProvider>
                            </RunCodeContextProvider>
                        </FileContextProvider>
                    </TabContextProvider>
                </SettingContextProvider>
            </SocketProvider>
        </AppContextProvider>
    )
}

export default AppProvider
