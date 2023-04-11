const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/0nDW2cIKujRDKWFUWSVDQN?si=8d7646db12634e4e")
    }
}