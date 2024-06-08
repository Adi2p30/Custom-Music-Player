let allMusic = [
  {
    name: "Moth To A Flame",
    artist: "Swedish House Mafia · The Weeknd",
    img: "https://lh3.googleusercontent.com/TvMIwtq5dEO_5ggORcyuvA7d4xU2Uu_AZMaxkNHmlPfUlTnwYb4rXLDsbFtbebrY2E1slCLt9XlhtSZDrQ=w544-h544-l90-rj",
    src: "Moth_To_A_Flame.mp3"
  },
  {
    name: "MODERN JAM",
    artist: "Travis Scott · Teezo Touchdown",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "MODERN_JAM.mp3"
  },
  {
    name: "Count Me Out",
    artist: "Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/ZSS6In_G6CBqzWhCtltNUxoirj2MUwOJ1MaVEauxTePsjBt6OwOtC6jN1YHd3OqnJbRq84rLk-Cy4dW3=w544-h544-l90-rj",
    src: "Count_Me_Out.mp3"
  },
  {
    name: "90210",
    artist: "Travis Scott · Kacy Hill",
    img: "https://lh3.googleusercontent.com/2Y_TsTe2Ch60kTHa9NekMhoCnKAaF5kNQnXzrOYP99ubrTrqL0u0daGIZnAohglAYVVfeYbsm51dyyJB=w544-h544-l90-rj",
    src: "90210.mp3"
  },
  {
    name: "Chanel",
    artist: "Frank Ocean",
    img: "https://lh3.googleusercontent.com/BX6MlAz3oPEBEwSsWn3opfKWhWdEcyhXJOPbFvvy_DrRmZiU_gBH12Cy66M6sDRni9HUkMDdHcorY287=w544-h544-l90-rj",
    src: "Chanel.mp3"
  },
  {
    name: "Antisocial",
    artist: "Ed Sheeran · Travis Scott",
    img: "https://lh3.googleusercontent.com/2rSqxXTYIox46twhc2zC73tSPuzHz9XBx04tojSXQmXN4SK7NgYdwX5PgqcX7reoPG_3WrjnIu-hbm5G=w544-h544-l90-rj",
    src: "Antisocial.mp3"
  },
  {
    name: "Die Hard",
    artist: "Kendrick Lamar · Blxst · Amanda Reifer",
    img: "https://lh3.googleusercontent.com/ZSS6In_G6CBqzWhCtltNUxoirj2MUwOJ1MaVEauxTePsjBt6OwOtC6jN1YHd3OqnJbRq84rLk-Cy4dW3=w544-h544-l90-rj",
    src: "Die_Hard.mp3"
  },
  {
    name: "Cinderella",
    artist: "Future · Metro Boomin · Travis Scott",
    img: "https://lh3.googleusercontent.com/0cRPaYLpBfcB9_0Kt4VM3l5sSHQ-MtIweIH5QXRVnzCrNeFg1RTy9BvCud4Lhpl-zR3rr3nder-4D3FYhQ=w544-h544-l90-rj",
    src: "Cinderella.mp3"
  },
  {
    name: "Addiction",
    artist: "RØZE",
    img: "https://lh3.googleusercontent.com/7oIJyhm7a_ucAG9Pof9dUwvEkoK9Urz1TH5DzqkbmBmTMWO_Ebll3PZ9fRFqwpU9G-ReC5fw5440gb4=w544-h544-l90-rj",
    src: "Addiction.mp3"
  },
  {
    name: "MIDDLE CHILD",
    artist: "J. Cole",
    img: "https://lh3.googleusercontent.com/bS7RtcdD884zMSfG6bap6RqjSQ6YMEDN7sY_OX4y3j0dtJZ5cojYhYtP9De9abML8G_BCZtJyHMSyZlQ=w544-h544-l90-rj",
    src: "MIDDLE_CHILD.mp3"
  },
  {
    name: "Wow.",
    artist: "Post Malone",
    img: "https://lh3.googleusercontent.com/YoQ-A-GOpgeE8tgdF3Rcf5z9V8NIIKjLH6_7X3QphIQUwVHioLu7Ik2wQzU0oCkyNm1TeLDLDYvomJ8=w544-h544-l90-rj",
    src: "Wow..mp3"
  },
  {
    name: "Heartbreak Anniversary",
    artist: "Giveon",
    img: "https://lh3.googleusercontent.com/lJ2PujjCj9l0T-axi_8DzgyHH_1u-4iR2gqnPAJwdEO3vApjTH4kDrV96G1TaU9F_88jHD-jUrnpmBcm=w544-h544-l90-rj",
    src: "Heartbreak_Anniversary.mp3"
  },
  {
    name: "Low",
    artist: "SZA",
    img: "https://lh3.googleusercontent.com/tw5VGXEsehs9OpwnpbubqGp_3Pq9so7QShdyJSlCpXeI2mLRvqRqLNbA7EC4zcNWrFE0_lj9HxpZ23v6=w544-h544-l90-rj",
    src: "Low.mp3"
  },
  {
    name: "sdp interlude",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/4KB4cS7i427tdsareLs5j10tifHVvmP6X3G4umnxCm8Ra9zkG1hYq0C7Lg-B-I-n1i8SP-heKzAKIQXw=w544-h544-l90-rj",
    src: "sdp_interlude.mp3"
  },
  {
    name: "FE!N",
    artist: "Travis Scott · Playboi Carti",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "FE!N.mp3"
  },
  {
    name: "SICKO MODE",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj",
    src: "SICKO_MODE.mp3"
  },
  {
    name: "BUTTERFLY EFFECT",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj",
    src: "BUTTERFLY_EFFECT.mp3"
  },
  {
    name: "Forgot About Dre",
    artist: "Dr. Dre · Eminem",
    img: "https://lh3.googleusercontent.com/w42BmVN1uTez5YI99RhuHvk4u_Eoj6LeXg7d-HMP4c5IkZ5XJbD_04suECGSRw0a6TBdU8UgwRNlDt3lQQ=w544-h544-s-l90-rj",
    src: "Forgot_About_Dre.mp3"
  },
  {
    name: "Mamacita",
    artist: "Travis Scott · Rich Homie Quan · Young Thug",
    img: "https://lh3.googleusercontent.com/e1fr-iGzK9k4-DfC4HN4ue7SrnMhM4rH0FN9PJioQtlKVTqwNpdY1IVw-sqkm3Ze1VizSwAPazWib-9g=w544-h544-l90-rj",
    src: "Mamacita.mp3"
  },
  {
    name: "STARGAZING",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj",
    src: "STARGAZING.mp3"
  },
  {
    name: "Wesley's Theory",
    artist: "Kendrick Lamar · George Clinton · Thundercat",
    img: "https://lh3.googleusercontent.com/L1iBW0CcjEQaXLP1coivJbjf7zSUncQ65_GpKHakOaRI81kS5pRV498PSg3VSmQg7LRMB0cJ6d-HzooO=w544-h544-l90-rj",
    src: "Wesley's_Theory.mp3"
  },
  {
    name: "Alright",
    artist: "Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/TYKrUWKVX2KO1ULKXRCPnl0NqFvS4KES8-h6YliXCnuFbS_mFjZ6GQCXw7R9jK7Myuk5ErdPtBKj63eh=w544-h544-l90-rj",
    src: "Alright.mp3"
  },
  {
    name: "BEG FORGIVENESS",
    artist: "¥$ · Kanye West · Ty Dolla $ign",
    img: "https://lh3.googleusercontent.com/Gv6RFeTy0GXha5O_ppV_D-kVlS7MG4vdXMhPfFY30pRaU3TFzDESG_0ORMo5BgdshhRaiZqP1lJfsa4=w544-h544-l90-rj",
    src: "BEG_FORGIVENESS.mp3"
  },
  {
    name: "Not Like Us",
    artist: "Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/8qk3C_zpd2FXHVN8BpMBFL6h9J5BlKlbcKOlvDMvIgBWBsAblDoTjU98RGbFH9DxtnN1X5zRzc9sSvWr=w544-h544-l90-rj",
    src: "Not_Like_Us.mp3"
  },
  {
    name: "Goosebumps",
    artist: "Travis Scott · Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/Vjc4XkNDNdzNfxC-e9RMWdtGZxMkeOqaNQPeYHe_PBMqF2rfxHVUTAYmZ9FFqr3m4Qqc7kdSSw3Mh6wfww=w544-h544-l90-rj",
    src: "Goosebumps.mp3"
  },
  {
    name: "TELEKINESIS",
    artist: "Travis Scott · SZA · Future",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "TELEKINESIS.mp3"
  },
  {
    name: "Animals",
    artist: "Maroon 5",
    img: "https://lh3.googleusercontent.com/4igiWMyX-TCOC4EwsL4hGJz4Z1QVSSLCrqAySMivS_UHkAjGQA7BqCf7iaaDQPSciW1T8xfDeDqP7iLzEA=w544-h544-l90-rj",
    src: "Animals.mp3"
  },
  {
    name: "Lost In Japan",
    artist: "Shawn Mendes",
    img: "https://lh3.googleusercontent.com/kvmoZWtYAFprDOaRJ6ZTRKvIjlakxe5WCMxJ9u39ao2DP-2XAJ8d-qnajeC0shH8aGDKR1ukOzgPdLU=w544-h544-l90-rj",
    src: "Lost_In_Japan.mp3"
  },
  {
    name: "Maps",
    artist: "Maroon 5",
    img: "https://lh3.googleusercontent.com/4igiWMyX-TCOC4EwsL4hGJz4Z1QVSSLCrqAySMivS_UHkAjGQA7BqCf7iaaDQPSciW1T8xfDeDqP7iLzEA=w544-h544-l90-rj",
    src: "Maps.mp3"
  },
  {
    name: 'Moves Like Jagger (Studio Recording From "The Voice" Performance)',
    artist: "Maroon 5 · Christina Aguilera",
    img: "https://lh3.googleusercontent.com/aqUChJrezGmTQ2x4_-Xj28XFlUVDIqEC2f_lEugI5EYRInPjlDyzBK1G5zwdlIEuBm3wDlJEu2O7F90Z=w544-h544-l90-rj",
    src: 'Moves_Like_Jagger_(Studio_Recording_From_"The_Voice"_Performance).mp3'
  },
  {
    name: "Remember That Night?",
    artist: "Sara Kays",
    img: "https://lh3.googleusercontent.com/KrEYtEU8ZF-4YaAssYenYNyd_dJQkwEJiD5EcDlqsEjPAX2H3vdGH3pnEtaR_h921k_HMcXVP7U1sSi7=w544-h544-l90-rj",
    src: "Remember_That_Night?.mp3"
  },
  {
    name: "River",
    artist: "Eminem · Ed Sheeran",
    img: "https://lh3.googleusercontent.com/b-euORTq-_MSzc3SyI0QOjLqnCBJbWuMmH1YlyJKAVvJfOpPqv3bFH-KSDoQwV9e8Xey1X2NRo9xZ2U=w544-h544-l90-rj",
    src: "River.mp3"
  },
  {
    name: "Waste Love",
    artist: "mgk · Madison Love",
    img: "https://lh3.googleusercontent.com/DA2ffDOXjJVM9vZaY7ScV-TU--p40kHko1Df5Skp7KVIYUvRlv5riP0oKtGGtpjjnGhmbNS2Zi61Ei1a=w544-h544-l90-rj",
    src: "Waste_Love.mp3"
  },
  {
    name: "Chicago Freestyle",
    artist: "Drake · Giveon",
    img: "https://lh3.googleusercontent.com/9oQVb_Z0MFVzRqxZPj4UFcUjq75C2saiHVb-f6ON3vRsaFp5cSVgdCdkK51aTBIozkkjRGYB4YnyvGw=w544-h544-l90-rj",
    src: "Chicago_Freestyle.mp3"
  },
  {
    name: "Lovin On Me",
    artist: "Jack Harlow",
    img: "https://lh3.googleusercontent.com/gGPPe4E_1TYcrjLsKZibXMNQUwJlpOHnaAKWcTdtwCNEECdRqJBtuyxGgNOEoKkJWh-ZwXk_mSZnSuE=w544-h544-l90-rj",
    src: "Lovin_On_Me.mp3"
  },
  {
    name: "Word to the Wise",
    artist: "Matt Corman · Fewtile · Adrian Stresow",
    img: "https://lh3.googleusercontent.com/zDVjBXXjQwSx3go9viYg6dur3-Ecr18kxx1jyEe843RG7za-dSrhESstCmcba2ADWvMEskj9OGMH0847=w544-h544-l90-rj",
    src: "Word_to_the_Wise.mp3"
  },
  {
    name: "Am I Dreaming",
    artist: "Metro Boomin · A$AP Rocky · Roisee",
    img: "https://lh3.googleusercontent.com/rra9ajpG50BoWyxszMpVqMAloA83Q1p3V4ryNrtDhAriAqvxyNAEAKU0KDs0JoxgDKoSsiWe_GDWong=w544-h544-l90-rj",
    src: "Am_I_Dreaming.mp3"
  },
  {
    name: "One Dance",
    artist: "Drake · WizKid · Kyla",
    img: "https://i.ytimg.com/vi/LaewsgbyMo0/hq720.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgEyh_MA8=&rs=AOn4CLBXN1uJHe7B8GUMSxfus_lzgVv5iw",
    src: "One_Dance.mp3"
  },
  {
    name: "Sugar",
    artist: "Maroon 5",
    img: "https://lh3.googleusercontent.com/x_BbPco6tVsXgSlT9poHxW9q_kqQ5iDolT9q_8U4jw22FuDvDqkydsgAdGGYR1QyoMvXMItOutAwZYuK=w544-h544-l90-rj",
    src: "Sugar.mp3"
  },
  {
    name: "Glass House",
    artist: "mgk · Naomi Wild",
    img: "https://lh3.googleusercontent.com/DA2ffDOXjJVM9vZaY7ScV-TU--p40kHko1Df5Skp7KVIYUvRlv5riP0oKtGGtpjjnGhmbNS2Zi61Ei1a=w544-h544-l90-rj",
    src: "Glass_House.mp3"
  },
  {
    name: "N95",
    artist: "Kendrick Lamar",
    img: "https://i.ytimg.com/vi/GxonT6Y33a0/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLBEex88s3OwquOK7JFZC_Nggd3cGQ",
    src: "N95.mp3"
  },
  {
    name: "It's You",
    artist: "Ali Gatie",
    img: "https://lh3.googleusercontent.com/ARBebgunMNtLrgetvNnoqG9nz2uJjp-h5V3ztbn2SwC31eXwpwp4JONaZNHbyZsPMrgqA336RBIycOkW=w544-h544-l90-rj",
    src: "It's_You.mp3"
  },
  {
    name: "I Know What You Did Last Summer",
    artist: "Shawn Mendes · Camila Cabello",
    img: "https://i.ytimg.com/vi/ch6yYaix5uw/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLA-LYNT4rY-kxp5ZULoSgfQGfhLBA",
    src: "I_Know_What_You_Did_Last_Summer.mp3"
  },
  {
    name: "King Kunta",
    artist: "Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/TYKrUWKVX2KO1ULKXRCPnl0NqFvS4KES8-h6YliXCnuFbS_mFjZ6GQCXw7R9jK7Myuk5ErdPtBKj63eh=w544-h544-l90-rj",
    src: "King_Kunta.mp3"
  },
  {
    name: "No Role Modelz",
    artist: "J. Cole",
    img: "https://lh3.googleusercontent.com/rIQGaefHIQ1Uw6OWF94W3JYmCoFTQht77g0gW4BC8xyPZ4QtDl5-pSJNXbWS47PlKeiOzJE4cfH9Y11s=w544-h544-l90-rj",
    src: "No_Role_Modelz.mp3"
  },
  {
    name: "HYAENA",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/2iI2jizD21z6xpfPcEhm16I08AdJwV2V8i2yvcajfSnOe36QyEEH9feTboaJjP1iwt3w01r7mudoub3H=w544-h544-l90-rj",
    src: "HYAENA.mp3"
  },
  {
    name: "THANK GOD",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/2iI2jizD21z6xpfPcEhm16I08AdJwV2V8i2yvcajfSnOe36QyEEH9feTboaJjP1iwt3w01r7mudoub3H=w544-h544-l90-rj",
    src: "THANK_GOD.mp3"
  },
  {
    name: "See You Again (feat. Charlie Puth)",
    artist: "Wiz Khalifa · Charlie Puth",
    img: "https://lh3.googleusercontent.com/TlXKDSRGrj0ogqmGbzyGvZrsT9T0F6xgV-2-3pelbzRms0cODdb-ndDg6SpFzkHYMb4NMMMW957wmrObfw=w544-h544-l90-rj",
    src: "See_You_Again_(feat._Charlie_Puth).mp3"
  },
  {
    name: "CIRCUS MAXIMUS",
    artist: "Travis Scott · The Weeknd · Swae Lee",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "CIRCUS_MAXIMUS.mp3"
  },
  {
    name: "Trance",
    artist: "Metro Boomin · Travis Scott · Young Thug",
    img: "https://lh3.googleusercontent.com/feqsKw6SJvnm0QZS25LT-FBoCROt2eZaDIEJDfILuOBjfUslscJNYTBrUQ6fKbqtB3g2hLqGIKQv6kc=w544-h544-l90-rj",
    src: "Trance.mp3"
  },
  {
    name: "South of the Border (feat. Camila Cabello & Cardi B)",
    artist: "Ed Sheeran · Camila Cabello · Cardi B",
    img: "https://lh3.googleusercontent.com/2rSqxXTYIox46twhc2zC73tSPuzHz9XBx04tojSXQmXN4SK7NgYdwX5PgqcX7reoPG_3WrjnIu-hbm5G=w544-h544-l90-rj",
    src: "South_of_the_Border_(feat._Camila_Cabello_&_Cardi_B).mp3"
  },
  {
    name: "Heartless",
    artist: "The Weeknd",
    img: "https://lh3.googleusercontent.com/ZEfx3kQ3n-yy2QlXHVfNoqDwZq74fMe2S3A-uQETIjGnspiVAMzZzyLla99-O9tX4RgmAm5f5nSvuy4v=w544-h544-l90-rj",
    src: "Heartless.mp3"
  },
  {
    name: "Sunflower (Spider-Man: Into the Spider-Verse)",
    artist: "Post Malone · Swae Lee",
    img: "https://lh3.googleusercontent.com/IBwK4LOs4sO-Cd-_5YO4XC2B2N1hvyBvKfr60tT_ljIuwmOuVWWW2NypbcvzKgScVAbRsWEYbmsjfcm2cw=w544-h544-l90-rj",
    src: "Sunflower_(Spider-Man:_Into_the_Spider-Verse).mp3"
  },
  {
    name: "Hotline Bling",
    artist: "Drake",
    img: "https://lh3.googleusercontent.com/LRARcNBegn5EbAg62HKIShH_o7CCkgZ2oViTvTR__isRqxP1Thr-qSBbGWEmKbHs9ZvI8abKUwV4bIeIjg=w544-h544-l90-rj",
    src: "Hotline_Bling.mp3"
  },
  {
    name: "Self Love (Spider-Man: Across the Spider-Verse)",
    artist: "Metro Boomin · Coi Leray",
    img: "https://lh3.googleusercontent.com/rra9ajpG50BoWyxszMpVqMAloA83Q1p3V4ryNrtDhAriAqvxyNAEAKU0KDs0JoxgDKoSsiWe_GDWong=w544-h544-l90-rj",
    src: "Self_Love_(Spider-Man:_Across_the_Spider-Verse).mp3"
  },
  {
    name: "SOS",
    artist: "SZA",
    img: "https://lh3.googleusercontent.com/o3i9-dA34xDjbw1hz4nhJO6LA6V4-ZYjs_kh7aUA0sq1pieJejt_Hnor-Rxl77GA1ugAFqxcmEUwy3c=w544-h544-l90-rj",
    src: "SOS.mp3"
  },
  {
    name: "One Of The Girls",
    artist: "The Weeknd · JENNIE · Lily Rose Depp",
    img: "https://lh3.googleusercontent.com/mxqDOrw4zbfDBdd4kOnD2qBUtMklnAucEfrQUbr30pRLie0P3JIhJhBJ9wJq3NEeg2yVrT9lgrYid-w=w544-h544-l90-rj",
    src: "One_Of_The_Girls.mp3"
  },
  {
    name: "Mona Lisa",
    artist: "Dominic Fike",
    img: "https://lh3.googleusercontent.com/Hxt43le3B5AUBcUSLf8h7C7rv3cqy_IKFVaWMRX7BOSN690SigDfZNYmpxT74fn_coCVAL_TDUrrMPj8=w544-h544-l90-rj",
    src: "Mona_Lisa.mp3"
  },
  {
    name: "DNA.",
    artist: "Kendrick Lamar",
    img: "https://lh3.googleusercontent.com/jNcZ3_y6eucc4Ug7I-zFqXzZUhDMyqUU7YpeZ99S4lCD9t75BQCfEq_F6DYMkxeSZp8vBhq0jWo0kBIf=w544-h544-l90-rj",
    src: "DNA..mp3"
  },
  {
    name: "MY EYES",
    artist: "Travis Scott",
    img: "https://lh3.googleusercontent.com/2iI2jizD21z6xpfPcEhm16I08AdJwV2V8i2yvcajfSnOe36QyEEH9feTboaJjP1iwt3w01r7mudoub3H=w544-h544-l90-rj",
    src: "MY_EYES.mp3"
  },
  {
    name: "lovely",
    artist: "Billie Eilish · Khalid",
    img: "https://lh3.googleusercontent.com/nBQ2yRYxNzSE_I2IbybljvKJhTyHISC3TVew_uraAkvH7trJ7lXc7LlYc4WLqs1IHsHDyLm24W-7Pic=w544-h544-l90-rj",
    src: "lovely.mp3"
  },
  {
    name: "K-POP",
    artist: "Travis Scott · Bad Bunny · The Weeknd",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "K-POP.mp3"
  },
  {
    name: "SKITZO",
    artist: "Travis Scott · Young Thug",
    img: "https://lh3.googleusercontent.com/eBvJuWpjg0Mx8DBa5WIhCzEopXyMnxkjWSU895BDGjTpNeqrliLrv3zGqNNuCUoXL1EkEAr5VQ3cx2pW=w544-h544-l90-rj",
    src: "SKITZO.mp3"
  },
  {
    name: "Can't Hold Us (feat. Ray Dalton)",
    artist: "Macklemore & Ryan Lewis · Macklemore · Ryan Lewis · Ray Dalton",
    img: "https://lh3.googleusercontent.com/Ond7bzyvLRgppE6e31TdY8T3R1JDC5dZOdPZjb1cPoB49HDwhoZknvgkFAFvO2YISdg8UQjcs9bK9UQ5=w544-h544-l90-rj",
    src: "Can't_Hold_Us_(feat._Ray_Dalton).mp3"
  },
  {
    name: "8 Mile",
    artist: "Eminem",
    img: "https://lh3.googleusercontent.com/2moJtcAYOkXNBpRllYC9qiJcONdI9k29nH9Q-Hjl_tdh229x0pOlPEPWvhHmO8gqhVrZrWKuNQrpi9pJ=w544-h544-s-l90-rj",
    src: "8_Mile.mp3"
  },
  {
    name: "Good Days",
    artist: "SZA",
    img: "https://lh3.googleusercontent.com/nYfcX54UyPARxIvhDd7YzEKMoJhjhU6f2o0EPAWgqLUjOHjqbmxxIOXPnCNluFEuS0qsaNzP2ygNtohI=w544-h544-l90-rj",
    src: "Good_Days.mp3"
  },
  {
    name: "After Hours",
    artist: "The Weeknd",
    img: "https://lh3.googleusercontent.com/JDKz3Anlyo49xBhFcFx13QD_Tk4-kqdiYTo15gtkL93nE8biWyZ7o0BPyW6RnXVxcXaJ5DgU5nJ_0NjJ=w544-h544-l90-rj",
    src: "After_Hours.mp3"
  },
  {
    name: "Cake By The Ocean",
    artist: "DNCE",
    img: "https://i.ytimg.com/vi/id_vQtiQ-uc/sddefault.jpg?sqp=-oaymwEWCKoDEPABIAQqCghqEJQEGHgg6AJIWg&rs=AOn4CLDCS3Q1kcSBhSdQP9q30kbNLt3KeA",
    src: "Cake_By_The_Ocean.mp3"
  },
  {
    name: "The Box",
    artist: "Roddy Ricch",
    img: "https://lh3.googleusercontent.com/mCjduPWc4GvReWhFy04ufFgkBt9be4XRjwkeCwRZu0XaaKk1-lRqPjjQ-5gk0rMjEoBl19QZS7p-RA=w544-h544-l90-rj",
    src: "The_Box.mp3"
  },
  {
    name: "Espresso",
    artist: "Sabrina Carpenter",
    img: "https://lh3.googleusercontent.com/fhDgRO0LrPPo9CDqsLQlxR3CVZc8xPmSi9Ja8DKAS5zhoWsZKdj2scyWqBUU2t4DHxK1xcbWKY2Q7cpj=w544-h544-l90-rj",
    src: "Espresso.mp3"
  },
  {
    name: "Watch This (ARIZONATEARS Pluggnb Remix)",
    artist: "Lil Uzi Vert · sped up nightcore · ARIZONATEARS",
    img: "https://lh3.googleusercontent.com/3MtTyZbVEl1H0BmliKRSN7ss3sQhHiPRgZm9SsGznS9aFhcpWuChAD3NiKvvwnsjduCkOu6VFGf_LEQ=w544-h544-l90-rj",
    src: "Watch_This_(ARIZONATEARS_Pluggnb_Remix).mp3"
  },
];
