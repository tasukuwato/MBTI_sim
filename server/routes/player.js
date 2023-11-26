const express = require('express');
const Player = require('./models/player'); // ステップ1で作成したモデルをインポート
const app = express();

app.use(express.json());

// 新しいプレイヤー（村人）の作成
app.post('/players', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
});

// 他のAPIエンドポイント...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
