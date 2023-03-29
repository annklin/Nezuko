module.exports = {
	name: "support",
	alias: ["sup"],
	desc: "Send you official support group link.",
	category: "Group",
    react:"✅",
    start:async(client,m,{command,prefix,pushName})=>{
        let yup = ['https://media.tenor.com/XikoNQDfaqcAAAPo/bunny-nezuko-bunny-ears.mp4',
                   'https://media.tenor.com/xBh07rz9GHYAAAPo/nezuko-kamado-nezuko.mp4',
                   'https://media.tenor.com/CMHP0DIQY4UAAAPo/demon-slayer-kimetsu-no-yaiba.mp4',
                   'https://media.tenor.com/68c6pxzq3RAAAAPo/nezuko-nezuko-kamado.mp4',
                   'https://media.tenor.com/JQgNUfM_xcwAAAPo/nezuko-kamado-run.mp4'
                  ]
let rae = yup[Math.floor(Math.random() * yup.length)]

  
const eternitylogogg = "https://static.moewalls.com/videos/preview/2022/rei-ayanami-in-the-rain-neon-genesis-evangelion-preview.mp4"
        
                         
const lemo = `
*━『 Links do grupo de suporte 』━*

*1) [ 𝔸ℕ𝕂ℤ𝕀ℕ 𝕌ℕ𝕀𝕍𝔼ℝ𝕊𝔼  ] :*
https://chat.whatsapp.com/H5TsskWeHvUDlkcYlPpT3v

`
  await client.sendMessage(m.from,{video:{url:eternitylogogg}, gifPlayback:true, caption: `*${pushName}* da uma olhada na sua DM`},{quoted:m})
  await  client.sendMessage(m.from,{video:{url:eternitylogogg}, gifPlayback:true, caption:lemo},{quoted:m})  
    }
}
