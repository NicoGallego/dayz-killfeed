import { Client, GatewayIntentBits, TextChannel, EmbedBuilder } from 'discord.js'
import { config } from './config'

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

let ready = false

client.once('clientReady', () => {
    console.log(`[Discord] Connecté en tant que ${client.user?.tag}`)
    ready = true
})

client.login(config.discord.token)

export async function sendKillfeedEmbed(embed: EmbedBuilder): Promise<void> {
    if (!ready) return
    const channel = await client.channels.fetch(config.discord.killfeedChannelId)
    if (!channel || !(channel instanceof TextChannel)) return
    await channel.send({ embeds: [embed] })
}

export async function sendConnectionEmbed(embed: EmbedBuilder): Promise<void> {
    if (!ready) return
    const channel = await client.channels.fetch(config.discord.connectionChannelId)
    if (!channel || !(channel instanceof TextChannel)) return
    await channel.send({ embeds: [embed] })
}

export async function sendLeaderboardEmbed(embed: EmbedBuilder): Promise<void> {
    if (!ready) return
    const channel = await client.channels.fetch(config.discord.leaderboardChannelId)
    if (!channel || !(channel instanceof TextChannel)) return
    await channel.send({ embeds: [embed] })
}