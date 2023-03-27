module.exports = {
  name: "help",
  alias: ["h", "menu"],
  desc: "List all command",
  category: "General",
  react: "✅",
  start: async (client, m, { commands, args, prefix, text, toUpper }) => {
    const { pushName, sender } = m;
    if (args[0]) {
      let data = [];
      let name = args[0].toLowerCase();
      let cmd =
        commands.get(name) ||
        Array.from(commands.values()).find((v) => v.alias.includes(name));
      if (!cmd || cmd.type == "hide") return m.reply("No Command Found");
      else
        data.push(
          `*🍁Command :* ${cmd.name.replace(/^\w/, (c) => c.toUpperCase())}`
        );
      if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`);
      if (cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`);
      if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`);
      if (cmd.usage)
        data.push(
          `*💡Example :* ${cmd.usage
            .replace(/%prefix/gi, prefix)
            .replace(/%command/gi, cmd.name)
            .replace(/%text/gi, text)}`
        );
      var buttonss = [
        {
          buttonId: `${prefix}help`,
          buttonText: { displayText: `help` },
          type: 1,
        },
      ];
      let buth = {
        text: `*ℹ️Command Info*\n\n${data.join("\n")}`,
        footer: "*©Eternity-Team*",
        buttons: buttonss,
        headerType: 1,
      };
      return client.sendMessage(m.from, buth, { quoted: m });
    } else {
      const { pushName, sender } = m;
      let cm = commands.keys();
      let category = [];

      for (let cmd of cm) {
        let info = commands.get(cmd);
        if (!cmd) continue;
        if (!info.category || info.category === "private") continue;
        if (
          !info?.category ||
          (info.category === "Nsfw" && !nsfw.includes(m.from))
        )
          continue;
        if (Object.keys(category).includes(info.category))
          category[info.category].push(info);
        else {
          category[info.category] = [];
          category[info.category].push(info);
        }
      }
      if (!nsfw.includes(m.from)) {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🎟", "♨️", "🉐"];
      } else {
        var emo = ["📖","🎉", "🍁", "🍀", "🌊", "🎵", "🔞", "🎟", "♨️", "🉐"];
      }
      let txt = `*Kon'nichiwa (｡♡‿♡｡)* ${pushName} Watashiwa *Nezuko*.
                       
🧧 *Prefix :* [ ${prefix} ]
                       
📝 Here's the *Commands* listed below :\n\n`;
      const keys = Object.keys(category);
      for (const key of keys) {
        txt += `*${key.toUpperCase()} ${
          emo[keys.indexOf(key)]
        } :-*  \n\`\`\`${category[key]
          .map((cmd) => cmd.name)
          .join(", ")}\`\`\`\n\n`;
      }
      txt += `📗 Type *${prefix}help* <Command-Name> or <Command-Name> --info\n\n`;
      txt += `*©Eternity-Team*`
      let urlll = [
      "https://static.moewalls.com/videos/preview/2022/neko-nezuko-kimetsu-no-yaiba-preview.mp4",
      "https://static.moewalls.com/videos/preview/2022/nezuko-lying-on-the-water-kimetsu-no-yaiba-preview.mp4",
      "https://static.moewalls.com/videos/preview/2022/nezuko-kamado-demon-slayer-preview.mp4",
      "https://upcdn.io/FW25b6N/raw/y2mate.com%20-%20%20Kamado%20Nezuko%20%20%20Kimetsu%20no%20Yaiba%20%20%20Wallpaper%20Live%204K%20%20%20Wallpaper%20Engine%20%20%20Demon%20slayer%20_360p%20(1).mp4",
    ];
    let rae = urlll[Math.floor(Math.random() * urlll.length)];
      await client.sendMessage(
      m.from,
      { video: { url: rae }, gifPlayback: true, caption: mo, mentions: owner },
      { quoted: m });
    }
  },
};
