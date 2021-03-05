
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "bear",
  description: "Shows a picture of a bear",
  category: "fun",
  run: async (client, message) => {
    const data = await fetch(
      "https://no-api-key.com/api/v1/animals/bear"
    ).then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle(data.fact)
      .setDescription(`[click here if image failed to load](${data.image})`)
      .setImage(data.image);

    message.channel.send(embed);
  },
};