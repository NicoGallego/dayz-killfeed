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

/*client.once('clientReady', async () => {
    console.log(`[Discord] Connecté en tant que ${client.user?.tag}`)
    const channel = await client.channels.fetch(config.discord.killfeedChannelId)
    if (channel instanceof TextChannel) {
        await channel.send('🤖 Bot connecté !')
    }
})*/
client.login(config.discord.token)

export async function sendKillfeedEmbed(embed: EmbedBuilder): Promise<void> {
    if (!ready) return
    const channel = await client.channels.fetch(config.discord.killfeedChannelId)
    if (!channel || !(channel instanceof TextChannel)) return
    await channel.send({ embeds: [embed] })
}