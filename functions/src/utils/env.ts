export const isDevelopment = (): boolean => (process.env.node || "")
    .includes("nodenv");
