const emojiPanelID = "sect_emoji"
const emojiToList = 24;
const emojiDexFirst = 128512;
const emojiDexStop = emojiDexFirst + emojiToList - 1;

function loadEmojiPanel() {
    const emojis = [];
    initEmojis(emojis);
    addEmojiBlocks(emojis);
}

function initEmojis(emojis) {
    for (let i = emojiDexFirst; i <= emojiDexStop; i++) {
        emojis.push(i);
    }
}

function addEmojiBlocks(emojis) {
    let emojiPanel = document.getElementById(emojiPanelID);

    for (let i = 0; i < emojis.length; i++) {
        emojiBlock = getEmojiBlock(emojis[i]);

        emojiPanel.appendChild(emojiBlock);
    }
}

function getEmojiBlock(emojiDex) {
    let emojiBlock = document.createElement("div");
    let emojiImageBlock = document.createElement("div");
    let emojiCodeBlock = document.createElement("code");

    emojiBlock.className = "emojiBlock";
    emojiImageBlock.className = "emojiImage";
    emojiCodeBlock.className = "emojiCode";

    emojiImageBlock.innerHTML = "&#" + emojiDex + ";";
    emojiCodeBlock.innerHTML = emojiDex;

    emojiBlock.appendChild(emojiImageBlock);
    emojiBlock.appendChild(emojiCodeBlock);

    return emojiBlock;
}

loadEmojiPanel();