export const config = {
    discord: {
        token: process.env.DISCORD_TOKEN!,
        guildId: process.env.DISCORD_GUILD_ID!,
        killfeedChannelId: process.env.KILLFEED_CHANNEL_ID!,
        connectionChannelId: process.env.CONNECTION_CHANNEL_ID!,
    },
    nitrado: {
        token: process.env.NITRADO_TOKEN!,
        serviceId: process.env.NITRADO_SERVICE_ID!,
    },
    db: {
        url: process.env.DATABASE_URL!,
    },
    pollIntervalMinutes: parseInt(process.env.POLL_INTERVAL_MINUTES ?? '2'),
}