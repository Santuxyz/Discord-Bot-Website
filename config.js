import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SgMusic } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1056105404456771654&permissions=8&scope=bot",
  //BotInvite Link
  Features: [
    {
      name: "MUSIC",
      description:
        "Feature rich and high quality music bot with great features for your server...",
      logo: <MdAddModerator className="h-10 w-10" />,
    },

  //Bot Features
  serverCount: 30, //-  - Your
  memberCount: 102, //--   - Bot
  executedCommand: 7000, //--  - Stats
  availableCommand: 100, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "",
  twitterLink: "",
  mediumLink: "",
  facebookLink: "",
  discordLink: "https://discord.gg/SMbtGmYhtz",
  youtubeLink: "",
};

export default config;
